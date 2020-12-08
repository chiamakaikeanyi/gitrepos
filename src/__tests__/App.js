import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe('App Component', () => {
  afterEach(cleanup);

  test('render the app correctly', () => {
    render(<App />);
    expect(screen.getByText(/GitRepos/i)).toBeInTheDocument();
    expect(screen.getByText(/Find Repositories/i)).toBeInTheDocument();
  });

  test('render the default message', () => {
    const { getByText } = render(<App />);
    expect(getByText(/No repository is available.../i)).toBeInTheDocument();
  });

  test('disable button when input has no value', () => {
    const { getByTestId } = render(<App />);
    userEvent.type(getByTestId('username'), '');
    expect(getByTestId('find_repositories')).toBeDisabled();
  });
});
