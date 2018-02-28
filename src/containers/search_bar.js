import React , { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // Necessário para que o this.setState funcione. Sem
        // esta linha o this, dentro do onInputChange, não
        // pertence ao contexto correto
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                   placeholder="Get a five-day forecast in your favorite cities"
                   className="form-control"
                   value={this.state.term}
                   onChange={this.onInputChange} 
                />
                <span className="iput-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}