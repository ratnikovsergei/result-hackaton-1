import './styles.css';
import {ContextMenu} from "./menu";

const menu = new ContextMenu('.menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.open();
});