import React, {Component} from 'react';

class SearchBar extends  Component {

    constructor(props){
        super(props);
        this.state = {searchTerm: ''};
    }

    handleInputChange(e) {

       this.setState({
           searchTerm: e.target.value
       });
    }

    render() {

        return <input value={this.state.searchTerm} onChange={(e) => this.handleInputChange(e)} />;

    }

}

export default SearchBar;