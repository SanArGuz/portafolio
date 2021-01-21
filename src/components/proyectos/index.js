import styles from "./proyectos.module.scss";
import Proyecto from "./proyectoCard";
import useSWR from "swr";

export default function Proyectos() {
  const { data, error } = useSWR("api/element");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading</div>;

  return (
    <div className={styles.container}>
      <h1>Proyectos</h1>
      <div className={styles.list}>
        {/* {console.log(data)} */}
        {data.map((item) => (
          <Proyecto
            key={item.id}
            name={item.name}
            image={item.image}
            descripcion={item.descripcion}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
