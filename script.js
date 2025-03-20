function criarSenha(tamanho) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  const caractere_especial = ['@', '#', '%', '!', '&', '*'];

  if (tamanho >= 8 && tamanho <= 15) {
    let senha = [];
    senha.push(Math.floor(Math.random() * 10));

    for (let i = 0; i < (tamanho - 3); i++) {
      senha.push(alfabeto[Math.floor(Math.random() * alfabeto.length)]);
    }

    senha.push(caractere_especial[Math.floor(Math.random() * caractere_especial.length)]);
    senha.push(Math.floor(Math.random() * 10));

    return senha.sort(() => Math.random() - 0.5).join('');
  } else {
    alert("A senha deve ter entre 8 e 15 caracteres.");
    return null;
  }
}

document.getElementById("gerarSenha").addEventListener("click", function(event) {
  event.preventDefault();

  let tamanho = parseInt(document.getElementById("tamanho").value);

  if (!isNaN(tamanho) && tamanho >= 8 && tamanho <= 15) {
    let senhaGerada = criarSenha(tamanho);
    if (senhaGerada) {
      document.getElementById("senhaResultado").innerText = senhaGerada;
    }
  } else {
    alert("Por favor, insira um número entre 8 e 15.");
  }
});

document.getElementById("tamanho").addEventListener("input", function () {
  if (this.value > 15) this.value = 15;
});
