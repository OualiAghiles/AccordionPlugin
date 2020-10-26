
# Accordion plugin

> This plugin made with 
>    * Vanilla JavaScript
>    * Css Framwork TailwindCSS (not important)
>    * Sass Preprocessor
>    * Pug template engine (not important)
>    * Gulp as task runner
---

###  Required
* nodejs

>
>    visite [Nodejs](http://nodejs.org/) site to install
>

* Gulp in global

```
$ npm install gulp-cli -g

```


### Installation


```
$ cd 'to the folder cloned' 

$ npm i 
or
$ yarn

```



### Developpement Server

```
$ gulp

```


### Serve the Fully Built & Optimized Site

```
$ gulp build

```
---
Structure on source file
------

> src
>    - assets
>        1. Styles
>            - sass
>               - topnav.sass
>            - main.sass
>           
>        2. js
>            - app.js
>    - template
>       - _layouts
>         - header.pug 
>           - topbar.pug 
>         - config.pug
>         - wrapper.pug
>         - header.pug
>       - _partials.pug 
>         - main.pug
>       - mixins.pug 
>         - accordion.pug
>       - components.pug   
>         - accordion.pug 
>       - index.pug



### Add link to the files
Add the accordion plugin js to the html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- styles of the offcanvas -->
    <link rel="stylesheet" href="assets/styles/main.css">
    
    <!-- javascript plugin of the offcanvasMenus  -->
    <!-- the offcanvasMenus module is imported in the app.js file -->
    <script src="assets/scripts/app.js" type="module" defer></script>
</head>
<body>
    
</body>
</html>

```
---
### Add link to the files
Minimal html structure

```HTML
<div class="px-2 w-full mb-4 md:w-1/2 lg:w-1/3">
  <section class="shadow bg-white accordion js-accordion">
    <!-- first element  -->
    <article class="border-b overflow-hidden"> 
      <!-- header -->
      <header class="js-toggler border-l-2 border-transparent flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
        <span class="text-gray-600 font-thin text-lg">title1</span>
        <div class="js-icon rounded-full w-7 h-7 flex items-center justify-center" style="transform: rotateZ(0deg);">
          <!-- icon by feathericons.com-->
          <svg aria-hidden="true" data-reactid="266" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>
      <!-- content -->
      <article class="border-b" style="transition: all 0.36s ease-in-out 0s; height: 0px;">
        <div class="border-l-2 bg-gray-200 border-indigo-400">
          <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"><span class="text-indigo-400 font-thin text-xl">smallTitle</span></header>
          <div>
            <div class="pl-8 pr-8 pb-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sequi?</div>
          </div>
        </div>
      </article>
    </article>
    <!-- second element  -->
    <article class="border-b overflow-hidden"> 
      <header class="js-toggler border-l-2 border-transparent flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"><span class="text-gray-600 font-thin text-lg">title2</span>
        <div class="js-icon rounded-full w-7 h-7 flex items-center justify-center" style="transform: rotateZ(0deg);">
          <!-- icon by feathericons.com-->
          <svg aria-hidden="true" data-reactid="266" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>
      <article class="border-b" style="transition: all 0.36s ease-in-out 0s; height: 0px;">
        <div class="border-l-2 bg-gray-200 border-indigo-400">
          <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"><span class="text-indigo-400 font-thin text-xl">smallTitle</span></header>
          <div>
            <div class="pl-8 pr-8 pb-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sequi?</div>
          </div>
        </div>
      </article>
    </article>
    <!-- third element  -->
    <article class="border-b overflow-hidden"> 
      <header class="js-toggler border-l-2 border-transparent flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"><span class="text-gray-600 font-thin text-lg">title3</span>
        <div class="js-icon rounded-full w-7 h-7 flex items-center justify-center" style="transform: rotateZ(0deg);">
          <!-- icon by feathericons.com-->
          <svg aria-hidden="true" data-reactid="266" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>
      <article class="border-b" style="transition: all 0.36s ease-in-out 0s; height: 0px;">
        <div class="border-l-2 bg-gray-200 border-indigo-400">
          <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"><span class="text-indigo-400 font-thin text-xl">smallTitle</span></header>
          <div>
            <div class="pl-8 pr-8 pb-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sequi?</div>
          </div>
        </div>
      </article>
    </article>
  </section>
</div>

```
---

### Options
  there are tree options (boolean)
 - closeAllAtStart: false / true -> all bodies element not visible 
 - oneVisible: false / true -> only the first body element visible 
 - openAllAtStart: false / true -> all bodies elements visible  

### Init the plugin

Add script tag on html and call the class
for each accordion init the class

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
    ...

    <!-- call and init the class -->
    <script>
      import Accordion from './plugins/Accordion.js'
      // wait for loading page
      window.addEventListener('load', function () {
        // add options for the HTML class .js-accordion
        const acc1 = new Accordion('.js-accordion', {
          closeAllAtStart: true,
          oneVisible: false
        })
        // init the plugin class for the HTML class .js-accordion
        acc1.init()

        // add options for the HTML class .js-accordion-2
        const acc2 = new Accordion('.js-accordion-2')
        // init the plugin class for the HTML class .js-accordion-2
        acc2.init()
        
        // add options for the HTML class .js-accordion-3
        const acc3 = new Accordion('.js-accordion-3', {
          closeAllAtStart: false,
          oneVisible: false,
          openAllAtStart: true
        })
        // init the plugin class for the HTML class .js-accordion-3
        acc3.init()
      })
    </script>
</body>
</html>
````
---

##### Version
1.2

