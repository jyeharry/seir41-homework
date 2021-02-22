import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      query: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault(); //prevent form being submitted
    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder='R2D2' required onInput={ this._handleInput }/>
        <button>Search for { this.state.query }</button>
      </form>
    );
  }
}
export default SearchForm;