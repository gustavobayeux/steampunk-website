
if(window.location.pathname=="/serv"){
    var height = 350
}else{0
    var height = document.getElementById('step4').offsetHeight + 80;
}
document.getElementById('footerWrap').style.paddingTop = height + 'px';

let mobileMenu = 0;
function menu() {
    document.getElementsByClassName('mobiMenuElement')[0].classList.remove('to-ham1');
    document.getElementsByClassName('mobiMenuElement')[1].classList.remove('to-ham2');
    document.getElementsByClassName('mobiMenuElement')[2].classList.remove('to-ham3');
    document.getElementsByClassName('mobiMenuElement')[0].classList.remove('to-x1');
    document.getElementsByClassName('mobiMenuElement')[1].classList.remove('to-x2');
    document.getElementsByClassName('mobiMenuElement')[2].classList.remove('to-x3');
    document.getElementsByClassName('mobiMenuElement')[0].style.display = 'none'
    document.getElementsByClassName('mobiMenuElement')[1].style.display = 'none'
    document.getElementsByClassName('mobiMenuElement')[2].style.display = 'none'
    document.getElementById('mobileNAV').classList.remove('openMobNav');
    setTimeout(() => {
        if (mobileMenu == 0) {
            document.getElementsByClassName('mobiMenuElement')[0].classList.remove('to-ham1');
            document.getElementsByClassName('mobiMenuElement')[1].classList.remove('to-ham2');
            document.getElementsByClassName('mobiMenuElement')[2].classList.remove('to-ham3');
            document.getElementsByClassName('mobiMenuElement')[0].classList.add('to-x1');
            document.getElementsByClassName('mobiMenuElement')[1].classList.add('to-x2');
            document.getElementsByClassName('mobiMenuElement')[2].classList.add('to-x3');
            document.getElementById('mobileNAV').classList.add('openMobNav');
            mobileMenu = 2
        } else if (mobileMenu == 2) {
            document.getElementsByClassName('mobiMenuElement')[0].classList.remove('to-x1');
            document.getElementsByClassName('mobiMenuElement')[1].classList.remove('to-x2');
            document.getElementsByClassName('mobiMenuElement')[2].classList.remove('to-x3');
            document.getElementsByClassName('mobiMenuElement')[0].classList.add('to-ham1');
            document.getElementsByClassName('mobiMenuElement')[1].classList.add('to-ham2');
            document.getElementsByClassName('mobiMenuElement')[2].classList.add('to-ham3');
            document.getElementById('mobileNAV').classList.remove('openMobNav');
            mobileMenu = 0
        } else {
            document.getElementsByClassName('mobiMenuElement')[0].classList.add('to-x1');
            document.getElementsByClassName('mobiMenuElement')[1].classList.add('to-x2');
            document.getElementsByClassName('mobiMenuElement')[2].classList.add('to-x3');
            document.getElementById('mobileNAV').classList.add('openMobNav');
            mobileMenu = 2
        }
        document.getElementsByClassName('mobiMenuElement')[0].style.display = 'block'
        document.getElementsByClassName('mobiMenuElement')[1].style.display = 'block'
        document.getElementsByClassName('mobiMenuElement')[2].style.display = 'block'
    }, 8);

}



//ANIMATIONS: Use any animation as a class

let observerOptions = {
    rootMargin: '0px',
    threshold: 0.5
}

var observer = new IntersectionObserver(observerCallback, observerOptions);
var animation = 0;//Vai dizer qual animação será adicionada
function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
			if(entry.target.classList.contains('animation1')){
			   entry.target.classList.add('animation1-run');	
			}
			if(entry.target.classList.contains('animation2')){
			   entry.target.classList.add('animation2-run');	
			}
			if(entry.target.classList.contains('animation3')){
			   entry.target.classList.add('animation3-run');	
			}
			if(entry.target.classList.contains('animation4')){
			   entry.target.classList.add('animation4-run');	
			}
			if(entry.target.classList.contains('animation6')){
			   entry.target.classList.add('animation6-run');	
			}
			if(entry.target.classList.contains('animation7')){
			   entry.target.classList.add('animation7-run');	
			}
        }
    });
};

document.querySelectorAll('.animation1').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation1	
        observer.observe(i);
});
document.querySelectorAll('.animation2').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation1	
        observer.observe(i);
});
document.querySelectorAll('.animation3').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation3	
        observer.observe(i);
});
document.querySelectorAll('.animation4').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation4	
        observer.observe(i);
});
document.querySelectorAll('.animation6').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation4	
        observer.observe(i);
});
document.querySelectorAll('.animation7').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation4	
        observer.observe(i)
});


//Anima o 'cases-boom'
let casesBoomObserverOptions = {rootMargin: '300px',threshold: 0.5}
var casesBoomObserver = new IntersectionObserver(casesBoomObserverCallback, casesBoomObserverOptions);
function casesBoomObserverCallback(entries, casesBoomObserver) {
    entries.forEach((entry) => {
    	if(entry.isIntersecting) {
		 entry.target.classList.add('casesBoom');
		 setTimeout(()=>{	
			entry.target.classList.remove('casesBoom');
		 },6000)
		}
  });    
};
document.querySelectorAll('.animate-casesBoom').forEach((i) => {
//Adiciona um observador pra cada ocorrência da classe animation4	
        casesBoomObserver.observe(i);
});

var isWebkit = 'webkitRequestAnimationFrame' in window
if(isWebkit){
  document.getElementById('guideInput').style="overflow:hidden;";  
}