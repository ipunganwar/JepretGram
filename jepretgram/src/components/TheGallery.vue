<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4"  v-for="photo in photos">
        <div class="thumbnail">
          <img v-bind:src="photo.photo_url" alt="...">
          <div class="caption">
            <h3>your moment</h3>
            <p>{{photo.caption}}</p>
            <p>{{photo.photo_url}}</p>
            <p>{{photo._id}}</p>
            <button type="button" class="btn btn-danger" @click="destroy(photo._id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getAllPhotos',
      'deletePhoto'
    ]),
    destroy (id) {
      this.deletePhoto(id)
    }
  },
  created () {
    this.getAllPhotos()
  },
  computed: {
    ...mapState([
      'photos'
    ])
  }
}
</script>

<style>

</style>
