//EXERCISE 1 - SLIDE 68

var passengers = 70
var vanSpace = 15
var vanRequired = (Math.ceil(passengers / vanSpace))
var vanCost = 250
var totalCost = vanRequired * 250
var costSplit = (totalCost / passengers).toFixed(2)
console.log("Passengers: " + passengers + "  Vans: " + vanRequired + "  Total Cost: $" + totalCost + "  Cost per person: $" + costSplit);