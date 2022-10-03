import { useEffect, useState } from 'react';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  return {
    searchResults, setSearchResults,
    
  };
}
