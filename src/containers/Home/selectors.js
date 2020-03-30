const propsSelector = ({ app: { pokemons, deletedPokemons } }) => ({
    pokemons,
    deletedPokemons,
});

export default { propsSelector };
