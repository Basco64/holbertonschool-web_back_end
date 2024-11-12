export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    // Ici, on renvoie la classe elle-même (this fait référence à Car)
    // Par défaut, cela signifie que les instances clonées seront de type Car
    return this;
  }

  cloneCar() {
    // On récupère le constructeur spécifié par Symbol.species.
    // Cela renverra la classe qui devrait être utilisée pour créer une nouvelle instance.
    const Species = this.constructor[Symbol.species];
    // Crée et renvoie une nouvelle instance de la classe spécifiée par Species.
    // Cela retourne une instance de la même classe par défaut, ici Car.
    return new Species();
  }
}
