export default function Dashboard() {
  return (
    <div>
      <h2>
        Hello World
      </h2>

      <form>
        <label htmlFor="name">Name
          <input name="name" value={name} placeholder="Enter your name"/>
        </label>

        <label>
          Date
          <input type="date" name="date" />

        </label>

        <label>
          Option
          <select required>
            <option selected disabled>Choose One</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </label>

        <label>
          Bio
          <textarea name="bio" placeholder="From whence do you come" />
        </label>

        <fieldset>
          <legend>
            Do you agree to the terms and conditions?
          </legend>
          <label>
            Yes
            <input type="checkbox" />
          </label>
          <label>
            No
            <input type="checkbox" />
          </label>
        </fieldset>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}
