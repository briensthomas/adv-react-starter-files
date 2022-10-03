import styles from './Search.css';

export default function SearchResultCard({ pokemon, infiniteScrollRef }) {
  return (
    <li className={StyleSheet.SearchResultCard} ref={infiniteScrollRef}>
      {pokemon.pokemon}
    </li>
  );
}
