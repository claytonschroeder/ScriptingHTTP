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
module.exports = getHTML;

//-------------------------------------
// Client Code

// function printHTML (html) {
//   console.log('MAIN', html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };

// getHTML(requestOptions, printHTML);