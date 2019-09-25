let out1=function() {
    console.log('out1');
};
let out2=function() {
    console.log('out2');
};
//exports.out1 = out1;
//exports.out2 = out2;
module.exports = out1;
