# Spring 2025 Intro to Internet Programming — Assignment 3

☞ **Plagiarism in any form will result in failing the entire course. You’ve been duly warned.** ☜

* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Introduction・❖

Using **only** JavaScript **without** any external libraries, you are to implement three separate interactions that are commonly included in websites: a modal, a drop-down menu, and a side tray. All three should be implemented on the same page, and each of the interactions should transition smoothly over the course of 500 milliseconds between pre- and post-triggered states. You may use any transition function you’d like. The design of all three interactions is entirely up to you. Watch [this video](https://roy.vanegas.org/video/three-javascript-interactions.mp4) for an idea of what the final solution to this assignment should look like.

### The Modal

The modal should be triggered when a user clicks the “Show Modal” UI element. The modal you create can be any shape you desire, but must be visibly distinguishable from other elements on the page. The background of the modal must create an opaque layer between the focused, front-most UI element and the rest of the page. An example is available [here](http://ui-patterns.com/users/1/collections/modal-windows/screenshots).

The background layer of your modal must obscure the entire contents of your page by filling the viewport, even if either the drop-down menu or the side tray is showing. If the viewport is re-sized, the background of your modal must follow and re-paint the viewport. The only way the user should be able to exit the modal is by clicking on the background layer or pressing the `esc` key.

### The Drop-Down Menu

The drop-down menu and the side tray version of the drop-down menu are mutually exclusive, dictated by a 736-pixel breakpoint. The drop-down menu should *only* be shown at screen widths above 736 pixels when the “Show Menu” UI element is clicked.

The drop-down menu you create must reveal and hide itself under the `header`. The drop-down menu should be re-centered if the viewport is resized. That is, it should reflow.

### The Side Tray

The drop-down menu becomes a side tray at screen widths under 736 pixels. It should jut out of the page from the left. It may not scroll with the page. Design this as you’d like, but it should be clear to the user that what they’re seeing is a menu that is revealed and hidden from the left of the viewport.

### The Show Menu and Show Modal UI Elements

The UI elements that trigger the JavaScript interactions are two list items in the HTML under the ID `js-triggers`. Neither of the two should be obscured when either the drop-down menu or the left side tray is triggered. However, both *must* be obscured by the modal.

### Final Notes

If either the tray, the modal, or the drop-down menu is showing and the user resizes the viewport to the point where the 736-pixel threshold has been crossed, the page should return to the initial, newly-loaded state.

**Note**: *You may **only** work within the confines of the included scaffold.*

---

## ❖・Rules・❖

Before you begin, **update Node, NPM, ESLint, and Stylelint**

### General

* You *may* need to modify the `.gitignore` file at the root to accommodate your Gulp scaffold.
* There should not be any scroll bars on the page, either horizontal or vertical.
* Author your code according to the included `.editorconfig` rules. (**Do not alter**.)
* Validate/lint JavaScript according to the included `.eslintrc` rules. (**Do not alter**.)
* Validate/lint CSS according to the included `.stylelintrc.json` rules. (**Do not alter**.)

### HTML

* All the HTML required for this project is already in `index.html`. You may add classes or IDs to the elements, but no other editing is allowed. All DOM manipulations *must* take place via JavaScript.

### CSS

* You’re free to style this as you wish.
* All your CSS *must* go in `styles/main.css`.

### JavaScript

* Place *all* your JavaScript in `main.js`.
* Your code should not generate any ESLint errors, except warnings for line lengths.
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment.
* Avoid function hoisting; use only arrow functions. Should you need to defeat this rule, explain so in a comment.
* No variable hoisting; only `let` declarations. Again, should you need to defeat this rule, explain so in a comment.

### Task Running with Gulp

You must employ Gulp, **version 4.0.2**, as the task runner, with workflows for development and production. **Only include the tasks requested below.**

#### Development

* Your CSS must validate using the enclosed `.stylelintrc.json` file.
* Your JavaScript must validate using the included `.eslintrc.json` file.
* Your JavaScript must transpile to ES5.
* The development, or dev, track must validate CSS and JavaScript each time you save a `.css` or `.js` file.
* Additionally, the development track must also refresh the browser when any of these files have changed.
* `gulp` triggers the dev track.

#### Production

* The production, or prod, track must compress all the aforementioned languages. *Do not lint them*, as they will have already been linted in the development track.
* `gulp build` should load the entire production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page. **Note**: Check that your entire project works as a standalone web app in the `prod` folder. You can do so by moving the `prod` folder elsewhere in your file system before submitting, then launching `index.html`.

---

## ❖・Due・❖

Thursday, 10 April 2025, at 10:00 PM.

---

## ❖・Grading・❖

| Item                                                                   | Points |
|------------------------------------------------------------------------|:------:|
| All code is neat, professional, and formatted according to conventions |  `20`  |
| Desktop version of interactions work                                   |  `20`  |
| Mobile version of interactions work                                    |  `20`  |
| Gulp development and production scaffolds in place                     |  `20`  |
| Assignment rules followed                                              |  `20`  |

**Tip**: To ensure the files required by your project are not being ignored, you’re strongly advised to clone your repo into a different folder on your computer, or to a different computer altogether.

---

## ❖・Submission・❖

You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
