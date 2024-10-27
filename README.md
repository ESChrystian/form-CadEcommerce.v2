<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Form_CadEcommerce V2" />

  &#xa0;

  <!-- <a href="https://form_cadecommercev2.netlify.app">Demo</a> -->
</div>

<h1 align="center">Formulário de Cadastro Ecommerce</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ESChrystian/form_cadecommerce.v2?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/ESChrystian/form_cadecommerce.v2?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ESChrystian/form_cadecommerce-v2?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/ESCjrystian/form_cadecommerce-v2?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/form_cadecommerce-v2?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/form_cadecommerce-v2?color=56BEB8" /> -->

   <img alt="Github stars" src="https://img.shields.io/github/stars/ESChrystian/form_cadecommerce-v2?color=56BEB8" /> 
</p>

<!-- Status -->

 <h4 align="center"> 
	Form_CadEcommerce V2🚀🚧
</h4> 

<hr>

<p align="center">
  <a href="#coffee-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#clipboard-funções">Funções</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos"> Tutorial</a> &#xa0; | &#xa0;
  <a href="https://github.com/ESChrystian" target="_blank">Autor</a>
</p>

<br>

## :coffee: Sobre ##

Trabalho de Desenvolviento Web, esta é a segunda versão [Form-CadEcommerce](https://github.com/ESChrystian/form-CadEcommerce), utilizando HTML, CSS e JavaScript, que oferece funcionalidades de cadastro e validações de formulários para novos usuários. O objetivo principal é garantir a captura correta de informações dos clientes, incluindo nome, senha, e-mail, CPF, endereço (com integração à API ViaCEP).

## :sparkles: Funcionalidades ##

**1. Estrutura HTML:**

* O layout é composto por uma página de cadastro com uma interface de busca, um cabeçalho contendo o nome da loja ("Virtual Store") e opções de navegação como "Minha Conta" e "Cadastrar-se".
A interface de cadastro é dividida em duas partes: um convite ao usuário para se cadastrar e uma área visual com uma imagem (banner).

**2. Validações de Formulário:**

* O código JavaScript implementa validações essenciais para garantir a integridade dos dados fornecidos pelo usuário.

**Nome:** Verifica se o nome foi preenchido.

**Senha:** Confirma se a senha foi digitada.

**E-mail:** Verifica a estrutura do e-mail (se possui "@" e ".").

**CPF:** Implementa uma validação de CPF brasileiro, que garante a autenticidade do documento por meio de cálculos matemáticos.

**CEP:** Usa uma API externa (ViaCEP) para buscar o endereço com base no CEP fornecido.

**3. Uso de Estilos e Bibliotecas Externas:**

*  código inclui estilos personalizados a partir de arquivos CSS e uma biblioteca externa para ícones (boxicons).

**4. Funcionalidades de Tema:** 
* O código também inclui uma funcionalidade para alternar entre **temas claro e escuro**, proporcionando uma melhor experiência ao usuário.

**5. Experiência do Usuário:**
* Validações são feitas em tempo real (no evento de "focusout") e mensagens de erro são exibidas diretamente no campo correspondente para guiar o usuário a preencher corretamente o formulário.
* O formulário é dividido em etapas, onde a primeira coleta informações pessoais e a segunda pede detalhes do endereço. Isso é gerenciado por eventos de clique e alterações no CSS.


## :clipboard: Funções

**1. Validação do Nome**

Um event listener é adicionado ao campo de nome, ativado quando o foco sai do campo (focusout). A função nomeDigitado verifica se o campo foi preenchido.
  * Se o nome foi inserido, o campo é destacado com borda verde e a mensagem de erro é removida.
  * Se o campo estiver vazio, uma mensagem de erro é exibida e a borda fica vermelha.
#
**2. Validação do Email**

Outro event listener é configurado para o campo de email. A função checarEmail verifica se o campo contém um valor válido, ou seja, se há um "@" e um ponto ("."), indicando um formato de email.
  * Se for válido, a borda fica verde e a mensagem de erro é removida.
  * Se não for, uma mensagem de erro aparece e a borda fica vermelha.
#
**3. Validação da Senha**

O campo de senha também possui um event listener que verifica se foi preenchido.
  * Se preenchido, a borda fica verde e a mensagem de erro é removida.
  * Se não, a borda fica vermelha e uma mensagem de erro é exibida.
#
**4. Validação do CPF**

O CPF passa por uma validação mais complexa com um algoritmo de verificação de dígitos.
A função validarCPF retira caracteres não numéricos, verifica se o CPF tem 11 dígitos e se os dois dígitos verificadores são corretos.
  * Se o CPF for válido, a borda fica verde e a mensagem de erro desaparece.
  * Se for inválido, uma mensagem de erro aparece, a borda fica vermelha, e o campo de CPF permanece com foco até o usuário corrigir.
#
**5. Validação do CEP com API (ViaCEP)**

O código consome a API ViaCEP para buscar automaticamente os dados de endereço baseados no CEP informado. A função pesquisarCep faz essa busca.
  * Se o CEP for válido (8 dígitos numéricos), a API retorna os dados do endereço e o formulário é preenchido automaticamente.
  * Se o CEP for inválido ou não encontrado, uma mensagem de erro aparece e as bordas dos campos ficam vermelhas.
#
**6. Outras Validações**

Número Residencial e Complemento: Após a inserção do número e complemento, o código muda as cores das bordas para verde se os campos forem preenchidos corretamente.
#
**7. Verificação Final dos Campos (Botões)**

Quando o botão "Próximo" é clicado, uma verificação final ocorre para garantir que todos os campos obrigatórios (nome, senha, email, CPF) estão preenchidos corretamente antes de avançar para a próxima etapa do formulário.
  * Se algum campo estiver faltando ou incorreto, uma mensagem de erro correspondente é exibida.
Caso todos os campos estejam corretos, uma animação no CSS é ativada, e a próxima parte do formulário é exibida.
#
**8. Validação do Endereço**

O botão "Confirmar" verifica se todos os campos relacionados ao endereço (CEP, logradouro, localidade, número, etc.) foram preenchidos.
  * Se algum campo estiver vazio, uma mensagem de erro aparece.
  * Se todos estiverem corretos, uma borda verde aparece em todos os campos, e um alerta final de sucesso é exibido.
#
**9. Troca de Tema (Modo Claro/Escuro)**

Existem dois botões, um para o tema claro e outro para o tema escuro. Esses botões alternam as classes no elemento body, aplicando um estilo visual diferente para cada tema.

## :rocket: Tecnologias ##

As seguintes ferramentas foram utilizadas neste projeto:
|Tecnologias | Uso |
|:--------:| ----- |
|![](https://img.shields.io/badge/VSCode-000?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)| Ambiente de desenvolvimento do projeto |
|![](https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5&logoColor=white)|Estrutura do projeto |
|![CSS3](https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=white)| Estilização do projeto|
|![](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=white) | Validações e animações|
|![Git](https://img.shields.io/badge/GIT-000?style=for-the-badge&logo=git&logoColor=white) | Histórico de versão |
|![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)| Armazenamento do projeto |
|**Live Server** | Extensão para reload de página em tempo real |

## :white_check_mark: Requisitos ##

*Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com)...

## :checkered_flag: Começando ##

```bash
# Clone esse projeto
$ git clone https://github.com/ESChrystian/form_cadecommerce-v2

```


Feito com :heart: por <a href="https://github.com/ESChrystian" target="_blank">Chrystian de Almeida</a>

&#xa0;
