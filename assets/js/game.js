var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive 
    while (enemyHealth > 0 && enemyHealth > 0) {

        //ask if player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        // if player choses to fight, then fight 
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining."
            );

            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;

                //Leave while(loop) since enemy is dead
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //leave while() loop if player is dead
                break;

            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remainging."
            );
        }
        // if player choses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }

        //fight each enemy-robot by looping over them and fighting them one at a time
        for (var i = 0; i, enemyNames.length; i++) {}
    }


};
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}