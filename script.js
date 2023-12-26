$(function() {
    $("#randomButton").on({
      mouseover: function() {
        // Check credentials when hovering over the button
        checkCredentials();
      },
      click: function() {
        // Show login alert when the button is clicked
        var moved = $("#randomButton").data("moved");
        if (moved) {
          alert("Login successful!");
        } else {
          alert("Please hover over the button to stabilize it first.");
        }
      }
    });
  });

  function checkCredentials() {
    var username = $("#username").val();
    var password = $("#password").val();
    var moved = $("#randomButton").data("moved");

    // Check if credentials are correct
    if (username === "Sumanthakur" && password === "sumanthakur" && !moved) {
      // Set a flag to indicate the button has moved
      $("#randomButton").data("moved", true);
      // Fix the button in its current position
      $("#randomButton").css({
        left: $("#randomButton").position().left + "px",
        top: $("#randomButton").position().top + "px",
      });
    } else if (moved) {
      // Button is stable, add back the transition for movement
      $("#randomButton").css("transition", "all 0.3s ease");
    } else {
      // Move the button with a smooth transition on incorrect credentials
      $("#randomButton").css({
        left: (Math.random() * 100) + "px",
        top: (Math.random() * 100) + "px",
      });
    }
  }