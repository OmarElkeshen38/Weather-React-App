import React, { useEffect, useState } from 'react';
import windImg from '../../Images/icon-wind.png';
import cloudImg from '../../Images/icon-umberella.png';
import winddirImg from '../../Images/icon-compass.png';

function Weather() {

  const [searchQuery, setSearchQuery] = useState("tanta");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  function getCity(e) {
    setSearchQuery(e.target.value);
  }

   useEffect(() => {
     const fetchWeatherData = async () => {
      setIsLoading(true)
       try {
         const response = await fetch(
           `https://api.weatherapi.com/v1/forecast.json?key=beaa6830775a4e99910131438220406&q=${searchQuery}07112&days=1`
         );
         const data = await response.json();
         setWeatherData(data);
       } catch (error) {
         console.error("Error fetching weather data:", error);
       } finally {
        setIsLoading(false);
       }
     };

     if (searchQuery.length > 3) {
       fetchWeatherData();
     }
   }, [searchQuery]);


  return (
    <>
      <section className="forecast py-5">
        <div className="container px-5">
          <div className="forecast-search position-relative mt-3 mb-5">
            <input
              onChange={getCity}
              id="searchFor"
              className="w-100"
              type="search"
              placeholder="Find your location"
            />
            <button
            onClick={getCity}
              id="btnSearch"
              className="text-white btn__primary position-absolute"
              type="button"
            >
              Find
            </button>
          </div>
          <div className="forecast-container w-50 mx-auto" id="forecastContaciner">
            <div className="col">
              {isLoading ? (
                <div className="bg-dark p-5">
                  <i className="fa-solid fa-spinner fa-spin-pulse text-white fs-3"></i>
                </div>
              ) : (
                <>
                {weatherData ? (
                  <div className="forecast-curent card py-4 h-100">
                  <div className="card-header hstack justify-content-between">
                    <h4 className="mb-0 h6 text-white text-opacity-50">
                      Today
                    </h4>
                    <h5 className="curent-date mb-0 small text-white text-opacity-50 fw-light">
                      {weatherData.location.localtime}
                    </h5>
                  </div>
                  <div className="card-body">
                    <h4 className="forecast-location pt-2 small text-white text-opacity-50">
                      {weatherData.location.name}
                    </h4>
                    <div className="forecast-deg hstack flex-wrap justify-content-between text-white text-opacity-50">
                      <h2 className="text-white deg fs-2">{weatherData.current.temp_c}<sup>o</sup>C</h2>
                      <img src={weatherData.current.condition.icon} alt="weather icon" />
                    </div>
                    <span className="forecast-custom color__secondary fw-light">{weatherData.current.condition.text}</span>
                    <div className="forecast-data text-white small hstack gap-4 mt-4">
                      <span>
                        <img className="img-fluid" src={cloudImg} alt="icon" />
                        {weatherData.current.cloud}%
                      </span>
                      <span>
                        <img className="img-fluid" src={windImg} alt="icon" />
                         {weatherData.current.wind_kph}km/h
                      </span>
                      <span>
                        <img className="img-fluid" src={winddirImg} alt="icon" />
                          {weatherData.current.wind_dir}
                      </span>
                    </div>
                  </div>
                </div>
                ) : (
                  <h2 className='text-white bg-dark text-white p-5'>No Weather Data</h2>
                )}
                
                </>
              )}
              
              
              
            </div>
            {/* <div className="col">
              <div
                className="forecast-curent card  h-100 text-center"
              >
                <div className="card-header">
                  <h4
                    className=" mb-0 h6 text-white text-opacity-50"
                  >
                    next day
                  </h4>
                </div>
                <div className="card-body py-5">
                  <img
                    src=""
                    alt="photo weather"
                  />
                  <div className="forecast-deg text-white">
                    <h2 className="mt-3"><sup>o</sup>C</h2>
                    <h6
                      className="text-white text-opacity-50 mb-4 fw-light"
                    >
                      <sup>o</sup>C
                    </h6>
                    <span
                      className="forecast-custom color__secondary fw-light"
                    > 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="forecast-curent card  h-100 text-center"
              >
                <div className="card-header">
                  <h4
                    className=" mb-0 h6 text-white text-opacity-50"
                  >
                    
                  </h4>
                </div>
                <div className="card-body py-5">
                  <img
                    src=""
                    alt="photo weather"
                  />
                  <div className="forecast-deg text-white">
                    <h2 className="mt-3"><sup>o</sup>C</h2>
                    <h6
                      className="text-white text-opacity-50 mb-4 fw-light"
                    >
                      <sup>o</sup>C
                    </h6>
                    <span
                      className="forecast-custom color__secondary fw-light"
                    > 
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    </section >
    </>
  )
}

export default Weather
