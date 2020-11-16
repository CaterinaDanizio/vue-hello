// Bonus: Aggiungere un’immagine presa anch’essa da un data

var app = new Vue({
  el: '#app',
  data: {
    message: ' Abiti da sera in promozione ',
    caption: ' Abito prom in raso in maglia con paillettes ',
    img: "img/abito1.jpg"
  },

  // Altro possibile Bonus: gestire una funzione con un evento nel modo Vue.
  methods: {
  forward: function () {
      if(this.caption === " Abito prom in raso in maglia con paillettes ")   {
        this.caption = " Abito prom a fessura con spalle scoperte con volant ";
        this.img = "img/abito2.jpg";
          }

    else if (this.caption === " Abito prom a fessura con spalle scoperte con volant ") {
      this.caption = " Abito arricciato con fasce in vita con nodo ampio ";
      this.img = "img/abito3.jpg ";
        }
    }
  }
});
