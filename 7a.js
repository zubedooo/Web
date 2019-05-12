var stack_module = require('./7aStack');
var q_module = require('./7aqueue');

stk = [10,20,30,40,50]
q = [5,15,30,45,50]

stack_module.push(stk,100)
console.log(stk);

console.log(stack_module.pop(stk))
console.log(stk)

console.log(q)
q_module.add(q,500)
q_module.add(q,800)
console.log(q)
q_module.remove(q)
console.log(q)


//7aStack.js

var push = function(stk,item){
	stk.push(item);
}
var pop = function(stk){
	return stk.pop()
}

module.exports={
           push:push,
           pop:pop
}


//7aqueue.js

var add = function(q,item){
        q.unshift(item);
}
var remove = function(q){
        return q.pop()
}

module.exports={
        add:add,
	remove:remove
};
