// Execute when ready
whenPageIsReady(function() {
    // Google Auth Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    // Google Auth Button
    var authButton = document.getElementById('google-auth-button');

    // Add Click Listener
    click(authButton, function() {
        // Sign in with Google using a Pop up
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // User authenticated
            var user = result.user;

            // Create User
            createUser(user).then(function() {
                // Redirect to chat page
                redirectTo("/chat.html");
            });

        }).catch(function(error) {
            // Some error occured
            console.log(error);
        });
    });
});
