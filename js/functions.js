// Executes all the code written
// inside the function, passed
// as a parameter, when the page
// is ready.
function whenPageIsReady(fn) {
    // If the page is not loading,
    // it's ready.
    if (document.readyState != 'loading') {
        // Execute the func passed.
        fn();
    } else {
        // Wait for the Page to get Loaded and then
        // Execute the func passed.
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Get element by selector
function getElement(selector) {
    return document.querySelector(selector);
}

// Executes a code when the element
// is clicked.
function click(element, fn) {
    element.addEventListener("click", fn);
}

// Scrolls to the bottom of the
// given element.
function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}

// Redirect
function redirectTo(page) {
    window.location = page;
}

/**
 * If User is logged in, executes
 * the function given as a parameter.
 */
function ifUserIsLoggedIn(fn) {
    firebase.auth().onAuthStateChanged(function(user) {
        // User is logged in
        if (user) {
            // Set global variable
            window.currentUser = user;

            // Execute the function
            fn(user);
        } else {
            // No user logged in
            // redirect to home page.
            redirectTo("/index.html");
        }
    });
}

// Logout user
function logoutUser() {
    // Sign out user
    firebase.auth().signOut().then(function() {
        // User signed out
        // redirect to home page.
        redirectTo('/index.html');
    }, function(error) {
        console.log(error);
    });
}
