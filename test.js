const reverse = obj => {
    const rev = str => str.split("").reverse().join("");
    
    if (typeof(obj) === "string") 
        return rev(obj);
    
    return rev(obj.toString());
}

const swap = ([k, v]) => [v, reverse(k)];

const swapAndReverse = obj => Object.fromEntries(Object.entries(obj).map(swap));

const input = {"foo": "john", "bar": "lennon"};
const expected = {"john": "oof", "lennon": "rab"};
const output = swapAndReverse(input);

console.log(expected.john === output.john);
console.log(expected.lennon === output.lennon);
