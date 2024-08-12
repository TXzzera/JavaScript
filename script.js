function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src','mlk-crianca.png')
            } else if (idade < 21){
                img.setAttribute ('src','rapaz-jovem.png')
            } else if (idade < 50){
                img.setAttribute ('src','homem-adulto.png')
            } else {
                img.setAttribute ('src','homem-idoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute ('src','menina-crianca.png')
            } else if (idade < 21){
                img.setAttribute ('src','moca-jovem.png')
            } else if (idade < 50){
                img.setAttribute ('src','mulher-adulta.png')
            } else {
                img.setAttribute ('src','mulher-idosa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}