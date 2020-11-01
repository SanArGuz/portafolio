import Image from 'next/image';
import styles from './proyectoCard.module.scss';

export default function Proyecto({ name, image, descripcion, url }) {
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <Image src={image} width="350" height="200" />
      <ul>
        {descripcion.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a href={url} target="_blank">
        Ir al proyecto
      </a>
    </div>
  );
}
