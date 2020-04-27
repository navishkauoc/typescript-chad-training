let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for(let i=0; i<sports.length; i++){
//     console.log(sports[i]);
// }

//Use of simplified for loops
for(let tempSport of sports){
    if(tempSport == "Cricket"){
        console.log(tempSport + " is my favorite");
    } else{
        console.log(tempSport);
    }

}