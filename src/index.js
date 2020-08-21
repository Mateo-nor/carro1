d
dimport "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
  El carrito :v
</div>
`;
class Car {
  constructor(
    color,
    cambios,
    modelo,
    velocidad,
    lugarLlegada,
    estado,
    lugarParking
  ) {
    this.color = color;
    this.cambios = cambios;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.lugarLlegada = lugarLlegada;
    this.estado = estado;
    this.lugarParking = lugarParking;
  }
  encender() {
    console.log(
      `El carro ${this.modelo} de color ${this.color}se encuentra en neutro, se gira la llave para arrancar, y este enciende`
    );
    return this;
  }
  arrancar() {
    setTimeout(
      () =>
        console.log(
          `El carro se encuentra en primera e inicia su marcha hacia : ${this.lugarLlegada}`
        ),
      3000
    );
    return this;
  }

  velocidades() {
    for (var i = 0; i < this.cambios.length; i++) {
      console.log(
        `Se presiona el closs y con la palanca de cambios se inserta el cambio : ${this.cambios[i]}`
      );
    }
    return this;
  }

  frenar() {
    if (this.estado === true) {
      setTimeout(
        () =>
          console.log(
            `Se presiona el closs y el freno, luego el carro procede a frenar y por ultimo dejarlo en neutro `
          ),
        5000
      );
    } else {
      setTimeout(
        () =>
          console.log(
            `El auto se apaga debido a que intento frenar sin presionar el closs y se pone la emergencia`
          ),
        5000
      );
      return this;
    }
  }
  estacionar() {
    setTimeout(
      () => console.log(`El auto se estacional en : ${this.lugarParking}`),
      6000
    );
    return this;
  }
}

var colour = prompt("Ingrese el color de el auto");
var nCambios = prompt("Ingrese el numero de cambios a realizar: ");
var cambios = [];
var cambio;
for (var i = 0; i < nCambios; i++) {
  cambio = prompt(`Ingrese el cambio #  :${i + 1}`);
  cambios.push(cambio);
}

var modeloCar = prompt(`Ingrese el modelo del auto: `);
var speed = prompt(`Ingrese la velocidad de el auto: `);
var arrivePlace = prompt(`Ingrese el lugar de llegada: `);
var state = prompt(
  `Diga "si", si el auto al momento de frenar esta presionado el closs o diga "no" si esto no ocurre`
);
var estado = false;
if (state === "si") {
  estado = true;
} else {
  estado = false;
}
var estacionamiento = prompt("Ingrese el lugar de estacionamiento: ");

const mazda = new Car(
  colour,
  cambios,
  modeloCar,
  speed,
  arrivePlace,
  state,
  estacionamiento
);
console.log(mazda.encender());
console.log(mazda.arrancar());
setTimeout(() => console.log(mazda.velocidades()), 4000);
console.log(mazda.frenar());
console.log(mazda.estacionar());