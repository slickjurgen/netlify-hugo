// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

var button = document.getElementById("button");

// Fetching the challengeBuffer before the onclick event.
button.addEventListener("click", async () => {

    const isAvailable = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();

    if (isAvailable) {
        console.log("Available");
        alert("Yeah!");
    } else {
        console.log("Not available");
        alert("Uuh... no...");
    }

    const options = {
        publicKey: {
            rp: { name: "example.com" },
            user: {
                name: "john.appleseed@example.com",
                id: "USER_ID_12345678910",
                displayName: "John Appleseed"
            },
            pubKeyCredParams: [ { type: "public-key", alg: -7 } ],
            challenge: "challengeBuffer",
            authenticatorSelection: { authenticatorAttachment: "platform" }
        }
    };

    console.log("Create...");
    const publicKeyCredential = await navigator.credentials.create(options);
});

