import { render } from 'tests/TestUtils';
import Sidebar from './sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Test the sidebar component', () => {
  it('Renders the sidebar component properly', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Sidebar />
      </MemoryRouter>,
    );
  });
});
