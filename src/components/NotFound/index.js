import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import styles from './notFound.module.scss';

const NotFound = ({ username }) => {
  return (
    <Layout>
      <section className={styles.not_found_wrapper}>
        <div>
          <h3>{`No repository found ${username ? `for "${username}"` : ''}`}.</h3>
          <p>
            Please try another username. If the account belongs to you,{' '}
            <a href="https://github.com/new" rel="noopener noreferrer" target="_blank">
              create a new repository
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

NotFound.propTypes = { username: PropTypes.string };

export default NotFound;
