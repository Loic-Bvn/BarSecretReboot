<template>
  <button @click="handleClick" class="btnCat">
    {{ label }}
  </button>
</template>

<script>
  export default {
    name: 'ButtonCategory',
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleClick() {
        console.log('Redirect + filter cocktail');
        for (const ingredient in this.value) {
          if (this.value[ingredient] === 'vodka') { //TODO: to update
            console.log(this.value);
            this.$router.push('/filterView');
            break;
          }
        }
      }
    }
  };
</script>

<style scoped>
  .btnCat {
    padding: 10px 20px;
    background-color: #83296b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
