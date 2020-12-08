/**
 * Compose styles together easily
 * @param {String} styles Classes/styles to be applied
 * @returns {String} Combined classes
 */
export const composeClasses = (...styles) => {
  let classes = '';

  styles.forEach(arg => {
    if (arg) {
      classes += `${arg} `;
    }
  });

  return classes.trim();
};

/**
 * @param array
 * @returns {Boolean}
 */
export const isNotEmptyArray = array => Array.isArray(array) && array.length > 0;

/**
 * @param object
 * @returns {Boolean}
 */
export const isObjectEmpty = (object = {}) => !object || Object.keys(object).length === 0;

/**
 * @param string
 * @returns {Object}
 */
export const parseLink = header => {
  if (header.length === 0) {
    throw new Error('Length cannot be zero');
  }

  let parts = header.split(',');
  let links = {};
  for (let i = 0; i < parts.length; i++) {
    let section = parts[i].split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }
  return links;
};
