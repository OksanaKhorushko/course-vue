<template>
  <div>Test message is {{ message }}</div>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    message: String,
  },
};
</script>

<style>

</style>
