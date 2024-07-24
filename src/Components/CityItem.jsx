import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const flagemojiToPNG = (flag) => {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { latestVisitedCity } = useCities();

  const isActive = latestVisitedCity && latestVisitedCity.id === city.id;

  return (
    <li
      className={`${styles.cityItemWrapper} ${
        isActive ? styles.cityItemActive : ""
      }`}
    >
      <Link
        className={styles.cityItem}
        to={`/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
