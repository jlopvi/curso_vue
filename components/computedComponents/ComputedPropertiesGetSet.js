Vue.component('computed-properties-get-set', {
    template: `
        <div>
            <h1>Computed Properties con Getter y Setter</h1>
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
        fullName: {
            get () {
                return `${ this.user.name } ${ this.user.lastName }`
            },
            set (newValue) {
                let name = newValue.split(' ')

                this.user.name = name[0]
                this.user.lastName = name[1]
            }
        },
        userAge () {
            let date = new Date()
            let currentYear = date.getFullYear()

            return currentYear - Number(this.user.year)
        }
        
    },
    
})