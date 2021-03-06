var https = require('https');

    // var requestOptions1 = {
    //   host: 'sytantris.github.io',
    //   path: '/http-examples/step1.html'
    // };
    // var requestOptions2 = {
    //   host: 'sytantris.github.io',
    //   path: '/http-examples/step2.html'
    // };
    // var requestOptions3 = {
    //   host: 'sytantris.github.io',
    //   path: '/http-examples/step3.html'
    // };


function getAndPrintHTML (options) {

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
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

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step3.html'
    };
getAndPrintHTML(requestOptions);