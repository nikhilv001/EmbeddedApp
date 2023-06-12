import {useState} from 'react';
// Create a new Webex app instance
const app = new window.Webex.Application();

// Wait for onReady() promise to fulfill before using framework
app.onReady().then(() => {
    log("App ready. Instance", app);

    // Listen and emit any events from the EmbeddedAppSDK
    app.listen().then(() => {
        app.on("application:themeChanged", (payload) =>
          log("application:themeChanged", payload)
        );
        // app.on("application:displayContextChanged", (payload) =>
        //   log("application:displayContextChanged", payload)
        // );
        // app.on("application:shareStateChanged", (payload) =>
        //   log("application:shareStateChanged", payload)
        // );
        // app.on("meeting:infoChanged", (payload) =>
        //   log("meeting:infoChanged", payload)
        // );
        // app.on("meeting:roleChanged", (payload) =>
        //   log("meeting:roleChanged", payload)
        // );
        // app.on("space:infoChanged", (payload) => log("space:infoChanged", payload));
      });

}).catch((errorcode) =>  {
    log("Error with code: ")
});

// Button click handler to increment notification count
function handleNotificationCount(){
    initializeSideBar(5);
}


function initializeSideBar(callCount) {
    app.context.getSidebar().then((s) => {
        sidebar = s;
        console.log("Show a badge on the sidebar...")
        handleBadge(callCount, sidebar);
      })
      .catch((error) => {
        console.log("getSidebar() failed. Error: ", Webex.Application.ErrorCodes[error]);
      });
  }

  function handleBadge(callCount, sidebar) {
    // Make sure the sidebar is available..
    if (!sidebar) {
      console.log("Sidebar info is not available. Error: ", Webex.Application.ErrorCodes[4]);
      return;
    }
  
    // Initialize a badge object...
    const badge = {
      badgeType: 'count',
      count: callCount,
    };
  
    // Show the badge...
    sidebar.showBadge(badge).then((success) => {
        console.log("sidebar.showBadge() successful.", success);
      }).catch((error) => {
        console.log("sidebar.showBadge() failed. Error: ", Webex.Application.ErrorCodes[error]);
      });
  }

// Button click handler to set share URL
function handleSetShare() {
    console.log('Clicked');
    app.context
    .getUser()
    .then((u) => {
        log('getUser()',u);
      console.log("getUser()", u);
    })
    .catch((error) => {
      console.log(
        "getUser() promise failed with error",
        Webex.Application.ErrorCodes[error]
      );
    });
}

// Utility function to log app messages
function log(type, data) {
    var ul = document.getElementById("console");
    var li = document.createElement("li");
    var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
    li.appendChild(payload)
    ul.prepend(li);
}