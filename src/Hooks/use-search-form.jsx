import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(searchParams.entries());
  const [pokemon, setPokemon] = useState(useableSearchParams.pokemon || '');
  return {
    pokemon,
    searchForm: useableSearchParams,
    setPokemon,
    setSearchForm: setSearchParams,
  };
}
