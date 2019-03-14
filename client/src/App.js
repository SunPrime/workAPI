import React, { Component } from 'react';

import Person from "./components/person"
import Input from "./components/input"
import Select from "./components/select"
import Pagination from "./components/pagination"

// import './App.css';

const BASE_PATH = '/data';
const SEARCH_PARAM = 'name=';
const PAGE_LIMIT = 'limit=';
const PAGE_OFFSET = 'offset=';

const PAGES = [
    {
        value: 10,
        label: 10,
    },
    {
        value: 20,
        label: 20,
    },
    {
        value: 30,
        label: 30,
    },
    {
        value: 50,
        label: 50,
    },
];

class App extends Component {
  state = {
      searchQuery: '',
      result: [],
      limit: 10,
      offset: 0,
      page: 1,
  };

  componentDidMount(){
      const { searchQuery, limit, offset } = this.state;
      this.fetchData(searchQuery, limit, offset);
}

  fetchData = (searchQuery, limit, offset) => {
      let url = `${BASE_PATH}?${PAGE_LIMIT}${limit}&${PAGE_OFFSET}${offset}&${SEARCH_PARAM}${searchQuery}`;
      fetch(url)
          .then(res => res.json())
          .then(result => this.setData(result))
          .catch(error => error);
  };

  setData = result => {
      this.setState({ result: result.data, count: result.count })
  };

  handleInputChange = ({ target: { value } }) => {
      this.setState({
          searchQuery: value
      })
  };

  getSearch = ({ key }) => {
      if(key === 'Enter') {
          const { searchQuery } = this.state;
          this.setState({
              page: 1,
              offset: 0,
          }, ()=> {
              this.fetchData(searchQuery, this.state.limit, this.state.offset);
          });
      }
  };

   handleCellClick = (event) => {
       let currentEvent = event.currentTarget,
           currentValue = event.target.innerText,
           currentId = +currentEvent.firstChild.innerText,
           currentNameField = event.target.getAttribute('class') ;
       console.log(currentValue);
       console.log(currentId);
       console.log(currentNameField);
   };

  handleRecordsChange = ({ target: { value } }) => {
      const { searchQuery } = this.state;

      this.setState({
          limit: +value,
          offset: 0,
          page: 1
      }, () => {
          this.fetchData(searchQuery, this.state.limit, this.state.offset);
      })
  };

  handlePageChange = ({ target }) => {
      const btnType = target.getAttribute('data-name');
      let { page } = this.state;

      if(!isNaN(btnType)){
          this.updatePage(+btnType);
      } else {
          switch (btnType) {
              case 'next':
                  this.updatePage(page + 1);
                  break;
              case 'prev':
                  this.updatePage(page - 1);
                  break;
              default: void 0;
          }
      }
  };

  updatePage = (number) => {
      const { searchQuery, limit } = this.state;
      let total = (number-1) * limit;
      this.setState({
          page: number,
          offset: total
      }, () => {
          this.fetchData(searchQuery, limit, this.state.offset);
      });
  };

  render() {
    const { searchQuery, result, limit, count, page } = this.state;
    const lastPage = Math.ceil(count/limit) + 1;

    return (
      <div className="App">
        <header className="App-header">
          <h2>Persons:</h2>
          <Select options={PAGES} handleChange={this.handleRecordsChange} value={limit} />
        </header>
          <table>
              <tbody>
              <tr>
                  <Input
                      onKeyPress={this.getSearch}
                      onChange={this.handleInputChange}
                      value={searchQuery}
                  />
              </tr>
              <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>city</th>
                  <th>phone</th>
                  <th>funds</th>
              </tr>
                  {result.map((data) =>
                      <Person
                          key={data.id}
                          id={data.id}
                          name={data.name}
                          email={data.email}
                          funds={data.funds}
                          city={data.city}
                          phone={data.phone}
                          onClick={this.handleCellClick}
                      />
                  )}
              </tbody>
          </table>
          <Pagination
              onClick={this.handlePageChange}
              page={page}
              lastPage={lastPage}
          />
      </div>
    );
  }
}

export default App;