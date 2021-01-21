import styles from "./proyectos.module.scss";
import Proyecto from "./proyectoCard";

export default function Proyectos() {
  return (
    <div className={styles.container}>
      <h1>Proyectos</h1>
      <div className={styles.list}>
        <Proyecto
          name="Pandar"
          image="/img/pandar.png"
          descripcion={[
            "Diseñar el logo, colores y fuente del proyecto.",
            "Manejar en React formularios como login y registro.",
            "Desarrollar en React componentes funcionales.",
            "Asegurar la correcta visualización en diversas pantallas.",
          ]}
          url="https://pandar.vercel.app/"
        />
        <Proyecto
          name="Roomie Finder"
          image="/img/roomie.png"
          descripcion={[
            "Verificar cada commit antes de ser incluido al repositorio",
            "Construir el proyecto base con las tecnologias requeridas",
            "Desarrollar en React componentes funcionales",
            "Consumir una API del lado del frontend",
          ]}
          url="https://github.com/C4-Estefany-Team2/buscando-roomie"
        />
        <Proyecto
          name="Tienda"
          image="/img/tienda.png"
          descripcion={[
            "Diseñar en figma las vistas",
            "Diseñar el logo, colores y fuentes",
            "Maquetar en HTML y CSS las vistas",
            "Crear link a whatsapp",
          ]}
          url="https://tienda-univesitaria.vercel.app/"
        />
        <Proyecto
          name="Perfiles"
          image="/img/perfiles.png"
          descripcion={[
            "Diseñar y maquetar vista del Hero",
            "Diseñar un grid circular para las fotos",
          ]}
          url="https://github.com/Cohort-4-Team-Diego/React-Perfiles"
        />
        <Proyecto
          name="Backend CRUD"
          image="/img/lugares.png"
          descripcion={[
            "Usar NodeJs y Express para construir el server",
            "Amacenar los datos en MongoDB",
            "Desplegar la aplicación en Heroku",
            "Documentar con Postman la API",
          ]}
          url="https://github.com/FogataApp/fogata-backend/"
        />
        <Proyecto
          name="Corona App"
          image="/img/corona.png"
          descripcion={[
            "Crear con React componentes funcionales",
            "Consumir los datos desde una API",
            "Diseñar las vistas",
          ]}
          url="https://sanarguz.github.io/covid19-worldmeter-react/"
        />
        <Proyecto
          name="Clon Calculadora Google"
          image="/img/calculadora.png"
          descripcion={[
            "Crear estilos en CSS",
            "Manipular el DOM a travez de JS",
            "Crear funciones que ejecuten las operaciones matemáticas",
          ]}
          url="https://calculadora-google-clone.sanarguz.vercel.app/"
        />
      </div>
    </div>
  );
}
