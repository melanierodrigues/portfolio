// Pirilampos - Random 
//window.addEventListener("load", inicia);

window.addEventListener("load", function() {
    var loading = document.getElementById('loading');
    var pirilampo = document.querySelectorAll('#pirilampo');

function inicia() {

    for(i=0; i < pirilampo.length; i++) {
        var x = Math.floor((Math.random() * -500) + 500);
        var y = Math.floor((Math.random() * -500) + 100);
        var w = Math.floor((Math.random() * 100) + 1);
        var s = Math.floor((Math.random() * 0) + 5);

        pirilampo[i].style.transform = "translate(" + x + "px, " + y + "px)";

        if(Math.random()*100 < 50){
            pirilampo[i].style.transition = s + "s";
            pirilampo[i].style.opacity = w + "%";
        } else {
            pirilampo[i].style.transition = s + "s";
            pirilampo[i].style.opacity ="0";
        }
    }
    setTimeout(inicia, 3000);
};

// Folhas - Mousemove
document.addEventListener("mousemove", parallax);

function parallax(e){
    document.querySelectorAll('#folha').forEach(function(move) {

        var value_data = move.getAttribute("data-value");
        var m = (e.clientX * value_data) / 300;
        var l = (e.clientY * value_data) / 300;

        move.style.transform = "translateX(" + m + "px) translateY(" + l + "px)" + " scale(0.9)"; 
    });
}
inicia();
//

var codepen = document.getElementById('codepen');
var github = document.getElementById('github');
var linkedin = document.getElementById('linkedin');
var hgroup1 = document.getElementById('hgroup1'); 
var folhas = document.getElementById('folhas'); 

// Hello //
observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        function hello1() {
            if(entry.intersectionRatio > 0) {
                codepen.style.fill = "var(--cor3)";
                github.style.fill = "var(--cor3)";
                linkedin.style.fill = "var(--cor3)";
                codepen.style.stroke = "var(--cor3)";
                github.style.stroke = "var(--cor3)";
                linkedin.style.stroke = "var(--cor3)";
                //hgroup2.style.opacity = "0"; 
            }
        }
        requestAnimationFrame(hello1);
        //document.documentElement.requestFullscreen();
    })
});

observer.observe(hgroup1);


//  Scroll Paralax - Project 1 // // Cronometro // // 
var project1 = document.getElementsByClassName('project1');
var cronometro = document.getElementById('cronometro'); 
var figureCronometro = document.getElementById('figure_cronometro');
var numeros = document.getElementById('numeros');
var hgroup2 = document.getElementById('hgroup2'); 
var rectangulo = document.getElementById('rectangulo'); 
var risco = document.getElementById('risco');
var link_site = document.getElementById('link_site'); 
var teste_cronometro = document.getElementById('teste_cronometro'); 
var rodas = document.getElementById('rodas');

observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        function projecto1() {
            if(entry.intersectionRatio > 0) {
                figureCronometro.style.animation = "rolar 0.6s ease-out 3.3s both";
                cronometro.style.animation = "cronometro 0.8s 4s 4 both";
                //numeros.style.animation = "texto2 2s linear 4.2s 2 both";
                numeros.style.animation = "texto2 5s linear 3s 1 both";
                rectangulo.style.animation = "rec1 0.8s 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
                cronometro.style.opacity = "1";
                risco.style.opacity = "1";
                hgroup2.style.opacity = "1";
                hgroup2.style.animation = "opacity1 2s ease-in";
                link_site.style.opacity = "1";
                link_site.style.animation = "opacity1 2.5s ease-in";
                cronometro.style.animationPlayState = "running";
                teste_cronometro.style.animationPlayState = "running";
                codepen.style.fill = "var(--corhgroug2)";
                github.style.fill = "var(--corhgroug2)";
                linkedin.style.fill = "var(--corhgroug2)";
                codepen.style.stroke = "var(--corhgroug2)";
                github.style.stroke = "var(--corhgroug2)";
                linkedin.style.stroke = "var(--corhgroug2)";
            } else {
                risco.style.opacity = "0";
                hgroup2.style.opacity = "0"; 
            }
        }
        requestAnimationFrame(projecto1);
    })
});
observer.observe(link_site);

// Scroll Paralax - Project 2
var project2 = document.getElementsByClassName('project2');
var calculadora = document.getElementById('calculadora');
var mm = document.getElementById('mm');
var hgroup3 = document.getElementById('hgroup3');
var hgroup4 = document.getElementById('hgroup4');
var link_site2 = document.getElementById('link_site2');
var mm1 = document.getElementById('_mm1'); 
var mm2 = document.getElementById('_mm2'); 
var mm3 = document.getElementById('_mm3'); 
var mm4 = document.getElementById('_mm4'); 
var mm5 = document.getElementById('_mm5'); 
var mm6 = document.getElementById('_mm6'); 
var mm7 = document.getElementById('_mm7'); 
var mm8 = document.getElementById('_mm8'); 
var mm9 = document.getElementById('_mm9'); 
var mm10 = document.getElementById('_mm10'); 
var mm11 = document.getElementById('_mm11'); 
var rectangulo2 = document.getElementById('rectangulo2');
var risco2 = document.getElementById('risco2');

observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        function projecto2() {

            if(entry.intersectionRatio > 0) {
                codepen.style.fill = "var(--corhgroug3)";
                github.style.fill = "var(--corhgroug3)";
                linkedin.style.fill = "var(--corhgroug3)";
                codepen.style.stroke = "var(--corhgroug3)";
                github.style.stroke = "var(--corhgroug3)";
                linkedin.style.stroke = "var(--corhgroug3)";
                hgroup3.style.opacity = "1"; 
                hgroup3.style.animation = "opacity1 3s ease-in";
                mm1.style.animationPlayState = "running";
                mm2.style.animationPlayState = "running";
                mm3.style.animationPlayState = "running";
                mm4.style.animationPlayState = "running";
                mm5.style.animationPlayState = "running";
                mm6.style.animationPlayState = "running";
                mm7.style.animationPlayState = "running";
                mm8.style.animationPlayState = "running";
                mm9.style.animationPlayState = "running";
                mm10.style.animationPlayState = "running";
                mm11.style.animationPlayState = "running";
                risco2.style.opacity = "1";
                link_site2.style.opacity = "1";
                rectangulo2.style.animation = "rec1 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both";
                calculadora.style.opacity = "1";
                calculadora.style.animation = "calculadora 5s ease-out 0.8s both";
                link_site2.style.animation = "opacity1 5s ease-in";
                rectangulo2.style.animationPlayState = "running";
                calculadora.style.animationPlayState = "running";
                risco2.style.animationPlayState = "running";
                link_site.style.opacity = "0";   
                link_site.style. transition = "0.8s ease-in-out";
            }
        }
        requestAnimationFrame(projecto2);
    })
});
observer.observe(rectangulo2);

// Scroll Paralax - Project 3
var project3 = document.getElementsByClassName('project3');
var rectangulo3 = document.getElementById('rectangulo3');
var pinypong = document.getElementById('pinypong');
var link_site3 = document.getElementById('link_site3');
var risco3 = document.getElementById('risco3');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var bola_pinypong = document.getElementById('bola_pinypong');
var uni1 = document.getElementById('uni1');
var uni2 = document.getElementById('uni2');
var teste_pinypong = document.getElementById('teste_pinypong');

observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        function projecto3() {
            if(entry.intersectionRatio > 0) {
                codepen.style.fill = "var(--corhgroug4)";
                github.style.fill = "var(--corhgroug4)";
                linkedin.style.fill = "var(--corhgroug4)";
                codepen.style.stroke = "var(--corhgroug4)";
                github.style.stroke = "var(--corhgroug4)";
                linkedin.style.stroke = "var(--corhgroug4)";
                hgroup4.style.opacity = "1";   
                hgroup4.style.animation = "opacity1 3s ease-in";
                risco3.style.opacity = "1";
                pinypong.style.animation = " 5s ease-out 1.5s both";
                link_site3.style.opacity = "1";
                link_site3.style.animation = "opacity1 5s ease-in";
                rectangulo3.style.animation = "rec1 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s both";
                rectangulo3.style.animationPlayState = "running";
                pinypong.style.animationPlayState = "running";
                risco3.style.animationPlayState = "running";
                teste_pinypong.style.animationPlayState = "running";
                teste_pinypong.style.animation = "testepinypong 1s ease-in 0.3s both";
                bola_pinypong.style.animation = "bola_pinypong 3s ease-in 0.3s  infinite";
                p1.style.animation = "p1 3s ease-in 0.3s  infinite";
                p2.style.animation = "p2 3s ease-in 0.3s  infinite";
                uni1.style.animation = "uni1 1.8s ease-in-out 0s infinite";
                uni2.style.animation = "uni2 1.8s ease-in-out 0s infinite";
                bola_pinypong.style.animationPlayState = "running";
                p1.style.animationPlayState = "running";
                p2.style.animationPlayState = "running";
                link_site2.style.opacity = "0";   
                link_site2.style. transition = "0.8s ease-in-out";
                footer1.style.visibility = "hidden";
            } else {
                hgroup4.style.opacity = "0";
            }
        }
        requestAnimationFrame(projecto3);
    })
});
observer.observe(link_site3);

// About Me
var foto = document.getElementById('foto');
var footer1 = document.getElementById('footer1'); 
var redesSociais = document.getElementById('redes_sociais');
var redesSociaisFooter = document.getElementById('redes_sociaisfooter');  

observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        function aboutme1() {

            if(entry.intersectionRatio > 0) {          
                codepen.style.fill = "var(--cor3)";
                github.style.fill = "var(--cor3)";
                linkedin.style.fill = "var(--cor3)";
                codepen.style.stroke = "var(--cor3)";
                github.style.stroke = "var(--cor3)";
                linkedin.style.stroke = "var(--cor3)";
                footer1.style.visibility = "visible";
                link_site3.style.opacity = "0";   
                link_site3.style. transition = "1s ease-in-out";
            } else {
                footer1.style.visibility = "hidden";
            }
        }
        requestAnimationFrame(aboutme1);
    })
});
observer.observe(foto);



loading.classList.add('loading_acabar');
}); 