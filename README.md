# Title: To Alter the World!

## Q4 Project Update Plan

The main reason why we would want to include persistant information in the website is to keep track of user data such as the user's name, grade, scores on tests, and the user's progress in the lessons. This will be done in two main parts of the website. First, after each lesson, there will be a short concept check to check if the user has mastered the lesson. This can be recorded in a checklist which would show which lessons the user has completed and the one that is suggested to be next. Second, there will be a quiz page wherein the user can answer concept checks, play related games, etc. The information from these activities will be stored as well in the server.

In order to implemen this well, it would be beneficial to have all of the pages to be in the handlebars format so that the user's data can be shown on every page. Moreover, there will also be a new user page where the user can view all of this information in one place with options to change information like the user's name or profile picture. Moreover, there should be options to delete the user's account or reset it.

Ex:

Type of data: User account data

purpose: for logging it to the site and enjoy special privileges in the site

structure in JSON format:

account {

&nbsp;&nbsp;&nbsp;&nbsp;username: text-string,

&nbsp;&nbsp;&nbsp;&nbsp;name: text-string,

&nbsp;&nbsp;&nbsp;&nbsp;password: text-string,

&nbsp;&nbsp;&nbsp;&nbsp;profile: text-link-to-the-uploaded-pix,

&nbsp;&nbsp;&nbsp;&nbsp;progress: [

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{topic: string, completed: boolean},

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{topic: string, completed: boolean},

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{topic: string, completed: boolean}

&nbsp;&nbsp;&nbsp;&nbsp;]

&nbsp;&nbsp;&nbsp;&nbsp;scores: [

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quiz-type: string, percent-score: float},

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quiz-type: string, percent-score: float},

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quiz-type: string, percent-score: float}

&nbsp;&nbsp;&nbsp;&nbsp;]

}

## CRUD:

Create - There will be a button at the center of the navigation bar to create an account to save user information.
Read - The data will be read mainly on the account page where all data will be shown.
Update - The data will be updated after every quiz, test, and lesson completion. The user can also change personal info.
Delete - There will be an option for the user to delete their account on the account page.

## Description

&nbsp;&nbsp;&nbsp;&nbsp;Welcome to To Alter the World! A comprehensive website dedicated to exploring the world of geometric transformations in math, including translation, rotation, and dilation. Here, you will find concise explanations, visual guides, and our ultimate interactive graphing model, allowing you to be visually familiar with the different transformations and understand how they work in geometry and beyond.

&nbsp;&nbsp;&nbsp;&nbsp;Whether you’re a student learning and looking to grasp the basics or a mathematical enthusiast diving deeper into geometric transformations, To Alter the World offers a learning experience that is both approachable and engaging! With our resources, you will gain a solid foundation in these essential topics. Start exploring our playground today to transform your understanding of math!

## Javascript:

&nbsp;&nbsp;&nbsp;&nbsp;Javascript will be used in the main page mainly through first, the effects in the title area. The title box will have a 3D model in the background which will be controlled by JS. Second, there will be many canvas objects throught the website, including the main page, that illustrate certain aspects of the topic. The shapes drawn in these areas will be controlled by JS. (An example of this is already shown in the current website) Finally, there could be various forms in the website for customer satisfaction, surveys, and possibly quizzes on the topic. These quizzes will be graded and recorde by JS.

## Outline:

### Graph of Recomended Viewing of Pages

