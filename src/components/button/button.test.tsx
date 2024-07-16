import { render, screen, userEvent } from 'tests/TestUtils';
import Button from './button';

describe('Test Button Component', () => {
  it('Renders Button component properly', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Calls the onClick function', async () => {
    const fn = vi.fn();
    render(<Button onClick={fn}>Click Me</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('Renders Button in disabled state', async () => {
    const fn = vi.fn();

    render(
      <Button disabled onClick={fn}>
        Click Me
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
