var https = require('https');
// Library Code

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataChunks = "";
    response.on('data', function (data) {

      dataChunks += data;
      // console.log("got more data " + data.length)
    });

    response.on('end', function() {
      // console.log("\n\n\n ALL DATA: "+ dataChunks);
      console.log('Response stream complete.');
      callback(dataChunks);
    });

  });
}

//-------------------------------------
// Client Code

function printHTML (html) {
  console.log(html);
}

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

getHTML(requestOptions4, printHTML);

