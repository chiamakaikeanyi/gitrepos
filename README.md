# GitRepos

An easy way to find GitHub repositories.

<a href="https://github.com/chiamakaikeanyi/gitrepos/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitRepos is released under the MIT license." />
</a>

## Contents

- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Starting the App](#starting-the-app)
- [Contributing](#contributing)
- [Testing](#testing)
- [Stopping the App](#stopping-the-app)
- [License](#license)

## Pre-requisites

Ensure you have the following set up locally:

- [Node](https://nodejs.org)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

## Installation

Clone the [repository](https://github.com/chiamakaikeanyi/gitrepos) using any of the methods stated below.

**Via SSH**

```sh
git clone git@github.com:chiamakaikeanyi/gitrepos.git
```

**Via HTTPS**

```sh
git clone https://github.com:chiamakaikeanyi/gitrepos.git
```

### Switch to the directory

```sh
cd gitrepos
```

## Starting the App

Once you are done with the steps above, run:

```sh
yarn up
```

This will build the docker container and start the app on http://0.0.0.0:3000.

To view the running container, run

```sh
docker container ls
```

## Contributing

If you have never worked with the technologies used in this repository, here are links to some documentations that may help:

- [React.js](http://reactjs.org)
- [SCSS](https://sass-lang.com)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Docker](https://docs.docker.com)

## Testing

Run tests to validate that code changes doesn't degrade the application.

```sh
yarn test
yarn test:coverage
```

## Stopping the App

To stop the app, run';

```sh
yarn down
```

## License

GitRepos is MIT licensed, as found in the [LICENSE](https://github.com/chiamakaikeanyi/gitrepos/blob/main/LICENSE) file.
