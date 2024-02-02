import express from 'express';

const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
  res.send('Hola Mundo xd');
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

// import fs from 'fs';

// function leerArchivo() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('archivo.txt', 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }


// leerArchivo()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });




//   const fetchData = () =>{
//     //Get Request
//     return [1,2,30];
//   }

//   async function ejecutarOperacion() {
//     try {
//       const resultado = await fetchData();
//       console.log(resultado);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }
  
//   ejecutarOperacion();