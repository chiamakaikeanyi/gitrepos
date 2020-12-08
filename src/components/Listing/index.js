import React from "react";
import PropTypes from "prop-types";
import { isNotEmptyArray } from "../../utils";
import styles from "./listing.module.scss";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Fork } from "../../assets/fork.svg";

const Listing = ({ repositories, testId }) => {
  return (
    <ul aria-live="polite" className={styles.list_wrapper} data-testid={testId}>
      {isNotEmptyArray(repositories) &&
        repositories.map(repository => (
          <li className={styles.list_item} key={repository.id}>
            <h2 className={styles.list_item_link}>
              <a href={repository.html_url} rel="noopener noreferrer" target="_blank">
                {repository.name}
              </a>
            </h2>
            <div className={styles.list_item_engagement}>
              <span>
                <Star /> {repository.stargazers_count}
              </span>
              <span>
                <Fork /> {repository.forks_count}
              </span>
            </div>
          </li>
        ))}
    </ul>
  );
};

Listing.propTypes = {
  repositories: PropTypes.array,
  testId: PropTypes.string
};

export default Listing;
