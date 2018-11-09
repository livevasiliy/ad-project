export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: '2',
        title: 'Second ad',
        description: 'Hello i am description',
        promo: false,
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        id: '3',
        title: 'Three ad',
        description: 'Hello i am description',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        id: '4',
        title: 'Four ad',
        description: 'Hello i am description',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = 'qwqwqw'
      commit('createAd', payload)
    }
  }
}
