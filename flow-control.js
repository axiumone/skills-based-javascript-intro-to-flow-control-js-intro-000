function basicTeenager(age) {
  if(age >= 13 && age <= 19)
  return("You are a teenager!")
}

function teenager(age) {
  if(age >= 13 && age <= 19) {
    return('You are a teenager!')
} else {
  return('You are not a teenager')
  }
}

function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return('You are a teenager!')
} else if(age <= 12) {
  return('You are a kid')
} else {
  return('You are a grownup')
}
}

function ternaryTeenager(age) {
  return(age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager")

}

function switchAge(age) {
  var age = ""
switch(age) {
  case 13:
    console.log("Dance to Pharrell's 'Happy'");
    break;
  case "14":
    console.log("You should eat a pint of ice cream");
    break;
  case "15":
    console.log("Take some deep breaths");
    break;
  case "16":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
}

}
