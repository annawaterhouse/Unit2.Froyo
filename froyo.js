const userObjectText = prompt(`Please enter a list of comma separated froyo flavors:`);
console.log(userObjectText);

const flavorArray = userObjectText.split(`,`);

console.log(flavorArray);

const flavorCounts = {};

for (const item of flavorArray) {
    if (flavorCounts[item]) {
        flavorCounts[item]++; 
    } else {
        flavorCounts[item] = 1; 
    }
}

console.table(flavorCounts);