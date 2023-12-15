function mincost(arr)
{ 
//write your code here
// return the min cost
	// sort tc : nlogn
	//normal key accessing: logn
	
let obj = {};
	//storing values as keys and its frequency as values in objecrs
	arr.forEach(item =>{
		 obj[item] ? obj[item]++ : (obj[item] = 1)
	});

	let totalCost = 0;
	let i = 1, n = arr.length;
	while(i <= n - 1){
		let [a,b] = Object.keys(obj)[0];
		if(obj[a] > 1){
			//if first element has freq more than 1
			let currCost=2 * a;
			if(obj[a] === 2) delete obj[a];
			else obj[a] -=2;
			//adding current cost to obj
			obj[currCost] ? obj[currCost]++ : obj[currCost]= 1;
			totalCost += currCost;
		}
		i++;
	}

module.exports=mincost;
