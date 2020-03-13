# Week 10 Response
## Date 3-23-20
## MART441.50, Julia Ballas


## Overview

Databases. This week we are collecting information from a datasource and displaying it in a meaningful way using jQuery and AJAX.

## Projects

- Meterorites
- JS Plugin

## Process

- simple html
- Coding
  - Add jQuery to show JSON
- Brainstorm Ideas for showing Data meaningfully/JQuery plug-in ideas
- Add CSS style
- JQuery Plug-in

As recommend I started with taking a small json file and trying to display it. I ran straight into a issue with 'cross-origin-request error'. Despite the fact I was using Firefox, it needed my json to be a secure link, so I hard coded to by github source. Only it still didn't work because my I'd edited my json file and left out the end of a bracket. So, after struggling and debugging for a while with console-log, copied straight from Jquery's website, and using another json file, I finally got my display, which consisted of [object Object][object Object], which is not meaningful yet.


references
https://www.w3schools.com/jquery/ajax_getjson.asp
https://api.jquery.com/jQuery.getJSON/
https://api.jquery.com/jquery.each/

To only display part of a string, I used the `.substr(0,4)`, which I discovered here:
https://stackoverflow.com/questions/3414916/display-only-10-characters-of-a-long-string

## Problems or Issues this week

## Specific questions/concerns for next week

## Conclusion
