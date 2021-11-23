function calsal(){
    let sal = Number(document.getElementById('idsal').value);
    let nsal;
    nsal = sal + ((sal*25)/100)
    document.getElementById('idnsal').value = nsal;
}

function Media(){
    let nota1 = Number(document.getElementById('idnota1').value);
    let nota2 = Number(document.getElementById('idnota2').value);
    let nota3 = Number(document.getElementById('idnota3').value);
    let nota4 = Number(document.getElementById('idnota4').value);
    let mediaAluno;
    mediaAluno = (nota1 + nota2 + nota3 + nota4)/4;
    document.getElementById('idmedia').value = mediaAluno;
}