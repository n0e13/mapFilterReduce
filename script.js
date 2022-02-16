/**************************//**************************//**************************//**************************/
// Ejercicios map
/**************************//**************************//**************************//**************************/
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Como soy de Valencia, amo comer Entrecot es sabroso'
   ]
*/



const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

function fCrearFrase(food, index) {
    let frases = ["Como soy de Italia, amo comer toChange", "Como soy de Japón, amo comer toChange", "Como soy de Valencia, amo comer toChange", "Aunque no como carne, el toChange es sabroso"];
    return frases[index].replace('toChange', food);
}

let resultado = foodList.map(fCrearFrase);

/**************************//**************************//**************************//**************************/

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

function fGenerarFrase(staff) {
    return `${staff.name} es ${staff.role} y le gusta ${staff.hobbies[0]} y ${staff.hobbies[1]}`;
}

let resultado = staff.map(fGenerarFrase);

/**************************//**************************//**************************//**************************/
// Ejercicios Filter
/**************************//**************************//**************************//**************************/
// Crea un segundo array con que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numsImpares = numbers.filter(num => {
    return num % 2 != 0;
});

/**************************//**************************//**************************//**************************/

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];


/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/
// Hago un filtro de la foodList y al resultado un map
let veggieFood = (foodList.filter(food => { return food.isVeggie })).map(veggie => `¡Qué rico ${veggie.name} me voy a comer!`);

/**************************//**************************//**************************//**************************/

// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

// Hago un filtro del inventory y al resultado un map
let cosasCaras = (inventory.filter(cosa => { return cosa.price > 300 })).map(cosaCara => cosaCara.name);

/**************************//**************************//**************************//**************************/
// Ejercicios reduce
/**************************//**************************//**************************//**************************/

// Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

let numsMultiplicados = numeros.reduce((accumulador, valorActual) => accumulador * valorActual);

// Salida--> 483600

/**************************//**************************//**************************//**************************/

// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Noe',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

let fraseFinal = sentenceElements.reduce((accumulador, valorActual) => `${accumulador} ${valorActual}`);

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

/**************************//**************************//**************************//**************************/

// Obtener el monto total de los elementos que pertenecen a catergory "code"
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];
// Resultado --> 60

// Filtro el array y luego lo reduzco
let aCode = (books.filter(book => book.category == "code")).reduce((accumulador, valorActual) => accumulador.price + valorActual.price);