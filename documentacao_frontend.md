# Frontend
### Estrutura de Pastas
![image](https://github.com/user-attachments/assets/064c260f-06f5-425b-890c-107e57c82e27)
 <br>

### Estrutura do Menu Lateral
Abaixo segue a estrutura do menu lateral:

```js
  store.commit('system/addMenuItem', {
    order: '010',
    group: 'Admin',
    groupIcon: 'work',
    subgroup: 'Admin',
    label: 'Produtos',
    to: '/treinamento-admin/produtos/view',
    icon: 'inventory_2',
    sublabel: 'Produtos'
  })
```

Abaixo segue a explicação de algumas:
* odrder - altera a ordem dos menus
* authentication - permissão de acesso admin ou user. Se deixar vazio qualquer um pode ter acesso
* to - caminho da rota para onde o menu vai redirecionar
* group - nome do grupo principal no menu, exemplo: Loja, clientes, produto, etc.
* subgoup - nome de subgrupo se houver, opcional
* label - nome que aparece no menu
* groupIcon - Ícone do grupo principal (usado pelo Quasar)
* icon - ícone do item específico (usado pelo Quasar)

Como podemos ver essa estrutura monta dinamicamente a navegação lateral, agrupando e ordenando os menus do sistema de acordo com a configuração que foi passada.

### Segue abaixo um exemplo do index.js
```js
import DlLayoutMenu from "../system/components/DlLayoutMenu.vue" // Importa o componente de Layout de menu lateral da aplicação.
import {routes} from "../system" // Importa a estrutura base das rotas da aplicação.
import ProdutoView from "./produtos/ProdutosView.vue" // Importa o componente Vue responsável pela visualização/listagem de produtos.

// Abaixo segue a estrutura que será exportada:
export default ({store}) => {
  routes.push([ // Adiciona novas rotas na aplicação.
    {
      path: '/treinamento-admin/produtos', // Criação de uma rota com caminho '/treinamento-admin/produtos'
      component: DlLayoutMenu, // Incluíndo o menu na página
      children: [ // Filho do path e com isso é criado a rota '/treinamento-admin/produtos/view'
        {path: 'view', component: ProdutoView}
      ]
    }
  ])

  store.commit('system/addMenuItem', { // Adiciona itens no menu lateral da aplicação e outras configurações como ícone, grupo, ordem e etc.
    order: '010',
    group: 'Admin',
    groupIcon: 'work',
    subgroup: 'Admin',
    label: 'Produtos',
    to: '/treinamento-admin/produtos/view',
    icon: 'inventory_2',
    sublabel: 'Produtos'
  })

```

