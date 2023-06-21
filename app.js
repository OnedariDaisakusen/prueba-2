'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const divContent = document.getElementById('container-div');

to_do.forEach(element => {

    const newDiv = document.createElement("ul");

    const newContent = document.createTextNode(element);

    newDiv.appendChild(newContent);

    divContent.appendChild(newDiv);
});

