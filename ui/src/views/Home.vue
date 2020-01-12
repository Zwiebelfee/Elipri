<template>
  <div class="home">
    <ArtList />
  </div>
</template>

<script>
// @ is an alias to /src
import ArtList from '@/components/ArtList';

export default {
  name: 'home',
  components: {
    ArtList,
  },
  computed: {
  }
}
</script>
