<template>
  <div class="timepicker-container" :style="containerStyle">
    <input
      type="time"
      v-model="time.value"
      :style="inputStyle"
      @input="onInput"
    />
  </div>
</template>

<script>
import { computed, onMounted, nextTick } from "vue";

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

    // Variável do componente para workflow
    const { value: time, setValue: setTime } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "value",
      type: "string",
      defaultValue: ""
    });

    // Inicializa valor do content se variável estiver vazia
    onMounted(() => {
      if (props.content.value && !time.value) {
        setTime(props.content.value);
      }

      // Foco automático
      if (props.content.autoFocus && !isEditing.value) {
        nextTick(() => {
          const input = document.querySelector(`.timepicker-container input`);
          if (input) input.focus();
        });
      }
    });

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

    // Trigger de evento change
    function onInput(event) {
      emit("trigger-event", { name: "change", event: { value: time.value } });

      // Dispara evento complete se o valor não estiver vazio
      if (time.value) {
        emit("trigger-event", { name: "complete", event: { value: time.value } });
      }
    }

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
