    let count = 0;

    function increaseCount() {
      count++;
      document.getElementById("count").textContent = count;
      console.log(count);
    }

    function displayTime() {
      const currentTime = new Date().toLocaleTimeString();
      console.log("Current Time: " + currentTime);
    }