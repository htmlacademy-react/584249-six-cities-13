import styles from './error.module.css';

const Error = () => (

  <div className={styles.container}>
    <div className={styles.message}>
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, but we could not retrieve the hotel offers at this time.</p>
      <p>Please try again later.</p>
    </div>
  </div>
);

export default Error;
