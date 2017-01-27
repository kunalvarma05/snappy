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
    if (element) {
        element.addEventListener("click", fn);
    }
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

// Scroll to the Latest Message
function scrollToLatestMessage() {
    // Messages element
    var messagesElement = getElement('#messages');
    // If the element exists
    if (messagesElement) {
        scrollToBottom(messagesElement);
    }
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

// Render the chat page
// - Hide Page loader
// - Display Chat Area
// - Update page with user data
function renderChatPage() {
    // Hide the page loader
    var pageLoader = getElement('#page-loader');
    pageLoader.classList.add('hidden');

    // Display the chat area
    var chatArea = getElement('#chat-area');
    chatArea.classList.remove('hidden');

    // Update page with the data of
    // the currently logged in user.
    updatePageWithUserData(window.currentUser);
}

// Update page with logged in user data
function updatePageWithUserData(user) {
    // Update user image
    var accountImage = getElement('#account-image');
    accountImage.setAttribute('src', user.photoURL);
    // Update user name
    var accountName = getElement('#account-name');
    accountName.textContent = user.displayName;
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
