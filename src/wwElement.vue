<template>
  <div class="timepicker-container" :style="containerStyle">
    <input
      type="time"
      v-model="time.value"
      :style="inputStyle"
    />
  </div>
</template>

<script>
import { computed } from "vue";

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
    // Detecta se estamos no editor
    const isEditing = computed(() => {
      /* wwEditor:start */
      return props.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
      /* wwEditor:end */
      return false;
    });

    // Variável do componente que vai para workflow
    const { value: time } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "value",
      type: "string",
      defaultValue: props.content.value || ""
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

    return { time, inputStyle, containerStyle };
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
