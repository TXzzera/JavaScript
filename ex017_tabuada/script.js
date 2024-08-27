function calcular() {
    var numero = document.getElementById('num1')
    var tab = document.getElementById('tabu')
    if (numero.value.length == 0) {
        alert('Você precisa inserir algum número!')
    } else {
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        while (c<=10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

    
}