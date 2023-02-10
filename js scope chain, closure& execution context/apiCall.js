// XMLHttpRequest (XHR) objects are used to interact with servers.
// We can retrieve data from a URL without having to do a full page refresh.
// This enables a Web page to update just part of a page without disrupting what the user is doing.
// AJAX - asynchronous javascript and XML.

// XMLHttpRequest is used heavily in AJAX programming.

// EventTarget
// XMLHttpRequestEventTarget
// XMLHttpRequest
// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

const container = document.querySelector("#container");

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/india");
// sending request to get the data.
request.send();

// to get the response.
// the data that we get is in the form of array of an object.
request.addEventListener("load", function () {
  //   console.log(this.responseText);
  //   const data=this.responseText;
  //   console.log(data);

  // JSON.parse is used to display data in the form of object.
  const [data] = JSON.parse(this.responseText);
  //   console.log(data.capital);

  const htmlData = `
<div id="card">
  <article class="card">
    <div class="card-body">
      <img src="${data.flag}" alt="flag" class="card-body-img" />
      <h1 class="card-body-title">${data.name}</h1>
      <p class="card-body-text">Capital : ${data.capital}</p>
    </div>
    <div class="card-footer">
      <div class="card-footer-social">
        <h3>${data.nativeName}</h3>
        <p>Native language</p>
        <h3>${data.population}</h3>
        <h4>${data.demonym}</h4>
      </div>
    </div>
  </article>
</div>`;

  container.insertAdjacentHTML("afterbegin", htmlData);
});
