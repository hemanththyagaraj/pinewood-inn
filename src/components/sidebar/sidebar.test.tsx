import { render, screen } from 'tests/TestUtils';
import Sidebar from './sidebar';

describe('Test the sidebar component', () => {
  it('Renders the sidebar component properly', () => {
    render(<Sidebar />);
    expect(screen.getByText(/sidebar/i)).toBeInTheDocument();
  });
});
