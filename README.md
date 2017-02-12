# Description

Black and White Tic-Tac-Toe. One of the oldest games in the book. You know how to play. X or O. Take Turns. Get three in a row, column, or diagonally and you win. You can even keep track of the number of times you created a new game.

# Wireframes

http://imgur.com/GSSrcFf

http://imgur.com/9Tn4hFP

http://imgur.com/6h9ThKt

# Link to Game

https://cpstrillvt93.github.io/tic-tac-toe/

# Technologies Used

I used HTML to structure my single page Tic-Tac-Toe application, CSS for styling, JavaScript for game logic, and JQuery and AJAX to manipulate the DOM and event handlers.

# Development Proccess

  I started this project by first creating a few wireframes for what I hoped my website would eventually look like. Folliwing the creation of initial wireframes, I created a(what was supposed to be simple) HTML to structure my SPA,some simple CSS/SCSS styling, and wrote a few starter user-stories The majority of the time spent on this prject was spent creating my game engine (game-logic.js). The game engine was created to act as the primary logic behind the game of Tic-Tac-Toe I was creating. While I tried to keep the development flow in line with the my user stories(listed below), however this proved difficult during the earlier stages of the development process. Going back and simplifying my HTML was useful in this. Similarly, breaking down my logic into the smallest of steps was a helpful choice as the moving parts of the project increased.

  After getting player moves actually into the game array, which acts as the primary game board, I added my click handlers I moved onto finishing the auth forms I had begun working on in a previous project and connecting the coresponding forms to the neccessary AJAX requests. While getting my AJAX requests in order was slightly daunting, I was able to get them working fairly through a lot of trial and error, though not without bugs.

  The final week or so of my project was spent primarily working out a variety of bugs that presented themsleves more important to fix as the game was becoming more complete. After some moving around of certain event handlers(specifically the original placement of my reset/create game button handler, the project requirements were complete and I moved on to checking the game project GitHub repository  to make sure my game emt all requirements.

  It should also be noted, for future projects, that using grunt nag, grunt test, and frequent git commits/ branching helped a lot with keeping my project development organized.

# User Stories

- user must be able to create an account, login, and sign-out.
- user can select any cell on the board to put X or 0
- user must be alerted when he/she wins/loses game
- user must have the ability to start reset the game board after winning/losing.

# Unsolved Problems

  One apparent 'problem', is the lack of colorful styling on my SPA. While I could easily spice it up, at least a little, with some more color, the design HTML layout of my board proved fairly burdensome when try8ing to make give the page a good looking syling pattern, it just looks very disjointed when colors other than black and white are involved. I plan to to a better job with this in my next project.

  Though I see this as more as a feature than an actuall problem, my form fields do not clear after use. Though it seemed like an easy fix, setting the form fields to an empty string was causing them to act up upon second use, so I scrapped that idea in consideration of time. Anyway, given the lax, competitive nature of Tic-Tac-Toe, I see this feature as an aid to the user. For one, when the user attempts to sign-up, he/she will be aware of at least one user-name/email that is has already been claimed. Similarly, in an age where most web users already have to remember a variety of authorization information, remembering sing-in information in the form takes the worry of forgetting password & email details off the user's back.

  This is not an unsolved problem, but I would like to add multiplayer functionality at some point down the line.

## Initial Food for Thought

-   How you will take the markup of the game board and represent it in JS

    -I think the markup of the game board should provide a good model(s) of the game and the code that will be necessary to get it functioning properly. I plan on using the markup as a reference point through out creating the JS/event handler code.

-   How you plan to approach this project.

    - I'm planning on breaking this project down to as many modules as possible. After getting the user stories, wireframes, and basic HTML/CSS layout down, the game logic and the event handlers that drive the game  will be the priority.

-   How you plan to keep your code modular.

    - I plan on keeping my code modular by breaking the project in to various modules from the begining. This will be helped the provided 'suggested order'. After creating my official user stories and analyzing my wireframes in comparison to what I can actually make work with my current development skillset, I can then move on to the bare-bones HTML and CSS. I belive creating the game logic in javascript will take a considerable amount of time, so if I do find myself particularly pressed on time, I will make that my priority. After developing working(hopefully!) game logic, I will move on to incorporating event handlers in correspondance with my user stories. And then on to getting this thing online and accessable. Small, small steps. Lots of commits.

-   What creative spin will you add to your project?

    -I'm not one to truly know what is doable, and what is far too much of a challange, so I plan on keeping it simple. While I'm not yet one for design, I hope to make the User experience as 'to the point' as possible. Some creative ideas have included a custom profile picture that is visable during gameplay, and maybe pops up in the opponents screen after winning.

-   How will you use version control to backup / track your project?

    -Given my lack of experience and slowly growing ability to address bugs, I plan on making plenty of git commits!
