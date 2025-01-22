import { Weather } from "../../hooks/useWeather"


type WeatherProps = {
    weather: Weather

}

const Weather = ({weather} : WeatherProps) => {
  return (
    <>
    <h1>El Clima :</h1>
   
    {/* <div>{weather.name}</div>
    <div>{weather.main.temp}</div> */}
    </>
  )
}

export default Weather