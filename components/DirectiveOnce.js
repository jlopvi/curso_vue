let DirectiveOnce = {
    template: `<div>
            <h2 v-text="title" v-once></h2>
        </div>
        `,
    data () {
        return {
            title: 'Directiva v-once',
        }
    },
}