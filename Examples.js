// 1) promise
    const url = ''

    fetch(url)
    .then(function(res) {
        // do something when there is a resposnse
        return res.json()
    })
    .then(function(json){
        // then with that response js does something
        return ({
            importDate: json.importDate,
        })
    })
    .then(function(data) {
        // then here json would do someting
        console.log(data )
    })
    .catch(function(err) {
        // handles every error from above
    })

// 2) async/await 
    function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
        });
    }
    
    async function add1(x) {
        const a = await resolveAfter2Seconds(20);
        const b = await resolveAfter2Seconds(30);
        return x + a + b;
    }
    
    add1(10).then(v => {
        console.log(v);  // prints 60 after 4 seconds.
    });

// 3) this 
    const person = {
        name: 'Jordan',
        greet: function() {console.log(this.name)}
    }
    person.greet() // Jordan

    const friend = {
        name: 'David'
    }
    friend.greet = person.greet
    friend.greet() // David

    const greet = person.greet
    greet() // undefined

// 4) Замыкание в js
    let sayHello = "Hello"

    function say(toName) {
        console.log(sayHello + " " + toName)
    }

    say("Mansur") // Hello, Mansur

// 5) Стрелочные функции в js
    const test = {
        name: 'test object',
        createAnonFunction: function() {  // normal function
        return function() {
            console.log(this.name);
            console.log(arguments);
        };
        },
    
        createArrowFunction: function() { // arrow funtion
        return () => {
            console.log(this.name);
            console.log(arguments);
        };
        }
    };

    const anon = test.createAnonFunction('hello', 'world'); // undefined
    const arrow = test.createArrowFunction('hello', 'world'); // test object, {'0': 'hello', '1': 'world' }
