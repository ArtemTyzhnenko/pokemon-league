import React, { Component } from 'react';
import PokemonData from '../PokemonData/PokemonData';
import cx from 'classnames';
import './PokemonInfo.css'

class PokemonInfo extends Component {

  state = {
    pokemonName: '',
    activePokemonIndex: 0
  };

  setActivePokemon = (index) => (e) => this.setState({activePokemonIndex: index});

  onRemovePokemon = (id) => (e) => {
    const {removePokemon} = this.props;
    removePokemon(id);
  }

  render() {
    const {activePokemonIndex} = this.state;
    const {
      myPokemons,
      updatePokemonInfo
    } = this.props;
    const maxPokemonsLength = 6;
    const currentPokemon = myPokemons[activePokemonIndex];
    const pokemonData = currentPokemon ? {
      weight: currentPokemon.weight,
      name: currentPokemon.name,
      pokemonId: currentPokemon.id
    } : {};

    return (
      <div className="pokemon-info">
        <p>Pokemon Lineup</p>
        <div className="pokemon-list">
          {
            [...Array(maxPokemonsLength)].map((el, index) => {
              const isNotEmpty = myPokemons[index];
              const isActive = (index === activePokemonIndex);
              const pokemonId =  myPokemons[index] ?  myPokemons[index].id : null;
              const avatar = isNotEmpty ? myPokemons[index].sprites.front_default :
                'https://img00.deviantart.net/43fb/i/2006/222/a/8/poke_ball_id_by_gibbygibson.png'
              return (
                <div
                  className={cx("pokemon-item", {"active": isActive })}
                  key={`pokemon_${index}`}
                  onClick={this.setActivePokemon(index)}
                >
                  <span className="delete" onClick={this.onRemovePokemon(pokemonId)}>X</span>
                  <img src={avatar} alt=""/>
                </div>
              )
            })
          }
        </div>
        <PokemonData
          {...pokemonData}
          updatePokemonInfo={updatePokemonInfo}
        />
      </div>
    )

  }
}

export default PokemonInfo;