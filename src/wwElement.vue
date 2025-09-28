<template>
  <div class="timepicker-container" :style="containerStyle">
    <input
      type="time"
      v-model="time"
      :style="inputStyle"
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
      time: ""
    };
  },
  computed: {
    inputStyle() {
      return {
        color: this.content.textColor,
        backgroundColor: this.content.backgroundColor,
        border: `1px solid ${this.content.borderColor}`,
        borderRadius: this.content.borderRadius + "px",
        padding: "8px 12px",
        fontSize: "16px",
        outline: "none",
        cursor: "pointer"
      };
    },
    containerStyle() {
      return {
        display: "inline-block"
      };
    }
  }
};
</script>

<style scoped>
/* Somente um toque de modernidade */
.timepicker-container input::-webkit-inner-spin-button,
.timepicker-container input::-webkit-clear-button {
  -webkit-appearance: none;
  margin: 0;
}

.timepicker-container input:focus {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
</style>

