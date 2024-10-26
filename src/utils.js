export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomGradient() {
  const letters = '0123456789ABCDEF';

  function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const color1 = getRandomColor();
  const color2 = getRandomColor();

  return `linear-gradient(135deg, ${color1}, ${color2})`;
}