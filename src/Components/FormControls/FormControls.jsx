/* eslint-disable react/prop-types */
import styles from './FormControls.css';
import classnames from 'classnames';

function FormControls({ label, 
  required, 
  children }) {
  const className = classnames(styles.FormControls, styles.LabelText);
  
  return (
    <label className={className}>
      <LabelText text={label} required={required} />
      {children}
    </label>
  );
}

export function LabelText({ text, required }) {
  const className = classnames(styles.LabelText, {
    [styles.Required]: required,
  });

  return (
    <span className={className}>
      {text}
    </span>
  );
}

export  function InputControl({ label, required, ...rest }) {
  return (
    <FormControls label={label} required={required}>
      <input {...rest} required={required} />
    </FormControls>
  );
}

export function SelectControl({ label,
  required,
  children,
  placeholder,
  ...rest }) {
  return (
    <FormControls label={label} required={required}>
      <select {...rest} required={required}>
        {placeholder && <option disabled>
          {placeholder}
        </option>}
        {children}
      </select>
    </FormControls>
  );
}

export function TextAreaControl({ label, required, ...rest }) {
  return (
    <FormControls label={label} required={required}>
      <textarea {...rest}/>
            
    </FormControls>
  );
}

export function CheckBoxControl({ legend, 
  label, 
  required, 
  ...rest }) {
  return (
    <fieldset className={styles.CheckBoxControl}>
      <legend className={styles.LabelText}>
        <LabelText text={legend} required={required}/>
      </legend>
      <label>
        <input type="checkbox" {...rest} required={required} />
        {label}
        
      </label>
    </fieldset>
  );
}

export function FormButton({ children, ...rest }) {
  return (
    <button className={styles.FormButton} {...rest} >
      {children}
    </button>
  );
}
