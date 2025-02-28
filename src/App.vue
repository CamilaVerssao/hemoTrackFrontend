<template>
  <div class="flex flex-col min-h-screen m-5">
    <Header />
    <main class="flex-1 mt-[10vh]">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }

}
</script>


