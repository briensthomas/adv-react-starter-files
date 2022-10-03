import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(searchParams.entries());
  const [pokemon, setPokemon] = useState(useableSearchParams.pokemon || '');
  const [type_1, setType_1] = useState(useableSearchParams.type_1 || '');
  return {
    pokemon,
    setPokemon,
    type_1,
    setType_1,
    searchForm: useableSearchParams,
    setSearchForm: setSearchParams,
  };
}
