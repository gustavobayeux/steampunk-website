
const tiltElements = document.querySelectorAll('.tilt');

tiltElements.forEach(element => {//Para cada elemento da classe, chama a função
  element.addEventListener('mousemove', function(event) {//A função escuta o mover do mouse
    const x = (event.clientX - this.offsetLeft - this.offsetWidth / 2) / 25;//Pega a posição x do mouse
    const y = (event.clientY - this.offsetTop - this.offsetHeight / 2) / 15;//pega a posição y do mouse
    /* Acima eu dividi por 2 pois a posição está sendo calculada na BORDA do elemento,
    por isso ao dividir por 2 a posição vai mais pro centro dele.
    A divisão final (por 15) serve pra a rotação ser menor */

    this.style.transform = `perspective(1500px) rotateX(-${y}deg) rotateY(-${x}deg) `;
  });
});

function goDown(type){

 var el = document.getElementById('CDContent');
 var el2 = document.getElementById('servChain1');
 var el3 = document.getElementById('servChain2');
 if(type == 'close'){
  el.classList.remove('CDgoDown');el2.classList.remove('goDown');el3.classList.remove('goDown');
  el.classList.toggle('CDgoUp');el2.classList.toggle('goUp');el3.classList.toggle('goUp');
return;
}
 if(el.classList.contains('CDgoUp') && el2.classList.contains('goUp')){
  el.classList.remove('CDgoUp');el2.classList.remove('goUp');el3.classList.remove('goUp');
  el.classList.toggle('CDgoDown');el2.classList.toggle('goDown');el3.classList.toggle('goDown');
  
 }else if(el.classList.contains('CDgoDown') && el2.classList.contains('goDown')){
  el.classList.remove('CDgoDown');el2.classList.remove('goDown');el3.classList.remove('goDown');
  el.classList.toggle('CDgoUp');el2.classList.toggle('goUp');el3.classList.toggle('goUp');
 }else{
  el.classList.add('CDgoDown');el2.classList.add('goDown');el3.classList.add('goDown');
 }

 switch(type){
   case 1:
    
   break;
    
   case 2:
 
   break;
    
   case 3:
 
   break;  
 }
}