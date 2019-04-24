function convertToRoman(num) {
var myArray = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V": 5, "I": 1};
var romanLetter = ["M", "D", "C", "L", "X", "V", "I"];
    var flag=false;
    var roman="";
    var i=0;
	var j=0;
	var count = 0;
	var next = romanLetter[2];
	while(num>0) {
	 var current = romanLetter[i];
	 if(j===2) {
	   next = romanLetter[i+2];
	   j=0;
	 }
	 
	 if(myArray[current]>num && (myArray[current]-myArray[next])>num) {
	  i++;
	  j++;
	 } else if(myArray[current] === num) {
	   roman = roman.concat(current);
	   break;
	 } else if(myArray[current]<num) {
	   roman = roman.concat(current);
	   num = num - myArray[current];
	 } else if(myArray[current]>num && (myArray[current]-myArray[next])<=num) {
	 roman = roman.concat(next);
	 roman = roman.concat(current);
	 num = num - (myArray[current]-myArray[next]);
	 }
		
	}

  return roman;
}

console.log(convertToRoman(3999));