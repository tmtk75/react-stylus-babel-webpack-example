export function sum(x, y) {
  return x + y;
}
export var PI = 3.141592;

var p = new Promise((resolve, reject)=>{resolve();});
//module.exports = p;

p.then(()=>{
  console.log(`then
      multi-columns
      `, 1);
});

