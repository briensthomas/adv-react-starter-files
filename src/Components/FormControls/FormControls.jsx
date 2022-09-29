/* eslint-disable react/prop-types */
import styles from './FormControls.css';
import classnames from 'classnames';

export default function FormControls({ label, children }) {
  const className = classnames(styles.FormControls, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}


export  function InputControl({ label, ...rest }) {
  return (
    <FormControls label={label}>
      <input {...rest} />
    </FormControls>
  );
}

export function SelectControl({ label,
  children,
  placeholder,
  ...rest }) {
  return (
    <FormControls label={label}>
      <select {...rest}>
        {placeholder && <option disabled>
          {placeholder}
        </option>}
        {children}
      </select>
    </FormControls>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControls label={label}>
      <textarea {...rest}/>
            
    </FormControls>
  );
}

export function CheckBoxControl({ legend, label, ...rest }) {
  return (
    <fieldset className={styles.CheckBoxControl}>
      <legend className={styles.LabelText}>
        {legend}
      </legend>
      <label>
        <input type="checkbox" {...rest}/>
        {label}
      </label>
    </fieldset>
  );
}

export function FormButton({ text }) {
  return (
    <button className={styles.FormButton}>
      {text}
    </button>
  );
}
