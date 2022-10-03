import { FormButton, InputControl } from '../FormControls/FormControls';
import useSearchForm from '../../Hooks/use-search-form';


export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon } = useSearchForm();
    
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return (
    <form onSubmit={formSubmit}>
      <InputControl 
        type="text"
        name="pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
