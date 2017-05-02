/**
 * Print text in console.
 * 
 * @namespace Tools/Log 
 * 
 * */
 
/**
 * Print green text in console
 * @memberOf Tools/Log
 * @function Print
 * 
 * @param {String} _text - The text to print in console.
 * 
 */
function Print(_text)
{
	console.log('%c' + _text, 'background:#222; color:#bada55');
}

/**
 * Print red text in console
 * @memberOf Tools/Log
 * @function PrintErr
 * 
 * @param {String} _text - The text to print in console.
 * 
 */
function PrintErr(_text)
{
	//console.log('%c' + _text, 'background:#F00; color:#000');
	throw _text;
}

function PrintGrid(Array)
{
	let lines = [];
	lines[0] = "";

	for (let x = 0; x < Array.length; x++)
	{
		lines[0] += "|" + ((x.toString().length == 2) ? x : "0"+x);

		lines[x+1] = "";

		for (let y = 0; y < Array.length; y++)
		{
			lines[x+1] += "|" + ((Array[x][y].toString().length == 2) ? Array[x][y] : "0"+Array[x][y]);
		}

		lines[x+1] += "|"
	}

	for (let i in lines)
	{
		console.log(((i.toString().length == 2) ? i : "0"+i) + lines[i]);
	}
}