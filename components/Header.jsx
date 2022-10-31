import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import styles from './Header.module.css';

const Header = () => {
  const { user } = useUser();
  if (!user)
    return (
      <header className={styles.header}>
        <div>
          <Link href="/">
            <h3>NextJS Auth0 Example</h3>
          </Link>
        </div>
        <nav>
          <ul className={styles.navbar}>
            <li className={styles.link}>
              <a href="/api/auth/login">Login</a>
            </li>
            <li className={styles.link}>
              <a href="/api/auth/signup">Sign-up</a>
            </li>
          </ul>
        </nav>
      </header>
    );

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <h3>NextJS Auth0 Example</h3>
        </Link>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.link}>
            <a href="/api/auth/logout">Logout</a>
          </li>
          <li className={styles.link}>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
