let DirectivePre = {
    template: `<div>
            <h2 v-text="title"></h2>
            <p v-pre>{{ title }}</p>
        </div>
        `,
    data () {
        return {
            title: 'Directiva v-pre',
        }
    },
}