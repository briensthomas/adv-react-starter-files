import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  CheckBoxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';

test('Input Control', async () => {
  render(
    <InputControl
      label="Name"
      name="name"
      placeholder="Enter your name"
    />
  );

  const inputControl = screen.getByLabelText('Name');
  expect(inputControl.name).toBe('name');
  expect(inputControl.placeholder).toBe('Enter your name');
  expect(inputControl.required).toBe(false);
});

test('Input Control, date', async () => {
  render (
    <InputControl 
      label="Date"
      type="date"
      required
      name="date"
      placeholder="Pick a date"
    />
  );
        
  const inputControl = screen.getByLabelText('Date');
  expect(inputControl.type).toBe('date');
  expect(inputControl.name).toBe('date');
  expect(inputControl.required).toBe(true);
  expect(inputControl.placeholder).toBe('Pick a date');
});

test('Select Control', async () => {
  render (
    <SelectControl
      label="Pets"
      required
      name="pets"
    >
      <option value="1">Dog</option>
      <option value="2">Cat</option>
      <option value="3">Birb</option>
    </SelectControl>

  );
  const selectControl = screen.getByLabelText('Pets');
  expect(selectControl.name).toBe('pets');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});

test('Select Control w/ placeholder', async () => {
  render (
    <SelectControl
      label="Pets"
      required
      name="pets"
      placeholder="What is your favorite pet?"
    >
      <option value="1">Dog</option>
      <option value="2">Cat</option>
      <option value="3">Birb</option>
    </SelectControl>

  );
  const selectControl = screen.getByLabelText('Pets');
  const placeHolderOption = selectControl.options[0];
  expect(selectControl.name).toBe('pets');
  expect(selectControl.required).toBe(true);
  expect(placeHolderOption.textContent).toBe('What is your favorite pet?');
  expect(selectControl.options.length).toBe(4);
});

test('TextAreaControl', async () => {
  render (
    <TextAreaControl 
      label="Bio"
      name="bio"
      placeholder="Tell us about yourself"
    />
  );
  const textAreaControl = screen.getByLabelText('Bio');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(false);
  expect(textAreaControl.placeholder).toBe('Tell us about yourself');
});

test('CheckBoxControl', async () => {
  render (
    <CheckBoxControl 
      legend="Do you accept?"
      label="Yes"
      required
    />
  );

  const legend = screen.getByText('Do you accept?');
  expect(legend).not.toBeNull();
  const checkBoxControl = screen.getByLabelText('Yes');
  expect(checkBoxControl.required).toBe(true);
});

test('FormButton', async () => {
  render (
    <FormButton>Submit</FormButton>
  );

  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Submit');
});
