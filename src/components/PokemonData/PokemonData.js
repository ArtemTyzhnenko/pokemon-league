import React, { Component } from 'react';

class PokemonData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weight: this.props.weight,
      name: this.props.name
    }
  }

  static defaultProps = {
    weight: '',
    name: '',
    pokemonId: null
  }


  componentWillReceiveProps(nextProps, prevState) {
    this.setState({weight: nextProps.weight, name: nextProps.name});

  }

  updateInfo = (property) => (e) => {
    this.setState({[property]: e.target.value})
  }

  onPokemonInfoSave = (e) => {
    e.preventDefault();
    const {name, weight} = this.state;
    const {updatePokemonInfo, pokemonId} = this.props;
    updatePokemonInfo(pokemonId, {name, weight})
  }
  
  render() {
    const {weight, name} = this.state;
    
    return (
      <div className="pokemon-data">
        <form onSubmit={this.onPokemonInfoSave}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={this.updateInfo('name')}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              value={weight}
              onChange={this.updateInfo('weight')}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    )
  } 
 
}

export default PokemonData;
