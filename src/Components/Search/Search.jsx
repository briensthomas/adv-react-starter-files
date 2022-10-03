import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../Hooks/use-search-results';
import styles from './Search.css';

export default function Search() {
  const {
    infiniteScrollRef,
    pokemon, 
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  
  return (
    <div className={styles.Search}>
      <SearchForm 
        pokemon={pokemon} 
        setPokemon={setPokemon} 
        onSubmit={searchPokedex} 
      />
      <SearchResults 
        results={searchResults} 
        infiniteScrollRef={infiniteScrollRef} 
      />

    </div>
  );
}
