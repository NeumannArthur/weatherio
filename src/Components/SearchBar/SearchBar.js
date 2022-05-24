import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { city: "" };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleSearch(event) {
        this.props.getWeather(this.state.city);

        event.preventDefault();
    }

    handleTermChange(event) {
        this.setState({ city: event.target.value });
    }

    render() {
        return (
            <div className="searcher">
                <input placeholder="Search Location" type="text" onChange={this.handleTermChange}/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}