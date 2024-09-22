let l = [1, 2, 3, 4];
console.log(l);

let l2 = [];
// l2.push(1);
// l2.push(2);
// l2.push(3);
// console.log(l2);
l2.push(2)
l2.push(3)
console.log(l2)



let l3 = [];
l3.push(...[1,2,3,4,5])
console.log(l3);

let n=l3.length
for(let i=1;i<=n;i++){
    console.log(i)
}
for (let i of l3) {
    console.log("Numbers Acess--->",i);
}

// // index
// for (let [i, j] of l3.entries()) {
//     console.log(i, j);
// }

for (let [i,j] of l3.entries()){
    console.log(i,j)
}

// // Access Data
console.log(l3[0]);
console.log(l3[l3.length-1])
console.log(l3.slice(0, 4));
// console.log(l3.slice(1, 4).filter((_, index) => index % 2 === 0));
console.log(l3.slice(0,5).filter((_,index)=>index%2==0))
console.log(l3.slice(-5, -1));

// // reverse
// [ 1, 2, 500, 3, 4, 5 ]
console.log(l3.slice().reverse());

// // insert
l3.splice(2, 0, 500);
console.log(l3);

// // remove
let index = l3.indexOf(500);
console.log("index--->",index)
if (index > -1) {
    l3.splice(index, 1);
}
console.log(l3);

// // count
let count = l3.filter(x => x === 1).length;
console.log("count", count);

// // sorted
console.log([...l3].sort((a, b) => a - b));
console.log([...l3].sort((a,b)=>b-a));

// // Update data based upon index
l3[0] = 100;
console.log(l3);

// // convert int to string
let l4 = ["1", "2", "3",9,900];
console.log(l4.map(Number));

console.log(typeof(l4[3]))





let l5 = ["hi", "HELLO"];
let res = [];

for (let i of l5) {
    if (i === i.toUpperCase()) {
        res.push(i.toLowerCase());
    } else {
        res.push(i.toUpperCase());
    }
}

console.log(res);


let l9=[1,1,1,1,2,2,2,2,3,3,3]
let result={}
for (let i of l9){
    if (i in result){
        result[i]+=1
    }
    else{
        result[i]=1
    }
}
console.log(result)


// let d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0};

// console.log("Keys",Object.keys(d))
// console.log("values",Object.values(d))

// let d13 = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0};
// console.log("D",d13)

// // Print keys
// console.log("keys",Object.keys(d13));

// // Print values
// console.log("Values",Object.values(d13));

// // Print key-value pairs
// console.log(Object.entries(d13));

// // Loop through key-value pairs
// for (let [k, v] of Object.entries(d13)) {
//     console.log(k, v);
// }



let d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0};

// Convert the object to an array of key-value pairs
let entries = Object.entries(d);

// Sort the array of key-value pairs by the value in descending order
entries.sort((a, b) => b[1] - a[1]);

// Convert the sorted array to a Map
let sortedMap = new Map(entries);

// Convert the Map back to an object (if needed)
let sortedDict = Object.fromEntries(sortedMap);

console.log(sortedDict);


let l43 = "raju";
console.log(Array.from(l43));

let l21 = "raju babu";
let res1 = l21.split(" ");
console.log(res1);

let l12 = "Rahul babu";
let l13 = l12.split(" ").join(",");
console.log(l13);

console.log('b'.charCodeAt(0));
console.log(String.fromCharCode(97));


let yi=[2,3,4,5,6,7,8,9]
const even=yi.filter((item)=>item%2==0)
console.log("even numbers",even)

const add_5=yi.map((item)=>item+5)
console.log("adding numbers",add_5)

const find_num=yi.find((item)=>item==5)
console.log("number exists",find_num)
