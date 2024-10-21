1. Captura dos dados do formulário

Quando o usuário preenche os campos de (nome) e (e-mail) e clica no botão "Cadastrar", o JavaScript captura os valores digitados. Isso é feito pelas seguintes linhas:

```javascript
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
```

- **`document.getElementById('nome').value`**: Obtém o valor inserido no campo de texto com o ID `nome` (onde o usuário insere o nome).
- **`document.getElementById('email').value`**: Obtém o valor inserido no campo de texto com o ID `email` (onde o usuário insere o e-mail).

---

2. Adicionando os dados à tabela

Depois de capturar os valores do nome e do e-mail, o código cria uma nova linha na tabela para exibir esses dados. O processo é o seguinte:

```javascript
const novaLinha = document.createElement('tr'); // Cria uma nova linha da tabela

const colunaNome = document.createElement('td'); // Cria uma célula da tabela para o nome
colunaNome.textContent = nome; // Define o texto da célula como o valor do nome

const colunaEmail = document.createElement('td'); // Cria uma célula da tabela para o e-mail
colunaEmail.textContent = email; // Define o texto da célula como o valor do e-mail

novaLinha.appendChild(colunaNome); // Adiciona a célula do nome à nova linha
novaLinha.appendChild(colunaEmail); // Adiciona a célula do e-mail à nova linha
```

 O código cria (duas células de tabela) (`<td>`), uma para o nome e outra para o e-mail.
 Cada célula é preenchida com o respectivo valor (nome ou e-mail).
 A linha é montada com as duas células e depois é adicionada à tabela.

---

3. Exibição dos dados na tabela

A linha criada com o nome e e-mail é finalmente adicionada à tabela existente com o seguinte comando:

```javascript
document.getElementById('tabelaCadastros').appendChild(novaLinha);
```

`document.getElementById('tabelaCadastros')`**: Seleciona o corpo da tabela onde os dados são exibidos.
`appendChild(novaLinha)`: Adiciona a nova linha (com nome e e-mail) à tabela.

---

Este processo permite que os dados inseridos no formulário sejam capturados e exibidos dinamicamente na tabela, sem precisar recarregar a página.
