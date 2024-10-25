import {Menu} from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
  }

  open() {
    this.el.classList.add('open');
    this.el.innerHTML = this.modules.map(module => module.toHTML()).join('');

    /*     здесь обработчик событий на добавленные элементы (модули)
        при клике на них будет вызываться метод trigger() от каждого модуля */
    this.el.addEventListener('click', (e) => {
      const type = e.target.dataset.type;
      const module = this.modules.find(m => m.type === type);
      if (module) {
        module.trigger();
      }
    });
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.modules.push(module);
  }
}