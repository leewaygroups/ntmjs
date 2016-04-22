[gmail](mailto:glydenjs@gmail.com) | [facebook](https://www.facebook.com/100009001120071) | [twitter](https://twitter.com/glydenjs) | [linkedin](https://www.linkedin.com/in/colton-colcleasure-73732293) | [medium](https://medium.com/@glyden)

![GLYDENJS](http://s31.postimg.org/sqatwegqj/ntm_glyden.jpg)


# **ntm** | *<small>a build tool to end build tools</small>*

## **ntm** has access to each of npm's 280,000 packages, introduces beautiful and friendly syntax, and `all your builds belong to it.`


Many respectable web developers vouch for npm as a build tool and task runner, but none of them are afraid to admit that declaring tasks inside of your package.json is far from appealing and can quickly become a nightmare to navigate.

- [Give Grunt the Boot | SitePoint](http://www.sitepoint.com/guide-to-npm-as-a-build-tool/)
- [Introduction to Using NPM as a Build Tool](https://medium.com/@dabit3/introduction-to-using-npm-as-a-build-tool-b41076f488b0)
- [Why npm Scripts? | CSS-Tricks](https://css-tricks.com/why-npm-scripts/)
- [Using npm as a Build Tool for Your Next Project](https://drublic.de/blog/npm-builds/)
- [NPM as a Build Tool](http://clickherelabs.com/2016/03/npm-as-a-build-tool/)
- [Yo dawg, I heard you like build tools...](http://amsul.ca/2015/11/06/yo-dawg-i-heard-you-like-build-tools/)

#### I, too, believe that our day to day build tasks can be handled without extravagant and well branded task runners, but I also believe that there should be beauty in code. *Something that npm surely ~~does~~ did not offer.*

> On April 20th at 4am I woke up, frustrated with the capricious nature of the task runners I had been dealing with, and tweeted that I would build a tool to render Gulp and Grunt (as well as their 37 counsins and nephews) obsolete, and that I would do so in 36 hours, never having touched Node.js in my life. Exactly 36 hours later, I had this semi-functional prototype of ntm. Although this is not a working application just yet, it is well on its way and very capable of everything I had originally imagined.

## *THIS APPLICATION IS NOT FUNCTIONAL*

---

# **SYNTAX**

---


#### The ntm *language* is very beautiful and easy to comprehend. The language is compiled, not into JavaScript, but into command line scripts that allow you to leverage the full potential of npm as a build tool/task runner without the hell that accompanies working out of the `package.json` 'scripts' object.


On line one of your `tasks.ntm` file, begin by stating all of the different tools/modules you plan to utilize throughout your `tasks.ntm` file. Seperate them between lines, place them in an array, whatever you like. One of the only rules is that your requirement list must end with GO-NTM.

```
// tasks.ntm //

stylus coffee-script babel-cli
type-script sass stylus less post-css

GO-NTM
```

## There are few rules pertaining to defining tasks.

The first rule is that the block must open with the task name followed by a colon, and the last line must be a colon followed by the task name. The second rule is that paths must be contained in square brackets. The last rule is that keywords, paths, and module names must be separated with single spaces. (This will become more flexible in the future.)

```
compile-stylus:
    stylus [./src/stylus/*.stylus] -> [./dist/js/]
    then uglify it
    while concat it
    and watch origin
:compile-stylus


compileAndWatchCoffee:
    coffee [./**/*.coffee] to [./dist/js/]
    > concat them
    and uglify [./**/*.css]
    then watch origin
:compileAndWatchCoffee


main:
  @compileAndWatchCoffee
  + @compileStylus
:main

```

ntm offers keywords that save you time, effort, and keystrokes. There are three categories of keywords: reference keywords, chaining keywords, and concurrency keywords. Keyword are *not* case sensitive.

## Reference Keywords | `it` `them` `origin` `origins`
  The keywords it and them provide identical functionality: acting as a variable holding the most recently parsed path. The only difference is the cases in which each should be used. If the previous [path] in the task block is a singular file or folder, using the it keyword makes sense to use. If the most recent path refers to multiple files or directories, them will make your code more readable.
  
  origin is similar to a variable that holds the value of the first path found in the entire task block, and origins refers to all paths that are the first in their row and directly following a module name.

## Chaining Keywords | `then` `next` `>`
  Each of these keywords indicate that the following module will be called to perform its task only when the previous task has been completed.

## Concurrency Keywords | `while` `and` `+`
  Each of these keywords indicate that the following module can and will be called to perform its task at the same time as the previous task. These keywords should only be used on unrelated tasks, such as compiing Sass and Linting JavaScript. *You don't want to uglify and concatenate the same files at the same time.*
  
## @ Token | `@taskName`
  While not a keyword, the @ token followed by a task name will import that task into the current task block. With the @ token, it is possible to define all of your individual tasks and then mix and match them to create larger build tasks.

# **ntm === npm && npm === ntm**

ntm is npm, and that is all there is to it. Upon calling a task in your `tasks.ntm` file, the ntm styntax used to build the task definition is compiled direcly into the form of a script you would find in your `package.json` file and run in your terminal.

For example, if you have a task definition that includes `stylus [./src/styl/*.styl] to [./dist/css/]`, this like will be literally translated to `stylus ./src/styl/*.styl --out ./dist/css`, an executable command that Stylus users will be quite familiar with.
