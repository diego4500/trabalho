# Is System
No Dlapp o isSystem é uma chave a mais no model para ser consultado onde o principal objetivo é definir o que é do sistema e o que não é, podendo então ser criado lógicas com essa informação. O isSystem pode ser true ou false. Exemplo: Na tela de cadastros de tipo de locação quero que seja isSystem true alguns períodos de locação como: <strong>diária </strong>, <strong> semanal</strong> e <strong> mensal</strong>. O que for isSytem true não pode ser excluído. Veja abaixo o passo a passo para criar essa estrutura:

1º Criar o model com o nome isSystem <br>
<img width="555" height="662" alt="image" src="https://github.com/user-attachments/assets/7f8d32bc-12ad-4985-a176-7b2ce6a7ba25" />

2º No fontend abaixo segue um exemplo de utilização que podemos gerar um bloqueio com aviso ao tentar deletar<br>
arquivo TipoLocacaoForm.vue <br>
<img width="391" height="219" alt="image" src="https://github.com/user-attachments/assets/cb44023c-c6db-460d-8495-a3065b8694c2" /> <br>
<img width="810" height="716" alt="image" src="https://github.com/user-attachments/assets/7252b556-5f72-450e-920c-966f25cb4629" /> <br>
Ao conferir e isSystem for true é bloqueado a exclusão <br>
this.form.data.isSystem === true <br>

