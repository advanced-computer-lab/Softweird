import { render, screen } from '@testing-library/react';
import User from './Guest';

test('renders learn react link', () => {
  render(<Guest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
