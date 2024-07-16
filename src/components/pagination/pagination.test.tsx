import { render, screen, userEvent } from 'tests/TestUtils';
import Pagination from './pagination';

describe('Test the pagination component', () => {
  it('Renders the pagination component properly', () => {
    render(<Pagination currentPage={1} total={50} />);
    const buttons = screen.getAllByRole('listitem');
    expect(buttons).toHaveLength(7);
  });

  it('Calls with the right page number', async () => {
    const fn = vi.fn();
    render(<Pagination currentPage={4} total={50} onChange={fn} />);

    const nextButton = screen.getByLabelText(/next page/i);
    await userEvent.click(nextButton);
    expect(fn).toBeCalledWith(5);
  });

  it('Highlights the current page', () => {
    render(<Pagination currentPage={3} total={50} />);
    const currentHighlightedButton = screen.getByText('3');
    expect(currentHighlightedButton).toHaveStyle(
      'background-color: ButtonFace',
    );
  });

  it('Renders pagination component in disabled state', async () => {
    render(<Pagination currentPage={3} total={50} disabled />);
    const pageOneButton = screen.getByText('1');

    expect(pageOneButton).toHaveStyle('pointer-events:none');
  });
});
