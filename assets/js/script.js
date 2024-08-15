// Cuando el documento esté listo
// (no necesariamente el contenido de las etiquetas)
$(document).ready(function () {
    // Ejecuta esto
    $('form').on("submit", function () {
        console.log('Formulario1 enviado 🕊️')
    })

    $('#agrandarTexto').on("click", function () {
        // elemento.css("propiedad", "valor")
        $('#parrafoObjetivoAgrandar').css({
            'color': 'red',
            'fontSize': '25px'
        }).toggle()
    })

    $('#targetThis').on('mouseenter', function () {
       console.log(this)
        $(this).css({
            'color': 'blue',
            'fontSize': '4rem'
        })
    })
})




/**
 * Vanilla JS
 */

// cuando el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
    // ejecuta esto
    document.querySelector('form').addEventListener("submit", function () {
        console.log('Formulario2 enviado 🕊️')
    })
})
