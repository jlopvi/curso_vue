
let DirectiveIf = {
    template: `<div>
            <h1 v-text="title"></h1>
            <p v-if="mostrar" v-html="message"></p>
            <h1>Uso de v-if / v-else</h1>
            <p v-if="user.permission">El Usuario Tiene Permiso para ver esto</p>
            <p v-else>El Usuario Tiene No Tiene Permisos</p>
            <h1>Uso de v-if / v-else-if / v-else</h1>
            <p v-if="user.permission && user.vip">El Usuario Tiene Permiso y es VIP</p>
            <p v-else-if="user.permission">El Usuario Tiene Permiso</p>
            <p v-else-if="user.vip">El Usuario es VIP</p>
            <p v-else>El Usuario No tiene Permisos ni es VIP</p>

        </div>
        `,
    data () {
        return {
            title: 'Directiva v-if',
            message: '<b>Hola desde directive v-if</b>',
            mostrar: true,
            user: {
                permission: false,
                vip: true,
            }
        }
    }
}