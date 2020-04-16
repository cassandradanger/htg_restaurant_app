import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchList from '../SearchList/SearchList';

class SearchPage extends Component {

  componentDidMount () {
    console.log('hello this is the search page');
    this.props.dispatch({type: 'FETCH_SEARCH_RESTAURANTS'});
  }

  render() {
    return (
      <div>
          This is the search page

          <h3>User input chosen restaurant type</h3>

          <SearchList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(SearchPage);

