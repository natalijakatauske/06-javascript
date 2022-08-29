console.log('veikia')

const myArray = [{brand: 'opel', model: 'ascona', color: 'red'}, {brand: 'ford', model: 'mondeo', color:'#000000'},{brand: 'honda', model: 'civic', color: '#000000'}, {brand: 'kia', model: 'ceed', color: 'rgb(255,255,0)'}]
console.log(myArray[2])

// let text = "";
// for (let i = 0; i < myArray.length; i++) {
//   text += myArray[i].value + "<br>";
// }
// document.querySelector('p').innerHTML = text;

for (let i=0; i < myArray.length; i++) {
  console.log(myArray[i])
  // document.querySelector('p').innerHTML = JSON.stringify(myArray, null, 2)
  document.querySelector('p').innerHTML += "<div style = 'background-color: "+ myArray[i].color+"'"+">" + myArray[i].brand + myArray[i].model + myArray[i].color + "</div>"
  document.querySelector('p').innerHTML += '<br>'
}

// for (let value of myArray) {
//   document.querySelector('p').innerHTML += "<div style = 'background-color: "+ myArray[i].color+"'"+">" + value.brand + value.model + value.color + "</div>"
// }