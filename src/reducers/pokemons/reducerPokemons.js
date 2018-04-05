import * as actionsTypes from './actionsTypes';

let initialState = {
  myPokemons: [],
  pokemon: null,
  isFetching: false,
  didInvalidate: false
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCHING_REQUEST:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case actionsTypes.RECEIVE_POKEMON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        pokemon: action.pokemon,
      };
    case actionsTypes.RECEIVE_POKEMON_FAIL:
      return {
        ...state,
        didInvalidate: true,
        isFetching: false,
        pokemon: null,
      };

    case actionsTypes.ADD_POKEMON:
      return {
        ...state,
        myPokemons: [
          ...state.myPokemons,
          action.pokemon
        ],
        pokemon: null,
      };

    case actionsTypes.REMOVE_POKEMON:
      let updatedPokemonsOnRemove = state.myPokemons.filter(pokemon => pokemon.id !== action.id);
      return {
        ...state,
        myPokemons: updatedPokemonsOnRemove,
        pokemon: null,
      };

    case actionsTypes.UPDATE_POKEMON_INFO:
      let updatedPokemonsOnUpdate = state.myPokemons.map(pokemon => {
          return pokemon.id === action.id ?
          {...pokemon, weight: action.info.weight, name: action.info.name} : pokemon;
        }
      );
      return {
        ...state,
        myPokemons: updatedPokemonsOnUpdate,
        pokemon: null,
      };
    default:
      return state;
  }
};

export default pokemons;
