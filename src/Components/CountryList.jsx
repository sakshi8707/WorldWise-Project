import React from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map " />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);

  return (


    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
