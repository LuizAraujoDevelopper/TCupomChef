function exibirComentario() {
    // Captura o nome e o texto digitado pelo usuário
    var nome = document.getElementById("nome").value;
    var comentario = document.getElementById("comentario").value;
    var classificacao = document.querySelector('input[name="fb"]:checked').value;
    var estrelasSelecionadas = "<span class='estrelasSelecionadas'>" + "★".repeat(classificacao) + "</span>"; // Cria uma string com a quantidade de estrelas selecionadas

    // Verifica se o campo de nome, comentário e classificação não estão vazios
    if (nome.trim() !== "" && comentario.trim() !== "" && classificacao !== undefined) {
        // Cria um novo elemento <div> para exibir o nome, classificação e o comentário
        var comentarioElement = document.createElement("div");
        comentarioElement.classList.add("comentario");
        comentarioElement.innerHTML = "<h3>" + nome + "<br>" + "</h3>" + "<b>Estrelas: </b>" + estrelasSelecionadas + "<br>" + "<b>Comentario: </b>" + comentario;

        // Adiciona o nome, classificação e o comentário ao final da div 'comentarios'
        document.getElementById("comentarios").appendChild(comentarioElement);

        // Limpa os campos de nome, comentário e classificação após exibir o comentário
        document.getElementById("nome").value = "";
        document.getElementById("comentario").value = "";
        document.querySelector('input[name="fb"]:checked').checked = false; // Limpa a seleção das estrelas
    } else {
        alert("Por favor, digite seu nome, um comentário e selecione a classificação antes de enviar.");
    }
}