import React from "react";
import PropTypes from "prop-types";
import { composeClasses } from "../../utils";
import styles from "./button.module.scss";

const Button = ({ className, disabled, handleClick, label, testId, type }) => {
  return (
    <button
      className={composeClasses(className, styles.button)}
      data-testid={testId}
      disabled={disabled}
      onClick={() => handleClick()}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  testId: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Button;