(every page can be accessed from every other page, this is just now the website is intened to be traversed)
![Made Using: https://csacademy.com/app/graph_editor/](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/graph.png?v=1730881181147)
Made Using: [https://csacademy.com/app/graph_editor/](https://csacademy.com/app/graph_editor/)

### Key and Explanations of each Page

- M (main page)
  - The main page will consist of a title, introduction, and sample animations regarding transformations. The introduction would contain the definition of mathematical transformations and details on what users will learn throught he website. At the end will be a button to teleport to the page select part of the website. At the top will be a bar that only appears when the cursor is placed near the top area of the page. It will contain links to all the other pages of the website plus the website and company logo. (If we have time, we might be able to make a company website as well :3)
- 0 (page select)
  - The page select will contain the links to all of the content pages. The links will be beside visuals that give a glimpse about what the topic being discussed is about. Moreover, there will be a short description beside each button on what each lesson teaches.
- 1-n (content pages, the graph shows three)
  - Each of the content pages will contain text explaining the specific transformation being discussed, canvas objects that the user can interact with that demostrate the concepts, and questions/queries that will be shown to the user to confirm that they follow with the lesson. Moreover, there will be a summary at the bottom of the page with the important formulas and takeaways from each page. Some quiz questions or sample questions could also be contained in this area. These pages will have the same upper bar of the other pages and will also have a quick shortcut to the next topic at the very bottom.
- E (last page possibly containing a quiz and a sandbox for transformations)
  - This page is planned to contain two main things. The first is a quiz about all of the topics discussed in the previous lessons. After answering, the website, aside from showing the score, could also show the weak and strong points of the user and which topics they need to work on more. The second thing that may be in this page is a sandbox. This is mainly to let the user play around with the lessons that were taught. The sample canvas object in the prototype website right now is a preview of what the sandbox may be like, albeit rudementary.
- C (credits page)
  - The credits page will mainly contain the information about the authors, the sources that were used to make the main content of the website, websites that were of inspiration in making the website, the sources of the assets (such as photos, 3D models, etc.) that were used in the website, and finally micallaneous sources that could have been used for inspiration or other things.

## Wireframe

NOTE: The designs are not final and the color pallete, background, and shapes are not finalized

### Main Page

![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/1.png?v=1730895131672)
![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/2.png?v=1730895149684)
![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/3.png?v=1730895154432)

### Sample Content Page

![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/4.png?v=1730895166397)
![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/5.png?v=1730895169489)
![](https://cdn.glitch.global/d9fd9b47-0d9c-41c5-91fb-bc95d57d138c/6.png?v=1730895173073)

## Inspirations, Plans, Notes, and Other Micallaneous things

### Content & Java Inspirations:

[https://polypad.amplify.com/p](https://polypad.amplify.com/p)

Interactive Math

[https://mathigon.org/course/fractals/sierpinski](https://mathigon.org/course/fractals/sierpinski)

Interactive Math Lessons

[https://www.youtube.com/@3blue1brown](https://www.youtube.com/@3blue1brown)

How to explain complex math topics and present them in a visually interesting manner

### Design Inspirations:

[https://synchronized.studio](https://synchronized.studio)

The general aesthetic that we are going for

[https://bruno-simon.com](https://bruno-simon.com)

3D model inspiration

[https://www.youtube.com/watch?v=Bpb1HMTeKLE](https://www.youtube.com/watch?v=Bpb1HMTeKLE)

Transition and movement inspiration

[https://en.wikipedia.org/wiki/Vaporwave#:~:text=Vaporwave%20is%20a%20microgenre%20of,became%20well-known%20in%202015.](https://en.wikipedia.org/wiki/Vaporwave#:~:text=Vaporwave%20is%20a%20microgenre%20of,became%20well-known%20in%202015.)

The theme we are going for

[https://next.junni.co.jp/](https://next.junni.co.jp/)

Integration of 3D modeling and geometrical objects

### Plans

2nd Quarter: Main Page & Page Selection

Christmas Break: Planning for Content and Order of lesson Pages (could start with lesson page implementation)

3rd Quarter: Implementation of the Lesson Pages + End Page

Mid Quarter Break: Credits Page Start

4th Quarter: Credits page + Playtesters + Bugfixing + Better Design

### Notes

If you've made it this far, you deserve to know that before this idea, our original idea was a page dedicated to dementia and would kind of simulate it by the test and web-page deteriorating the more the user scrolled. However, this idea was scrapped because it proved to demanding on artistic skill and lacking in terms of JS application.

&gt;:3