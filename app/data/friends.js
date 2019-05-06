var friends = [{
    "name": "Denzel",
    "photo": "https://randomuser.me/api/portraits/men/16.jpg",
    "scores": [
        1, 1, 1, 5, 1, 5, 1, 1, 1, 5
    ]
},
{
    "name": "Timothy",
    "photo": "https://randomuser.me/api/portraits/men/84.jpg",
    "scores": [
        5, 5, 5, 1, 1, 1, 1, 5, 5, 1
    ]
},
{
    "name": "Conner",
    "photo": "https://randomuser.me/api/portraits/men/8.jpg",
    "scores": [
        4, 5, 5, 2, 4, 3, 3, 4, 2, 3
    ]
},
{
    "name": "Adam",
    "photo": "https://randomuser.me/api/portraits/men/86.jpg",
    "scores": [
        4, 2, 3, 5, 2, 3, 5, 5, 1, 1
    ]
},
{
    "name": "Sam",
    "photo": "https://randomuser.me/api/portraits/men/60.jpg",
    "scores": [
        2, 2, 5, 4, 2, 2, 2, 2, 1, 4
    ]
},
{
    "name": "Aarav",
    "photo": "https://randomuser.me/api/portraits/men/58.jpg",
    "scores": [
        3, 3, 3, 3, 3, 4, 4, 3, 4, 4
    ]
},
{
    "name": "Michelle",
    "photo": "https://randomuser.me/api/portraits/women/56.jpg",
    "scores": [
        5, 5, 5, 4, 4, 2, 4, 5, 5, 4
    ]
},
{
    "name": "Kaitlyn",
    "photo": "https://randomuser.me/api/portraits/women/57.jpg",
    "scores": [
        3, 3, 4, 2, 3, 3, 3, 3, 4, 3
    ]
},
{
    "name": "Erin",
    "photo": "https://randomuser.me/api/portraits/women/94.jpg",
    "scores": [
        1, 5, 2, 5, 1, 5, 4, 2, 2, 4
    ]
},
{
    "name": "Feng",
    "photo": "https://randomuser.me/api/portraits/women/17.jpg",
    "scores": [
        3, 3, 3, 3, 4, 3, 3, 3, 3, 3
    ]
},
{
    "name": "Brittany",
    "photo": "https://randomuser.me/api/portraits/women/28.jpg",
    "scores": [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5
    ]
}]

function compare(friend1, friend2) {
    var count = 0;
    for (var i = 0; i < friend1.scores.length; i++) {
        count += Math.abs(friend1.scores[i] - friend2.scores[i])
    }
    return count;
}
function closestFriend(surveyFriend) {
    var results = [];
    for (var i = 0; i < friends.length; i++) {
        results.push({ score: compare(surveyFriend, friends[i]), friendIndex: i })
    }

    surveyFriend.scores = surveyFriend.scores.map(num => { return parseInt(num) })
    friends.push(surveyFriend);

    return results;
}
function closest(resultsArray) {
    var lowest = 41; // highest num + 1
    var index;
    for (var i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i].score < lowest) {
            lowest = resultsArray[i].score;
            index = resultsArray[i].friendIndex;
        }
    }
    return friends[index];
}
module.exports = {
    list: friends,
    newFriend: closestFriend,
    closest: closest
}