var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5, 1, 4, 4, 5, 1, 2, 5, 4, 1
    ]
},
{
    "name": "demha",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        1, 5, 2, 2, 1, 5, 4, 1, 2, 5
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
        results.push({ score: compare(surveyFriend, friends[i]) , friendIndex: i} )
    }

    friends.push(surveyFriend);

    return results;
}
function closest(resultsArray){
    var lowest = 41; // highest num + 1
    var index;
    for (var i = 0; i < resultsArray.length; i++) {
        if( resultsArray[i].score < lowest){
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