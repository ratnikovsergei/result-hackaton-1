import {Module} from "../core/module";
import sounds from "../assets/sounds/sounds.js";
import {random} from "../utils.js";

export class RandomSound extends Module {
  #sounds;

  constructor(type, text) {
    super(type, text);
    this.#sounds = sounds;
  }

  #playSound() {
    const sound = new Audio(this.#sounds[random(0, this.#sounds.length)]);
    sound.play();
  }

  trigger() {
    this.#playSound();
  };
}