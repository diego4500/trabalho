# Promise, Async e Await
Nesse aprendizado pratiquei algumas situações desde o que é uma promise, calback, async e await. Essas funções em conjunto tem o objetivo em um comportamento assíncrono deixar síncrono trazendo segurança e confiabilidade na requisição de dados. 
No Node.JS como o Javascript tem um comportamento assíncrono, ou seja, não aguarda uma requisição para seguir o fluxo, com isso tendo uma maior velocidade em poder executar várias execuções ao mesmo tempo. E muito momentos vamos precisar
de ter um comportamento síncrono onde cada etapa precisa-se de dados da estapa anterior. Para essa solução temos o promise, async e o await. Com eles podemos deixar parte do código síncrono. Veja um exemplo abaixo: <br>
Fluxo síncrono: <br>
1 - Dados inseridos <br>
2 - Dados recolhidos <br>
3 - Dados salvo no banco de dados <br>

Fluxo assíncrono: <br>
2 - Dados recolhidos <br>
3 - Dados salvo no banco de dados <br>
1 - Dados inseridos <br>
