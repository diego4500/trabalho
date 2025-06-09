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


Git Flow não é o Git em si, mas sim um modelo de ramificação que organiza o desenvolvimento de projetos versionados com Git. Ele propõe uma estrutura padronizada para lidar com versões, novas funcionalidades e correções, facilitando a colaboração entre desenvolvedores e o controle eficiente do código-fonte ao longo do tempo.

Nesse modelo, os dois ramos principais são:

main: armazena o código pronto para produção.

develop: serve como base para o desenvolvimento contínuo.

A partir desses ramos principais, são criados ramos auxiliares com propósitos específicos:

feature/: para novas funcionalidades.

release/: para preparação de versões finais.

hotfix/: para correções urgentes em produção.

bugfix/: para ajustes menores e correções de erros durante o desenvolvimento.

Exemplo de fluxo com Git Flow: desenvolvimento e entrega da versão 1.0.0
Inicialização do repositório com Git Flow
O repositório é configurado com os ramos main (produção) e develop (desenvolvimento ativo).
Comando: git flow init

Desenvolvimento de uma nova funcionalidade
Por exemplo, ao criar a Tela de Login, um novo branch feature/tela-login é criado a partir de develop. A funcionalidade é implementada com commits e pushes.
Comandos: git flow feature start tela-login e git flow feature finish tela-login

Preparação da versão 1.0.0
Criamos o branch release/1.0.0 a partir de develop. Aqui são feitos os ajustes finais, como correção de pequenos bugs, atualização de versão e documentação. Essa branch é então:

Mesclada em main

Mesclada de volta em develop

Excluída automaticamente após a finalização
Comandos: git flow release start 1.0.0 e git flow release finish 1.0.0

Correção urgente em produção (Hotfix)
Se surgir um problema crítico, como um erro de login, criamos o branch hotfix/correcao-login a partir de main. A correção é realizada, e o branch é:

Mesclado em main

Mesclado em develop
Comandos: git flow hotfix start correcao-login e git flow hotfix finish correcao-login

Resultado final:
O ramo main contém apenas versões estáveis e prontas para produção, enquanto develop continua sendo o local de desenvolvimento contínuo. Todas as funcionalidades, correções e lançamentos são integrados de forma organizada e rastreável, promovendo uma gestão eficiente do ciclo de vida do software.
