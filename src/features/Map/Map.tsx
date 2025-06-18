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
            src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Prime%20Setup%20Business%2C%20Sheikh%20Zayed%20Road%2C%20Dubai%2C%20UAE&t=&z=18&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            title="Google Maps location"
          />
        </div>
      </div>
    </section>
  );
};