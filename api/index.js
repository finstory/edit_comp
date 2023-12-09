const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 3001;

app.use(bodyParser.json());

app.post("/test", (req, res) => {
  const filePath =
    "E:/PRUEBA/client/src/components/Carousel/carousel.module.css";

  const className = req.body.class_name;
  const cssList = req.body.css_list;

  edit(className, decomposeClass(cssList), filePath);
  const time = new Date();
  console.log(`Archivo modificado ${time.toLocaleTimeString()} `);
  res.json({ message: `Archivo modificado ${time.toLocaleTimeString()} ` });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

const edit = (className, props, filePath) => {
  // Ruta al archivo que deseas modificar

  // Texto que quieres agregar
  const textoAgregar = `${props}`;

  // Lee el contenido del archivo
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    // Busca la posición de la cadena ".test {"
    const posicionInicio = data.indexOf(`.${className} {`);

    // Verifica si ".test {" está presente en el archivo
    if (posicionInicio !== -1) {
      // Encuentra la posición de cierre de las llaves a partir de la posición de inicio
      const posicionLlaveInicio =
        posicionInicio + data.substring(posicionInicio).indexOf("{") + 1;
      const posicionLlaveCierre = data.indexOf("}", posicionInicio);

      // Verifica si se encontró la llave de cierre
      if (posicionLlaveCierre !== -1) {
        // Elimina el contenido entre llaves
        const nuevoContenido =
          data.slice(0, posicionLlaveInicio) +
          "\n    " +
          textoAgregar +
          "\n}" +
          data.slice(posicionLlaveCierre + 1);

        // Agrega la llave de cierre al final del nuevo contenido
        const nuevoContenidoConLlave = nuevoContenido.trim();

        // Escribe el nuevo contenido en el archivo
        fs.writeFile(filePath, nuevoContenidoConLlave, "utf8", (err) => {
          if (err) {
            console.error("Error al escribir en el archivo:", err);
          } else {
            // console.log("Archivo modificado correctamente.");
          }
        });
      } else {
        console.error(
          `Error: No se encontró la llave de cierre para ".${className} {".`
        );
      }
    } else {
      console.error(
        `Error: No se encontró la cadena ".${className} {" en el archivo.`
      );
    }
  });
};

const getClass = async (className, filePath) => {
  let classText = "";
  await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        return;
      }

      const inicioClase = data.indexOf(`.${className} {`);
      const finClase = data.indexOf("}", inicioClase);

      // Verifica si se encontraron las llaves de la clase
      if (inicioClase !== -1 && finClase !== -1) {
        // Extrae el texto entre las llaves de la clase
        classText = data
          .substring(inicioClase + className.length + 3, finClase)
          .trim();
        resolve();
        // Imprime el resultado
        // console.log(classText);
      } else {
        console.error(
          `Error: No se encontraron las llaves de la clase ${className}.`
        );
      }
    });
  });
  return classText;
};

const compileClass = (cssCode) => {
  const regex = /([a-zA-Z-]+):\s*([^;]+);/g;

  const propertiesArray = [];

  let match;

  while ((match = regex.exec(cssCode)) !== null) {
    propertiesArray.push({ name: match[1], value: match[2] });
  }

  return propertiesArray;
};

const decomposeClass = (propsList) => {
  const cssCode = propsList
    .map((property) => `${property.name}: ${property.value};`)
    .join("\n    ");
  return cssCode;
};

const main = async () => {
  const filePath =
    "E:/PRUEBA/client/src/components/Carousel/carousel.module.css";
  const className = "carousel";

  // const cssCode = await getClass(className, filePath);

  const cssList = [
    { name: "width", value: "23rem" },
    { name: "height", value: "20rem" },
    { name: "background-color", value: "#3c30a8" },
    { name: "display", value: "flex" },
    { name: "justify-content", value: "center" },
    { name: "align-items", value: "center" },
  ];

  // const cssList = compileClass(cssCode);
  // console.log(cssList);
  edit(className, decomposeClass(cssList), filePath);
};
// main();
// compileClass(saveClass(className, filePath));
