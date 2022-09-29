import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
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
