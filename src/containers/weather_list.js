import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;

        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Presure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/*function mapStateToProps(state) {
    // O state.weather vem do combineReducer
    // que define o estado "weather"
    return { weather: state.weather };
}*/

// Mesma coisa que a função acima
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
