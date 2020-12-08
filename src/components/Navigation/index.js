import React from "react";
import PropTypes from "prop-types";
import { isObjectEmpty } from "../../utils";
import Button from "../../components/Button";
import styles from "./navigation.module.scss";

const Navigation = ({ goToPrevious, goToNext, navigation }) => {
  return (
    <footer className={styles.navigation_wrapper}>
      <Button
        className={styles.navigation_button}
        testId="previous"
        disabled={!isObjectEmpty(navigation) && !navigation.prev}
        handleClick={() => goToPrevious()}
        label="Previous"
        type="button"
      />
      <Button
        className={styles.navigation_button}
        testId="next"
        disabled={!isObjectEmpty(navigation) && !navigation.next}
        handleClick={() => goToNext()}
        label="Next"
        type="button"
      />
    </footer>
  );
};

Navigation.propTypes = { repositories: PropTypes.array };

export default Navigation;
