var slides=[["Bienvenidos al CECYTEM Neza II","Estudia, crea y crece con nosotros"],["Dinámica del Grinch","Suma buenas acciones y salva la Navidad"],["Comparte tu opinión","Deja tu reseña y súbete a la comunidad"]];
var i=0,s=document.getElementById('slide'),d=document.getElementById('dots');
function show(){s.innerHTML='<h3></h3><p class="muted"></p>';s.children[0].textContent=slides[i][0];s.children[1].textContent=slides[i][1];
d.innerHTML=slides.map(function(_,k){return '<i class="'+(k==i?'on':'')+'"></i>'}).join('')}
document.getElementById('prev').onclick=function(){i=(i+slides.length-1)%slides.length;show()};
document.getElementById('next').onclick=function(){i=(i+1)%slides.length;show()};
show();setInterval(function(){i=(i+1)%slides.length;show()},6000);

var n=1,goal=10;
function upd(){var p=Math.min(n/goal,1);document.getElementById('fill').style.width=(p*100)+'%';
function mood(){
  var m=document.getElementById('mouth'),l=document.getElementById('browL'),r=document.getElementById('browR');
  if(n>=goal){            // feliz
    m.setAttribute('d','M42 84 Q60 106 78 84');
    l.setAttribute('y1',58);l.setAttribute('y2',52);
    r.setAttribute('y1',58);r.setAttribute('y2',52);
  }else if(n>=goal/2){    // neutral
    m.setAttribute('d','M45 90 L75 90');
    l.setAttribute('y1',55);l.setAttribute('y2',55);
    r.setAttribute('y1',55);r.setAttribute('y2',55);
  }else{                  // enojada
    m.setAttribute('d','M45 92 Q60 82 75 92');
    l.setAttribute('y1',54);l.setAttribute('y2',60);
    r.setAttribute('y1',54);r.setAttribute('y2',60);
  }
}
document.getElementById('count').textContent=n+' de '+goal+' buenas acciones';
document.getElementById('heart').style.transform='scale('+(1+p*0.8)+')';
if(n>=goal)document.getElementById('heart').textContent='💖'}
document.getElementById('addAct').onclick=function(){var a=document.getElementById('act');
if(!a.value.trim()){document.getElementById('actMsg').textContent='Escribe tu buena acción primero.';return}
n++;a.value='';document.getElementById('actMsg').textContent=n>=goal?'¡El corazón del Grinch creció tres tallas! 🎄':'¡Gracias! Tu acción cuenta.';upd()};
upd();

var rate=0,st=document.getElementById('stars');
function drawStars(){st.innerHTML='';for(var k=1;k<=5;k++){(function(k){var b=document.createElement('button');b.textContent='★';b.className=k<=rate?'on':'';b.onclick=function(){rate=k;drawStars()};st.appendChild(b)})(k)}}
drawStars();
document.getElementById('send').onclick=function(){var nm=document.getElementById('nm').value.trim(),tx=document.getElementById('tx').value.trim();
if(!nm||!tx||!rate)return;var r=document.createElement('div');r.className='review';
var b=document.createElement('b');b.textContent=nm+' · '+'★'.repeat(rate);var p=document.createElement('div');p.textContent=tx;
r.appendChild(b);r.appendChild(p);document.getElementById('reviews').prepend(r);
document.getElementById('nm').value='';document.getElementById('tx').value='';rate=0;drawStars()};
