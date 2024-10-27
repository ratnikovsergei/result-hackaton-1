import {Module} from '../core/module';
import transport from '../assets/images/transport.png';

export class ModalModule extends Module {
  constructor(type, text) {
    super(type, text);
    document.body.className = 'position';
    this.hoverCount = 0; // Счетчик наведения на модальное окно
  }

  // Создание модального окна
  createModal() {
    this.$modal = document.createElement('div');
    this.$modal.classList.add('modal');

    this.$title = document.createElement('p');
    this.$title.classList.add('modal__title');

    // Массивы текстов заголовка и кнопки
    this.titles = [
      'Xочешь кое что покажу?',
      'Ты в этом уверен?',
      'Какой настойчивый',
      'Ну тогда смотри',
    ];

    this.buttons = ['Да', 'Даа!!!', 'Покажи уже', 'Открыть'];

    this.$title.textContent = this.titles[this.hoverCount];
    this.$button = document.createElement('button');
    this.$button.classList.add('modal__button');
    this.$button.textContent = this.buttons[this.hoverCount];

    this.$button.addEventListener('click', () => this.addImage());

    this.$modal.append(this.$title, this.$button);
    document.body.append(this.$modal);

    // Добавление обработчиков событий для перемещения и изменения текста
    this.$modal.addEventListener('mouseenter', () =>
      this.changeModalContent(),
    );
  }

  // Изменение текста и перемещение модального окна при наведении
  changeModalContent() {
    // Генерация случайного положения для первых трех наведений
    if (this.hoverCount < 3) {
      const modalWidth = 300; // Установите ширину вашего модального окна
      const modalHeight = 130; // Установите высоту вашего модального окна

      // Случайные координаты
      const randomX = this.getRandomInt(
        0,
        window.innerWidth - modalWidth,
      );
      const randomY = this.getRandomInt(
        0,
        window.innerHeight - modalHeight,
      );

      this.$modal.style.position = 'absolute';
      this.$modal.style.left = `${randomX}px`;
      this.$modal.style.top = `${randomY}px`;

      // Изменение текста заголовка и кнопки, синхронизированных с hoverCount
      this.$title.textContent = this.titles[this.hoverCount + 1];
      this.$button.textContent = this.buttons[this.hoverCount + 1];

      this.hoverCount++;
    } else {
      // После третьего наведения установить модальное окно по центру
      this.centerModal();
    }
  }

  // Центрирование модального окна в окне
  centerModal() {
    this.$modal.classList.add('center');
    this.$title.textContent = this.titles[3]; // Обновляем текст заголовка на четвертую версию
    this.$button.textContent = this.buttons[3]; // Обновляем текст кнопки на четвертую версию
  }

  centerModal() {
    // Центрируем модальное окно
    const modalWidth = 300; // Установите ширину вашего модального окна
    const modalHeight = 130; // Установите высоту вашего модального окна

    this.$modal.classList.add('center');

    // Центрируем с учетом ширины и высоты модального окна
    const left = (window.innerWidth - modalWidth) / 2;
    const top = (window.innerHeight - modalHeight) / 2;

    this.$modal.style.left = `${left}px`;
    this.$modal.style.top = `${top}px`;

    this.$title.textContent = this.titles[3]; // Обновляем текст заголовка на четвертую версию
    this.$button.textContent = this.buttons[3]; // Обновляем текст кнопки на четвертую версию
  }

  // Добавление изображения и анимация его перемещения
  addImage() {
    const img = document.createElement('img');
    img.src = transport;
    img.classList.add('moving-image');
    img.style.position = 'absolute';
    img.style.bottom = '0';
    img.style.left = '0';
    document.body.appendChild(img);

    // Запускаем анимацию
    this.moveImage(img);
    // Удаляем модалку
    this.$modal.remove();
  }

  // Функция для перемещения изображения
  moveImage(img) {
    const imgWidth = 200; // Ширина изображения в пикселях, замените на реальную ширину изображения
    let position = 0; // Позиция по оси X

    const interval = setInterval(() => {
      // Перемещаем изображение вправо
      position += 1; // Скорость перемещения

      if (position <= window.innerWidth - imgWidth) {
        img.style.left = position + 'px'; // Обновляем позицию изображения
      } else {
        clearInterval(interval); // Останавливаем анимацию, если картинка достигла правого края
        img.remove(); // Удаляем изображение после завершения анимации
      }
    }, 5);
  }

  // Метод генерации случайного числа
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  trigger() {
    this.createModal();
  }

  stop() {
    document.body.classList.remove('position');
    this.$modal.remove();
    img.remove();
  }
}
