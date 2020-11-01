import styles from './acerca.module.scss';
import Image from 'next/image';

export default function Acerca() {
  return (
    <div className={styles.container}>
      <div id="#acerca" className={styles.grid}>
        <h1>Acerca de mi</h1>
        <p>
          Apasionado por la tecnología, con experiencia en desarrollo web con
          JavaScript usando React y NodeJs, entusiasta por aprender y superar
          retos desafiantes.
        </p>
        <Image src="/img/desktop.jpg" width="800" height="500" />
      </div>
    </div>
  );
}
