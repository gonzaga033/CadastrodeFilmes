class Filme {
    constructor(nome, nomeDiretor, dtLancamento) {
        this.nome = nome;
        this.nomeDiretor = nomeDiretor;
        this.dtLancamento = dtLancamento;
    }

    getNome() {
        return this.nome;
    }
    getNomeDiretor() {
        return this.nomeDiretor;
    }
    getDtlancamento() {
        return this.dtLancamento;
    }

    setNovoNome(Novonome) {
        this.nome = Novonome;
    }
    setNovoDiretor(Novodiretor) {
        this.nomeDiretor = Novodiretor;
    }
    setNovaData(Novadata) {
        this.dtLancamento = Novadata;
    }

    mostrarFilme() {
        return `${this.nome} - Dirigido por ${this.nomeDiretor} - (${this.dtLancamento})`;
    }
}

let botao = document.getElementById('botao');
botao.addEventListener('click', acionarBotao);
function acionarBotao() {
    let lista = document.getElementById('lista');
    let titulo = document.getElementById('titulo').value;
    let diretor = document.getElementById('diretor').value;
    let anoLanc = Number(document.getElementById('ano').value);
    if(isNaN(anoLanc) == false  && isNaN(titulo) == true && isNaN(diretor) == true){
    if (anoLanc != "" && titulo !== "" && diretor !== "") {
        let filmeInserido = new Filme(titulo, diretor, anoLanc);
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = filmeInserido.mostrarFilme();
        lista.appendChild(novoParagrafo);
        document.getElementById('titulo').value = '';
        document.getElementById('titulo').innerHTML = '';
        document.getElementById('diretor').value = '';
        document.getElementById('diretor').innerHTML = '';
        document.getElementById('ano').value = '';
        document.getElementById('ano').innerHTML = '';
       
    }
    else if(anoLanc == "" && titulo !== "" && diretor !== ""){
        window.alert(`Preencha o campo 'Ano de Lançamento'.`);
    }
    else if(diretor == "" && anoLanc != "" && titulo !== ""){
        window.alert(`Preencha o campo 'Diretor'.`);
    }
    else if(titulo == "" && anoLanc != "" && diretor !== ""){
        window.alert(`Preencha o campo 'Título'.`);
    }
    else if(anoLanc == "" && diretor == "" && titulo !== ""){
        window.alert(`Preencha os campos 'Ano de Lançamento' e 'Diretor'.`);
    }
    else if(anoLanc == "" && titulo == "" && diretor !== ""){
        window.alert(`Preencha os campos 'Ano de Lançamento' e 'Título'.`);
    }
    else if(diretor == "" && titulo == "" && anoLanc != ""){
        window.alert(`Preencha os campos 'Diretor' e 'Título'.`);
    }
    else if(anoLanc = "" && titulo == "" && diretor == ""){
        window.alert(`Preencha os campos 'Diretor', 'Título' e 'Ano de Lançamento'.`);
    
    }
}
else{
    window.alert(`Preencha os campos com dados corretos.`);
}
}
