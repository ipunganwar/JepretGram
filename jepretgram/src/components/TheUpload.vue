<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Upload Moment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>Caption</label>
            <input type="text" class="form-control" v-model="caption">
          </div>
          <div class="form-group">
            <label>Photo url</label>
            <input type="text" class="form-control" v-model="photo_url">
          </div>
          <div class="form-group">
            <label>File input</label>
            <input type="file" class="form-control-file">
            <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      caption: '',
      photo_url: ''
    }
  },
  methods: {
    save () {
      this.postPhoto({
        caption: this.caption,
        photo_url: this.photo_url
      })
    },
    ...mapActions([
      'postPhoto'
    ])
  }

}
</script>

<style>

</style>
