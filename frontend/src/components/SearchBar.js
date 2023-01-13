import React, { Component, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/AuthAPI';
import "./SignInStyle.css";

class SearchBar extends Component {
    contructor(props) {
        // super(props);
        console.log(props);
        this.state = { term: '' };
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="search-bar" style={{ margin: '20px', textAlign: 'center' }}>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    style={{ width: '75%' }}
                />
            </div>
        );
    }
}
export default SearchBar;