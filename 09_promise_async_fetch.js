async function buscarPosts(id){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resposta.json();
    posts.forEach(element => {
        if(element.id === id){
            console.log(element.title);
        }
    });
}

buscarPosts(19);
