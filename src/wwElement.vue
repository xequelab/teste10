<template>
  <div class="timepicker-container" :style="containerStyle">
    <input
      type="time"
      v-model="time"
      :style="inputStyle"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true }
  },
  data() {
    return {
      time: this.content.value || ""
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
        cursor: "pointer",
        width: "150px",
        boxSizing: "border-box"
      };
    },
    containerStyle() {
      return {
        display: "inline-block"
      };
    }
  },
  methods: {
    updateValue() {
      // Atualiza o content.value para o WeWeb capturar
      this.$emit('update:content', { ...this.content, value: this.time });
    }
  }
};
</script>

<style scoped>
/* Removendo botões padrão do input time */
.timepicker-container input::-webkit-inner-spin-button,
.timepicker-container input::-webkit-clear-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Foco moderno */
.timepicker-container input:focus {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
</style>
