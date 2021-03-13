<p align="center">
  <img src="/static/images/logo1.png" 
alt="logo"/>
</p>


![Image containing example of responsiveness within several screens](/static/docs/readme/responsive1.png)


The aim of Muffin-Tastic is to provide an inspiring array of muffin recipes, and allow anyone to create an account for free so that they can also add their 
own recipes to the site. Once they have registered an account they will be able to add recipes, edit them and delete them.

**[View the live project here](https://muffin-tastic.herokuapp.com/)**


# Table of Contents :house: <a name="home"></a>
1. [Introduction](#introduction)
2. [Responsiveness and Speed](#responsiveness)
3. [Browser Compatibility](#browsercomp)
4. [Code Validation](#codeval)
5. [Defensive Design](#defensived)
6. [Testing User Stories](#testing)
7. [Bugs and Enhancements](#bugs)

## Introduction <a name="introduction"></a>




:house:[ Back to Table of Contents](#home)




## Responsiveness and Speed<a name="responsiveness"></a>

Responsiveness and speed as well as general usability was tested manually.

Chrome Developer Tools were used to test responsiveness on all screen sizes. This was done whilst the project was being built on, 
to ensure at all times that the build was going well and that there would be no surprises later on. I made changes to the css stylesheet
via media queries for smaller screens at any time when I noticed an issue with responsiveness.

Several functions or sections were edited through media queries.

I also tested this via my mobile devices and asked other people to test it and provide feedback as well.



## Browser Compatibility <a name="browsercomp"></a>

This site has been tested through all the browsers that I have access to:

- Google Chrome

- Mozilla Firefox

- Microsoft Edge

- Opera

- Mobile chrome via Android phone and tablet

- Mobile Samsung browser via Android phone and tablet


It has appeared to behave correctly on all these platforms and no issues were observed.



## Code validation <a name="codeval"></a>

I ran all my code through the various relevant validators:

-The [CSS Validation Service](https://jigsaw.w3.org/css-validator) for the CSS code.


The CSS validator resulted in three errors: one invalid font-weight value which was 350 and I changed to 300 as a result of the validator, and two
incorrect font styling options for the muffin card names that I had set to incorrectly use emphasize. Since these were not being applied as they were incorrect, I simply removed them from my code
and the validation was then successful.


![css validation results](/static/docs/readme/validation/css_val.png)



-The [PEP8 Validation](http://pep8online.com/) was used for the Python code.

The PEP8 code validator gave me a few indentation errors and lines that were too long so I fixed all these before saving the files again and the code passed 
this time, after the changes.


![app.py validation results](/static/docs/readme/validation/pep8_val.png)



-The [W3C Markup Validation Service](https://validator.w3.org) was used for the HTML code.

The HTML validation was a bit difficult, since the checks threw multiple errors due to the use of Jinja templating. The checks point to the lack of proper headers 
on the templates and also multiple errors are caused by the use of the } symbols in the Jinja templates. For this reason I decided to ignore the errors, since
I am not aware of a way to bypass these.

Since the HTML code is so extensive as there are a number of files, instead of posting each link here I have decided to post a link to the
directory where all the results for the HTML validation can be found:

[Link to all HTML validator results](/static/docs/readme/validation)


I have also used the Chrome Developer Tools extensively throughout the project at every step. They have been very useful for each change that I made, 
and to double-check my ideas before implementing and committing them. I have made multiple colour and formatting changes due to using these which
would have taken a long time otherwise.



:house:[ Back to Table of Contents](#home)

## Defensive Design <a name="defensived"></a>







## Testing User Stories <a name="testing"></a>

- Testing the login and registration page:

I tried logging in with duplicated username and also with incorrect password to check that all the error messages and warnings were displaying the way they were meant to
All the relevant flash messages were also checked for accuracy and I ensured everything was working properly before moving on





**Challenges building the site**

Whilst working on this project I encountered a series of issues that I needed to overcome. Please see below for details.

- Database connection:

When attempting to build the registration page, I was faced with an issue where the new users were not registered by the database.
After some troubleshooting I realised that I had an incorrect db name in my env.py file. After I corrected this and restarted my workspace
it worked correctly and the database was displaying my activity and connections


- Materialize icons

I decided to remove the link to the sytlesheet for them from base html as they were not displaying correctly and they messed up the design of my cards when displayed on the screen.


- Recipes Jinja templating

When adding the recipe loop within the recipes.html file, I had a jinja error stating 'recipe is not defined'. This was due to the fact that I had mistakenly left some redundant code 
in the file so my actual loop wasn't running. I removed the extra code and after reloading the app, it worked.
I also had to add some extra entries to the database at this point, since I added a few more to my recipes.html file which I had not added initially.


After adding all my 'core' recipes to the database, the multiple cards were not displaying on the app correctly and the card reveal was not working properly. I would click any card and only the content for the first card would be shown. 
Also, instead of in a block the cards were in a vertical row. 
I then realised that I had made a mistake with where my for loop started and ended so I changed it and everything worked properly then.


- Recipe card

When previewing the recipe card on the live Heroku app, nothing came up under the ingredients. I looked in the db document and noticed something that I had missed when I had checked this before: 
the recipe ingredients had the wrong name as it was missing the underscore between recipe and ingredients. Once I corrected this, it worked fine and the ingredients displayed in the correct place within the recipe card.

Whilst testing the recipe cards I realised that I did not have an alt image for my muffin recipes so I added this, with fallback text pointing to the recipe description


- App.py file

After adding my dictionary items to the app.py file I realised that I had incorrectly named some items in the add_recipe.html file so I renamed them. I forgot to rename these in Mongo db though so I had errors when I tried to access the form afterwards. 
Once I updated them on the Mongo db  everything worked correctly.


- Add recipe function
The first recipe that I tried to add as a user through the site did not work. The ingredients and instructions did not go through to the database and neither did the description until I corrected the typo on the app.py file.


- Materialize Carousel

The photo carousel was not working correctly, only the first photo showed and there was no sliding. 
Upon investigation, it appeared that my jQuery code for the initialisation was incorrect so once I replaced that, it all worked as intended.


- Add recipe button
Add recipe button from homepage directs to the add recipe page but was not validating if user was logged in, so it threw an error if a logged out user tried to access it. 
I corrected this by restricting the add recipe access to logged in users and redirecting the rest to the login or register page.



## Bugs and Enhancements <a name="bugs"></a>



### Bugs or Unresolved Issues

I was never able to get a Materialize form character counter or form validation for required fields to work. I tried multiple times but could not manage.

I ran out of time to fix the search function so that when it doesn't find any items, it redirects the user or gives them a message. I simply thought too late about it and didn't 
have the time to  look into it.



:house:[ Back to Table of Contents](#home)


### Future development:

A few items that would be interesting for future development are:

- Allow users to add more fields to their profile: Full name, email, etc.

- Allow users to add muffins to their 'favourites' so they can access liked items made by others.

- When the user clicks on the 'delete account' button I would like to provide a confirmation pop-up before they confirm. I tried a modal but 
I could not get it to work and ran out of time to finish it. 






:house:[ Back to README file](README.md).