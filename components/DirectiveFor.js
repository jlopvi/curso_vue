
let DirectiveFor = {
    template: `<div>
            <h1 v-text="title"></h1>
            <p v-html="message"></p>
            <h3>Lista de un Array</h3>
            <ul>
                <li v-for="(color, index) in list" :key="index" v-text="color"></li>
            </ul>
            <h3>Lista de un Objeto</h3>
            <ul>
                <li v-for="(item, key, index ) in object_list" :key="index">
                    {{  key }}: {{ item }}
                </li>
            </ul>
            <h3>Lista de un Array con Objectos</h3>
            <ul>
                <li v-for="(item, index ) in other_list" :key="index">
                    Nombre: {{ item.name }} <br/>
                    Apellido: {{ item.last_name }} <br/>
                    Nick: {{ item.nick }} <br/>
                </li>
            </ul>
        </div>
        `,
    data () {
        return {
            title: 'Directiva v-for',
            message: '<b>Hola desde directive v-for</b>',
            list: ['Rojo', 'Amarrillo', 'Azul', 'Purpura', 'Rosa'],
            object_list: {
                name: 'Jesus',
                last_name: 'Lopez',
                nick:  'Lopvi',
            },

            other_list: [
                {
                    name: 'Jesus',
                    last_name: 'Lopez',
                    nick:  'Lopvi',
                },
                {
                    name: 'Jorge',
                    last_name: 'Martinez',
                    nick:  'jmar',
                },
                {
                    name: 'Ismael',
                    last_name: 'Carranza',
                    nick:  'IsamaCa',
                },
            ]
        }
    }
}