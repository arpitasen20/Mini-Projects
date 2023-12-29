# Ladder-Legacy

# Game Idea : 
The Idea is to build the a Multiplayer Classical Board game named Ladder Legacy where player has to roll the dice and move up the board without getting bitten by a snake. 


# Note : Score in this Game is calculated as the no of roll of dice of that player.


# How To Play : 
1. Go Through the Instructions Page available on the One screen. 
2. Click Start Game. Here Enter name and nickname of both the players.
3. Select Color for icons for both the players.
4. Then Game starts. Tap on the Dice to roll the Dice. The Icon will move the no of steps came on dice. Continue playing the game till anyone player reaches 100. 
5. After completing, results page is shown where name of winner and his score is shown.


# Brief Idea of Working of the Game : 
The Main Game Logic works as at first the I will be generating random number between 1 to 6 using Math.Random function in JS. At Starting I will be noting the Current Positions of each player and just add the random dice number to current position to get new position. Now to show the icon, I have made 100 boxes in the Main Game Board each having id based on their number. To show icon, i will add a span element to the particular box having id equal to current position of the player. 

For the Snakes biting and Ladder climbing, At starting I have saved the locations of snakes and ladders in an array. Every time the player moves, it will check if player has reached any of the snake or ladder, if yes then update the current position according to the snake or ladder. In this way the Games work. 

At last, the score is displayed based on how many times you rolled the dice.


# Special Features in the Game : 
1. There are Animations given to different elements on all the pages.
2. There are Sound Effects while playing the game. For Example, when rolling dice, getting bitten by snake, climbing ladder and winning the game. Also Background music is there.
3. The Game is Mobile Responsive for Max-Width : 850px. (Assuming mobile screen ranging from 300px to 650 px)
4. Different Phrases on the Results Page.


# Tech Stack Used : HTML, CSS, JAVASCRIPT, FIGMA.


# Screens in the Game : 
1. First Page of the Game : 
![Alt text](<./Images/First Page.png>)

2. Instructions Page : 
![Alt text](<./Images/Instructions Page.png>)

3. Enter NickName Page : 
![Alt text](<./Images/NickName Page.png>)

4. Color Choosing Page : 
![Alt text](<Images/Color Page.png>)

5. Main Game Page : 
![Alt text](<Images/Game Page.png>)

6. Results Page : 
![Alt text](<Images/Result Page.png>)


