import styles from './style/navbarStyle.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContent}>
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <div>
          <span className={styles.textLogo}>Wrench CRM</span>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div>
          <img src="person.svg" alt="logo" />
        </div>
        <div>
          <span className={styles.textLogo}>Имя Фамилия</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
