import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <div>
        <input 
          type='text'
          placeholder='Search News'
          value={this.state.inputValue}
          onChange={ (e) => this.setState({ inputValue: e.target.value }) }
        />
        <button className='search-btn' onClick={() => this.props.handleSearch(this.state.inputValue)}>Search</button>
    </div>
    )
  }
}

export default SearchForm;