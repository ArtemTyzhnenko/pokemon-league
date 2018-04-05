import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './PokemonLeague.css'

import {
  fetchingPokemon,
  addPokemon,
  removePokemon,
  updatePokemonInfo
} from '../../reducers/pokemons/actions'

import PokedexArea from '../../components/PokedexArea/PokedexArea'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
class PokemonLeague extends Component {
  render() {
    const {
      fetchingPokemon,
      addPokemon,
      removePokemon,
      updatePokemonInfo
    } = this.props.actions;
    const {pokemon, myPokemons} = this.props.pokemons;

    return (
      <div className="pokemon-league">
        <PokemonInfo
          myPokemons={myPokemons}
          removePokemon={removePokemon}
          updatePokemonInfo={updatePokemonInfo}
        />
        <PokedexArea
          pokemon={pokemon}
          addPokemon={addPokemon}
          fetchingPokemon={fetchingPokemon}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchingPokemon,
        addPokemon,
        removePokemon,
        updatePokemonInfo
      },
      dispatch,
    ),
  };
};
const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLeague);