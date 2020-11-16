import Image from 'next/image';
import styles from './footer.module.scss';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://linkedin.com/in/sanarguz" target="_blank">
        <Image src="/img/linkedin.png" width="80" height="80" />
      </a>
      <a href="https://github.com/sanarguz" target="_blank">
        <Image src="/img/github.png" width="80" height="80" />
      </a>
    </footer>
  );
}
