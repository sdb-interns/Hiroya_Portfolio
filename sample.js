$(function () {
    console.log("実行されたよ");
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
    
        var data = {
            token: 'xoxb-1222259639201-1733002409270-Sy03LqW0UWxjqRVDUP7KF8H0',
            channel: '#times_1_hiroya',
            username: 'Message From Portfolio',
            text: 'Hello Slack!'
        };

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});