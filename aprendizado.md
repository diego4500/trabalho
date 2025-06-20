## DLAPP
O DLApp é um framework interno desenvolvido pela Sisloc com o objetivo de padronizar e acelerar a criação de novos produtos da empresa. Ele serve como uma base sólida para o desenvolvimento de aplicações web, oferencendo uma arquitetura modular, escalável e integra. Projetado com o foco em reutilização de código, segurança e organização por camadas o DLAPP permite que diferentes áreas da empresa construam soluções específicas como portais, dashboards, ferramentas administrativas, etc. Além disso, o DLAPP oferece suporte a:
* Criação de plugins personalizados;
* Integração com múltiplos módulos como API's, serviços, modelos e rotas;
* Estruturação por mult-tenant, facilitando o desenvolvimento de aplicações para diferentes clientes ou filiais;
* Integração com o frontend via boot files no Quasar (Vue.js), promovendo uma experiência unificada entre backend e frontend.

O uso do DLAPP garante que todas as aplicações desenvolvidas estejam alinhadas com os padrões tecnológicos e operacionais da Sisloc, otmizando o tempo de desenvolvimento e facilitando a manutenção e evolução contínua dos produtos.

## Exemplos de tecnologias utilizadas
### Backend
Node.JS, Express.js

### Frontend
Vue.JS, Quasar Framework, Handlebars.js

### Banco de dados
PostgreSQL

### Arquitetura - Integração de Camadas
1 - Model: Define a estrutura dos dados; <br>
2 - Service: Lógica de negócio e CRUD; <br>
3 - API: Ponto de entrada HTTP, recebe requisições e responde resultados. <br>


