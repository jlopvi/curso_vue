Vue.component('props-comp', {
    template: `
        <div class="container">
            <h5>Bienvenido {{ user }}</h5>
            <h1>Peliculas Props</h1>
            <div class="row">
                <div class="col-12  col-md-6 col-lg-4" v-for="(movie, key) in movies" 
                :key="key">
                    <MovieComp 
                    :id="movie.id" 
                    :title="movie.title" 
                    :synopsis="movie.synopsis" 
                    :cover="movie.cover"
                    :like="movie.like"
                    @toggleLike="onToggleLike"
                    />
                </div>
            </div>
            <label> Cambiar Nombre 
                <input :value="user.name" @change="setNameUser">
                <input :value="user.lastName" @change="setLastNameUser">
            </label>
            {{ oldUser }}
            
            <MovieFav :show.sync="showFav"/>
        </div>
    `, 
    data () {
        return {
            user: {
                name: 'Jesus',
                lastName: 'Lopez'
            },
            oldUser: null,
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    like: false
                }
            ],
            showFav: false
            
        }
    },
    watch: {
        // user (newVal, oldVal) {
            
        //     console.log(newVal, oldVal)
        //     this.oldUser = oldVal
        // }
        user: {
            handler: function (newVal, oldVal) {
                console.log('new:', newVal, 'old:', oldVal)
            },
            deep: true
        },
        'user.name': {
            handler: function (newVal, oldVal) {
                console.log('new:', newVal, 'old:', oldVal)
            },
            deep: true
        },
        'user.lastName': {
            handler: function (newVal, oldVal) {
                console.log('new:', newVal, 'old:', oldVal)
            },
            deep: true
        },

    },
    components: {
        MovieComp,
        MovieFav
    },
    methods: {
        setNameUser (event) {
            this.user.name = event.target.value
        },
        setLastNameUser (event) {
            this.user.lastName = event.target.value
        },
        onToggleLike (data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            movieLike.like = data.like
            this.showFav = data.like
        },
        // onHideFav (show) {
        //     this.showFav = show
        // }
    },
})