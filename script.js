// Função para adicionar cadastros
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    // Cria nova linha para a tabela
    const novaLinha = document.createElement('tr');
  
    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
  
    const colunaEmail = document.createElement('td');
    colunaEmail.textContent = email;
  
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);
  
    document.getElementById('tabelaCadastros').appendChild(novaLinha);
  
    // Limpa os campos do formulário
    document.getElementById('formCadastro').reset();
  });
  