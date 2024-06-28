AFRAME.registerComponent('cursor-listener', {
    init: function () {
        const el = this.el;
        el.addEventListener('click', function (evt) {
            const action = el.getAttribute('cursor-listener').action;
            if (action === 'changeColor') {
                el.setAttribute('color', '#FF0000'); // Beispielaktion: Farbe ändern
            } else if (action === 'nextPage') {
                // Beispielaktion: Zur nächsten Seite wechseln (hier implementieren, was als nächstes passieren soll)
                console.log('Zur nächsten Seite wechseln');
                // Hier können Sie beispielsweise den Szenenwechsel implementieren
                window.location.href = 'nextpage.html'; // Beispiel: Weiterleitung zu einer nächsten HTML-Seite
                document.querySelector('a-scene').enterVR();
            }
        });
    }
});
