import { fireEvent, render, screen } from 'tests/TestUtils';
import Input from './input';

describe('Tests Input Component', () => {
  it('Should render input component properly', () => {
    render(<Input defaultValue="Username" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('Should update value on change', () => {
    const fn = vi.fn();
    render(<Input value={''} onChange={fn} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '200' } });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(expect.any(Object));
  });

  it('Should display placeholder text', () => {
    render(<Input placeholder="Name" id="input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Name');
  });

  it('Should accept different types of inputs', () => {
    const { rerender } = render(<Input type="text" />);
    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('type', 'text');

    rerender(<Input type="number" data-testid="number" />);
    const numberInput = screen.getByTestId('number');
    expect(numberInput).toHaveAttribute('type', 'number');
  });

  it('Should handle focus events', () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledOnce();
  });

  it('Should handle blur events', () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} />);
    const input = screen.getByRole('textbox');
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledOnce();
  });
});
