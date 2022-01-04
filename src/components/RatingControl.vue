<template>
  <ul>
    <li>
      <button
        :class="{ active: modelValue === 'poor' }"
        type="button"
        @click="activate('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        :class="{ active: modelValue === 'average' }"
        type="button"
        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        :class="{ active: modelValue === 'great' }"
        type="button"
        @click="activate('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>


<script>
export default {
  props: ["modelValue"],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      console.log(option);
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple 2px solid;
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>