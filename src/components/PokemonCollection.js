import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const pokeCards = pokemon.map((pokeObj) => <PokemonCard  key={pokeObj.id} pokemon={pokeObj}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
