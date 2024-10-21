<template>
  <div class="filter-group">
    <h3>{{ title }}</h3>
    <div v-for="(item, index) in items" :key="index">
      <label>
        <input type="checkbox" :value="item" @change="toggleFilter(item)" /> {{ item }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
  },
  data() {
    return {
      selectedItems: [],
    };
  },
  methods: {
    toggleFilter(item) {
      const index = this.selectedItems.indexOf(item);
      if (index === -1) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(index, 1);
      }
      this.$emit('filterChanged', this.selectedItems);
    },
  },
};
</script>

<style scoped>
/* Ajoute tes styles ici */
.filter-group {
  margin-bottom: 1rem;
}
</style>
