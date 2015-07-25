# Install

		npm install string_editor

#Example code
```js
String Editor, add, remove  any part of string.
		var stringEditor = require('string_editor');

		var stringEditor = new stringEditor();

		var sourceString = ' JavaScript is one of the 3 languages all web developers must learn: \n' +
			'\t1. HTML to define the content of web pages \n' +
			'\t2. CSS to specify the layout of web pages \n' +
			'\t3. JavaScript to program the behavior of web pages \n' +
			'This tutorial is about JavaScript, and how JavaScript works with HTML and CSS.';

		console.log('\n----START SOURCE_STRING ----\n' + sourceString + '\n----END SOURCE_STRING ----\n');

		stringEditor.start(sourceString); // start editing
		stringEditor.addFrom(' js ', 'JavaScript'); // ' js ' add first 'JavaScript'
		stringEditor.go('\n'); // copy from current index  to '\n'.
		stringEditor.jump('\n', 2); // copy from current index 2 times to '\n'.
		stringEditor.go('\n'); // again copy  from current index to '\n'.
		stringEditor.addStr(' STRING_EDITOR\n\t'); // add to current index
		stringEditor.addFrom(' JS ', 'JavaScript'); // add to  from current index to  'JavaScript'
		var res = stringEditor.finish(); // finish build returns new string.

		console.log('\n----START RESULT_STRING ----\n' + res + '\n----END RESULT_STRING ----\n');
```
