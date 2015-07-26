/**
 * String edit operations. It's very simple but very useful
 * @file stringEditor.js
 * @author Alnyli07
 * @version 1.1.5
 *
 */

/**
 *  Class string builder
 * 	@constructor StringEditor
 *
 */
var StringEditor = function() {
	var sourceStr = '';
	var outStr = null;
	var lastPos = null;

	/**
	 * start editing.
	 * @method start
	 * @param {string} string string that will be edited.
	 * @memberof StringEditor
	 */
	this.start = function(string) {
		sourceStr = string;
		outStr = [];
		lastPos = 0;
	};
	/** 
	 * Add string  in the current  string, from after searched index..
	 * @method addFrom
	 * @param {string} newStr new string that will be added.
	 * @param {string} strThatSearched string that searched in the current index.
	 * @memberof StringEditor
	 */
	this.addFrom = function(newStr, strThatSearched) {

		var pos = sourceStr.indexOf(strThatSearched, lastPos);
		var indent = '';
		if (pos > -1) {
			pos += strThatSearched.length;
			outStr.push(sourceStr.substring(lastPos, pos));
			if (!(newStr instanceof Array)) {
				outStr.push(newStr);
			} else {
				outStr.push(newStr.join(''));
			}

			lastPos = pos;
		}
	};
	/**
	 * Add string  in the current  string from after last position.
	 * @method addStr
	 * @param {string} string str that will be added.
	 * @memberof StringEditor
	 */
	this.addStr = function(str) {
		outStr.push(str);
	};
	/**
	 * jump not copy jumpped characters.
	 * @method jump
	 * @param {string} strThatSearched string that searched in the current index.
	 * @param {Number} num num of string  that will be jumpping .
	 * @memberof StringEditor
	 */
	this.jump = function(str, num) {
		var loop = 1;
		num && (loop = num);
		for (var i = 0; i < loop; ++i) {
			lastPos = sourceStr.indexOf(str, lastPos) + 1;
		}
	};
	/**
	 * move copy over the moved characters.
	 * @method move
	 * @param {string} strThatSearched string that searched in the current index.
	 * @param {Number} num num of string  that will be jumpping .
	 * @memberof StringEditor
	 */
	this.go = function(str, num) {
		var loop = 1;
		num && (loop = num);
		for (var i = 0; i < loop; ++i) {
			this.addFrom('', str); //use addFrom with empty string.
		}
	};

	/**
	 * finish editing.
	 * @method finish
	 * @return {string} new String that was craeted.
	 * @memberof StringEditor
	 */
	this.finish = function() {
		outStr.push(sourceStr.substr(lastPos, sourceStr.length));
		return outStr.join('');
	};
}

module.exports = StringEditor;