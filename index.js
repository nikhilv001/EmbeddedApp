
// Create a new Webex app instance
const app = new window.Webex.Application();

// Wait for onReady() promise to fulfill before using framework
app.onReady().then(() => {
    log("App ready. Instance", app);
}).catch((errorcode) =>  {
    log("Error with code: ")
});

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