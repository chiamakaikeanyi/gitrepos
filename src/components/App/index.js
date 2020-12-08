import React, { useState } from 'react';
import axios from 'axios';
import { isNotEmptyArray, parseLink } from '../../utils';
import constants from '../../constants';
import Button from '../Button';
import Input from '../Input';
import Layout from '../Layout';
import Listing from '../Listing';
import Navigation from '../Navigation';
import NotFound from '../NotFound';
import styles from './app.module.scss';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';

const { apiRoot } = constants;

const App = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');
  const [navigation, setNavigation] = useState({});

  function handleChange(event) {
    setUsername(event.target.value.trim());
  }

  async function getRepositories(url = `${apiRoot}/users/${username}/repos?per_page=20`) {
    setLoading(true);
    setError('');

    try {
      await axios.get(url).then(response => {
        const linkData = response.headers.link;
        const parsedLinkData = linkData && parseLink(linkData);

        response && response.data && setRepositories(response.data);
        parsedLinkData ? setNavigation(parsedLinkData) : setNavigation(null);

        setLoading(false);
      });
    } catch (error) {
      error && error.message && setError(error.message);
      setLoading(false);
    }
  }

  function goToNext() {
    getRepositories(navigation.next);
  }

  function goToPrevious() {
    getRepositories(navigation.prev);
  }

  return (
    <Layout>
      <header>
        <h1 className={styles.app_name}>GitRepos</h1>
      </header>

      <div className={styles.search_wrapper}>
        <Input
          className={styles.search_field}
          handleChange={e => handleChange(e)}
          label="GitHub Username"
          name="username"
          placeholder="Input a GitHub username"
          testId="username"
          type="search"
        />

        <Button
          className={styles.search_button}
          disabled={!username}
          handleClick={getRepositories}
          label="Find Repositories"
          testId="find_repositories"
          type="button"
        />
      </div>

      <section>
        {loading && (
          <div className={styles.spinner_wrapper}>
            <Spinner className={styles.spinner} />
            <p>Loading...</p>
          </div>
        )}

        {!loading && !error && !isNotEmptyArray(repositories) && <p>No repository is available...</p>}

        {error && error.includes(404) && <NotFound username={username} />}

        {!loading && !error && (
          <>
            <Listing repositories={repositories} testId="repositories" />
            {isNotEmptyArray(repositories) && Boolean(navigation) && (
              <Navigation goToNext={goToNext} goToPrevious={goToPrevious} navigation={navigation} />
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

export default App;
