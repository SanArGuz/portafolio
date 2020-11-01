import styles from './header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <h2>
          <span>Mi</span> Portafolio
        </h2>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#acerca">Acerca de mi </a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologias</a>
            </li>
            <li>
              <a href="#proeyctos">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
