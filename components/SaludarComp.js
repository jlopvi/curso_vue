var SaludarComp = ('formuario-vue',{
    template: `
            <div @click="upps">
                <h2>Saludo para tí</h2>
                <label @click.stop="" for="nombre">Nombre:</label>
                <input @click.stop="" type="text" name="nombre" id="nombre">
                <label @click.stop="" for="pais">Pais:</label>
                <input @click.stop="" type="text" name="pais" id="pais">
                <button @click.stop="saludar">Saludar</button>
            </div>
                `,
    data(){
        return {
 
        }
    },
    methods: {
        saludar(){
            var name = document.getElementById('nombre').value;
            var pais = document.getElementById('pais').value;
            alert('Hola mi nombre es '+name+' y soy de '+pais);
        },
        hey () {
            alert('Hey')
        },
        upps(){
            alert('No diste click en el botón');
        }
    }
});