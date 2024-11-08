function firstNonRepeatedChar(str) {
 // Write your code here
	let count = {};
	str.split('').forEach((char)=>{
		count[char] = (count[char] || 0) + 1 ;
	})
	let nonRepeatedChar =  str.split('').find(char => count[char] == 1);
	return nonRepeatedChar
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
