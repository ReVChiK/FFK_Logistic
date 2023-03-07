function getNumber(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getNumber(1, 10));
