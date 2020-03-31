const propsSelector = ({ app: { pokemons, deletedPokemons, likedPokemons, unlikedPokemons } }) => ({
    pokemons,
    deletedPokemons,
    likedPokemons, unlikedPokemons
});

export default { propsSelector };
