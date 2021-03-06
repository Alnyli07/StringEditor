
String Editor, add, remove  any part of string.

[![Build Status](https://travis-ci.org/Alnyli07/StringEditor.svg?branch=master)](https://travis-ci.org/Alnyli07/StringEditor)

[![NPM](https://nodei.co/npm/string_editor.png?compact=true)](https://www.npmjs.com/package/string_editor/)

# Install

		npm install string_editor

# Example code

```js
var StringEditor = require('string_editor');
var stringEditor = new StringEditor();

var sourceString = ' JavaScript is one of the 3 languages all web developers must learn: \n' +
	'\t1. HTML to define the content of web pages \n' +
	'\t2. CSS to specify the layout of web pages \n' +
	'\t3. JavaScript to program the behavior of web pages \n' +
	'This tutorial is about JavaScript, and how JavaScript works with HTML and CSS.';

console.log('\n----START SOURCE_STRING ----\n' + sourceString + '\n----END SOURCE_STRING ----\n');

stringEditor.start(sourceString); // start editing
console.log(stringEditor.addFrom(' js ', 'JavaScript'); // ' js ' add first 'JavaScript'
console.log(stringEditor.go('\n'); // copy from current index  to '\n'.
console.log(stringEditor.jump('\n', 2); // don't copy from current index 2 times to '\n'. (likes remove)
console.log(stringEditor.go('\n'); // again copy  from current index to '\n'.
stringEditor.addStr(' STRING_EDITOR\n\t'); // add to current index
console.log(stringEditor.addFrom(' JS ', 'JavaScript'); // add to  from current index to  'JavaScript'
var res = stringEditor.update(); // update editing, returns new string. (same like call finish then start ).

console.log('\n----START RESULT_STRING ----\n' + res + '\n----END RESULT_STRING ----\n');

console.log(stringEditor.remove('JavaScript', 'CSS')); // remove between from , to strings.
console.log(stringEditor.addFrom('CSS', 'JavaScript'));
console.log(stringEditor.jump('\n', 2));
console.log(stringEditor.go('\n', 3));
stringEditor.addStr(' STRING_EDITOR\n\t');
res = stringEditor.finish(); // finish editing and returns new string.

console.log('\n----START RESULT2_STRING ----\n' + res + '\n----END RESULT2_STRING ----\n');

// output:
/** 
----START SOURCE_STRING ----
 JavaScript is one of the 3 languages all web developers must learn:
        1. HTML to define the content of web pages
        2. CSS to specify the layout of web pages
        3. JavaScript to program the behavior of web pages
This tutorial is about JavaScript, and how JavaScript works with HTML and CSS.
----END SOURCE_STRING ----

true  // result of addFrom(' js ', 'JavaScript')
1     // result of go('\n')
2     // result of jump('\n', 2)
1     // result of go('\n')
true  // result of addFrom(' JS ', 'JavaScript')

----START RESULT_STRING ----
 JavaScript js  is one of the 3 languages all web developers must learn:
        3. JavaScript to program the behavior of web pages
 STRING_EDITOR
        This tutorial is about JavaScript JS , and how JavaScript works with HTM
L and CSS.
----END RESULT_STRING ----

true  // result of remove('JavaScript', 'CSS')
false // result of addFrom('CSS', 'JavaScript')
0     // result of jump('\n', 2)
0     // result of go('\n', 3)

----START RESULT2_STRING ----
 JavaScript STRING_EDITOR
        CSS.
----END RESULT2_STRING ----
*/
```
