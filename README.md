<small>On April 20th at 4am I woke up and tweeted that I would build a tool to render Gulp and Grunt (as well as their 37 counsins and nephews) obsolete, and that I would do so in 36 hours, never having touched Node.js in my life. Exactly 36 hours later, I had this semi-functional prototype of ntm. Although this is not a working application just yet, it is well on its way and very capable of everything I promised.</small>



<center>**GLYDEN** | [gmail](mailto:glydenjs@gmail.com) | [facebook](https://www.facebook.com/100009001120071) | [twitter](https://twitter.com/glydenjs) | [linkedin](https://www.linkedin.com/in/colton-colcleasure-73732293) | [medium](https://medium.com/@glyden)

<br>
<br>


![GLYDENJS](http://s31.postimg.org/sqatwegqj/ntm_glyden.jpg)</center>


# **ntm** | *<small>a build tool to end build tools</small>*

## **ntm** has access to each of npm's 280,000 packages, introduces beautiful and friendly syntax, and ***all your build are belong to it.***


Many respectable web developers vouch for npm as a build tool and task runner, but none of them are afraid to to admit that declaring tasks inside of your package.json is far from appealing and can quickly become a nightmare to navigate.

<small>*Hell, I just opted out of providing an example of a package.json's scripts section because it was so damn hideous.*</small>

***THIS APPLICATION IS NOT FUNCTIONAL*** *DO NOT TRY AT HOME*

---
<br>

# **Let's dive in and take a look at the syntax.**
*I am in need of somebody to help me create a new grammar/syntax highligting for ntm, so please contact me if you are interested in assisting with that.*  -**glydenjs@gmail.com**

---


### The ntm *language* is a very beautiful and easy to comprehend. The language is compiled, not into JavaScript, but into command line scripts that allow you to leverage the full potential of npm as a build tool/task runner without the hell that accomponies working out of the npm 'scripts' object.

*These are not real world examples. Please do not uglify while concatenating your files.*

```
// tasks.ntm //
stylus GO-NTM


compile-stylus:
    stylus [./src/stylus/*.stylus] -> [./dist/js/]
    then uglify it
    while concat it
    and watch origin
:compile-stylus

# then, while, and, +, and > are all keywords I have created for you to make your tasking more fluid and enjoyable.

# then, > | chainers
# while, and, + | concurrentenators™

# By following my 'stylus [path] to [path]' compiler with 'then uglify it', I have created a chained task that will not fire until the stylus compiler is finished.


compileAndWatchCoffee:
    coffee [./**/*.coffee] to [./dist/js/]
    > concat them
    and uglify [./**/*.css]
    then watch origin
:compileAndWatchCoffee

# it, them, origin, and origins all refer to previously used paths. origin will always refer to the very first path referenced in this task, origins will reference the very first path referenced after each module call, and it/them are the same thing, both referring to the most recent path reference. it and them are meant to be used accordingly to help you style and understand your code better.

# (i.e, if most recent path is a directory, use it as it refers to a singular thing. If most recent path was to a slew of files like [./path/**/*.*], use the them keyword. It just makes sense. :)


main:
  @compileAndWatchCoffee
  + @compileStylus
:main

BOOM. Now we have a main build task that uses multiple tasks that we have defined and runs them concurrently.
```


`stylus GO-NTM` is your module requirement. On line one of your `tasks.ntm` file, simple begin stating all of the different tools you plan to use in your tasking. Seperate them between lines, throw them in an array, whatever you like. One of the only rules is that your requirement list must end with GO-NTM.

## **I'm a believer in team spirit.** *What can I say?*

<br>

# The heart and soul of **ntm** `is` **npm**.

___
> ## 'npm is such a great build tool',they said

> ## 'it is just so verbose and such a mess', they said.

## **Here's ntm, I said.**


ntm is npm, and that is all there is to it. Although I believe is a more than a language, that it is a system based on a beautiful compiled syntax, deep down I know that when you call that `ntm do-a-task` command, it is the power of npm that shines through.

> 
>## And maybe... Just maybe. One day we can all see that the one we needed was here for us all along, ready to care for our every need. <3 **npm**     
> 


---
# **More docs and updates, coming soon. Star, watch, follow: do all the good things that you do, and check back daily.**