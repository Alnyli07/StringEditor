/**
 *  String edit operations. It's very simple but very useful
 *  @author Alnyli07
 * 	@constructor StringEditor
 *  Class string editor
 *  You can edit any string this class.
 */
var StringEditor = function() {
	var sourceStr = '';
	var outStr = null;
	var lastPos = null;

	/**
	 * start editing.
	 * @method start
	 * @param {string} string string that will be edited.
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
	 * @return {Boolean} result if operation success returns true.
	 */
	this.addFrom = function(newStr, strThatSearched) {

		var res = false;
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
			res = true; // operation success.
		}
		return res;
	};
	/**
	 * Add string  in the current  string from after last position.
	 * @method addStr
	 * @param {string} string str that will be added.
	 */
	this.addStr = function(str) {
		outStr.push(str);
	};
	/**
	 * jump not copy jumpped characters.
	 * @method jump
	 * @param {string} strThatSearched string that searched in the current index.
	 * @param {Number} num num of string  that will be jumpping .
	 * @return {Number} num of searched string .
	 */
	this.jump = function(str, num) {

		var res = 0;
		var loop = 1;
		num && (loop = num);
		for (var i = 0; i < loop; ++i) {
			var index = sourceStr.indexOf(str, lastPos);
			if (index !== -1) {
				lastPos = index + str.length;
				++res;
			} else {
				break; // not need loop.
			}
		}
		return res; // num of searchoperations.
	};
	/**
	 * move copy over the moved characters.
	 * @method go
	 * @param {string} strThatSearched string that searched in the current index.
	 * @param {Number} num num of string  that will be jumpping .
	 * @return {Number} num of searched string .
	 */
	this.go = function(str, num) {

		var res = 0;
		var loop = 1;
		num && (loop = num);
		for (var i = 0; i < loop; ++i) {
			//use addFrom with empty string.
			if (this.addFrom('', str)) {
				++res;
			} else {
				break; // not need loop.
			}
		}
		return res; // num of searchoperations.
	};

	// control private function.
	function indexOf(str, fromPos) {

		return sourceStr.indexOf(str, fromPos);
	}

	/**
	 * remove string that from string between to string..
	 * @method remove
	 * @param {string} from from string that searched in the current index.
	 * @param {string} to to string that searched in the last index.
	 * @return {Boolean} result if operation success returns true.
	 */
	this.remove = function(from, to) {
		var res = false;
		var fromIndex = indexOf(from, lastPos);
		if (fromIndex !== -1) {
			var toIndex = indexOf(to, fromIndex);
			if (toIndex !== -1) {
				this.go(from);
				lastPos = toIndex;
				res = true;
			}
		}
		return res;
	};

	/**
	 * finish editing.
	 * @method finish
	 * @return {string} new String that was craeted.
	 */
	this.finish = function() {
		outStr.push(sourceStr.substr(lastPos, sourceStr.length));
		return outStr.join('');
	};

	/**
	 * update, same  call finish then start.
	 * @method update
	 * @return {string} new String that was craeted.
	 */
	this.update = function() {
		var resStr = this.finish();
		this.start(resStr);
		return resStr;
	};
}

module.exports = StringEditor;