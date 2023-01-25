let list = document.querySelector('#fizzBuzz')

for (let i=1; i<=100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
        let li = document.createElement('div')
        li.textContent = 'FizzBuzz'
        li.classList.add("col-2", "fizzbuzz", "p-1");
        list.append(li)
    }
    else if (i % 5 == 0){
        console.log("Buzz")
        let li = document.createElement('div')
        li.textContent = 'Buzz'
        li.classList.add("col-2", "buzz", "p-1");
        list.append(li)
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
        let li = document.createElement('div')
        li.textContent = 'Fizz'
        li.classList.add("col-2", "fizz", "p-1");
        list.append(li)
    }
    else {
        console.log(i)  
        let li = document.createElement('div')
        li.textContent = i
        li.classList.add("col-2", "num", "p-1");
        list.append(li)
    }
    
}