function mincost(arr) {
	let totalCost = 0;
	arr.sort((a-b) => b-a);

	while(arr.length > 1){
		let currCost = arr[arr.length - 1] + arr[arr.length-2];
		totalCost += currCost;
		arr.pop();
		arr.pop();

		arr.push(currCost);
		arr.sort((a-b) => b-a);
	}
// tc:(n - 1) * nlogn => 

	
    // Sorting the array in non-decreasing order
	
    // arr.sort((a, b) => a - b);
    // let totalCost = 0;
    // // Loop until there is only one rope left
    // while (arr.length > 1) {
    //     // Take the two smallest ropes
    //     const rope1 = arr.shift();
    //     const rope2 = arr.shift();
    //     // Connect the two ropes and add the cost to the total
    //     const currentCost = rope1 + rope2;
    //     totalCost += currentCost;

    //     // Insert the connected rope back into the array in sorted order
    //     let index = 0;
    //     while (index < arr.length && arr[index] < currentCost) {
    //         index++;
    //     }
    //     arr.splice(index, 0, currentCost);
    // }

    return totalCost;
}

module.exports = mincost;
