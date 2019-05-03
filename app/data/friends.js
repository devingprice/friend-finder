var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,1,4,4,5,1,2,5,4,1
    ]
}]

function compare(friend1, friend2){
    var count = 0;
    for(var i =0; i < friend1.scores.length; i++){
        count += Math.abs( friend1.scores[i] - friend2.scores[i] )
    }
    return count;
}