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

        return (
            <div>
                <input value={this.state.searchTerm} onChange={(e) => this.handleInputChange(e)} />

            </div>

            

        );

    }

}

export default SearchBar;