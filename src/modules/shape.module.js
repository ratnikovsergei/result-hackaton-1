import { Module } from '../core/module';

export class ShapeModule extends Module {
	constructor(type, text) {
		super(type, text);

		this.shapes = []; // Переменная для хранения фигур
		this.figureInterval = null; // Переменная для хранения интервала

		// Минимальные и максимальные значения
		this.minFigureSize = 30;
		this.maxFigureSize = 100;
		this.minCircleRadius = 30;
		this.maxCircleRadius = 60;
	}

	// Метод для создания доски canvas
	createBoard() {
		this.$container = document.createElement('canvas');
		this.$container.width = window.innerWidth - 70;
		this.$container.height = window.innerHeight - 70;
		document.body.appendChild(this.$container);
		this.ctx = this.$container.getContext('2d');

		// Обработчик события на левую кнопку мыши
		this.$container.addEventListener('mousedown', event => {
			if (event.button === 0) {
				// 0 - левая кнопка мыши
				if (this.figureInterval) {
					this.stopDrawingFigures(); // Если интервалы уже запущены, останавливаем
				}
			}
		});
	}

	// Метод генерации случайного числа
	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// Метод генерации случайных координат
	getRandomCoordinates(figureWidth, figureHeight) {
		const x_min = 0;
		const y_min = 0;

		if (!this.$container) {
			throw new Error(
				'Canvas has been removed, cannot generate coordinates.',
			);
		}

		const x_max = this.$container.width - figureWidth;
		const y_max = this.$container.height - figureHeight;

		let x = this.getRandomInt(x_min, x_max);
		let y = this.getRandomInt(y_min, y_max);

		return { x, y };
	}

	// Метод для создания случайной фигуры
	createRandomFigure(x, y) {
		const shapes = ['square', 'rectangle', 'circle', 'oval', 'triangle'];
		const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

		let figure;

		switch (randomShape) {
			case 'square':
				const squareSize = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				figure = {
					type: 'square',
					x: x,
					y: y,
					size: squareSize,
				};
				break;
			case 'rectangle':
				const rectWidth = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				const rectHeight = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				figure = {
					type: 'rectangle',
					x: x,
					y: y,
					width: rectWidth,
					height: rectHeight,
				};
				break;
			case 'circle':
				const radius = this.getRandomInt(
					this.minCircleRadius,
					this.maxCircleRadius,
				);
				figure = {
					type: 'circle',
					x: x,
					y: y,
					radius: radius,
				};
				break;
			case 'oval':
				const ovalWidth = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				const ovalHeight = this.getRandomInt(
					this.minFigureSize,
					this.maxCircleRadius,
				);
				figure = {
					type: 'oval',
					x: x,
					y: y,
					width: ovalWidth,
					height: ovalHeight,
				};
				break;
			case 'triangle':
				const base = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				const height = this.getRandomInt(
					this.minFigureSize,
					this.maxFigureSize,
				);
				figure = {
					type: 'triangle',
					x: x,
					y: y,
					base: base,
					height: height,
				};
				break;
			default:
				throw new Error('Unknown shape type');
		}

		return figure;
	}

	// Метод для генерации цвета
	getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	// Метод для отрисовки фигуры
	drawFigure(figure) {
		this.ctx.fillStyle = this.getRandomColor();

		switch (figure.type) {
			case 'square':
				this.ctx.fillRect(figure.x, figure.y, figure.size, figure.size);
				break;
			case 'rectangle':
				this.ctx.fillRect(
					figure.x,
					figure.y,
					figure.width,
					figure.height,
				);
				break;
			case 'circle':
				this.ctx.beginPath();
				this.ctx.arc(figure.x, figure.y, figure.radius, 0, 2 * Math.PI);
				this.ctx.fill();
				break;
			case 'oval':
				this.ctx.beginPath();
				this.ctx.ellipse(
					figure.x,
					figure.y,
					figure.width / 2,
					figure.height / 2,
					0,
					0,
					2 * Math.PI,
				);
				this.ctx.fill();
				break;
			case 'triangle':
				this.ctx.beginPath();
				this.ctx.moveTo(figure.x, figure.y);
				this.ctx.lineTo(
					figure.x + figure.base / 2,
					figure.y + figure.height,
				);
				this.ctx.lineTo(
					figure.x - figure.base / 2,
					figure.y + figure.height,
				);
				this.ctx.closePath();
				this.ctx.fill();
				break;
			default:
				throw new Error('Unknown shape type');
		}
	}

	// Метод для создания и отрисовки фигуры
	drawRandomFigure() {
		const figureSize = this.getRandomInt(
			this.minFigureSize,
			this.maxFigureSize,
		);
		const { x, y } = this.getRandomCoordinates(figureSize, figureSize);

		const figure = this.createRandomFigure(x, y);
		this.shapes.push(figure); // Добавляем фигуру в массив
		this.drawFigure(figure); // Отрисовываем фигуру
	}

	// Метод для запуска создания фигур
	startDrawingFigures() {
		this.figureInterval = setInterval(() => {
			this.drawRandomFigure(); // Создаем и рисуем новую фигуру
		}, 200);
	}

	// Метод для остановки создания фигур
	stopDrawingFigures() {
		clearInterval(this.figureInterval); // Останавливаем интервалы
	}

	stop() {
		// Удаление элемента canvas из DOM
		document.body.removeChild(this.$container);
		this.$container = null; // Сброс ссылки на контейнер
	}

	trigger() {
		this.createBoard();
		this.startDrawingFigures();
	}
}
