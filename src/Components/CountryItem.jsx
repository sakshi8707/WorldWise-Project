import React from "react";
import styles from "./CountryItem.module.css";

// Function to convert country code to flag image URL
const countryCodeToFlagURL = (countryCode) => {
  return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
};

const CountryItem = ({ country }) => {
  const { country: countryCode, emoji } = country;
  const flagURL = countryCodeToFlagURL(countryCode);

  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>
        <img src={flagURL} alt={`${countryCode} flag`} />
      </span>
      <span className={styles.name}>{countryCode}</span>
    </li>
  );
};

export default CountryItem;

// ---------------------------Previous code -------------------------------

// import React from "react";
// import styles from "./CountryItem.module.css";

// const CountryItem = ({ country }) => {
//   const { cityName, emoji } = country;

//   return (
//     <li className={styles.cityItem}>
//       <span className={styles.emoji}>{emoji}</span>
//       <span className={styles.name}>{cityName}</span>
//     </li>
//   );
// };

// export default CountryItem;
