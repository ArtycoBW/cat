const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - 100));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - 50));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  gifResult.load();

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    resultContainer.style.flexDirection = "column";
    resultContainer.style.alignItems = "center";
    gifResult.play().catch(error => {
      console.log("Автовоспроизведение запрещено, используйте ручной запуск");
    });
  }, 3000);
});