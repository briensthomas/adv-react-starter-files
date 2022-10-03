import { CheckBoxControl, 
  FormButton, 
  InputControl, 
  SelectControl, 
  TextAreaControl } from '../FormControls/FormControls';
import { useForm } from '../../tests/useForm';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [data, handleChange] = useForm();

  return (
    <div className={styles.Dashboard}>
      <h2>
        Hello World
      </h2>
      <form>
        <InputControl 
          label="Name"
          name="name"
          placeholder="Enter your name"
          value={data.name || ''}
          onChange={handleChange}  
        />

        <InputControl
          label="Date"
          type="date"
          required
          name="date"
          placeholder="Pick a date"
          value={data.date}
          onChange={handleChange}
        />

        <SelectControl
          label="Pets"
          required
          name="pets"
          placeholder="What is your favorite pet?"
          value={data.pets || ''}
          onChange={handleChange}
        >
          <option value="1">Dog</option>
          <option value="2">Cat</option>
          <option value="3">Birb</option>
        </SelectControl>

        <TextAreaControl 
          label="Bio"
          name="bio"
          placeholder="Tell us about yourself"
          value={data.bio || ''}
          onChange={handleChange}
        />

        <CheckBoxControl 
          legend="Do you accept?"
          label="Yes"
          required
          name="accepted"
          checked={data.accepted || false}
          onChange={handleChange}
        />

        <FormButton text="Submit" />
      </form>
    </div>
  );
}
