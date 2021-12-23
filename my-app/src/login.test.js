import { render, screen } from '@testing-library/react';
import login from './login';

test('renders learn react link', () => {
  render(<login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
