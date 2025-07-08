# Frontend
### Estrutura de Pastas
![image](https://github.com/user-attachments/assets/57c6d6f2-ee5b-4077-b38f-614af5c3cbfe) <br>

### Estrutura do Menu Lateral
Abaixo segue a estrutura do menu lateral:

```js
store.commit('system/addMenuItem', {
  order: '11',
  authentication: '',
  to: '/loja/tipos-locacao',
  group: 'Loja',
  subgroup: '',
  label: 'Tipos de Locação',
  sublabel: 'Categorias de aluguel',
  groupIcon: 'store',
  icon: 'category'
})
```
