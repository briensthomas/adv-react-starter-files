import { FormButton, InputControl } from '../FormControls/FormControls';

export default function SearchForm() {
  const { pokemon, setPokemon, searchForm, setSearchForm } = useSearchForm();
    
  return (
    <form>
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
