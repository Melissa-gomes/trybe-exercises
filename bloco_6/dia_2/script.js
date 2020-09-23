function estados(){
    let estadosBr= ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ]
    for(let i= 0; i< estadosBr.length; i +=1){
        let todos= estadosBr[i];
        let local = document.querySelector("#estado")
        let opcoes= document.createElement("option");
        let acao= local.appendChild(opcoes);
        let result= acao.innerHTML=todos;
    }
}
let a = document.querySelector("#estado");
a.addEventListener("click", estados);

documento.getElementById("data").DatePickerX.init(getValue);