import {Module} from "../core/module";
import {quotes} from "../assets/quotes.js";
import {random} from "../utils.js";

export class RandomQuote extends Module {
  #quotes;

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

    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote-div');

    const quoteText = document.createElement('p');
    quoteText.classList.add('quote-text');
    quoteText.textContent = randomQuote.text;
    quoteDiv.append(quoteText);

    const quoteAuthor = document.createElement('p');
    quoteAuthor.classList.add('quote-author');
    quoteAuthor.textContent = `- ${randomQuote.author}`;
    quoteDiv.append(quoteAuthor);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('quote-close-button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(quoteDiv);
    });
    quoteDiv.append(closeBtn);

    document.body.append(quoteDiv);
  }

  stop() {
    const quoteDiv = document.querySelector('.quote-div');
    if (quoteDiv) {
      document.body.remove(quoteDiv);
    }
  }

  trigger() {
    this.#getRandomQuote();
  }
}