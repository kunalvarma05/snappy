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

// Scrolls to the bottom of the
// given element.
function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}
