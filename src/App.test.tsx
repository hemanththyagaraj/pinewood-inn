import Button from 'components/Button';
import { render, screen } from '../tests/TestUtils';

describe('sample test', () => {
  it('tests for thruthy', () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
