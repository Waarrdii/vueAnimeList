const app = new Vue({
  el: '#app',
  data: {
    anime: [],
    allGenres:[],
    error: null,
  },
  mounted() {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => {
        this.anime = response.data.data;
        console.log(this.anime)
        
        // Simpan genre ke dalam array tanpa duplikat
        this.genres = response.data.data.map(anime => anime.genres);
        this.allGenres = this.genres.reduce((a,b) => a.concat(b),[]);
         // Filter duplikat hanya sekali setelah penggabungan
         this.allGenres = this.allGenres.filter((genre, index) => {
          return this.allGenres.findIndex(p=>p.mal_id === genre.mal_id)=== index;
         });
         console.log(this.allGenres); // Cek apakah sudah difilter
      })
      .catch(error => { 
        this.error = error;
        console.error('Error fetching data:', error);
      });
  },
  filters: {
    truncate(text, length, suffix = "...") {
      if (text.length <= length) {
        return text;
      }
      return text.substring(0, length) + suffix;
    }
  }
});
