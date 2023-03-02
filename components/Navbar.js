// components/Navbar.js

import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitems}>
        <p>CryptoApp</p>
        <div className={styles.navlinks}>
          <Link href="/">Home</Link>
          <Link href="/coins">Cryptocurrencies</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;