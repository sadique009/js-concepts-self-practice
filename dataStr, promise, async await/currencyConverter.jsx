document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#currency-converter")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const {
        target: { from, to, amount },
      } = e; // we destructure "target" property from the event object.

      let headers = new Headers();
      headers.append("apiKey", "w0oNXoF1cNU340EzLIzUkOfJK0FXVdNU");

      var requestOptions = {
        method: "GET", // put, post, delete are other methods.
        headers,
      };

      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, // "valueAsNumber" returns the value as number. it eliminates the use of "parseInt".
        requestOptions
      )
        .then((res) => {
          res.json();
        })
        .then((data) => {
            console.log(data);
          let {
          info,
            date,
            query: { to },
            result,
          } = data;
          document.querySelector(
            ".result"
          ).textContent = `as per exchange rate :${info.rate.toFixed(
            2
          )} for ${data}=>converted value in ${to} is ${result.toFixed(2)}`;
        })
        .catch((err) => {
          console.log(err);
        });
    });
});
