## Git Flow


* Fecteare - Funcionalidade
* Develope - Onde ocorre o desenvolvimento ativo. Apartir deles, criamos ramos auxiliarespara feature, hotfix, bugfix, release
* Hotfixes - Correções críticas
* Branchs - Galhos do repósitório
* Branchs Master
* Release - lançamentos
* Spike
  <br>


Git Flow são comandos padronizados (quando instala a extensão) para criar, finalizar e gerenciar branches.
feature - novas funcionalidades
release - para preparar uma nova versão
hotfix - correção rápidas de bug em produção
develop - ramo de desenvolvimento
main / master - ramo da produção

### Simulando o Git Flow

1 - Primeiramente crie um repositório no git hub <br>
2 - selecione com REDME.MD e é criado a main <br>
3 - Em seguida copie o https link do git bash e cole do lado do git clone

---   
    git clone https://github.com/diego4500/git-flow.git
---  
Comando para abrir o VS Code:
---   
    code .
--- 

### Criou-se a branch main ou master - Aqui está o projeto em produção


---   
    git flow init
---  

![{A4243CF5-C3A6-48FA-8C99-3DC5BB2F9FF7}](https://github.com/user-attachments/assets/927d1197-74c6-4e5e-8a37-3d2328fdb85d)
![{4AE5FF0D-0B23-4B35-AA80-1514827A4F0D}](https://github.com/user-attachments/assets/3f387272-b563-41b0-afee-8178a129b25e)

Criei um arquivo html, ao dar o comando "git status" já me mostra que possui arquivo ou pasta para ser commitado. Outro detalhe é que 
já estou na develop. O "git add ." coloca tudo que é novo na área de stage, ou seja, esperando commit. 

---   
    git status
    git add .
--- 

![{52ADB603-FC50-4352-8D84-6B8543F2A147}](https://github.com/user-attachments/assets/83c9888f-0b52-44d7-b859-748825df1725) <br>

Em seguida foi dado o commit na develop <br>
![{AAE8850E-2388-41E6-B81C-998C98763A6C}](https://github.com/user-attachments/assets/d459ea81-0d9d-4c01-a930-3a9235d5df7e)<br>

Perceba que esse arquivo que criamos index.html está na branch develope. Ao dar um "git checkout na main esse arquivo não existe porque ainda não demos um push na main.

![image](https://github.com/user-attachments/assets/5c6a6fee-0105-428b-99e6-a426debf649d)

Ao dar o comando "git banch" é exibida todas as banchs criadas
![{62C4F699-2124-40B9-8610-2558F818F8A9}](https://github.com/user-attachments/assets/c41cbb6c-8da6-43d6-96dd-82c5f86fa5a3)






