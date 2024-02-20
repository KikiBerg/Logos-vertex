# The Logos vertex! -  Testing

![The Logos vertex shown on a variety of screen sizes](documentation/testing/lv_mockup.webp)

Visit the deployed site: [The Logos vertex](https://kikiberg.github.io/Logos-vertex/)

Return back to the [README.md](README.md) file.

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C & JSHint Validators](#validators)
  * [Lighthouse](#lighthouse)
  * [Responsiveness](#responsiveness)
  * [Browser Compatibility](#browser-compatibility)

* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

* [BUGS](#bugs)


Testing was ongoing throughout the entire process of building the project. I utilised Chrome developer tools whilst building to pinpoint and troubleshoot any issues as I went along.
I used Chrome dev tools also to make sure and check responsivity on a variety of different screen sizes and devices.

- - -

## AUTOMATED TESTING

### W3C & JSHint Validators

[W3C](https://validator.w3.org/) was used to validate the HTML and CSS.
[JSHint](https://jshint.com/) was used to validate the Javascript.

#### W3C HTML Validator

Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Main page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkikiberg.github.io%2FLogos-vertex%2F) | ![screenshot](documentation/testing/testing_lv_html.webp) | Passed. No warnings or errors |


#### W3C CSS Validator

File | Screenshot | Notes |
| --- | --- | --- |
| style.css | ![screenshot](documentation/testing/lv_validator_newcss.png) ![screenshot](documentation/testing/testing_lv_css_warning.webp) | 1 warning on line 193 which I ignored. |

#### JSHint Javascript Validator

File | Screenshot | Notes |
| --- | --- | --- |
| style.css | ![screenshot](documentation/testing/testing_lv_js.webp) | Warnings about: 'const', 'let in ES6', 'arrow function syntax', 'template literal syntax in ES6'. I ignored these warnings. |

- - -

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

#### Desktop and Mobile Results

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Main page | ![screenshot](documentation/testing/testing_lv_lighthouse_mobile.webp) | ![screenshot](documentation/testing/testing_lv_lighthouse_desktop.webp) | Some minor warnings |

- - -

### Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues. No issues were found.
Apart from the Chrome Devtools, I've used [this site](http://www.responsinator.com/) to quickly check responsiveness on different devices and get screenshots for the testing.md file. The screenshots for desktop are from devtools.


`Main Page`

| Mobile | Mobile landscape | Tablet | Desktop | Pass/Fail |
| --- | --- | --- | --- | --- | 
| ![screenshot](documentation/testing/testing_lv_resp_mobile.webp)| ![screenshot](documentation/testing/testing_lv_resp_mobile_land.webp) | ![screenshot](documentation/testing/testing_lv_resp_tablet.webp) | ![screenshot](documentation/testing/testing_lv_resp_desktop.webp) | Pass. Works as expected |

- - -

### Browser Compatibility

I have tested my deployed project on two different browsers to check for compatibility issues. I could not find any issues.

| Browser | Main page |
| --- | --- |
| Chrome | ![screenshot](documentation/testing/testing_lv_resp_browser_chrome.webp) | 
| Edge | ![screenshot](documentation/testing/testing_lv_resp_browser_edge.webp) | 

- - -

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want the play this game both on my mobile and on my tablet. | I have developed the game with responsiveness in mind.|
| I want the game to be easy to use and navigate.| Clean buttons are used throughout the site for navigation, much like a mobile app.|

`Returning and Frequent Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to pick difficulty level.| Users will be able to choose between 3 different levels: easy, medium, difficult |
| I want to explore various language aspects, like words related to history, geography, politics, culture, etc.| Users will be able to choose between various knowledge areas and then related words will show up. |
| I want to achieve high scores to track my progress.| Users will be able to save their achievements. |

- - -

### Full Testing

Full testing was performed on the following devices:

* DESKTOP-24171KO
* Display: Apple 27" LED Cinema

`Main Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Alphabet button | Color should change to lighter | Hover | Color changes to lighter | Pass | ![screenshot](documentation/testing/testing_lv_ft_alphabet_hover.webp) |
| Disable an already chosen letter from being chosen again  | Color should change to lighter and letter should be locked | Choose letter | Color gets lighter and letter button is being locked | Pass | ![screenshot](documentation/testing/testing_lv_ft_alphabet_chosen.webp) |
| Refresh button | Color should change to green | Hover | Color changes to green | Pass | ![screenshot](documentation/testing/testing_lv_ft_refresh_button.webp) |
| Chances numbers | Chances should count upon choosing a letter  | Click | Chances start counting upon choosing a letter | Pass | ![screenshot](documentation/testing/testing_lv_ft_chances.webp) |
| Line under letter | It should disappear when choosing the right letter | Click | It disappears | Pass | ![screenshot](documentation/testing/testing_lv_ft_refresh_lineunderletter.webp) |
| Modal when failing| A window with a brown cat should pop up  | Click | A window with a brown cat pops up | Pass | ![screenshot](documentation/testing/testing_lv_ft_modalfail.webp) |
| Modal when winning| A window with a cat giving hi5 should pop up  | Click | A window with a cat giving hi5 pops up  | Pass | ![screenshot](documentation/testing/testing_lv_ft_modalwin.webp) |
| Try again button | Color should change to lighter | Hover | Color changes to lighter | Pass | ![screenshot](documentation/testing/testing_lv_ft_refresh_tryagainbtn.webp) |


- - -


## BUGS

I haven't encountered any bugs that I'm aware of.

