import styles from './Map.module.scss';

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <div className={`container ${styles.containerMap}`}>
        <div className={styles.mapSection__box}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=Metalabs%2C%20Bishkek%2C%20Kyrgyzstan&t=&z=18&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            title="Google Maps location"
          />
        </div>
      </div>
    </section>
  );
};