import { render, screen } from 'tests/TestUtils';
import Skeleton from './skeleton';

describe('Tests the Skeleton component', () => {
  it('Renders the Skeleton component properly', () => {
    render(<Skeleton count={10} />);
    const skeleton = screen.getByTestId('react-skeleton');

    expect(skeleton).toBeInTheDocument();
  });
});
