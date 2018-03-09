import React, {Component} from 'react';

class SearchBar extends  Component {

    constructor(props){
        super(props);
        this.state = {searchTerm: ''};
    }

    handleInputChange(e) {
        console.log(e.target);

       this.props.onSearchTermChange(e.target.value);
    }

    

    render() {

        return (
                <div className="col-md-8 search-bar">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" 
                                type="button" onClick={(event) => this.handleInputChange(event)}>Go!</button>
                            </span>
                    </div>
                </div>
        );
    }

}

export default SearchBar;