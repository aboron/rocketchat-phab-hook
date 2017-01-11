/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
    // request.url.hash
    // request.url.search
    // request.url.query
    // request.url.pathname
    // request.url.path
    // request.url_raw
    // request.url_params
    // request.headers
    // request.user._id
    // request.user.name
    // request.user.username
    // request.content_raw
    // request.content

    // console is a global helper to improve debug
    console.log(request.content);
//{
//    storyID: '764',
//    storyType: 'PhabricatorApplicationTransactionFeedStory',
//    storyData: {
//        objectPHID: 'PHID-TASK-v647mqmk3sn2oc6kv4xq',
//        transactionPHIDs: { 'PHID-XACT-TASK-euftgmotwjf2oo5': 'PHID-XACT-TASK-euftgmotwjf2oo5' }
//    },
//    storyAuthorPHID: 'PHID-USER-ilvkcj5peb4godmkj36z',
//    storyText: 'aboron moved T68: Bug/Upgrade: Many things related to Timed outputs are hardcoded. from Needs Information to Needs Concept and/or Design Work on the VNI NOC1 board.',
//    epoch: '1484093782'
//}

    return {
      content:{
        "username": "Phabricator", // or
        //"alias": "Phabricator",
        
        //"emoji": ":smirk:", // or
        //"avatar": "https://logo.png"

        //"text": "plain message text",
        //"pretext": "pre-attachment text",
        "attachments": [{
        //"ts": "2016-12-09T16:53:06.761Z", // timestamp
        //"message_link": "https://code-pla.net" // timestamp link url
        //"image_url": "https://rocket.chat/images/mockup.png",
        //"thumb_url": "https://rocket.chat/images/mockup.png", // displays to left of attachment text
        //"audio_url": "http://*.mp3" // audio to play
        //"video_url": "http://*.mp4" // video to play
          "author_name": "User Aboron",
          "author_link": "https://demo.rocket.chat/direct/rocket.cat",
          "author_icon": "https://demo.rocket.chat/avatar/rocket.cat.jpg",
          "color": "#FF0000",
          "title": "T68: Bug/Upgrade: Many things related to Timed outputs are hardcoded.",
          "title_link": "https://code-pla.net/T68",
          "text": "Need to change many locations in code to adapt timed connections into a more general case.",
          "fields": [
            {
              "title": "Action:",
              "value": "Moved",
              "short": true
            },
            {
              "title": "From:",
              "value": "Needs Concept and/or Design Work",
              "short": true
            },
            {
              "title": "To:",
              "value": "Needs Information",
              "short": true
            },
            {
              "title": "Search:",
              "value": "[Link](https://google.com/)" // Create inline formatted link
              "short": false // Put it on it's own line
            }
          ]
        }]
      }
    };
  }
}