function* gen() {

    yield 1;
    yield 2;
    yield 3;
    
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array){

    for (let iterator of array) {
        
        yield iterator;
        
    }

}

const it = iterate(['Daniel', 'Isabella', 'Juan', 'Diego']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);