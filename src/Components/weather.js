import React from "react";

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temprature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temprature}°C	</span>
            </p>
        }
        {
            props.Humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.Humidity} </span>
            </p>
        }
        {
            props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
            </p>
        }
        {
            props.wind && <p className="weather__key"> Wind:
	 		<span className="weather__value"> {props.wind}Km</span>
            </p>
        }
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

export default Weather;