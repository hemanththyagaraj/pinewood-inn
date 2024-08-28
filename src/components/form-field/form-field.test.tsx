import { render, screen } from 'tests/TestUtils';
import FormField from './form-field';
import Input from 'components/input/input';

describe('Test FormField Component', () => {
  it('Should render FormField Component properly', () => {
    render(
      <FormField label="Username">
        <Input placeholder="" id="username" />
      </FormField>,
    );

    const label = screen.getByLabelText('Username');
    expect(label).toBeInTheDocument();
  });

  it('Should show error message on error', () => {
    render(
      <FormField label="Username" error="This is a required field">
        <Input placeholder="" id="username" />
      </FormField>,
    );

    const error = screen.getByRole('alert');
    expect(error).toBeInTheDocument();
  });
});
