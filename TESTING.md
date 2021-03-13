<p align="center">
  <img src="/static/images/logo1.png" 
alt="logo"/>
</p>


![Image containing example of responsiveness within several screens](/static/docs/readme/responsive.png)

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





**Testing/Building the site**


## Bugs and Enhancements <a name="bugs"></a>



### Bugs or Unresolved Issues



### Future development:




:house:[ Back to Table of Contents](#home)





:house:[ Back to README file](README.md).