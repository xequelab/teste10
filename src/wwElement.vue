<template>
  <div class="timepicker-container" :style="containerStyle">
    <input
      type="time"
      :value="time.value"
      :style="inputStyle"
      @input="onInput($event)"
    />
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";

export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
    /* wwEditor:start */
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props, { emit }) {
    const isEditing = computed(() => {
      /* wwEditor:start */
      return props.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
      /* wwEditor:end */
      return false;
    });

    // Cria variável do componente para o valor do time picker
    const { value: time, setValue: setTime } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "value",
      type: "string",
      defaultValue: props.content.value || ""
    });

    // Estilo do input
    const inputStyle = computed(() => ({
      color: props.content.textColor,
      backgroundColor: props.content.backgroundColor,
      border: `1px solid ${props.content.borderColor}`,
      borderRadius: props.content.borderRadius + "px",
      padding: "8px 12px",
      fontSize: "16px",
      outline: "none",
      cursor: "pointer",
      width: "150px",
      boxSizing: "border-box"
    }));

    const containerStyle = computed(() => ({
      display: "inline-block"
    }));

    // Atualiza a variável do componente quando o usuário muda o valor
    function onInput(event) {
      setTime(event.target.value);
      emit("trigger-event", { name: "change", event: { value: event.target.value } });
    }

    // Sincroniza valor inicial do content
    watch(() => props.content.value, (newVal) => {
      if (newVal !== time.value) {
        setTime(newVal);
      }
    });

    // Opcional: foco automático quando não estiver editando
    onMounted(() => {
      if (props.content.autoFocus && !isEditing.value) {
        nextTick(() => {
          const input = document.querySelector(`.timepicker-container input`);
          if (input) input.focus();
        });
      }
    });

    return { time, inputStyle, containerStyle, onInput };
  }
};
</script>

<style scoped>
.timepicker-container input::-webkit-inner-spin-button,
.timepicker-container input::-webkit-clear-button {
  -webkit-appearance: none;
  margin: 0;
}

.timepicker-container input:focus {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
</style>
