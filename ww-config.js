export default {
  editor: {
    label: { en: "Time Picker" },
  },
  properties: {
    textColor: {
      label: { en: "Text color" },
      type: "Color",
      defaultValue: "#000000"
    },
    backgroundColor: {
      label: { en: "Background color" },
      type: "Color",
      defaultValue: "#ffffff"
    },
    borderColor: {
      label: { en: "Border color" },
      type: "Color",
      defaultValue: "#cccccc"
    },
    borderRadius: {
      label: { en: "Border radius" },
      type: "Number",
      defaultValue: 6
    },
    value: {
      label: { en: "Selected Time" },
      type: "Text",
      defaultValue: ""
    }
  }
};
