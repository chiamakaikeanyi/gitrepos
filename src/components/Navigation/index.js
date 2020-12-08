import React from 'react';
import PropTypes from 'prop-types';
import { isObjectEmpty } from '../../utils';
import Button from '../Button';
import styles from './navigation.module.scss';

const Navigation = ({ goToPrevious, goToNext, navigation }) => {
  return (
    <footer className={styles.navigation_wrapper}>
      <Button
        className={styles.navigation_button}
        disabled={!isObjectEmpty(navigation) && !navigation.prev}
        handleClick={() => goToPrevious()}
        label="Previous"
        testId="previous"
        type="button"
      />
      <Button
        className={styles.navigation_button}
        disabled={!isObjectEmpty(navigation) && !navigation.next}
        handleClick={() => goToNext()}
        label="Next"
        testId="next"
        type="button"
      />
    </footer>
  );
};

Navigation.propTypes = { repositories: PropTypes.array };

export default Navigation;
