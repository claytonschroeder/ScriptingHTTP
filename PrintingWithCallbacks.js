var https = require('https');

  var requestOptions1 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  var requestOptions2 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var requestOptions3 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  var requestOptions4 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
  };

function getHTML (options, callback) {

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var dataChunks = "";
    response.on('data', function (data) {
      // debugger;
      dataChunks += data;
      console.log("got more data " + data.length)
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log("\n\n\n ALL DATA: "+ dataChunks);
      console.log('Response stream complete.');
    });

  });

}



function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions4, printHTML);
