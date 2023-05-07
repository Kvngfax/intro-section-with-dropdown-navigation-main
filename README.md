# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

The goal was to replicate the webpage with my style of approach

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

## My process


As part of my readme process, I worked extensively with HTML, CSS, and JavaScript to create a visually appealing and interactive user experience. HTML provided the structure and content of my website, while CSS was used to style and format it according to my design preferences.

JavaScript was used to add interactivity to my website, allowing users to interact with the content and perform various actions.

Throughout the development process, I made use of various libraries and frameworks to streamline my workflow and enhance the functionality of my website. Overall, my experience working with HTML, CSS, and JavaScript was challenging but rewarding, and I am pleased with the final result.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript



### What I learned


```html
<picture>
          <source media="(max-width: 800px)" srcset="images/image-hero-desktop.png">
          <img src="images/image-hero-desktop.png" alt="image" class="trying">
        </picture>
```
```css
.dropdown:hover .dropdown-menu li {
      display: block;
    }
```
```js
    closeMenuBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  navLinks2.classList.add('show');
});

```


### Continued development

I'm going to continue on my journey to be a JavaScript genius


## Author

- Frontend Mentor - [@kvngfax](https://www.frontendmentor.io/profile/kvngfax)
- Twitter - [@kvngfax](https://www.twitter.com/kvngfax) 


