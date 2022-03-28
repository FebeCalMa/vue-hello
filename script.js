console.log("JS OK!");
/*
Descrizione:
Stampare a schermo un messaggio all’interno
di un h1, utilizzando i data. 
Bonus:
Aggiungere alla pagina un’immagine, 
presa anch’essa da un data.
*/

const app = new Vue({
  el: "#root",
  data: {
    text: "Hello World!",
    img: "http://vignette4.wikia.nocookie.net/simpsons/images/0/01/200px-Langdon_Alger.png/revision/latest?cb=20120815160236",
  },
});
