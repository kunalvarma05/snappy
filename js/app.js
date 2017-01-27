// Execute when ready
whenPageIsReady(function() {
    // Messages element
    var messagesElement = document.getElementById('messages');
    // If the element exists
    if (messagesElement) {
        scrollToBottom(messagesElement);
    }
});
