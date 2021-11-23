function calsal(){
    let sal = Number(document.getElementById('idsal').value);
    let nsal;
    nsal = sal + ((sal*25)/100)
    document.getElementById('idnsal').value = nsal;
}