import './styles.css';
import {ContextMenu} from "./menu.js";
import {modules} from './modules/index.js';

const menu = new ContextMenu('#menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.open(e.clientX, e.clientY);
});

modules.forEach(({module, type, text}) => {
  const setModule = new module(type, text);
  menu.add(setModule);
});