import styles from './Search.css';
import SearchResultCard from './SearchResultCard';

export default function SearchResults({ results, infiniteScrollRef }) {
  return (
    <ul className={styles.SearchResults}>
      {results.map((result, i) => {
        const ref = i = results.length - 3 ? infiniteScrollRef : undefined;
        return <SearchResultCard
          key={result.id}
          result={pokemon}
          infiniteScrollRef={ref}
        />
      })}
    </ul>
  );
}
