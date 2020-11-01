import styles from './tecnologiaCard.module.scss';
import Image from 'next/image';
export default function Tecnologia({ name, icon, desc }) {
  return (
    <div className={styles.card}>
      <Image src={icon} width="80" height="70" fill="#ff2d55" />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
