This is a mini game. You are invited to hunt some mice for dinner. You can choose a character and enter your name. There are only 6 tries for one game. You should find 5 mice to win. Good luck!

![Responsice Mockup](./README-images/start-area.png)

Live link [`Mice hunting`](https://vl-ocean.github.io/mice-huntung/)

## [The planning stage (click to view the file)](./README-files/project-2.txt)
 ### App functionality
- When planning this project, I described the game as steps which the user follow to play the game. This also includes the structure of the game and what the user can find/see on every area. 

 ### JavaScript functions
- It describes how it was planned for the game to work and should be connected using the JavaScript functions.

 ### JavaScript global variables
- There are few variables that were planned to be global, such as username, characterArray, etc.

 ### Buttons
- No game can function without the user be able to control it. There are few main buttons, such as start game, restart and exit.

 ### Other
- It includes the instructions for the game.

 ### Design
- Fonts: Caudex, Comfortaa
- Colors: #BD6E2A orange, #221916 brown, #fff white; ![color](./README-images/color.png)


## Technologies Used 

 ### Languages Used 
- HTML5 
- CSS3
- JavaScript

 ### Programes Used
 - #### [Git](https://gitpod.io/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
  - #### [GitHub](https://github.com/)
GitHub is used to store the project's code after being pushed from Git.
  - #### [GitPod](https://www.gitpod.io/)
Gitpod was used as a platform to develop code in a ready-to-code developer environment.
 - #### [Balsamic](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process
   - Mobile layout
     - [Start area](./README-images/mobile-start-area.png)
     - [Game area](./README-images/mobile-game-area.png)
     - [Result area](./README-images/mobile-result-area.png)
   - Tablet layout
     - [Start area](./README-images/tablet-start-area.png)
     - [Game area](./README-images/tablet-game-area.png)
     - [Result area](./README-images/tablet-result-area.png)
   - Desktop layout
     - [Start area](./README-images/desktop-start-area.png)
     - [Game area](./README-images/desktop-game-area.png)
     - [Result area](./README-images/desktop-result-area.png)

## Existing Features 
The game has three areas: start area, game area and result area. The [start area](./README-images/start-area.png) main functionality is to get the user`s name and remember the selected character. The [game area](./README-images/game-area.png) allows the user to participate in the game by clicking on the doors and opening them. The output is either a mouse or an empty place. The [result area](./README-images/result-area.png) is showing the outcome after the game was played.

- ### Title

![Title](./README-images/title.png)
 #### The game name represetns the main game functionality "to hunt the mice".

- ### Sound off / Sound on icons

![Sound off](./README-images/sound-off.png) 
![Sound on](./README-images/sound-on.png) 
 #### It allows the user to control the sounds in the game. The default setting is mute. The user can turn it on by clicking the icon.

- ### Username
![Username](./README-images/username.png) 
 #### The field to enter the name. It accepts only English letters and spaces. The user is entitled to enter at least one character/space. The maximum characters is set to 20. The entered output is used in messages later in the game and result areas.

 - ### Choose character
![characters](./README-images/choose-character.png) 
 #### The user can choose from 3 characters. When clicking a character, it gets a border to highlight that it has been selected.

  - ### Instructions
![info](./README-images/instructions.png) 
 #### The user can read simple rules of the game and understand what to expect at the next area.

  - ### Start game button
![start button](./README-images/start-game-button.png) 
![start button with hover effect](./README-images/start-game-button-hover.png) 
 #### Once the user is ready, he can click on the button and if the name and character are selected, the game begins.

  - ### 
![](./README-images) 
 #### 


## Future features 
- Customized messages for game and result areas
- Bonus level
- Score board

## Testing  

### Responsiveness
The game can be played on all devices from 360px to large screens. Its width is limited as it is a mini-game.

Screen resolution | Pass
--- | :---:
320px | &check;
360px | &check;
768px | &check;
1024px | &check;
1440px | &check;
1920px | &check;


![Responsice Mockup](./README-images/responsive.png)

### Supported browsers
The website was tested on the following browsers and is working well:

Browser | Pass
--- | :---:
Chrome | &check;
Opera | &check;
Firefox | &check;
Microsoft Edge | &check;
Savannah | &check;


### Validator Testing 
- #### HTML
  - [Overall validation](./README-images/html-validation.png)
    - No errors or warnings to show. Except the warning "Possible misuse of aria-label".
  - [Warning](./README-images/html-warning.png)
    - The aria-label is used for the div containers which have background images. These images are the main game functionality. In order for the screen reader to see them and identify, I used aria-labels. 
  - [404 page](./README-images/404-html-validation.png)
    - No errors or warnings to show.
- #### CSS
No errors or warnings to show. (Except for the warning about imported Google Fonts "Imported style sheets are not checked in direct input and file upload modes")
  - [Overall result](./README-images/css-validation.png)
  - [Warning](./README-images/css-warning.png)

### Accessibility and performance
Using Google Lighthouse I confirmed that the website is readable and accessible. It performs well.
  - Home page
    - [Desktop](./README-images/desktop-lighthouse.png)
    - [Mobile](./README-images/mobile-lighthouse.png)
  - 404 page
    - [Desktop](./README-images/404-desktop-lighthouse.png)
    - [Mobile](./README-images/404-mobile-lighthouse.png)

### Functional testing

Action |  Expected result | Pass
--- | --- | :---:
Click | Open | &check;

### Fixed Bugs

- The assignCharacter function didn't work properly. The problem was in setting the background-image url and inserting it as a new style for the element. When looking through some tutorials (W3Schools, Stackoverflow), I have realised that I have set it wrong. I changed it to "url(" + chosenCharacter + ")", then I updated url in the object to "url('./assets/images/grey.webp')", so I can use a variable instead of concatenating and it worked perfectly this way.
- 

### Unfixed Bugs

- The validation of the username is set for letters and spaces (for example, "Tom Hank"). As a result the user may use only spaces as a name.
- 


## Deployment
- ### Github pages
    - This project was deployed to GitHub Pages using the following steps
      - Log in to GitHub and locate the GitHub Repository
      - At the top of the Repository (not the top of the page), locate the "Settings" Button on 
        the menu.
      - Scroll down the Settings page until you locate the "GitHub Pages" Section.
      - Under "Source", click the dropdown called "None" and select "Master Branch".
      - The page will automatically refresh.
      - Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
      - live link for the page can be found here [Mice hunting](https://vl-ocean.github.io/mice-huntung/)
- ### Forking the GitHub Repository
    - By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps
     - Log in to GitHub and locate the GitHub Repository
     - At the top of the Repository (not the top of the page) just above the "Settings" Button on the menu, locate the "Fork" Button.
     - You should now have a copy of the original repository in your GitHub account.
- ### Making a Local Clone
   - Log in to GitHub and locate the GitHub Repository
   - Under the repository name, click "Clone or download".
   -  To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
   - Open Git Bash
   - Change the current working directory to the location where you want the cloned directory to be made
   - Type git clone, and then paste the URL you copied in Step 3.
      - $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   - Press Enter. Your local clone will be created.


## Credits 

  - ### Tutorials & Content  
    - [Code institute](https://learn.codeinstitute.net/) - The tutorials and walkthrough projects.
    - [W3Schools](https://www.w3schools.com/) - The information about HTML, CSS and JavaScript.
    - [MDN](https://developer.mozilla.org/en-US/) - The information about HTML, CSS and JavaScript.
    - [Stackoverflow](https://stackoverflow.com/) - The use of JavaScript to change html and styles.

  - ### Graphics
    - [Google fonts](https://fonts.google.com/knowledge) - The Fonts were imported from this library.
    - [Fontjoy](https://fontjoy.com/) - This tool was used to find the matching font-families for the design.
    - [ColorSpace](https://mycolor.space/) - This tool was used to find the most suitable colors for the design.
    - [Adobe Color Contrast Checker](https://color.adobe.com/create/color-contrast-analyzer) - This tool was used to check contrast for text and background colors.
    - [hex to rgba](https://rgbacolorpicker.com/hex-to-rgba) - This tool was used to convert hex value of color into rgba, for the form on the tablet layout.
    - [Font Awesome](https://fontawesome.com/) - The icons are taken from this library.

  - ### Media
    - [Favicon](https://www.favicon.cc/) - The tool was used to create a favicon.
    - [Mixkit](https://mixkit.co/) - Soundtracks and background music.
    - [Audio Trimmer](https://audiotrimmer.com/) - Cut soundtracks.

  - ### Illustrations
    - The illustrations were drawn by hand and digitalized. The author - my sister, Anastasiia.
    
  - ### Acknowledgment
    - [Cohort Facilitator - Marko Tot](https://github.com/tmarkec) for support in the classroom and guidance through the course.
    - [Mentor - Dick Vlaanderen](https://github.com/dickvla) for support throughout the project, ideas and advice.
    - My sister Anastasiia for help in design and graphic content.