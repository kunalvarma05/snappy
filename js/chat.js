// Execute when ready
whenPageIsReady(function() {
    // User is logged in
    ifUserIsLoggedIn(function(currentUser) {
        // Render chat page
        renderChatPage();

        // Logout User
        click(getElement("#logout-button"), logoutUser);

        scrollToLatestMessage();

        loadMembers(function(members) {
            var memberList = "";
            for (var uid in members) {
                if(window.currentUser.uid !== uid) {
                    var member = members[uid];
                    memberList += makeMemberItem(member);
                }
            }

            getElement("#members").innerHTML = memberList;
        });

        onClickMultiple('member', function(element) {
            console.log(element.id);
        });
    });
});
