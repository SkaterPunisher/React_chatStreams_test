import styles from './Title.module.scss';

const Title = () => {
  return (
    <>
      <h1 className={styles.header}>Bot Chat</h1>
      <h3 className={styles.description}>AI based service</h3>
    </>
  );
};

export default Title;
