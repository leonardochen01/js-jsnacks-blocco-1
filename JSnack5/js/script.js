//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

const oddNumbersList = [];

for (let i = 0; i < 6; i++) {
  const userNumber = prompt ('Inserisci un numero');
  if (userNumber % 2 !== 0){
    oddNumbersList.push(userNumber);
    console.log(oddNumbersList)
  } else {
    console.log('numero pari, non viene inserito');
  }
}




