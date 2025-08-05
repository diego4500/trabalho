### Comandos git pra commitar e voltar 
git add . - adiciona os arquivos 
git commit -m "" - commit com o nome

### Voltar o arquivo do commite
Visualizar todos os commites                     commit git log --oneline
Visualizar um arquivo específico do commit       git checkout nºCommit -- nomeArquivo.txt


### Volta no diretório sem criar histórico
Obs.: Não pode ter arquivos para commitar
$ git checkout hashDoCommit

Copiando os arquivos do commit
mkdir "/c/Users/diego.rocha/Documents/copiaArquivos"
cp -r * "/c/Users/diego.rocha/Documents/copiaArquivos"

### Shelf (prateleira)
O Shelf é uma forma de salvar uma versão localmente sem commitar.
Para criar um Shelf é necessário haver alguma edição, ao editar e modificar no menu lateral em commit ficam os arquivos disponíveis para commitar ou shelf. <br>
<img width="1017" height="563" alt="image" src="https://github.com/user-attachments/assets/f539c2cf-3913-43b7-90b0-0b2d5ec2c891" /><br>
Selecione os arquivos que deseja criar um shelf<br>
<img width="720" height="504" alt="image" src="https://github.com/user-attachments/assets/c3aee757-4883-4c68-9c3b-439634261ca5" /><br>
Clique com botão direito e clique em Shelve Changes<br>
Inserir uma mensagem em Commit Message para identificação<br>
<img width="769" height="936" alt="image" src="https://github.com/user-attachments/assets/5ef9cf51-efc0-46e9-b400-80caefddaa7b" /><br>
<strong>Ao </strong>
Para restaurar basta clicar no menu "Commit" novamente, ir na aba "Shelf" e escolher o que deseja restaurar. <br>
Em seguida clique com botão direito e clique em "Unchelve". Em seguida clique em unchelf chance.<br>
Após clicar aparece uma outra tela pendindo para puxar a os dados do lado right ou left.
<img width="1140" height="676" alt="image" src="https://github.com/user-attachments/assets/45c12d86-07e1-48b9-8541-238fc99fcb2d" />
<img width="1104" height="749" alt="image" src="https://github.com/user-attachments/assets/bdb227e5-baad-483f-8435-c175636ba5f6" />





