var btnP = document.querySelectorAll('.btnP')


for(let i = 0;i<btnP.length;i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].previousElementSibling.innerText++
        SommeTotal()
    })
}

var btnM = document.querySelectorAll('.btnM')


for(let i = 0;i<btnM.length;i++){
    btnM[i].addEventListener('click',function(){
        if (btnM[i].nextElementSibling.innerText>0)
        btnM[i].nextElementSibling.innerText--
        SommeTotal()
    })
}

var btnT = document.querySelectorAll('.fa-trash')

for(let i = 0;i<btnT.length;i++) {
    btnT[i].addEventListener('click', function(){
        btnT[i].parentElement.remove()
        SommeTotal()
    })
}

var btnH = document.querySelectorAll('.fa-heart')

for(let i = 0;i<btnH.length;i++) {
    btnH[i].addEventListener('click',function(){
        if (btnH[i].style.color == 'red'){
            btnH[i].style.color = 'black'
        }else {
            btnH[i].style.color = 'red'
        }
    })}

    function SommeTotal(){
        var price = document.querySelectorAll('.price')
        var qte = document.querySelectorAll('.qte')
        var total = document.querySelector('#total')
        var sum = 0
        for(let i = 0; i < price.length; i++){
        sum = sum + price[i].innerText * qte[i].innerText
        }
        total.innerText = sum
    }