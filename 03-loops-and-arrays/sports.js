var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
// for(let i=0; i<sports.length; i++){
//     console.log(sports[i]);
// }
//Use of simplified for loops
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " is my favorite");
    }
    else {
        console.log(tempSport);
    }
}
