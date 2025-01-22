import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import { SearchType } from "../../types";
import styles from "./From.module.css";
import Alert from "../Alert/Alert";

type FromProps = {
  fechtWeather: (search: SearchType) => Promise<void>;
};

const Form = ({ fechtWeather }: FromProps) => {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });
  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son necesarios");
      return;
    }
    fechtWeather(search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="countries">País</label>
        <select
          id="countries"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
          <option value="">---Selecione su País---</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input
        className={styles.submit}
        type="submit"
        value={"Consultar Ciudad"}
      />
    </form>
  );
};

export default Form;
