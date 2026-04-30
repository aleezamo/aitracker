const hostname = location.hostname;
const time = new Date();
const param = new URLSearchParams(window.location.search);
let aisource = param.get("utm_source");

if (aisource == null) {
    aisource = document.referrer;
}

if (aisource.includes("chatgpt.com")) {
    aisource = "chatgpt";
}
else if (aisource.includes("claude.ai")) {
    aisource = "claude";
}

else if (aisource.includes("copilot.com")) {
    aisource = "copilot";
}

else if (aisource.includes("deepseek.com")) {
    aisource = "deepseek";
}

else if (aisource.includes("gemini.com")) {
    aisource = "gemini";
}
else {
    aisource= null;
}


if (aisource!=null) {
    const analytics = {
        "hostname" : hostname,
        "time" : time,
        "aisource" : aisource,
        };
    const jsonString = JSON.stringify(analytics);
    console.log(jsonString);
    fetch("https://abcd.com", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: jsonString,
        keepalive: true
    })
    .then(response => {
        console.log("Response status:", response.status);
        return response.json();
    })
    .then(data => {
        console.long("Data:", data);
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}
console.log(analytics);

