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
// Auth Background
var imgNum = Math.floor(Math.random() * 3) + 1  ;
var authBg = document.getElementsByClassName('auth-page')[0];

function randomBg() {
    var img = "../images/bg" + imgNum + ".jpg";
    authBg.style.backgroundImage = "url('" + img + "')";
}

if (authBg) {
    randomBg();
}
