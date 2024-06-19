import { render, screen } from 'tests/TestUtils';
import Navbar from './navbar';

describe('Test the navbar component', () => {
  it('Render navbar component properly', () => {
    render(<Navbar />);
    expect(screen.getByText(/navbar/i)).toBeInTheDocument();
  });
});
