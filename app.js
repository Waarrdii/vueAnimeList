const app = new Vue({
  el: '#app',
  data: {
    anime: [],
    error: null,
  },
  mounted() {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => {
        this.anime = response.data.data;
      })
      .catch(error => {
        this.error = error;
        console.error('Error fetching data:', error);
      });
  },
});