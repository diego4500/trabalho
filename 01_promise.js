function rand(min, max) {
    min = min * 1000;
    max = max * 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Promise
function conexaoPromise(mensagem, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(mensagem);
            resolve();
        }, tempo);
    });
}

// Callback
function conexaoCallback(mensagem, tempo, callback) {    
    setTimeout(() => {
        console.log(mensagem);
        if (callback) callback();
    }, tempo);
}

// Desordenado (paralelo), agora "esperável"
function semOrdem (){
    console.log('\n==> Desordenado');
    // Espera todas terminarem
    return Promise.all([
        conexaoPromise('1 - Entrada de dados', rand(3, 10)),
        conexaoPromise('2 - Passando pela API', rand(3, 10)),
        conexaoPromise('3 - Passando pelo Service', rand(3, 10)),
        conexaoPromise('4 - Salvando no Banco de Dados', rand(3, 10)),
    ]);
}

// Encadeado por callback, agora “esperável”
function callback(){
    console.log('\n==> Callback (sequencial)');
    return new Promise(resolve => {
        conexaoCallback('1 - Entrada de dados', rand(3, 10), function() {
            conexaoCallback('2 - Passando pela API', rand(3, 10), function() {
                conexaoCallback('3 - Passando pelo Service', rand(3, 10), function() {
                    conexaoCallback('4 - Salvando no Banco de Dados', rand(3, 10), resolve);
                });
            });
        });
    });
}

// Promise (then)
function promise (){
    console.log('\n==> Promise (sequencial)');
    return conexaoPromise('1 - Entrada de dados', rand(3, 10))
        .then(() => conexaoPromise('2 - Passando pela API', rand(3, 10)))
        .then(() => conexaoPromise('3 - Passando pelo Service', rand(3, 10)))
        .then(() => conexaoPromise('4 - Salvando no Banco de Dados', rand(3, 10)))
        .then(() => console.log('Finalizou tudo (Promise)!'));
}

// Async/await
async function async_await(){
    console.log('\n==> Async/Await (sequencial)');
    await conexaoPromise('1 - Entrada de dados', rand(3, 10));
    await conexaoPromise('2 - Passando pela API', rand(3, 10));
    await conexaoPromise('3 - Passando pelo Service', rand(3, 10));
    await conexaoPromise('4 - Salvando no Banco de Dados', rand(3, 10));
    console.log('Finalizou tudo (Async/Await)!');
}

// Estrutura sequencial de verdade!
async function estrutura(){
    await semOrdem();
    await callback();
    await promise();
    await async_await();
}

// Rodar tudo
estrutura();
