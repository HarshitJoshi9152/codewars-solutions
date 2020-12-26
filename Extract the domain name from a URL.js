/* website:https://www.codewars.com/
 * url:https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 * description:
 * Write a function that when given a URL as a string, parses out just the 
 * domain name and returns it as a string. For example:
 *
 * domainName("http://github.com/carbonfive/raygun") == "github"
 * domainName("http://www.zombie-bites.com") == "zombie-bites"
 * domainName("https://www.cnet.com") == "cnet"
 */

function domainName(url) {
	console.log(url);
	let http = url.search(/https?/);
	console.log(http);
	url = url.replace(/https?:\/\/w?w?w?\.?/, "");
	url = url.replace(/.*\./,"")
	// make a regexp and use .exec method not the .test method 
	console.log(url)
}

// test
console.log(domainName("http://github.com/carbonfive/raygun") == "github");
console.log(domainName("http://www.zombie-bites.com") == "zombie-bites");
console.log(domainName("https://www.cnet.com") == "cnet");
console.log(domainName("www.xakep.ru") == "xakep");
console.log(domainName("http://google.com") == "google");
console.log(domainName("http://google.co.jp") == "google");
console.log(domainName("https://youtube.com") == "youtube");

