document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-text");
  const words = ["SUCESSO", "REALIZAÇÃO", "CRESCIMENTO", "EXCELÊNCIA"];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseTime = 2000;

  let wordIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.slice(0, charIndex + 1);

    if (isErasing) {
      typingElement.textContent = currentWord.slice(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(type, pauseTime);
        return;
      }
    } else {
      typingElement.textContent = currentChar;
      charIndex++;
      if (charIndex === currentWord.length) {
        isErasing = true;
        setTimeout(type, pauseTime);
        return;
      }
    }
    setTimeout(type, isErasing ? eraseSpeed : typingSpeed);
  }

  type();
});
