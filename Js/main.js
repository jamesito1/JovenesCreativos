const btn_noche = document.querySelector('.boton_modo_noche');
let sol = document.querySelector('.modo_dia')
let luna = document.querySelector('.modo_noche')

btn_noche.addEventListener('click', ()=>{
  btn_noche.classList.toggle('boton_modo_dia')
  sol.classList.toggle('modo_dia_activado');
  luna.classList.toggle('modo_noche_desactivado');
  document.body.classList.toggle('dark');
})