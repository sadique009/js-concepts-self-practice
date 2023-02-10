{
  /* <div id="joke" class="joke">awesome joke is loading...</div>
      <button id="joke-btn" class="btn">NEXT JOKE</button> */
}

// fetch() method always returns a promise.

// GET https://icanhazdadjoke.com/
const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

// USING PROMISES:

// const genJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", setHeader)
//     .then((res) => {
//       // the data that we get from fetch api is in the form of html,
//       // and to convert it into json, we use json();
//       res.json().then((data) => {
//         jokes.innerHTML = data.joke;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// USING ASYNC/AWAIT:
// async/await also returns a promise but it handles promise differently.
// error handling is provided by default in async/await.
// we have to just write the whole code inside the try/catch block.
// async function genJokes(){};

const genJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

jokeBtn.addEventListener("click", genJokes);
