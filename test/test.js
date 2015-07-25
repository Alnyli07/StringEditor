var StringEditor = require('../lib/stringEditor');
var stringEditor = new StringEditor();

var sourceString = ' JavaScript is one of the 3 languages all web developers must learn: \n' +
	'\t1. HTML to define the content of web pages \n' +
	'\t2. CSS to specify the layout of web pages \n' +
	'\t3. JavaScript to program the behavior of web pages \n' +
	'This tutorial is about JavaScript, and how JavaScript works with HTML and CSS.';

console.log('\n----START SOURCE_STRING ----\n' + sourceString + '\n----END SOURCE_STRING ----\n');

stringEditor.start(sourceString);
stringEditor.addFrom(' js ', 'JavaScript');
stringEditor.go('\n');
stringEditor.jump('\n', 2);
stringEditor.go('\n');
stringEditor.addStr(' STRING_EDITOR\n\t');
stringEditor.addFrom(' JS ', 'JavaScript');
var res = stringEditor.finish();

console.log('\n----START RESULT_STRING ----\n' + res + '\n----END RESULT_STRING ----\n');