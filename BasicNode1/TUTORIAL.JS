const  SUM = (num1,num2) => num1 + num2;
const  PI = 3.14;
class SomeMathObject{
    constructor() {
        console.log('Object Created');
    }
}

// module.exports.SUM = SUM;
// module.exports.PI = PI;
// module.exports.SomeMathObject  = SomeMathObject;
module.exports  = {SUM : SUM, PI : PI, SomeMathObject : SomeMathObject};