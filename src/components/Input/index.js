import React from "react";
import PropTypes from "prop-types";
import { composeClasses } from "../../utils";
import styles from "./input.module.scss";

const Input = ({ className, handleChange, label, name, placeholder, testId, type }) => {
  return (
    <>
      <label className={styles.sr_only} htmlFor={name}>
        {label}
      </label>

      <input
        className={composeClasses(styles.input_field, className)}
        data-testid={testId}
        id={name}
        name={name}
        onChange={handleChange}
        placeholder={placeholder || " "}
        type={type}
      />
    </>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Input;
