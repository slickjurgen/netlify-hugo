// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

const options = {
    publicKey: {
        rp: { name: "example.com" },
        user: {
            name: "john.appleseed@example.com",
            id: userIdBuffer,
            displayName: "John Appleseed"
        },
        pubKeyCredParams: [ { type: "public-key", alg: -7 } ],
        challenge: challengeBuffer,
        authenticatorSelection: { authenticatorAttachment: "platform" }
    }
};

const publicKeyCredential = await navigator.credentials.create(options);
