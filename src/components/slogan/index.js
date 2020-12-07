import styles from './slogan.module.scss';
import Image from 'next/image';

export default function Slogan() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>Proyectos personales</h1>

          <p className={styles.description}>
            Una muestra de lo que podemos construir juntos
          </p>

          <div className={styles.images_container}>
            <Image
              src="/img/comentarios.png"
              width="180px"
              height="160px"
            ></Image>
            <Image src="/img/laptop.png" width="480px" height="380px"></Image>
            <Image src="/img/bombillo.png" width="160px" height="160px"></Image>
          </div>
        </div>
      </main>
    </div>
  );
}
