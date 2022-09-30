import { CheckBoxControl, 
  FormButton, 
  InputControl, 
  SelectControl, 
  TextAreaControl } from '../FormControls/FormControls';
import styles from './Dashboard.css';
export default function Dashboard() {
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
        />

        <InputControl
          label="Date"
          type="date"
          required
          name="date"
          placeholder="Pick a date"
        />

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

        <TextAreaControl 
          label="Bio"
          name="bio"
          placeholder="Tell us about yourself"
        />

        <CheckBoxControl 
          legend="Do you accept?"
          label="Yes"
          required
        />

        <FormButton text="Submit" />
      </form>
    </div>
  );
}
