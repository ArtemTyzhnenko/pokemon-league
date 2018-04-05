import * as actionsTypes from './actionsTypes';

export const receivePokemonSuccess = (pokemon) =>({
  type: actionsTypes.RECEIVE_POKEMON_SUCCESS,
  pokemon,
});

export const receivePokemonFail =() => ({
  type: actionsTypes.RECEIVE_POKEMON_FAIL
});

export const fetchingRequest = () => ({
  type: actionsTypes.FETCHING_REQUEST,
});

export const addPokemon = (pokemon) => ({
  type: actionsTypes.ADD_POKEMON,
  pokemon
})

export const removePokemon = (id) => ({
  type: actionsTypes.REMOVE_POKEMON,
  id
})

export const updatePokemonInfo = (id, info) => ({
  type: actionsTypes.UPDATE_POKEMON_INFO,
  id,
  info
})

export const fetchingPokemon = (pokemonName) => (dispatch) => {
  dispatch(fetchingRequest());
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => res.json())
    .then(res => {
      if(res.detail) {
        throw new Error('No Pokemon')
      } else {
        dispatch(receivePokemonSuccess(res))
      }
    })
    .catch(error => dispatch(receivePokemonFail()));
};