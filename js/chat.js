// Execute when ready
whenPageIsReady(function() {
    // User is logged in
    ifUserIsLoggedIn(function(currentUser) {
        // Render chat page
        renderChatPage();

        // Logout User
        click(getElement("#logout-button"), logoutUser);

        scrollToLatestMessage();
    });
});
