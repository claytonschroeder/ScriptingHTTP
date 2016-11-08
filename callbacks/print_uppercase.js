var getHTML = require('./http-functions');


function printHTML (html) {
  console.log(html.toUpperCase());


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);