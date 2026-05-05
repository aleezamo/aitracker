const hostName = location.hostname;
const param = new URLSearchParams(window.location.search);
const pathName = location.pathname;
let aiSource = param.get("utm_source");

if (aiSource == null) {
    aiSource = document.referrer || "";
}

if (aiSource.includes("chatgpt.com")) {
    aiSource = "chatgpt";
}
else if (aiSource.includes("claude.ai")) {
    aiSource = "claude";
}

else if (aiSource.includes("copilot.com")) {
    aiSource = "copilot";
}

else if (aiSource.includes("deepseek.com")) {
    aiSource = "deepseek";
}

else if (aiSource.includes("gemini.com")) {
    aiSource = "gemini";
}
else {
    aiSource= null;
}


if (aiSource!=null) {
    const analytics = {
        "hostName" : hostName,
        "aiSource" : aiSource,
        "pathName" : pathName
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
        console.log("Data:", data);
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}


