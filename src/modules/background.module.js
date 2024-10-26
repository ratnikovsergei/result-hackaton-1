import {Module} from '../core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log('random background color');
  }
}