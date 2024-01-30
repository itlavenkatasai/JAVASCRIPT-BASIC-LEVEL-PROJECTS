function convertMilliseconds(milliseconds) {
    // Convert milliseconds to seconds
    var seconds = Math.floor(milliseconds / 1000);
    console.log(seconds);
  
    // Convert seconds to minutes
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    console.log(minutes);
  
    // Convert minutes to hours
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
  
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  // Example usage:
  var milliseconds = 3600000; // Replace this with your desired value
  var time = convertMilliseconds(milliseconds);
  
  console.log(time);
  