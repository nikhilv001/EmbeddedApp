
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
    // Replace this with the URL of your shared page
    var url = "https://nikhilv001.github.io/EmbeddedApp/shared.html"
    // "Shared App" is the title of the window or tab that will be created
    app.setShareUrl(url, "", "Shared App").then(() => {
        log("Set share URL", url);
    }).catch((errorcode) => {
        log("Error: ")
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