function generateTicket (n) {
    let arr = new Array(n);
    for(let i = 0; i<n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sumArray(arr){
    return arr.reduce((sum, currVal) => {
        return sum+currVal;
    }, 0)
}
export {generateTicket, sumArray};