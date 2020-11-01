import styles from './tecnologias.module.scss';
import Tecnologia from './tecnologiaCard';

export default function Tecnologias() {
  return (
    <div className={styles.container}>
      <h1>Stack Tenológico</h1>
      <div className={styles.list}>
        <Tecnologia name="React" icon="/img/react.png" />
        <Tecnologia name="JavaScript" icon="/img/javascript.png" />
        <Tecnologia name="CSS3" icon="/img/css.png " />
        <Tecnologia name="HTML5" icon="/img/html.png" />
        <Tecnologia name="NodeJs" icon="/img/node.png" />
        <Tecnologia name="Bootstrap" icon="/img/bootstrap.png" />
        <Tecnologia name="MongoDB" icon="/img/mongodb.png" />
        <Tecnologia name="NPM" icon="/img/npm.png" />
        <Tecnologia name="SASS" icon="/img/sass.png" />
      </div>
    </div>
  );
}
