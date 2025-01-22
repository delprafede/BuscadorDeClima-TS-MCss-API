import Form from "./components/Form/Form";
import styles from "./App.module.css";
import useWeather from "./hooks/useWeather";
import Weather from "./components/Weather/weather";

function App() {
  const { fechtWeather, weather, hasWeatherData } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <div>
          <Form fechtWeather={fechtWeather} />{" "}
        </div>
        <div>{hasWeatherData && <Weather weather={weather} />}</div>
      </div>
    </>
  );
}

export default App;
