<template>
  <ul>
    <li><button :class="{active: activeOption === 'poor'}" type="button" @click="activate('poor')">Poor</button></li>
    <li><button :class="{active: activeOption === 'average'}" type="button" @click="activate('average')">Average</button></li>
    <li><button :class="{active: activeOption === 'great'}" type="button" @click="activate('great')">Great</button></li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    activate(option) {
        console.log(option)
        this.activeOption = option;
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