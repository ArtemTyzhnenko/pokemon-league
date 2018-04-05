import React, { Component } from 'react';
import './PokedexArea.css'

class PokedexArea extends Component {

  state = {
    pokemonName: ''
  };

  onInputChange = (e) => {
    this.setState({pokemonName: e.target.value})
  };
  clearInput = () =>{
    this.setState({pokemonName: ''})
  };

  onAddPokemon = (e) => {
    e.preventDefault();
    const {addPokemon, pokemon} = this.props;
    addPokemon(pokemon);
    this.clearInput();
  };

  onSubmitSearch = (e) => {
    e.preventDefault();
    const {fetchingPokemon} = this.props;
    fetchingPokemon(this.state.pokemonName)
  };

  render() {
    const {pokemon} = this.props;
    const imgSrc = pokemon && pokemon.sprites ? pokemon.sprites.front_default : '';

    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <input type="text"
                 value={this.state.pokemonName}
                 onChange={this.onInputChange}
          />
          <button type="submit">Search</button>
        </form>
        {pokemon &&
        <div className="pokemon">
          <img src={imgSrc} alt=""/>
          <a onClick={this.onAddPokemon}>
            Add {pokemon.name}
          </a>
        </div>
        }
      </div>
    )
  }
}

export default PokedexArea;