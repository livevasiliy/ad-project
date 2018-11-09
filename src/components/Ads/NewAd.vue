<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>

        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            :rules="titleRules"
            required
          ></v-text-field>
          <v-textarea
            id="description"
            name="description"
            label="Description"
            type="text"
            v-model="description"
            :rules="descriptionRules"
          ></v-textarea>
        </v-form>

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img
              src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
              alt="ads"
              height="100"
            />
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch
              color="primary"
              label="Add to promo ?"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createAd"
              :disabled="!valid || loading"
              :loading="loading"
            >
              Create ad
              <v-icon right dark>done</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewAd',
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
      titleRules: [v => !!v || 'Title is required'],
      descriptionRules: [v => !!v || 'Description is required']
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSumbit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    },
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          src: 'https://cdn-images-1.medium.com/max/1600/0*oqRmtmP0uE87G44T.png'
        }
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>

<style scoped></style>
