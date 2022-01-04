<template>
  <div>
    <header>
      <slot name="header">
        <h2>The Default</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["content"],
};
</script>




<style>

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>