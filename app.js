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
        console.log(this.anime)
        
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