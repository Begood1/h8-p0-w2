Logic Challenge: Damage Calculation
// Diberikan function attack(), damageCalculation().

// Function damageCalculation()will accept 2 parameters ie numberOfAttacks and damagePerAttack
// Function attack()will accept 1 parameter that is damage
// [IMPLEMENTATION] Use the function damageCalculation()to calculate the received damage and use the function attack()to simulate each attack with the formula damage - 2in each attack.

// [EXAMPLE] damageCalculation(3, 10)will return a value24

// Because the attack will be reduced by 2, then each attack will result in damage 8

// Submit Task Here

function attack (damage) {
   return damage - 2;
  // Code disini
}

function damageCalculation (numberOfAttacks, damagePerAttack) {

 return attack(damagePerAttack) * (numberOfAttacks);
  // Code disini
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

