# Irish Animal Habitat
## Irish Animal Habitat is an online memory card game where the user matches the animal to their habitat. The aim of the game is to help children engage with nature and Irelands unique biodiversity. It also provides a form of cognitive training where the user has to remember where the cards are positioned in the game.

### PP2 - Gary Broderick
![am i responsive screenshot](documentation/responsive/am-i-responsive.PNG)

------------------------------------------------------------------------------------
## [**Live Site**](https://gbroder24.github.io/irish-animal-habitat/)

## [**Repository**](https://github.com/gbroder24/irish-animal-habitat.git)

## Table of Contents

[ UX / UI ](#uxui)  
+ [ Target Audience ](#target-audience)  
+ [ User Stories ](#user-stories)  
	* [ Client Goals ](#client-goals)  
	* [ User Goals ](#user-goals)   
+ [ Wireframes ](#wireframes)  
	* [ Landing Page ](#landing-page)  
	* [ Techniques Page ](#techniques-page)  
	* [ Signup Page ](#signup-page)   
+ [ Color Palette ](#color-palette)  
+ [ Font Styles ](#font-styles)  
+ [ Accessibility ](#accessibility)  

[ List of Features ](#list-of-features)    
+ [ Header ](#header)  
+ [ Hero Image ](#hero-image)  
+ [ The Benefits ](#the-benefits)  
+ [ Paralax Image ](#paralax-image)  
+ [ Timetable ](#timetable)  
+ [ Footer ](#footer)
+ [ Techniques Page ](techniques-page-1)  
+ [ Signup Page ](signup-page-1)  

[ Future-Features ](#future-features)  
+ [ Techniques Page ](#techniques-page-2)  
+ [ Signup Page ](#signup-page-2)  
+ [ User Account ](#user-account)  
+ [ Error Page ](#error-page)  

[ Tools and Technologies ](#tools-and-technologies)   

[ Testing ](#testing)  
+ [ Website Links ](#website-links)  
+ [ Signup Form ](#signup-form)  
+ [ User Testing ](#user-testing)  
+ [ Responsive Testing ](#responsive-testing)  

[ Lighthouse Testing ](#lighthouse-testing)    
+ [ Google Chrome ](#google-chrome)  
	* [ index.html ](#indexhtml)  
	* [ techniques.html ](#techniqueshtml)  
	* [ signup.html ](#signuphtml)  
+ [ Microsoft Edge ](#microsoft-edge)  
	* [ index.html ](#indexhtml-1)  
	* [ techniques.html ](#techniqueshtml-1)  
	* [ signup.html ](#signuphtml-1)  

 [ HTML Validation ](#html-validation)  
+ [ index.html ](#indexhtml-2)  
+ [ techniques.html ](#techniqueshtml-2)  
+ [ signup.html ](#signuphtml-2)  

[ CSS Validation ](#css-validation)    
+ [ style.css ](#stylecss)  

[ Known Bugs ](#known-bugs)   

[ Deployment](#deployment) 
+ [ Cloning and Forking ](#cloning-and-forking)  
+ [ Local ](#local)  
+ [ Remote ](#remote)  

[ Credits](#credits)  
+ [ Images ](#images)  
+ [ Embedded Videos ](#embedded-videos)  
+ [ Map ](#map)  
+ [ Content and Resources ](#content--resources)  
+ [ Readme ](#readme)  
+ [ Acknowledgements ](#acknowledgements)  

## UX/UI

### Target Audience

The target audience of the website is to attract young children and to help them engage with nature and Irelands unique biodiversity. Hopefully it also inspires young children to investigate and explore Irelands wild nature. This is a game that entertains and educates young children.

## User Stories

### Client Goals

I want to provide an online game that highlights and raises awareness about Irelands unique biodiversity.
I want to provide entertainment that sharpens the users memory.
I want young children to explore and engage with Irelands unique biodiversity.

### User Goals

I want to engage and explore Irelands unique biodiversity.
I want to play an entertaining and educational game about Irish animals and their habitats.
I want to improve my memory.

### Wireframes
The wireframe mockups were created on Balsamiq. They show what the website would look like on mobile and desktop devices.

![mobile-desktop-wireframe](documentation/wireframes/mobile-desktop-wireframe.PNG)

### Color Palette

The following colors were chosen for the website and ensure contrast is achieved in the main parts of the page.
+ blanchedalmond - Used in the generic body, headings and score area. It is a soft color and chosen so as not to distract the user from focusing on the game  
+ dodgerblue - Used as the color for the back of the cards to attract the users attention.   
+ #fefefe - Used as the background color of the modal.  
+ #888 - Used as the border color of the modal.  
+ green - Used in headings and paragragh content of the modal.  
+ Black - Used when the mouse moves over the modal buttons to draw the users attention with a hover effect.  
+ #fefefe - Used when the mouse moves over the modal buttons to draw the users attention to the buttons text with a hover effect.  

### Font Styles

The default font family has been used to style the website. This was chosen so that the it would not distract the users attention away fron focusing on the game.

### Accessibility

+ The website avoids clutter.  
+ The content is structured with semantic tags.  
+ Alt attributes are used for screen readers for the visually impaired.  
+ The color scheme was chosen for sufficient contrast and legibility.    

## List of Features

### The Background Image

The background image attracts the user and indicates that Irish Animal Habitat is a game about biodiversity and nature. It also engages the user and raises awareness of wildlife.

![header-image](documentation/features/header.PNG)

![header-mobile-image](documentation/features/header-mobile.PNG)

### The Headings

The headings inform the user that the game is called Irish Animal Habitat and the theme of the game is to match the animal to its habitat.

![hero-image](documentation/features/hero-image.PNG)

### The Game Area

The game area displays twelve cards in neat rows and columns. The cards lay face down with the back of the cards displayed to the user. When the user clicks on the first card the card flips from back to front displaying either an image of an animal or its habitat and stays in position. When the user clicks on the second card the card flips from back to front displaying either an image of an animal or its habitat. The first and second cards chosen stay in position facing the user if the animal is matched to its correct habitat. If they are not a match the cards will flip back to their inital state. When the website is initally loaded all the cards are shuffled. 

![benefits-image](documentation/features/benefits.PNG)

![benefits-mobile-image](documentation/features/benefits-mobile.PNG)

### The Score Area

The score area informs the user of their score. The inital score is integer number 0 which means that no matching pairs have been found. For each matching pair thereafter the score increments by an integer number of 1. The max score that any user can reach is a maximum score of integer number 6.

![paralax-image](documentation/features/paralax.PNG)

### The Congratulations Modal
When the user finds the last matching pair a congratulations modal is displayed informing the user that they have won the game. They have matched the animals with their correct habitat and found all six pairs. The modal also gives the user a choice of playing a new game or not. If the user chooses to play a new game the modal closes and a new game loads with all twelve cards shuffled. If the user chooses not to play another game the modal closes and a new game loads with all twelve cards shuffled for the next waiting player.

## Future Features

### A Timer

Implement a timer that automatically starts incrementing when the user clicks on the first chosen card. The timer automatically stops when the user finds the last matching card.

### User Modal

Implement a user modal which is displayed when the player wins the game.  
Implement an input area for the user to enter and submit their user name.  
Implement a score area to display the users score.  
Implement a time record area where the users time will be displayed.   

### Leaderboard Modal
Implement a leaderboard modal feature so that the user(s) can compare the time it took to complete the game and adds a competitive aspect to the game.  
Implement a leaderboard in local storage that records the score and time of the last ten to twenty users.

### Error Page
Implement a 404 error page in case there are any bugs that prevent the website or any links from working and the user can navigate back to the website.

## Tools and Technologies
+ HTML5 Website Structure.  
+ CSS3 Website Style. 
+ Javascript Website Logic.  
+ MarkDown Readme.md file  
+ [ Balsamiq ](https://balsamiq.com/wireframes/?gad_source=1&gclid=EAIaIQobChMI2N-YppndhQMV5pxQBh0uTQgmEAAYASACEgJUvPD_BwE) Wireframes.  
+ [ Github ](https://github.com/about) Repository and deployment.  
+ [ Gitpod ](https://www.gitpod.io/about) IDE.  
+ [ Git ](https://git-scm.com/about) Version control.  
+ [ Fontawesom ](https://fontawesome.com/) Icons.  
+ [ W3schools ](https://www.w3schools.com/) HTML / CSS / Javascript tips.   
+ [ Am I Responsive ](https://ui.dev/amiresponsive) to show website on devices.   
+ [ Vance AI ](https://vanceai.com/) to rezize ai images.  
+ [ Youtube ](https://www.youtube.com/) for javascript tutorials.  
+ [ Leonardo AI ](https://leonardo.ai/) to generate ai images.  

## Testing
Test scenarios for the Irish Animal Habitat website were created by the Full Stack Software Developer (Gary Broderick). The website was manually tested, validated and results recorded. User testing (by family and friends) was also executed.

### Website Links
The following test scenarios were executed on the website and results recorded:

|Scenario|Result  |
|--|--|
| Verify that when the user clicks on the first chosen card that the card flips over and reveals an image.|Pass  |
| Verify that the first chosen card does not unflip and remains face up displaying the image.|Pass  |
| Verify that when the user clicks on the second chosen card that the card flips over and reveals an image.|Pass  |
| Verify that when the animal is matched with its correct habitat that the two cards remain unflipped and remain face up.|Pass  |
| Verify that when the animal is matched with its correct habitat that the matching pairs found score increments by one.|Pass  |
| Verify that all remaining matching cards behave in the same way.|Pass  |
| Verify that when all the matching pairs are found the score increments to a maximum score of six.|Pass  |
| Verify that when the animal is not matched with its correct habitat that the two unmatched cards unflip and remain face down not displaying the images.|Pass  |
| Verify that when two cards have flipped over, another card cannot be flipped until 1.5 seconds has timed out.|Pass  |
| Verify that when all matching pairs have been found a congratulations modal is displayed.|Pass  |
| Verify the congratulations modal 'YES' button loads a new game.|Pass  |
| Verify that the cards have been shuffled for the new game.|Pass  |
| Verify the congratulations modal 'NO' button loads a new game.|Pass  |
| Verify that the cards have been shuffled for the next game.|Pass  |

### User Testing
The following test scenarios were executed on users and results recorded:

|Scenario|Result  |
|--|--|
| On the landing page scroll down and find out more about the website.|Pass  |
| Navigate to the social media links.|Pass  |
| Navigate to the 'Techniques' page and interact with the embedded videos.|Pass  |
| Navigate to the 'Signup' page and fill in your details, email address, class and news letter preference.|Pass  |
| Navigate to the 'Signup' page and locate class location.|Pass  |

### Responsive Testing

The following test scenarios were executed on various media devices and results recorded:

|Scenario|Result  |
|--|--|
| Is the website responsive on mobile device screens.|Pass  |
| Is the website responsive on desktop device screens.|Pass  |

![mobile-responsive](documentation/responsive/responsive-small.PNG)

![desktop-responsive](documentation/responsive/responsive-large.PNG)

## Lighthouse Testing
All website pages were tested using the Lighthouse tool on a couple of different browsers, Chrome and Edge. The page load was analysed and Lighthouse reports and scores were generated.  

The Best Practice score for the Techniques page and the Signup page scored 78. This score was due to the use of third party cookies. This score is acceptable because it is out of scope.

### Google Chrome

#### index.html

![chrome-lighthouse-index-image](documentation/lighthouse/chrome/index.PNG)

#### techniques.html

![chrome-lighthouse-techniques-image](documentation/lighthouse/chrome/techniques.PNG)

![chrome-lighthouse-best-practice-techniques-image](documentation/lighthouse/chrome/techniques-best-practice.PNG)

#### signup.html

![chrome-lighthouse-signup-image](documentation/lighthouse/chrome/signup.PNG)

![chrome-lighthouse-best-practice-signup-image](documentation/lighthouse/chrome/signup-best-practice.PNG)

### Microsoft Edge

#### index.html

![edge-lighthouse-index-image](documentation/lighthouse/edge/index.PNG)

#### techniques.html

![edge-lighthouse-techniques-image](documentation/lighthouse/edge/techniques.PNG)

![edge-lighthouse-best-practice-techniques-image](documentation/lighthouse/edge/techniques-best-practice.PNG)

#### signup.html

![edge-lighthouse-signup-image](documentation/lighthouse/edge/signup.PNG)

![edge-lighthouse-best-practice-signup-image](documentation/lighthouse/edge/signup-best-practice.PNG)

## HTML Validation
All html code was validated using the W3C Markup Validation Service.

### index.html

![validation-index.html-image](documentation/validation/html/index.PNG)

### techniques.html

![validation-techniques.html-image](documentation/validation/html/techniques.PNG)

### signup.html

![validation-signup.html-image](documentation/validation/html/signup.PNG)

## CSS Validation
All css code was validated using the W3C CSS Validation Service.

### style.css

![validation-style.css-image](documentation/validation/css/css.PNG)

![validation-style.css-warning-image](documentation/validation/css/css-warning.PNG)

## Known Bugs

The following bug was discovered in the index.html file during Lighthouse testing:

![bugs-image](documentation/bugs/404-syntax-error.PNG)

The following line of code in the index.html file on Line #17 was causing the error:

    <link rel="manifest" href="/site.webmanifest">

The fix and solution to this bug was to modify the line of code to the following: 

    <link rel="manifest" href="https://gbroder24.github.io/site.webmanifest" crossorigin="use-credentials">

## Deployment

### Cloning and Forking

+ Download the Gitpod extension for Chrome.  
+ Once extension is installed a green Gitpod button will show up on the Github repo.  
+ Click on the green Gitpod button and it will start up the workspace.  

### Local

+ Click on the green Code button in the repo.  
+ Under the HTTPS tab clone using the web URL.  
+ Copy the URL to clipboard and paste in the browser.  

### Remote

This website was deployed using GitHub pages. The steps to deploy are as follows:

+ Login to GitHub and navigate to the repository page (body-and-mind), click on the repository.
+ Once inside the repository, click on the "Settings" tab above the repository title.
+ Under "Code and automation" select "Pages" tab on the left side navigation menu.
+ In the "Build and Deployment" section (middle of the screen), under "Source" select from the drop-down menu "Deploy 									from a branch".
+ Under "Branch", select "main" branch and then "root" folder and click "save" button
+ The GitHub page site will be deployed.

It might take a few minutes to generate the "live" website link.

The live link to the website can be found here: [Body and Mind](https://gbroder24.github.io/body-and-mind/index.html).

## Credits

### Images

[ Hero Image ](https://www.pexels.com/photo/people-gathered-on-a-yoga-class-7596990/)

[ Benefits Image ](https://www.pexels.com/photo/woman-meditating-in-lotus-pose-3822583/)

[ Paralax Image ](https://www.istockphoto.com/photo/close-up-of-athletic-woman-rolling-up-her-exercise-mat-after-practicing-at-health-gm1324877187-410074024)

[ Timetable background image ](https://www.pexels.com/photo/aerial-photography-of-a-river-shannon-surrounded-by-green-field-5082140/)

[ Mindful Image ](https://www.calm.com/blog/bedtime-yoga?utm_medium=organic&utm_source=blog&utm_campaign=daily-routine)

[ Breathwork Image ](https://www.calm.com/blog/how-to-breathe?utm_medium=organic&utm_source=blog&utm_campaign=mind-body-connection)

[ Visualisation Image ](https://www.calm.com/blog/visualization-meditation?utm_medium=organic&utm_source=blog&utm_campaign=mind-body-connection)

[ Signup Image ](https://www.calm.com/blog/yoga-for-relaxation?utm_medium=organic&utm_source=blog&utm_campaign=mind-body-connection)

### Embedded Videos

[ Yoga Video ](https://www.youtube.com/watch?v=gE4Jdr11-co)

[ Breath Focus ](https://www.youtube.com/watch?v=ZY4tPSrLZQc)

[ Visualisation Video ](https://www.youtube.com/watch?v=BhaIklnRpjc)

### Map
[ Signup Map ](https://www.google.com/maps/place/52%C2%B040'23.2%22N+8%C2%B033'50.1%22W/@52.67312,-8.563911,14z/data=!4m4!3m3!8m2!3d52.6731199!4d-8.5639113?hl=en&entry=ttu)

### Content & Resources
The design of the landing page was lead by the [ Love Running ](https://code-institute-org.github.io/love-running-2.0/index.html) project.

The design of the techniques page was lead by the [ calm.com ](https://www.calm.com/blog/mind-body-connection#:~:text=Get%20started%20with%20mindfulness%20exercises,truly%20present%20in%20the%20moment) website.

The design of the signup page was lead by the [ Beach Yoga Fuerteventura ](https://decant09.github.io/beach-yoga-fuerteventura/contact.html) project.

The tab icon was generated using [ favicon ](https://favicon.io/).

Typography researched on [ google fonts ](https://fonts.google.com/).

All other icons used are from [ Font Awesome ](https://fontawesome.com/)

[ Code Institute ](https://codeinstitute.net/ie/about-us/?nab=0) for course / module content and portfolio project 1 scope.

[ Stack Overflow ](https://stackoverflow.com/questions/57423244/manifest-line-1-column-1-syntax-error-on-chrome-browser) for the solution to the 404 syntax error.

[ W3schools ](https://www.w3schools.com/) for any queries or difficulties encountered with code concepts in html and css. 

[ Flexbox Froggy ](https://flexboxfroggy.com/) for understanding the flexbox concept.

### Readme
The Body and Mind readme mark down was inspired by the following:

[Belfast Auto Repairs](https://github.com/Alan-Bushell/belfast-auto-repairs/blob/main/README.md#testing)

[ Cross Stitch Art ](https://github.com/laurakond/Cross-Stitch-Art/blob/main/README.md)

### Acknowledgements

My Mentor Alan Bushell for providing me with positive and encouraging feedback.  
My Cohort Facilitator Amy Richardson for addressing any queries I had at weekly Standups.