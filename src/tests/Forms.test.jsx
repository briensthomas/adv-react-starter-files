/* eslint-disable react/prop-types */
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  CheckBoxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from '../Components/FormControls/FormControls.jsx';
import { useForm } from './useForm.js';

function Test({ onSubmit, formData }) {
  const [data, handleChange] = useForm(formData);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputControl 
        name="name"
        label="Name"
        value={data.name || ''}
        onChange={handleChange}
      />

      <SelectControl 
        label="Pets"
        name="pets"
        value={data.pets}
        onChange={handleChange}
      >
        <option value="1">Dog</option>
        <option value="2">Cat</option>
        <option value="3">Birb</option>
      </SelectControl>

      <TextAreaControl 
        label="Bio"
        name="bio"
        value={data.bio || ''}
        onChange={handleChange}
      />

      <CheckBoxControl 
        label="Yes"
        name="accepted"
        checked={data.accepted || ''}
        onChange={handleChange}
      />

      <FormButton>
        Submit
      </FormButton>
    </form>
  );
}

test('Control changes update data', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  render (
    <Test onSubmit={handleSubmit} />
  );
  // input
  const input = screen.getByLabelText('Name');
  await user.type(input, 'Boaty McBoatface');

  // select
  const selectControl = screen.getByLabelText('Pets');
  await user.selectOptions(selectControl, '3');

  // input for TextArea
  const textArea = screen.getByLabelText('Bio');
  await user.type(textArea, 'As a young boat...');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  // FormButton
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Boaty McBoatface',
    pets: '3',
    bio: 'As a young boat...',
    accepted: true,
  });
});

test('Form uses initial data and updates partial data', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  render (
    <Test 
      onSubmit={handleSubmit}
      formData={{
        name: 'Enter your name',
        pets: '1',
        bio: 'Tell us about yourself',
        accepted: true,
      }}
    />
  );

  // input
  const input = screen.getByLabelText('Name');
  expect(input.value).toBe('Enter your name');
  await user.clear(input);
  await user.type(input, 'Trucky McTruckface');

  // select
  const selectControl = screen.getByLabelText('Pets');
  await user.selectOptions(selectControl, '1');

  // input for TextArea
  const textArea = screen.getByLabelText('Bio');
  expect(textArea.value).toBe('Tell us about yourself');
  await user.clear(textArea);
  await user.type(textArea, 'As a young truck...');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  expect(checkbox.checked).toBe(true);

  // FormButton
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Trucky McTruckface',
    pets: '1',
    bio: 'As a young truck...',
    accepted: true
  });
});

test('Form updates data when initialData changes', async () => {
  const user = userEvent.setup();

  const handleSubmit = jest.fn();

  const { rerender } = render(
    <Test 
      onSubmit={handleSubmit}
      formData={{
        name: 'Enter your name',
        pets: '1',
        bio: 'Tell us about yourself',
        accepted: true,
      }}
    />
  );

  // input text
  const input = screen.getByLabelText('Name');
  await user.clear(input);
  await user.type(input, 'abc');

  const changedData = {
    accepted: false,
    animal: '2',
    bio: 'Tell me about YOURself',
    name: 'Mind Ya Business',
  };

  rerender (
    <Test 
      onSubmit={handleSubmit}
      formData={changedData}
    />
  );

  // user clicks submit
  await user.click(screen.getByRole('button'));
  
  expect(handleSubmit).toHaveBeenCalledWith(changedData);
});
