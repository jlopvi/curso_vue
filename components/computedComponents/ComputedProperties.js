Vue.component('computed-properties', {
    template: `
        <div>
            <h1>Computed Properties</h1>
            <p>Hola Soy {{ fullName }}</p>
            <p>Y tengo {{  userAge }} años</p>
        </div>
    `,
    data () {
        return {
            user: {
                name: 'Jesus',
                lastName: 'Lopez',
                year: '1992'
            }
        }
    },
    computed: {
        fullName () {
            return `${ this.user.name } ${ this.user.lastName }`
        },
        userAge () {
            
            // EXPLICACIÓN JEJEJE 
            
            let date = new Date() 
            // new Date() es un Objeto JS
            // nos retorna el tiempo actual 
            
            let currentYear = date.getFullYear()
            // con con .getFullYaer() es un metodo
            // del Objeto Date
            // que nos retorna el año de la fecha que instanciamos
            
            return currentYear - Number(this.user.year)

        }
        
    },
    methods: {
        nombreCompleto () {
            return `${ this.user.name } ${ this.user.lastName }`
        }
    }
})