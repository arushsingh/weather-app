import React from 'react';
import './title.css';

class Form extends React.Component {
    render() {
        return (
            <div className="form-comp">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city.." />
                    <input type="text" name="country" placeholder="Country" />
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}
export default Form;