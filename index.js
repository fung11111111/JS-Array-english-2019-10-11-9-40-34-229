// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0;i<a.length;i++){
	a[i] = a[i]*2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

// case 1
var case1 = "";
for(let i=0;i<colors.length;i++){
	if(i != colors.length-1){
		 case1 = case1 + colors[i] + " ";
	}else{
		case1 = case1 + colors[i];
	}
}
console.log(case1);

// case 2
var case2 = "";
for(let i=0;i<colors.length;i++){
	if(i != colors.length-1){
		 case2 = case2 + colors[i] + "+";
	}else{
		case2 = case2 + colors[i];
	}
}
console.log(case2);

// case3
var case3 = "";
for(let i=0;i<colors.length;i++){
	if(i != colors.length-1){
		 case3 = case3 + colors[i] + ",";
	}else{
		case3 = case3 + colors[i];
	}
}
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(num1, num2) {
  return num2 - num1;
});
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findFrequent(arr)
{
    var itemMap = {};
    var maxEle = a[0];
    var maxCount = 1;
    for(var i = 0; i < arr.length; i++)
    {
        var tmp = arr[i];
        if(itemMap[tmp] == null)
            itemMap[tmp] = 1;
        else
            itemMap[tmp]++;  
        if(itemMap[tmp] > maxCount)
        {
            maxEle = tmp;
            maxCount = itemMap[tmp];
        }
    }
    return maxEle;
}
console.log(findFrequent(a));
