import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../Hooks/use-search-results';
import { FormButton } from '../FormControls/FormControls';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon, 
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  
  return (
    <div>

      <SearchForm pokemon={pokemon} 
        setPokemon={setPokemon} 
        onSubmit={searchPokedex} 
      />
      <SearchResults 
        results={searchResults} 
        infiniteScrollRef={infiniteScrollRef} 
      />
      <FormButton onClick={nextPage}>
        Next Page
      </FormButton>
    </div>
  );
}
