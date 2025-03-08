const { error } = require("console");

//função invocada
(()=>{
    axios.get('http://192.168.1.6:80/produto').then(resp=>{
        const result = document.getElementById('resultado');
        result.innerHTML = JSON.stringify(resp.data);
    }).catch(error=>{
        document.getElementById('resultado').innerHTML = `Teste falhou ${error}`;
    })
})();

function cadastro(){
    document.querySelector("form").addEventListener("click", async function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
    
        // Captura os dados do formulário
        const formData = {
            nome: document.getElementById("nome").value,
            descricao: document.getElementById("descricao").value,
            preco: document.getElementById("preco").value,
            categoria: document.getElementById("categoria").value
        };
    
        try {
            // Envia os dados para o backend usando Axios
            const response = await axios.post("http://192.168.1.6:80/cadastro", formData);
    
            // Exibe mensagem de sucesso
            document.querySelector(".resultado").innerText = "Produto cadastrado com sucesso!";
            document.querySelector(".resultado").style.color = "green";
    
            // Limpa os campos do formulário
            document.querySelector("form").reset();
        } catch (error) {
            // Exibe mensagem de erro
            document.querySelector(".resultado").innerText = "Erro ao cadastrar o produto!";
            document.querySelector(".resultado").style.color = "red";
            console.error("Erro:", error);
        }
    });

}

function getProdutos(){
    document.getElementById("listar-produtos").addEventListener("click", async function() {
        try {
            const response = await axios.get("");
            const produtos = response.data;
            console.log(response.data)
    
            // Limpa a lista antes de exibir os novos produtos
            const listaProdutos = document.getElementById("lista-produtos");
            listaProdutos.innerHTML = "";
    
            // Exibe os produtos
            produtos.forEach(produto => {
                const li = document.createElement("li");
                li.textContent = `Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: R$ ${produto.preco}, Categoria: ${produto.categoria}`;
                listaProdutos.appendChild(li);
            });
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    });
}
