import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

//This could be a fake database
const dataSets ={
  'local news': local,
  entertainment: entertainment,
  tech: technology,
  science: science,
  health: health
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: local
    }
  }

  filterByNewsType = (e) => {
    const newsType = e.target.innerText.toLowerCase()
    const targetData = dataSets[newsType]
    this.setState({ data: targetData })
  }

  handleSearch = (searchTerm) => {
    const filteredData = this.state.data.filter(article => {
      return article.headline.toLowerCase().includes(searchTerm.toLowerCase()) 
        || article.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({ data: filteredData })
  }

  render () { 
    return (
      <main>
        <Menu 
          filterByNewsType={this.filterByNewsType}
          btnTitles={Object.keys(dataSets)}
        />
        <SearchForm 
          handleSearch={this.handleSearch}
        />
        <NewsContainer 
          articles={this.state.data}
        />
      </main>
    );
  }
}

export default App;
