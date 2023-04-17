var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 1020, "y": groundY -10},
                { "type": "sawblade", "x": 600, "y": groundY - 50 },
                { "type": "sawblade", "x": 900, "y": groundY - 150 },
                { "type": "sawblade", "x": 2000, "y": groundY - 130 },


                 
                {"type": "enemy", "x": 400, "y": groundY -50 },

                {"type": "reward", "x": 5000, "y": groundY - 100 },
                {"type": "reward", "x": 3300, "y": groundY - 100 },
                {"type": "reward", "x": 2000, "y": groundY - 80 },
                {"type": "reward", "x": 100, "y": groundY - 100 },
                {"type": "reward", "x": 1000, "y": groundY - 100 },


                {"type": "bigBoss", "x": 800, "y": groundY - 100 },
                 
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createNaruto(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 50 ;
            var narutoHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            narutoHitZone.x = x;
            narutoHitZone.y = y;
            game.addGameItem(narutoHitZone);
            var obstacleImage = draw.bitmap("img/naruto.png");
            narutoHitZone.addChild(obstacleImage);
            obstacleImage.x = -105
            obstacleImage.y = -35

        }
       
        function createEnemy(x, y){
           
    
            var enemy = game.createGameItem("enemy", 25);
            var gameItem = draw.rect(50, 50, "red");
            gameItem.x = -25 ;
            gameItem.y = -25;
            enemy.addChild(gameItem);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2
    
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.flyTo(600,0)
            };

        }; 
       
        function createReward(x, y){
           
    
            var reward = game.createGameItem("reward", 25);
            var rewardImage = draw.bitmap("img/gum gum fruit.png");
            reward.addChild(rewardImage);
            rewardImage.x = -20
            rewardImage.y = -20
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2
            rewardImage.scaleX = 2
            rewardImage.scaleY = 2
            reward.onPlayerCollision = function () {
                console.log("reward")
                game.increaseScore(100);
                reward.flyTo(600,0);
            };

        }; 
        function createbigBoss(x, y){
           
    
            var bigBoss = game.createGameItem("bigBoss", 25);
            var bigBossImage = draw.bitmap("img/gum gum fruit.png");
            gameItem.x = -25 ;
            gameItem.y = -25;
            bigBoss.addChild(bigBossImage);
            bigBoss.x = x;
            bigBoss.y = y;
            game.addGameItem(bigBoss);
            bigBoss.velocityX = -2
            rewardImage.scaleX = 2
            rewardImage.scaleY = 2
            bigBoss.onProjectileCollision = function () {
                game.increaseScore(100);
                bigBoss.flyTo(600,0)
            };

        }; 
       


        
        for(var i = 0; i< levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];


            if(gameItem.type === "sawblade"){
                createNaruto(gameItem.x, gameItem.y);
            }if(gameItem.type === "enemy"){
                createEnemy (gameItem.x, gameItem.y);
            }if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
            }if(gameItem.type === "big"){
                createReward(gameItem.x, gameItem.y)
            }
        }

        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
