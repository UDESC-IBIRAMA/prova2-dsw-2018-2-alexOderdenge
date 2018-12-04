const livros = [],
      result = document.getElementById("result");
      
function onClickSalvar() {
    let titulo = document.getElementById("titulo").value;
    
    console.log(titulo);
    
    livros.push(titulo);
}

function onClickResult() {
    let resultados = document.getElementById("resultados"),
        tabela     = document.createElement("table");
    
    resultados.appendChild(tabela);
    
    livros.forEach((item)=>{
        let tr = document.createElement("tr"),
            td = tr.insertCell();
        
        td.textContent = item;
        tabela.appendChild(tr);
    });
}

result.addEventListener("click", onClickResult);