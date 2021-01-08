
let myApp = new Vue({

  el:"#root",

  data:{

    dischi:[],
    selected:"",
  },

  computed:{
    filteredByGenre: function() {
      searchInput = this.selected;
      return this.dischi.filter(function(element){
        return element.genre.toLowerCase().includes(searchInput.toLowerCase())
      });

    },
  },

  mounted: function(){

        axios.get("http://localhost:8888/esercitazioni-boolean/dischi_musicali/server.php")
        .then((result)=> {

          console.log(result)
          console.log(result.data)
          this.dischi = result.data

        });

 },

});
