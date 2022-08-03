<template>
  <div>
    <div>{{ counter }}</div>
    <button
      class="counterButton"
      @click="counter++"
    >
      Incrementar
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
}
</script>