let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');


for (let index = 0; index < cards.length; index++)
{
 const card = cards[index]
 card.addEventListener('click',function(){
    const title = card.querySelector('h3').innerText
    const price = parseFloat(card.querySelector('span').innerText.split(' ')[1])
    
    const titleContainr = document.getElementById('title-container')
    const p = document.createElement('p')
    p.innerText=titleCount + '.' + title
    titleContainr.appendChild(p)
    titleCount++

    totalPrice += price;
   
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2)

        
 })
}

const btn = document.getElementById('apply-btn')
        btn.addEventListener('click', function(){
            const couponElement= document.getElementById('input-field').value;
            const couponCode = couponElement.split(' ').join('').toUpperCase()
            if (totalPrice >= 200) {
                if (
                couponCode === 'SELL200'
            ){
                // siscount amount 
                const discountElement =document.getElementById('discountPrice')
                const discountAmount = totalPrice * .2
                discountElement.innerText=discountAmount.toFixed(2)
                //   total pay bill/\
                const totalElement = document.getElementById('total')
                const total = totalPrice - discountAmount;
                totalElement.innerText =  total.toFixed(2)
                 document.getElementById('input-field').value = '';
            }
            else{
                alert('Invalid Coupon')
                document.getElementById('input-field').value = '';
                
            }
                
            } 
            else {alert('Buy more them 200$ you gat 20% coupon')
             document.getElementById('input-field').value = '';
                
            }
            
        })

        const buttton = document.getElementById('Congratulations')
        const butttons= buttton.addEventListener('click',function(){
        if(totalPrice > 0){
            const element =document.getElementById('off')
            element.classList.remove('hidden')
        }
        else{
            const element =document.getElementById('off')
            element.classList.add('hidden')
        
            alert('select prouct')
            
        }

        })

        

      

