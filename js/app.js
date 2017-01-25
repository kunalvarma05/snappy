// Toggle Channel Form Button
var toggleChannelFormBtn = document.getElementsByClassName('toggle-channel-form')[0];
// Channel Form
var channelForm = document.getElementsByClassName('channel-form')[0];

if (channelForm) {
    // Toggle Channel Form through Toggle Button
    toggleChannelFormBtn.addEventListener('click', function() {
        channelForm.classList.toggle('hidden');
    });
}
