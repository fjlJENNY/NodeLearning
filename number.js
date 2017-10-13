var ch_num = {
	"0":"零",
	"1":"一",
	"2":"二",
	"3":"三",
	"4":"四",
	"5":"五",
	"6":"六",
	"7":"七",
	"8":"八",
	"9":"九",
	"10":"十",
	"100":"百",
	"1000":"千",
	"10000":"万"
}
var str = "";
function numberChange(num){
	
	var num0  = num % 10 ;
	str = ch_num[num0] + str;

	var lastNum = (num - num0 )/10;
	console.log(str ,lastNum);
	if(lastNum<1){
		console.log(str);
		return str; 
	}
	numberChange (lastNum); 
}
// 为什么打印的是 undefined
console.log(numberChange(111));