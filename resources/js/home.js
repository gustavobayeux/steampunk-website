
var direction;
function showStep(value){
		if(value < 25){
	 document.getElementById('step2').style = 'display:none;';//FADE OUT
	 document.getElementById('step3').style = 'display:none;';//FADE OUT
	 document.getElementById('step4').style = 'display:none;';//FADE OUT
	 document.getElementById('step1').style = 'opacity:1;';//FADE IN
    }else if(value > 25 && value < 50){
		document.getElementById('step1').style = 'display:none;';//FADE OUT
	 document.getElementById('step3').style = 'display:none;';//FADE OUT
	 document.getElementById('step4').style = 'display:none;';//FADE OUT
	 document.getElementById('step2').style = 'opacity:1;';//FADE IN
	}else if(value > 50 && value < 75){
     document.getElementById('step2').style = 'display:none;';//FADE OUT
	 document.getElementById('step1').style = 'display:none;';//FADE OUT
	 document.getElementById('step4').style = 'display:none;';//FADE OUT
	 document.getElementById('step3').style = 'opacity:1;';//FADE IN
	}else if(value > 75 && value < 100){
    document.getElementById('step1').style = 'display:none;';//FADE OUT
	 document.getElementById('step2').style = 'display:none;';//FADE OUT
	 document.getElementById('step3').style = 'display:none;';//FADE OUT
	 document.getElementById('step4').style = 'opacity:1;';//FADE IN
	}
}
if(window.innerWidth < 601){
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let pos = document.body.offsetHeight - scrollTop;
  if(scrollTop > 680 && scrollTop < 960){
	document.getElementById('proc1').style="border:solid 6px white; animation:glow 1s infinite;"
	document.getElementById('proc2').style="border:solid 6px transparent; filter:blur(2px);";
	document.getElementById('proc3').style="border:solid 6px transparent; filter:blur(2px);";
  }else if(scrollTop > 760 && scrollTop < 1200){  
  	document.getElementById('proc1').style="border:solid 6px transparent; filter:blur(2px);";
	document.getElementById('proc3').style="border:solid 6px transparent; filter:blur(2px);";
	document.getElementById('proc2').style="border:solid 6px white; animation:glow 1s infinite;"
  }else if(scrollTop > 1200 && scrollTop < 2040){  
  	document.getElementById('proc2').style="border:solid 6px transparent; filter:blur(2px);";
	document.getElementById('proc1').style="border:solid 6px transparent; filter:blur(2px);";
	document.getElementById('proc3').style="border:solid 6px white; animation:glow 1s infinite;"
  }else{
	document.getElementById('proc1').style="border:solid 6px transparent; filter:blur(2px);";  
  }

});
}
var price;
function setPrice(val){
   price = parseInt(val);

   document.getElementById('pricingOpt1').style.display = 'block';
   document.getElementById('projectType').disabled = true;
   return;
}
//Variáveis pra controle de checked e unchecked
let x = 0;
let y = 0;
let z = 0;



function pricing(project){
	
	if(project==null || project == '' || project == 0){
		return null;
	}
   //Reseta os configuradores de complexidade
   if(document.getElementsByClassName('complexitySet')[0].checked == true){price -= 180}
   if(document.getElementsByClassName('complexitySet')[1].checked == true){price -= 400}
   if(document.getElementsByClassName('complexitySet')[2].checked == true){price -= 72}
   document.getElementsByClassName('complexitySet')[0].checked = false;
   document.getElementsByClassName('complexitySet')[1].checked = false;
   document.getElementsByClassName('complexitySet')[2].checked = false;
		document.getElementById('priceBoard').style.opacity = 1;
		document.getElementById('pricingOpt2').style.display = 'block';
	  if(document.getElementsByClassName('priceSet')[0].checked == true){
	
	         if(x==0){
			 price += 72	
             x=1			 
			}else if(x==1){	
			}else if(x==2){
			 price -= 200
			 price += 72
			 x=1
			}else if(x==3){
			 price -= 400
			 price += 72	
			 x=1
			}
	  }
	  if(document.getElementsByClassName('priceSet')[1].checked == true){
		
	 if(x==0){
			 price += 200
             x=2			 
			}else if(x==2){	
			}else if(x==1){
			 price -= 72
			 price += 200
			 x=2
			}else if(x==3){
			 price -= 400
			 price += 200	
			 x=2
			}
	  }
	  if(document.getElementsByClassName('priceSet')[2].checked == true){
	
	  if(x==0){
			 price += 400		
             x=3			 
			}else if(x==3){	
			}else if(x==2){
			 price -= 200
			 price += 400
			 x=3
			}else if(x==1){
			 price -= 72
			 price += 400	
			 x=3
			}
	  }
	
		    
		
	document.getElementById('priceBoard').innerHTML = "<p>Estimativa:</p><br>"+((new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)));
	document.getElementById('projectTypeConfirm').innerHTML = 'OK';
	document.getElementById('priceBoard').style.opacity = '1';
	}
	
	
//configuradores de complexidade
function handleChange1(checkbox) {
    if(checkbox.checked == true){
       price += 180
    }else{
      price -= 180
   }
   document.getElementById('priceBoard').innerHTML = "<p>Estimativa:</p><br>"+((new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)));
}

function handleChange2(checkbox) {
    if(checkbox.checked == true){
      price += 400
	  
    }else{
      price -= 400
   }
   document.getElementById('priceBoard').innerHTML = "<p>Estimativa:</p><br>"+((new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)));
}

function handleChange3(checkbox) {
    if(checkbox.checked == true){
      price += 80
	  
    }else{
      price -= 80
   }
   document.getElementById('priceBoard').innerHTML = "<p>Estimativa:</p><br>"+((new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)));
}


//Falling interruptor
var i = 0;
let guideObserverOpt = {
	root: null, // Sets the framing element to the viewport
	rootMargin: '0px',
    threshold: 0.8
}
var guideObserver = new IntersectionObserver(guideObserverCB, guideObserverOpt);
guideObserver.observe(document.getElementById('guide'));
var fell =false;
function guideObserverCB(entry,guideObserver){  
	
	if(entry[0].isIntersecting && fell == false){	
	 setTimeout(()=>{
 	 fallInterruptor(i);
  	 },2000)
	 fell = true
    }
}
function fallInterruptor(i){
	//Change the section
 if(i < 100){
	
    setTimeout(()=>{
		i++;
		fallInterruptor(i);
		document.getElementById('guideInput').valueAsNumber += 1;
		showStep(document.getElementById('guideInput').valueAsNumber);
		console.log(document.getElementById('guideInput').value);
	 },10);	
 }else{document.getElementById('guideInput').disabled = false;
	document.getElementById('inputRangeArrow').innerHTML = '🡄 ';
 }	 
}