/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */
unitedKingdom[1].touristAttractions = ["Big Ben", "London Eye", "Windsor Castle"];
england = unitedKingdom[1] ;

// other solution
// england = unitedKingdom[1];
//england.touristAttractions = ["Big Ben", "London Eye", "Windsor Castle"]
console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */
unitedKingdom[2].capital = "Cardiff";
wales = unitedKingdom[2];

console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */


//my solution
for(i=1; i<unitedKingdom.length; i++){
  if(unitedKingdom[0].population > unitedKingdom[i].population){
    console.log("Scotland has a bigger population");
  } else if (unitedKingdom[0].population === unitedKingdom[i].population){
    console.log("Scotland's population is somewhere in the middle");
  }else{
    console.log("Scotland has a smaller population")

  }
}

//correct solution 
result = null;
scotland = unitedKingdom[0];
england = unitedKingdom[1];
wales = unitedKingdom[2];
northernIreland = unitedKingdom[3];

if(scotland.population > england.population && 
  scotland.population > wales.population &&
  scotland.population > northernIreland.population){
    console.log("biggest");
  } else if(scotland.population < england.population && 
    scotland.population < wales.population &&
    scotland.population < northernIreland.population ){
      console.log("smallest");
    } else{
      console.log("somewhere in the middle");
    }

//solution 2
populations = [unitedKingdom[0].population,
  unitedKingdom[1].population,
  unitedKingdom[2].population,
  unitedKingdom[3].population 
];

populations = populations.sort(function(a, b){return a-b});

if(populations[0]=== unitedKingdom[0].population){
  console.log("Smallest");
} else if(populations[3] === unitedKingdom[0].population){
  console.log("biggest");
} else{
  console.log("middle");
}
