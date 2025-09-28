<template>
  <div>
    <input
      type="text"
      :placeholder="content.placeholder"
      :style="inputStyle"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    inputStyle() {
      return {
        color: this.content.textColor,
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      };
    },
  },
};
</script>
