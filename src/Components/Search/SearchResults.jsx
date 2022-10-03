import styles from './Search.css';
import SearchResultCard from './SearchResultCard';

export default function SearchResults({ results, infiniteScrollRef }) {
  return (
    <div className={styles.SearchResults}>
      {results.map((result, i) => {
        const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
        return <SearchResultCard
          key={result._id}
          pokemon={result}
          infiniteScrollRef={ref}
        />;
      })}
    </div>
  );
}
