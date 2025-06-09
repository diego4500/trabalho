## Git Flow


* Fecteare - Funcionalidade
* Develope - Onde ocorre o desenvolvimento ativo. Apartir deles, criamos ramos auxiliarespara feature, hotfix, bugfix, release
* Hotfixes - Correções críticas
* Branchs
* Branchs Master
* Release - lançamentos
* Spike
  <br>
![image](https://github.com/user-attachments/assets/9a7308e4-1518-4d5c-87d1-95e4d3c2d532)




Git Flow não é o git, ele é um modelo de ramificação para projetos versionados com git. Ele organiza o repositório em ramos principais e auxiliares, facilitando a colaboração entre desenvolvedores e controle das versões.
No Git Flow os dois ramos principais são: o main, que guarda o código pronto para produção, e o develop, onde ocorre o desenvolvimento ativo. A partir deles, criamos ramos auxiliares para funcionalidades (feature), correções críticas (hotfix), ajustes de bugs (bugfix) e preparação para lançamentos (release). Cada tipo de branch tem um papel específico no fluxo de trabalho e é integrado de volta ao projeto no momento adequado.
<br>

###Exemplo de fluxo Git Flow: desenvolvimento e entrega da versão 1.0.0
1. Inicialização do repositório com Git Flow. Main como branch de produção. Develop como branch de desenvolvimento. (git flow init)
2. Criação de uma nova funcionalidade: Tela de Login. Um branch feature/tela-login é criado a partir de develop. Você desenvolve a funcionalidade normalmente (commits, push etc).(git flow feature start tela-login / git flow feature finish tela-login)
3. Criação da Release 1.0.0. Um branch release/1.0.0 é criado a partir de develop. Aqui você pode: Corrigir pequenos bugs, atualizar a versão do código, preparar documentação. A branch é: Mesclada em main, mesclada de volta em develop, excluída automaticamente.
4. Problema urgente em produção: Hotfix - Um branch hofix/correcao-login é criado a partir de main. Aqui é corrigido o bug criticamente e commita. A correção é: mesclada em main, mesclada em develop.

Resultado final: main contém versões estáveis. Develop continua com desenvolvimento contínuo. Todas as features, releases e hotfixes foram integradas de forma organizada e rastreável.




