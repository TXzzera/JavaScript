function contar() {
    var inicio = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtn3')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
        res.innerHTML = ('Impossível contar!')
    } else {
     res.innerHTML = ('Contando: ')

     var i = Number(inicio.value)
     var f = Number(fim.value)
     var p = Number(passo.value)
     if (p<=0) {
        window.alert ('Você precisa informar um valor maior que 0 em passo. Considerando passo 1')
        p=1
     }

     if (i<f) {
        //contagem crescente
        for (var c=i; c<=f; c+=p) {
            res.innerHTML += (`${c}\u{1F449}`)
         }
     } else {
        // contagem regressiva
        for (var c=i; c>=f; c-=p) {
            res.innerHTML += (`${c}\u{1F449}`)
         }
     }
     res.innerHTML += (`\u{1F3C1}`)
    
    }
}
