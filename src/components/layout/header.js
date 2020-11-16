import styles from './header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <h2>
          <span>Mi</span> Portafolio
        </h2>
      </div>
    </header>
  );
}
