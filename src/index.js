// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  .then(function(available){
    if(available){
      // We can proceed with the creation of a PublicKeyCredential
      // with this authenticator
      alert("Yes!");
    } else {
      // Use another kind of authenticator or a classical login/password
      // workflow
      alert("Uuh...no.");
    }
  }).catch(function(err){
    // Something went wrong
    console.error(err);
  });

var button = document.getElementById("button");

// Fetching the challengeBuffer before the onclick event.
button.addEventListener("click", async () => {

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

