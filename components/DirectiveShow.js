
let DirectiveShow = {
    template: `<div>
            <h1 v-text="title"></h1>
            <p v-show="mostrar" v-html="message"></p>
            <p v-show="user.permission">El Usuario Tiene Permiso para ver esto</p>
            <p v-show="!user.permission">El Usuario Tiene No Tiene Permisos</p>

        </div>
        `,
    data () {
        return {
            title: 'Directiva v-show',
            message: '<b>Hola desde directive v-show</b>',
            mostrar: true,
            user: {
                permission: false,
            }
        }
    }
}