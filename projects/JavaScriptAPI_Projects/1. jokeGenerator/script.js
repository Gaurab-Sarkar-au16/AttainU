const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      // console.log(item.joke);
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    })
    .catch(() => {
      console.log(error);
    });
};
btn.addEventListener("click", getJoke);
