import { render, screen } from 'tests/TestUtils';
import Sidebar from './sidebar';
import { MemoryRouter } from 'react-router-dom';

describe.only('Test the sidebar component', () => {
  it('Renders the sidebar component properly', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Sidebar />
      </MemoryRouter>,
    );

    const sidebar = screen.getByRole('complementary');

    expect(sidebar).toBeInTheDocument();
  });

  it('Renders the navigation container and links properly', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );

    const nav = screen.getByRole('navigation');
    const links = screen.getAllByRole('link');

    expect(nav).toBeInTheDocument();
    expect(links).toHaveLength(5);
  });

  it('Renders active link properly', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Sidebar />
      </MemoryRouter>,
    );

    const dashboardLink = screen.getByText(/home/i);
    expect(dashboardLink).toHaveClass('active');
  });
});
