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

  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.props.handleSearch(this.state.inputValue)
    }
  }

  render() {
    return (
      <div className='search-bar-div'>
        <input 
          aria-label='Text Box'
          type='text'
          placeholder='Search News'
          name='inp'
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleEnterKey} 
        />
        <button className='search-btn' onClick={() => this.props.handleSearch(this.state.inputValue)}>Search</button>
    </div>
    )
  }
}

export default SearchForm;