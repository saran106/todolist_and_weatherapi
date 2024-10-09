import React, { useState } from 'react';
import axios from 'axios';

const Weatherapitest = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [hoveredInput, setHoveredInput] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(false);

    const getWeather = async () => {
        const apiKey = '25cc384b24d64b25aee81948240910'; // this is my key for weather checking in weatherapi.com

        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: apiKey,
                    q: city,
                },
            });

            setWeatherData(response.data);
            setError(null); // Reset error state if fetch is successful
        } catch (err) {
            setError(err.response ? err.response.data.error.message : "City not found");
            setWeatherData(null);
        }
    };

    return (
        <div style={styles.weatherApp}>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
            <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>Weather Checker</h1>
            <div style={styles.inputSection}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    style={{
                        ...styles.input,
                        ...(hoveredInput ? styles.inputHover : {}), // Apply hover style conditionally
                    }}
                    onMouseEnter={() => setHoveredInput(true)} // Track hover state
                    onMouseLeave={() => setHoveredInput(false)} // Track hover state
                />
                <button
                    onClick={getWeather}
                    style={{
                        ...styles.button,
                        ...(hoveredButton ? styles.buttonHover : {}), // Apply hover style conditionally
                    }}
                    onMouseEnter={() => setHoveredButton(true)} // Track hover state
                    onMouseLeave={() => setHoveredButton(false)} // Track hover state
                >
                    Check Weather
                </button>
            </div>
            <div id="weather-result" style={styles.weatherResult}>
                {error && <p style={styles.error}>{error}</p>}
                {weatherData && (
                    <div className="weather-table" style={styles.weatherResult}>
                        <h2>
                            Weather in {weatherData.location.name}, {weatherData.location.country}
                        </h2>
                        <table style={styles.weatherTable}>
                            <tbody>
                                <tr>
                                    <td style={{ ...styles.tableCell, ...styles.tableHeader }}>
                                        <strong>Temperature:</strong>
                                    </td>
                                    <td style={styles.tableCell}>{weatherData.current.temp_c}°C</td>
                                </tr>
                                <tr style={styles.tableRowEven}>
                                    <td style={styles.tableCell}><strong>Weather:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.current.condition.text}</td>
                                </tr>
                                <tr>
                                    <td style={styles.tableCell}><strong>Humidity:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.current.humidity}%</td>
                                </tr>
                                <tr style={styles.tableRowEven}>
                                    <td style={styles.tableCell}><strong>Wind Speed:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.current.wind_kph} kmph</td>
                                </tr>
                                <tr>
                                    <td style={styles.tableCell}><strong>Latitude:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.location.lat}</td>
                                </tr>
                                <tr style={styles.tableRowEven}>
                                    <td style={styles.tableCell}><strong>Longitude:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.location.lon}</td>
                                </tr>
                                <tr>
                                    <td style={styles.tableCell}><strong>Local Time:</strong></td>
                                    <td style={styles.tableCell}>{weatherData.location.localtime}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

// Styles object
const styles = {
    weatherApp: {
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#e0f7fa', // Light teal background for the app
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginBottom: '30px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    inputSection: {
        marginBottom: '40px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '70%',
        marginRight: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        transition: 'border-color 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
    },
    inputHover: {
        borderColor: '#80deea', // Lighter teal on hover
        boxShadow: '0 0 5px rgba(128, 222, 234, 0.7)', // Subtle glow effect on hover
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s, transform 0.3s', // Smooth transition for hover effect
    },
    buttonHover: {
        backgroundColor: '#218838', // Darker green on hover
        transform: 'scale(1.05)', // Slightly enlarge on hover
    },
    weatherResult: {
        marginTop: '20px',
        fontSize: '18px',
        color: '#333',
    },
    error: {
        color: 'red',
    },
    weatherTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableCell: {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
    },
    tableRowEven: {
        backgroundColor: '#f9f9f9',
    },
    tableRowHover: {
        backgroundColor: '#f1f1f1',
    },
};

export default Weatherapitest;
