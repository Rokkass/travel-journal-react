import styles from "./Destination.module.scss";
import marker from "../../assets/images/redMarker.svg";

const Destination = (props) => (
  <div className={styles.wrapper}>
    <img src={props.imageUrl} alt={props.title} />
    <div className={styles.details}>
      <div className={styles.localization}>
        <img className={styles.marker} src={marker} alt="red marker" />
        <span className={styles.country}>{props.location}</span>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
      </div>
      <h2>{props.title}</h2>
      <p className={styles.date}>
        {props.startDate} - {props.endDate}
      </p>
      <span className={styles.description}>{props.description}</span>
    </div>
  </div>
);

export default Destination;
