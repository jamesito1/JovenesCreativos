const btn_noche = document.querySelector('.boton_modo_noche');
const btn_noche2 = document.getElementById('btn_id_noche').value;
let sol = document.querySelector('.modo_dia');
let luna = document.querySelector('.modo_noche');
let cuerpo= document.querySelector('.cuerpo');
const barra_navegacion =document.querySelector('.barra_navegacion')
const tabla_hobbies= document.querySelector('.hobbies_tabla')
const pie=document.querySelector('.pie')
let habilidades_iconos=document.querySelectorAll('.habilidades_iconos')
let conocimientos_iconos =document.querySelectorAll('.conocimientos_iconos')
let contenido_p = document.querySelector('.contenido_p')
let contenido_p2 = document.querySelector('.contenido_p2')
let habilidades_lista = document.querySelectorAll('.habilidades_lista')

console.log(conocimientos_iconos)

btn_noche.addEventListener('click', ()=>{
  if(btn_noche2==1){
    tabla_hobbies.classList.toggle('hobbies_tabla_dark')
    cuerpo.classList.toggle('cuerpo_dark')
  }

  if(btn_noche2==2){
    btn_noche.classList.toggle('boton_modo_dia')
    sol.classList.toggle('modo_dia_activado');
    luna.classList.toggle('modo_noche_desactivado');
    barra_navegacion.classList.toggle('barra_navegacion_dark');
    console.log(barra_navegacion);
    document.body.classList.toggle('body_dark');
    pie.classList.toggle('pie_dark');
    cuerpo.classList.toggle('cuerpo_dark');
    habilidades_lista[0].classList.toggle('habilidades_lista_dark')
    habilidades_lista[1].classList.toggle('habilidades_lista_dark')

    for(let i=0;i<=7;i++){
      conocimientos_iconos[i].classList.toggle('conocimientos_iconos_dark');
      console.log(i)
      }

    for(let i=0;i<=7;i++){
    habilidades_iconos[i].classList.toggle('habilidades_iconos_dark');
    console.log(i)
    }
    
  }
if(btn_noche2==3){
  cuerpo.classList.toggle('cuerpo_dark');
}
  
if(btn_noche2==4){
  contenido_p.classList.toggle('contenido_p_dark')
  contenido_p2.classList.toggle('contenido_p2_dark')

}

  btn_noche.classList.toggle('boton_modo_dia')
  sol.classList.toggle('modo_dia_activado');
  luna.classList.toggle('modo_noche_desactivado');
  document.body.classList.toggle('body_dark');
  
  barra_navegacion.classList.toggle('barra_navegacion_dark')
  
  pie.classList.toggle('pie_dark')
  console.log(habilidades_iconos)

})



const abrir_curiosidad = document.getElementById('abrir_curiosidad');
const contenedor_curiodidades = document.getElementById('contenedor_curiodidades');
const cerrar_curiosidad = document.getElementById('cerrar_curiosidad');
const curiosidad = document.getElementById('curiosidad');

abrir_curiosidad.addEventListener('click', () => {
  contenedor_curiodidades.classList.add('activar_curiosidad');  
  let curiosidad_ale = Math.round(Math.random()*10);
  if(curiosidad_ale==1){
    curiosidad.innerHTML ="Tengo un gato llamado Happi, es negro y muy bonito"
  }
  if(curiosidad_ale==2){
    curiosidad.innerHTML ="Mi animal favorito son las tortugas, y por mucho tiempo tuve una pero se escapo"
  }if(curiosidad_ale==3){
    curiosidad.innerHTML ="Mis colores favoritos son el azul,naraja y verde"
  }if(curiosidad_ale==4){
    curiosidad.innerHTML ="Naci en un pueblo que esta a 5 horas de medellin, cuando cumpli un año nos mudamos a medellin"
  }if(curiosidad_ale==5){
    curiosidad.innerHTML ="Mi comida favorita es el arroz, con cualquier cosa sabe bien"
  }if(curiosidad_ale==6){
    curiosidad.innerHTML ="Mi Superheroe favorito es Deadpool"
  }if(curiosidad_ale==7){
    curiosidad.innerHTML ="Tengo un hermano sietes años menor que yo"
  }if(curiosidad_ale==8){
    curiosidad.innerHTML ="Me encata volar cometas"
  }if(curiosidad_ale==9){
    curiosidad.innerHTML ="Mi pelicula favoritas son: 1917 y mis series favoritas son: Better Call Saul y Breaking Bad"}
  if(curiosidad_ale==10){
    curiosidad.innerHTML ="Mis libros favoritos son: Satanas(Mario Mendoza) y El misterio de Salem's Lot "
  }
  
});

cerrar_curiosidad.addEventListener('click', () => {
  contenedor_curiodidades.classList.remove('activar_curiosidad');
});