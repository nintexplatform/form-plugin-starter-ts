

console.log("HALLO")

// SHOW THE SNAPSHOT.
takeSnapShot = function () {

    alert("This is an alert message box.");

      Webcam.snap(function (data_uri) {
          document.getElementById('snapShot').innerHTML = 
              '<img src="' + data_uri + '" width="70px" height="50px" />';
      });
  }




