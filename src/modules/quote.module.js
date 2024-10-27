import {Module} from "../core/module";
import {quotes} from "../assets/quotes.js";
import {random} from "../utils.js";

export class RandomQuote extends Module {
  #quotes;
  #quoteDiv;

  constructor(type, text) {
    super(type, text);
    this.#quotes = quotes;
  }

  #getRandomQuote() {
    const existingQuoteDiv = document.querySelector('.quote-div');
    if (existingQuoteDiv) {
      document.body.removeChild(existingQuoteDiv);
    }

    const randomQuote = this.#quotes[random(0, this.#quotes.length)];

    this.#quoteDiv = document.createElement('div');
    this.#quoteDiv.classList.add('quote-div');

    const quoteText = document.createElement('p');
    quoteText.classList.add('quote-text');
    quoteText.textContent = randomQuote.text;
    this.#quoteDiv.append(quoteText);

    const quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('quote-author');
    quoteAuthor.textContent = `- ${randomQuote.author}`;
    this.#quoteDiv.append(quoteAuthor);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('quote-close-button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.addEventListener('click', () => {
      this.stop();
    });
    this.#quoteDiv.append(closeBtn);

    document.body.append(this.#quoteDiv);
  }

  stop() {
    if (this.#quoteDiv) {
      document.body.removeChild(this.#quoteDiv);
      this.#quoteDiv = null;
    }
  }

  trigger() {
    this.#getRandomQuote();
  }
}