import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div className='search-bar-div'>
        <input 
          aria-label='Text Box'
          type='text'
          placeholder='Search News'
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button className='search-btn' onClick={() => this.props.handleSearch(this.state.inputValue)}>Search</button>
    </div>
    )
  }
}

export default SearchForm;