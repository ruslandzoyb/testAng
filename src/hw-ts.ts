class getMathCalc { 
    static add(x: number, y: number) {
        return x+y; 
    }
    static subtract(x: number, y: number) {
        return x-y; 
    }
    static multiply(x: number, y: number) {
        return x*y; 
    }
    static divide(x: number, y: number) {
        return x/y; 
    }

}

console.log(getMathCalc.add(8,7));
console.log(getMathCalc.subtract(8,7));
console.log(getMathCalc.multiply(8,7));
console.log(getMathCalc.divide(8,7));

