const btn_noche = document.querySelector('.boton_modo_noche');
const btn_noche2 = document.getElementById('btn_id_noche').value;
let sol = document.querySelector('.modo_dia');
let luna = document.querySelector('.modo_noche');
let cuerpo= document.querySelector('.cuerpo');
const barra_navegacion =document.querySelector('.barra_navegacion')
const tabla_hobbies= document.querySelector('.hobbies_tabla')
const pie=document.querySelector('.pie')

console.log(btn_noche2)

btn_noche.addEventListener('click', ()=>{
  if(btn_noche2==1){
    tabla_hobbies.classList.toggle('hobbies_tabla_dark')
    cuerpo.classList.toggle('cuerpo_dark')
  }

  if(btn_noche2==2){
    cuerpo.classList.toggle('cuerpo_dark')
  }

  if(btn_noche2==3){
    
  }

  btn_noche.classList.toggle('boton_modo_dia')
  sol.classList.toggle('modo_dia_activado');
  luna.classList.toggle('modo_noche_desactivado');
  document.body.classList.toggle('body_dark');
  
  barra_navegacion.classList.toggle('barra_navegacion_dark')
  
  pie.classList.toggle('pie_dark')
  console.log(barra_navegacion)

})