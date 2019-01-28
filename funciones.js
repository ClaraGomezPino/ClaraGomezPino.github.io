function mostrar(elemento1,iconoHam,iconoCerrar) {
    /* para que se visulice la barra de navegación */
           elto=document.getElementById(elemento1);
           elto.style.display="block";
    /* para ocultar icono menu hamburguesa */
           iHam=document.getElementById(iconoHam);
           iHam.style.display="none";
    /* para mostrar icono de cerrar barra */
           iCerrar=document.getElementById(iconoCerrar);
           iCerrar.style.display="inline";
           
       }
function ocultar(elemento1,iconoHam,iconoCerrar) {
           elto=document.getElementById(elemento1);
           elto.style.display="none";
    /* para ocultar icono menu hamburguesa */
           iHam=document.getElementById(iconoHam);
           iHam.style.display="inline";
    /* para mostrar icono de cerrar barra */
           iCerrar=document.getElementById(iconoCerrar);
           iCerrar.style.display="none";
       }