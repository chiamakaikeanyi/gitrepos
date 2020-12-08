import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Button Component', () => {
  const props = {
    username: 'chiamakaikeanyi'
  };

  test('render component properly', () => {
    const { getByText } = render(<NotFound {...props} />);

    expect(getByText(/No repository found/i)).toBeInTheDocument();
  });
});
