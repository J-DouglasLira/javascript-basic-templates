/* Create a function that takes an integer as 
an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if ( number % 2 == 0 ){
    return "Even"
  } else{
    return "Odd"
  }
}

// Second way;

function evenOrOddSecond(numberSecond) {
  return numberSecond%2 ? "Odd" : "Even"
}

