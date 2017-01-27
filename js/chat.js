// Execute when ready
whenPageIsReady(function() {
    // User is logged in
    ifUserIsLoggedIn(function(currentUser) {
        // Hide the page loader
        var pageLoader = getElement('#page-loader');
        pageLoader.classList.add('hidden');

        // Display the chat area
        var chatArea = getElement('#chat-area');
        chatArea.classList.remove('hidden');

        // Update user image
        var accountImage = getElement('#account-image');
        accountImage.setAttribute('src', currentUser.photoURL);
        // Update user name
        var accountName = getElement('#account-name');
        accountName.textContent = currentUser.displayName;

        // Logout User
        click(getElement("#logout-button"), logoutUser);

        // Messages element
        var messagesElement = getElement('#messages');
        // If the element exists
        if (messagesElement) {
            scrollToBottom(messagesElement);
        }
    });
});
