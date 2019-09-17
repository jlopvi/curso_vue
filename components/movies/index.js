const APIKEY = '29ed1d64cc3508c30f08131eb1860d99'
const BASEURL = 'https://api.themoviedb.org/3/'
Vue.component('movie-app', {
    template: `
        <div class="container">
            <h5>Bienvenido {{ user.name }} {{ user.lastName }}</h5>
            <h1>Peliculas App</h1>
            <div class="row">
                <div class="col-12  col-md-6 col-lg-4 py-3" v-for="(movie, key) in movies" 
                :key="key">
                    <MovieComp 
                    :id="movie.id" 
                    :title="movie.title" 
                    :synopsis="movie.overview" 
                    :cover="movie.poster_path"
                    :like="movie.like"
                    @toggleLike="onToggleLike"
                    />
                </div>
            </div>

            <div class="row">
                <a :href="'?page='+n" class="btn m-1" :class="{
                    'btn-light': n != page,
                    'btn-primary': n == page
                }" v-for="(n, index) in total_pages" :key="index">
                    {{n}}
                    
                </a>
            </div>
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
               
            ],
            showFav: false,
            page: 1,
            total_pages: null
        }
    },
    watch: {
        page () {
            this.getPopularMovies()
        }
    },
    components: {
        MovieComp,
        MovieFav
    },
    methods: {
        
        onToggleLike (data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            movieLike.like = data.like
            this.showFav = data.like
        },
        getPopularMovies () {
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`
            fetch(URL)
                .then(response => response.json())
                .then(({results, page, total_pages}) => {
                    console.log(page, total_pages)
                    this.total_pages = total_pages
                    this.movies = results.map(m => {
                        m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
                        m.like = false
                        return m
                    })
                })
        },
        setPage (page) {
            this.page = page
            this.getPopularMovies() 
        }
        // onHideFav (show) {
        //     this.showFav = show
        // }
    },
    mounted() {
        let locationURL = new URL(window.location.href)
        this.page = locationURL.searchParams.get('page') || 1
    
        this.getPopularMovies()
    },
})