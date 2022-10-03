import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../Services/pokedex';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(searchParams.entries());


  const searchPokedex = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);
    try {
      const body = await search(searchObj);
      setSearchResults(body.results);
    } catch (err) {
      setError('Error searching Pokedex ' + err.body.toString());
      return error;
    }
  };

  useEffect(() => {
    searchPokedex(useableSearchParams);
  }, []);

  return {
    searchParams,
    searchResults, setSearchResults,
    searchPokedex
  };
}
