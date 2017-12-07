<template>
  <div>
    <TheNavbar/>
    <div>
      <TheUpload/>
    </div>
    <div class="container">
      <TheGallery/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheUpload from '@/components/TheUpload'
import TheGallery from '@/components/TheGallery'

export default {
  components: {
    TheNavbar,
    TheUpload,
    TheGallery
  },

}
</script>

<style>

</style>
