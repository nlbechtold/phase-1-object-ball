function gameObject(){
    let obj = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 21,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  };

  function homeTeamName() {
    let game = gameObject();
    return game["home"]["teamName"];
  }

console.log(gameObject())

// Build a function, numPointsScored that takes in an argument of a 
// player's name and returns the number of points scored for that player.
// Think about where in the object you will find a player's points. 
// How can you iterate down into that level? Think about the return value of your function.

function numPointsScored(name){
    // obj.home.player. whatever player . points
    // obj.away.player. whatever player . points
    const game = gameObject()
    // home or away
    for(let key in game){
        // undefined, 0, "", false == false
        console.log(key,name,game[key]["players"][name])
        if(game[key]["players"][name]){
            return game[key]["players"][name]["points"]
        }
    }
}
function shoeSize(name){
    const game = gameObject()
    // home or away
    for(let key in game){
        // undefined, 0, "", false == false
        console.log(key,name,game[key]["players"][name])
        if(game[key]["players"][name]){
            return game[key]["players"][name]["shoe"]
        }
    }
}

// const sol = numPointsScored("Ben Gordon")
// console.log(sol)
console.log(shoeSize("Ben Gordon"))

// build a function, teamColors, that takes in an argument of 
// the team name and returns an array of that teams colors.

function teamColors(teamName){
    const game = gameObject()
    for(let key in game){
        // console.log(key, teamName, game[key]["teamName"])
        if( game[key]["teamName"] === teamName){
            return game[key]["colors"]
        }
    }
}

console.log(teamColors("Brooklyn Nets"))

// Build a function, teamNames, that operates on the
// game object to return an array of the team names.
function teamNames(){
    const game = gameObject()
    
    const return_arr = []

    for(let key in game){
        return_arr.push(game[key]["teamName"])
    }
    return return_arr
}

console.log(teamNames())

// Build a function, `playerNumbers`, that takes in an argument of a team name
//   and returns an array of the jersey numbers for that team.
function playerNumbers(teamName){
    const game = gameObject()

    const return_arr = []

    for(let key in game){
        // console.log(key, teamName, game[key]["teamName"])
        if( game[key]["teamName"] === teamName){
            for(let player in game[key]["players"]){
                return_arr.push(game[key]["players"][player]["number"])
            }
        }
    }
    return return_arr
}

console.log(playerNumbers("Charlotte Hornets"))

// Build a function, playerStats, that takes in an argument of a 
// player's name and returns an object of that player's stats. Check 
// out the following example of the expected return value of the playerStats function:

function playerStats(playerName){
    const game = gameObject()

    for(let key in game){
        console.log(key)
        if(game[key]["players"][playerName]){
            return game[key]["players"][playerName]
        }
    }
}

console.log(playerStats("Jeff Adrien"))

// Build a function, bigShoeRebounds, that will return the 
// number of rebounds associated with the player that has 
// the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
function bigShoeRebounds(){
    const game = gameObject()

    let currentBiggestShoeSize = 0
    let currentPlayer = undefined

    for(let key in game){
        for(player in game[key]["players"]){
            console.log("CURRENT SIZE: ", currentBiggestShoeSize)
            console.log("Player: ",currentPlayer)
            if (game[key]["players"][player]["shoe"] > currentBiggestShoeSize){
                currentPlayer = game[key]["players"][player]
                currentBiggestShoeSize = game[key]["players"][player]["shoe"]
            }
        }
    }
    // console.log(currentPlayer)
    return currentPlayer["rebounds"]
}

console.log(bigShoeRebounds())