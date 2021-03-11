<p align="center">
  <img src="/static/images/logo1.png" 
alt="logo"/>
</p>


![Image containing example of responsiveness within several screens](/static/docs/readme/responsive.png)

![Image containing example of responsiveness within several screens](/static/docs/readme/responsive1.png)


The aim of Muffin-Tastic is to provide an inspiring array of muffin recipes, and allow anyone to create an account for free so that they can also add their 
own recipes to the site. Once users have have registered a (free) account they will be able to add recipes to the site, edit them and delete them if they so wish.
Users are also able to delete their account which will delete the muffins from the site as well. 

**[View the live project here](https://muffin-tastic.herokuapp.com/)**


# Table of Contents :house: <a name="home"></a>
1. [Introduction](#introduction)
2. [UX and  Visual Identity](#ux)
3. [Wireframes](#wireframes)
4.   
5. 
6. [User Stories](#userstories)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Technologies](#technologies)
10. [Media](#media)
11. [Acknowledgements and thanks](#acknowledgements)


## Introduction <a name="introduction"></a>

This site has been built as the Milestone Project number 3 for my Code Institute software development diploma. 

One of the main goals of this project is to create a full stack site which displays the CRUD principles: Create, Read, Update and Delete. 
Users need to be able to not only view the data displayed on the website, but also be able to have interactions with the site, 
as well as add their own data and later on have the option to update and delete it if they so wish.

In this case, the project is a recipe sharing site where users are able to view recipes and create an account in order to share their own. They can
then delete the data at any time. 

The site also allows users to search for recipes that interest them and view exact instructions on how to recreate them.



## UX and Visual Identity<a name="ux"></a>



**Logo and branding**


In keeping with the general 'cute' design of the rest of the site, the logo is a cartoon-like depiction of a muffin. It's simple, with basic and clean lines 
in a neutral colour with no added colour to it. Since the rest of the site is quite colourful, I felt like it was a good idea to keep the logo simple.
The logo includes the name of the site. 

The name for the site was chosen because of its playful undertones and the association with the word 'fantastic' that is immediately conveys, as well as including
the key word 'muffin' which means that it's self descriptive. Since this is a recipe site only for muffin recipes, I thought it a good idea to include that 
in the site brand for maximum impact and clarity.

The logo is encased in the site header, which is in a slightly muted pink colour. The fonts are white, for contrast. 



**Navigation**


This site is spread over a few pages. All pages have the same general colour scheme, and the exact same navbar and footer.
The navbar and footer are in a candy-style pink colour and the fonts are white, with links to the other pages. There is also a button at the bottom of the footer 
that brings the user back to the top of the home page.



**Home page**


This is the main landing page, where the user experience starts. There is an introduction to the site followed by a photo carousel and a search box
where users are able to search for muffins. The search can be done by muffin name, keyword or ingredient. 

Below the search box, a display of cards showing all the different recipes can be found. These cards will open on click and show the ingredient list and 
instructions details once clicked. Also, for any recipes added by each user this will show them an edit and delete button so that they can delete the 
recipe at any point if they wish. When the cards are unopened, they show a photo with the name of the muffin and a short description stating
the category that the muffin belongs to (sweet or savoury and difficulty level) and the name of the author.

Under the muffin selection is a bit of text encouraging the users to add their own muffins with a colourful flashing button. This button leads to the 
'Add muffin' page where users are able to add their recipes.
 
If the user is not logged in at the time, it will direct them to the login page instead. Ifthe user is not registered yet, they have a link under the login box
that takes them to the 'Register' page.

Below is a view of the home page when logged out and when logged in:



![Image showing website page](/static/docs/readme/home_out.png)
![Image showing website page](/static/docs/readme/home_in.png)
**Register page**


Any users who are new to the site can access the 'Register' page from the home page and set up a new account. I decided to leave this as quite a simple 
process and not require an email address for the account, or even a real name. A username and password will suffice. 
Once the user has created their username and password, they can log in. The username and password undergo validation to ensure they meet the minimum
requirements specified in the code:


![Image showing code](/static/docs/readme/username&pwd.png)


If a user tries to register with an account name that has already been taken, they will be flashed a warning message stating that this username is not 
available anymore.

I chose a lime green colour for the flash messages because I believe that it complements the general colour scheme



![Image showing page](/static/docs/readme/doubleregister.png)

When a new user registers, they will be greeted with a flash message and be directed to their 'Account' page, which shows the options available to them
such as adding muffin recipes and viewing their additions or deleting their account.


![Image showing page](/static/docs/readme/registersuccess.png)

**Log In/Log Out page**


For the Log In and Log Out page I had initially gone with a white background and pink font matching the header and footer, but I thought that it lacked 
something and therefore decided to make it more visually appealling by adding an image. I found an image that I really liked because it is bright and encompasses
most of the colour schemes that I display on the site, and thought that it would make a great background photo.

I set this as background and then created a blank white card for the login/logout information. Both pages (Log In and Log Out) are exactly the same when 
it comes to colour scheme, but on logout a flash message is shown stating that the logout has been successful.

![Image showing page](/static/docs/readme/login.png)
![Image showing page](/static/docs/readme/logout.png)

**My Account page**


Immediately after the user logs in, they are directed to their 'Account' Page with a greeting addressing them by their username. 

The Account page shows them what the username is (this will remail after the flash message disappears, for example if they browse to another site page and 
come back to their account page afterwards) and also shows them links to the page where they can add recipes and to the 'My Muffins' page, which groups 
and displays all the recipes created by this user. 

There is also an option to delete the account completely, to remove it from the system.

![Image showing page](/static/docs/readme/account.png)


**Add Recipe page**








**My Muffins page**










## Wireframes <a name="wireframes"></a>

All the wireframes were created with [Microsoft Paint](https://jspaint.app/).

I created two wireframes for each page: one home page for the mobile view and another for the desktop view, and the same for the game page. 



* The wireframes can be found here:

[All wireframes for MS3 Muffin-Tastic](https://github.com/maxnyla/muffin-tastic/tree/master/static/docs/wireframes/)

[Home page wireframe web](https://github.com/maxnyla/muffin-tastic/tree/master/assets/static/docs/wireframes/1-home_web.png)

[Home page wireframe mobile](https://github.com/maxnyla/muffin-tastic/tree/master/static/docs/wireframes/2-home_mob.png)





:house:[ Back to Table of Contents](#home)





## 








**    **







For the purpose of improving user experience, I have compressed the images using [tinypng.com](https://tinypng.com/) 

As can be seen below, the total reduction in image size on this site has been of % (MB).


![tinypng image size saving results](assets/img/compression_result.png)



## User Stories <a name="userstories"></a>

The different goals and aims of the site, when viewed from a user perspective or the site owner's perspective are below.




**Users:**





**Site owner:**




:house:[ Back to Table of Contents](#home)



**Testing/Building the site**

The full testing process for this project can be found [here](TESTING.md).



## Deployment <a name="deployment"></a>

**Deployment**

This website has been deployed to Heroku as [Muffin-Tastic](https://muffin-tastic.herokuapp.com/).

It was deployed ahead of time and modified on a number of occasions so that I would be able to check how things worked on different devices, and to ask others to test it themselves. 


The process for deployment is documented below:




![Deployment](assets/site_overview/deployed.png)



## Technologies <a name="technologies"></a>


For this project I have used the below technologies:

- [HTML5](https://en.wikipedia.org/wiki/HTML5) for the build of the site

- [CSS3](https://en.wikipedia.org/wiki/CSS) for the styling

- [Javascript](https://jquery.com) for the interactive elements of the site, to initialize the Materialize elements that rtequired it.

- [Gitpod](https://www.gitpod.io)
    Since I am typing this text through Gitpod, I figured it would go first in the list. All code was created through Gitpod and the workspace for this project resides there.

- [GitHub](https://www.github.com)
    This has been used to host the project.

- [Heroku](https://www.heroku.com)
    This has been used to deploy the project.

- [MongoDB](https://www.github.com)
    This has been used to host the database.

- [Materialize](https://materializecss.com)
    Used as a framework for their grid system, navbars, forms, etc. I have also on many occasions modified the initial system for styling purposes.

- [FontAwesome](https://fontawesome.com)
    Used for the cup icon, which I have used on both pages.

- [Cloudflare](https://www.cloudflare.com) 
    Used for the scripts

- [Code Beautify CSS beautifier](https://codebeautify.org)
    Used to make my CSS look nicer and tidier

- [Beautify Tools HTML beautifier](http://beautifytools.com/html-beautifier.php)
    Used to make my HTML tidier 

- [W3C Markup Validation Service](https://validator.w3.org)
    Used to check my HTML code
    
- [CSS Validation Service](https://jigsaw.w3.org/css-validator)
    Used to check my CSS code


I have also used the Chrome Developer Tools extensively throughout the project. They have been very useful for each change that I made, and to double-check my ideas before implementing them. 


:house:[ Back to Table of Contents](#home)


## Media <a name="media"></a>

I have taken advantage of several useful resources for images and my logo. Please see below:

**Logo:**

For the logo design I used the Logo Makr website. I simply searched for muffin designs and took one that I liked, before 
adding some text with the brand name to it.

[Logo Makr](https://logomakr.com/) 
    

**Site images:** 

I found all the images that I wanted to use for the carousel and the general site from the Shutterstock website:

[Shutterstock](https://www.shutterstock.com/) 

With regards to the recipe images within the muffin recipes, I used the image that was provided in each recipe on the BBC Good Food website,
where I took the recipes from:

[BBC Good Food](https://www.bbcgoodfood.com/)


For the image used in the header of this Readme file showing the different screen sizes, I used the Am I Responsive website:

[Am I Responsive](http://ami.responsivedesign.is/) 

The thumbnail icon used on the internet tab header was sourced from the Favicon site. I used the same image that I already had for the logo and uploaded it
to the Favicon site for the favicon to be automatically generated:

[Favicon](https://www.favicon.io)


**Icons:**

I decided not to use the Materialize icons and instead went with the Font Awesome icon packs. I used the free tier:

[Font Awesome](https://fontawesome.com/6?next=%2Fstart) 




## Acknowledgements and thanks <a name="acknowledgements"></a>

I would like to mention all the different resources and sites that are out there, with their respective communities, which have been a huge help for me. 
Some of them are:

- Materialize
- Git Hub and Git Pod
- w3schools
- Font Awesome
- jQuery developers
- LogoMakr
- Shutterstock
- Stack Overload
- Freecodecamp
- Slack 
- Google (for all the things that I've looked up during this project, which have led me to all these amazing sites)
- Of course I must mention my fantastic mentor Felipe Souza Alarcon for all his patience, help and ideas during this project, and his flexibility and availability. Always much 
appreciated.

And lastly, I could not leave out the Code Institute team: the other students on Slack, the tutor support and all the mentors who are always welcoming and trying to help.


:house:[ Back to Table of Contents](#home)