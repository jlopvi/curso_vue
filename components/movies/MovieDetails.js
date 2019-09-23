let MovieDetails = {
    name: 'MovieDetails',
    template: `<div v-if="Object.keys(movie).length">
                   
                    <div class="heroMovie text-white py-5" :style="{
                        'background': 'linear-gradient(rgba(59, 168, 119, 0.45), rgba(59, 168, 119, 1)),url(https://image.tmdb.org/t/p/w1400_and_h450_face'+movie.backdrop_path+')',
                        'background-size': 'cover'
                    }">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-4 col-lg-3">
                                    <img :src="movie.poster_path | coverURL" class="w-100" />
                                </div>
                                <div class="col-12 col-md-8 col-lg-9">
                                    <h2>Detalles: {{ movie.title }}</h2>

                                    <p v-text="movie.overview">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div v-for="movie in similar" :key="movie.id" class="col-12 col-md-6 col-lg-4 col-xl-3 py-3">
                                <MovieComp 
                                    :id="movie.id" 
                                    :title="movie.title" 
                                    :synopsis="movie.overview" 
                                    :cover="movie.poster_path"
                                    :like="movie.like"
                                />
                            </div>
                        </div>
                    </div>
                </div>`,
    data () {
        return {
            movie: {},
            similar: []
        }
    },
    components: {
        MovieComp
    },
    watch: {
        '$route.params.id' () {
            this.getMovie()
        }
    },
    methods: {
        getSimilar () {
            fetch(`${this.apiBaseURL}movie/${this.$route.params.id}/similar${this.apiConfig}`)
                .then(res => res.json())
                .then(({results}) =>{
                    this.similar = results
                })
        },
        getMovie () {
            fetch(`${this.apiBaseURL}movie/${this.$route.params.id}${this.apiConfig}`)
                .then(res => res.json())
                .then(data =>{
                    this.movie = data
                    this.getSimilar()
                })
        }
    },
    mounted() {
        this.getMovie()
    },
}