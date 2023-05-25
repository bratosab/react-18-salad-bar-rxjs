import { useEffect, useState } from "react";
import { Subject, debounceTime, delay, distinctUntilChanged, filter, from, map, mergeMap, switchMap, tap } from "rxjs";
import { getPokemonByName } from "../services/pokemonService";
import { useObservable } from "../hooks/useObservable";

// const numbers$ = from([1, 2, 3, 4, 5]);
// const squares$ = numbers$.pipe(
//   mergeMap((num) => from([num]).pipe(delay(1000 * num))),
//   map((x) => x * x)
// );

const searchSubject$ = new Subject<string>()
const searchResults$ = searchSubject$.pipe(
    filter(query => query.length > 1),
    tap((val) => console.log('before debounceTime : ', val)),
    debounceTime(500),
    distinctUntilChanged(),
    tap((val) => console.log('after distinctUntilChanged : ', val)),
    switchMap(val => getPokemonByName(val))
)

export function Pokemon() {
  const [results, setResults] = useState([]);

  useObservable(searchResults$, setResults)

  const handleSearch = (query: string) => {
    searchSubject$.next(query)
  }

  return (
    <>
      <h1>Pokemon</h1>
      <input type="text" placeholder="Search for your pokemon" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        { results && results.map(pokemon => <li>{pokemon.name}</li>)}
      </ul>
    </>
  );
}
