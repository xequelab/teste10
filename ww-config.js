export default {
  editor: {
    label: {
      en: "Time Picker",
      pt: "Seletor de Hora"
    },
    icon: "time",
    bubble: {
      icon: "time"
    }
  },
  
  properties: {
    // Main value
    value: {
      label: {
        en: "Time Value",
        pt: "Valor do Tempo"
      },
      type: "Text",
      bindable: true,
      defaultValue: "09:00"
    },
    
    // Format settings
    format24h: {
      label: {
        en: "24 Hour Format",
        pt: "Formato 24 Horas"
      },
      type: "OnOff",
      defaultValue: false
    },
    
    showSeconds: {
      label: {
        en: "Show Seconds",
        pt: "Mostrar Segundos"
      },
      type: "OnOff",
      defaultValue: false
    },
    
    // Label settings
    showLabel: {
      label: {
        en: "Show Label",
        pt: "Mostrar Rótulo"
      },
      type: "OnOff",
      defaultValue: true
    },
    
    label: {
      label: {
        en: "Label Text",
        pt: "Texto do Rótulo"
      },
      type: "Text",
      multiLang: true,
      defaultValue: "Select Time",
      hidden: content => !content.showLabel
    },
    
    labelColor: {
      label: {
        en: "Label Color",
        pt: "Cor do Rótulo"
      },
      type: "Color",
      defaultValue: "#374151",
      hidden: content => !content.showLabel
    },
    
    labelSize: {
      label: {
        en: "Label Size",
        pt: "Tamanho do Rótulo"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 8, "max": 24 }]
      },
      responsive: true,
      defaultValue: "14px",
      hidden: content => !content.showLabel
    },
    
    labelWeight: {
      label: {
        en: "Label Weight",
        pt: "Peso do Rótulo"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "300", label: "Light" },
          { value: "400", label: "Normal" },
          { value: "500", label: "Medium" },
          { value: "600", label: "Semibold" },
          { value: "700", label: "Bold" }
        ]
      },
      defaultValue: "500",
      hidden: content => !content.showLabel
    },
    
    // Input styling
    inputSize: {
      label: {
        en: "Input Font Size",
        pt: "Tamanho da Fonte"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 12, "max": 48 }]
      },
      responsive: true,
      defaultValue: "24px"
    },
    
    inputWeight: {
      label: {
        en: "Input Font Weight",
        pt: "Peso da Fonte"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "300", label: "Light" },
          { value: "400", label: "Normal" },
          { value: "500", label: "Medium" },
          { value: "600", label: "Semibold" },
          { value: "700", label: "Bold" }
        ]
      },
      defaultValue: "600"
    },
    
    inputColor: {
      label: {
        en: "Input Text Color",
        pt: "Cor do Texto"
      },
      type: "Color",
      defaultValue: "#111827"
    },
    
    // Container styling
    backgroundColor: {
      label: {
        en: "Background Color",
        pt: "Cor de Fundo"
      },
      type: "Color",
      defaultValue: "#ffffff"
    },
    
    borderColor: {
      label: {
        en: "Border Color",
        pt: "Cor da Borda"
      },
      type: "Color",
      defaultValue: "#e5e7eb"
    },
    
    borderHoverColor: {
      label: {
        en: "Border Hover Color",
        pt: "Cor da Borda (Hover)"
      },
      type: "Color",
      defaultValue: "#3b82f6"
    },
    
    borderWidth: {
      label: {
        en: "Border Width",
        pt: "Largura da Borda"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 0, "max": 10 }]
      },
      defaultValue: "2px"
    },
    
    borderRadius: {
      label: {
        en: "Border Radius",
        pt: "Raio da Borda"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 0, "max": 32 }]
      },
      defaultValue: "12px"
    },
    
    padding: {
      label: {
        en: "Padding",
        pt: "Preenchimento"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 4, "max": 32 }]
      },
      defaultValue: "16px"
    },
    
    boxShadow: {
      label: {
        en: "Box Shadow",
        pt: "Sombra da Caixa"
      },
      type: "Text",
      defaultValue: "0 1px 3px rgba(0, 0, 0, 0.1)"
    },
    
    // Layout
    width: {
      label: {
        en: "Width",
        pt: "Largura"
      },
      type: "Length",
      options: {
        unitChoices: [
          { "value": "%", "label": "%", "min": 10, "max": 100 },
          { "value": "px", "label": "px", "min": 100, "max": 800 }
        ]
      },
      responsive: true,
      defaultValue: "100%"
    },
    
    maxWidth: {
      label: {
        en: "Max Width",
        pt: "Largura Máxima"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 200, "max": 800 }]
      },
      responsive: true,
      defaultValue: "400px"
    },
    
    centerAlign: {
      label: {
        en: "Center Align",
        pt: "Alinhar ao Centro"
      },
      type: "OnOff",
      defaultValue: false
    },
    
    fontFamily: {
      label: {
        en: "Font Family",
        pt: "Família da Fonte"
      },
      type: "FontFamily",
      defaultValue: "system-ui, -apple-system, sans-serif"
    },
    
    // Time unit labels
    hoursLabel: {
      label: {
        en: "Hours Label",
        pt: "Rótulo das Horas"
      },
      type: "Text",
      defaultValue: "H"
    },
    
    minutesLabel: {
      label: {
        en: "Minutes Label",
        pt: "Rótulo dos Minutos"
      },
      type: "Text",
      defaultValue: "M"
    },
    
    secondsLabel: {
      label: {
        en: "Seconds Label",
        pt: "Rótulo dos Segundos"
      },
      type: "Text",
      defaultValue: "S",
      hidden: content => !content.showSeconds
    },
    
    timeLabelColor: {
      label: {
        en: "Time Label Color",
        pt: "Cor dos Rótulos de Tempo"
      },
      type: "Color",
      defaultValue: "#6b7280"
    },
    
    separatorColor: {
      label: {
        en: "Separator Color",
        pt: "Cor do Separador"
      },
      type: "Color",
      defaultValue: "#6b7280"
    },
    
    // AM/PM styling (12h format)
    ampmBgColor: {
      label: {
        en: "AM/PM Background",
        pt: "Fundo AM/PM"
      },
      type: "Color",
      defaultValue: "#f3f4f6",
      hidden: content => content.format24h
    },
    
    ampmColor: {
      label: {
        en: "AM/PM Text Color",
        pt: "Cor do Texto AM/PM"
      },
      type: "Color",
      defaultValue: "#374151",
      hidden: content => content.format24h
    },
    
    ampmRadius: {
      label: {
        en: "AM/PM Border Radius",
        pt: "Raio da Borda AM/PM"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 0, "max": 16 }]
      },
      defaultValue: "8px",
      hidden: content => content.format24h
    },
    
    // Preset buttons
    showPresets: {
      label: {
        en: "Show Preset Buttons",
        pt: "Mostrar Botões de Preset"
      },
      type: "OnOff",
      defaultValue: true
    },
    
    presets: {
      label: {
        en: "Time Presets",
        pt: "Presets de Tempo"
      },
      type: "Info",
      options: {
        text: {
          en: "Add preset times like: [{\"label\":\"Morning\",\"value\":\"09:00\"},{\"label\":\"Lunch\",\"value\":\"12:00\"},{\"label\":\"Evening\",\"value\":\"18:00\"}]",
          pt: "Adicione tempos de preset como: [{\"label\":\"Manhã\",\"value\":\"09:00\"},{\"label\":\"Almoço\",\"value\":\"12:00\"},{\"label\":\"Noite\",\"value\":\"18:00\"}]"
        }
      },
      bindable: true,
      defaultValue: [
        { "label": "Morning", "value": "09:00" },
        { "label": "Noon", "value": "12:00" },
        { "label": "Evening", "value": "18:00" }
      ],
      hidden: content => !content.showPresets
    },
    
    presetBgColor: {
      label: {
        en: "Preset Background",
        pt: "Fundo dos Presets"
      },
      type: "Color",
      defaultValue: "#f8fafc",
      hidden: content => !content.showPresets
    },
    
    presetColor: {
      label: {
        en: "Preset Text Color",
        pt: "Cor do Texto dos Presets"
      },
      type: "Color",
      defaultValue: "#475569",
      hidden: content => !content.showPresets
    },
    
    presetBorderColor: {
      label: {
        en: "Preset Border Color",
        pt: "Cor da Borda dos Presets"
      },
      type: "Color",
      defaultValue: "#e2e8f0",
      hidden: content => !content.showPresets
    },
    
    presetRadius: {
      label: {
        en: "Preset Border Radius",
        pt: "Raio da Borda dos Presets"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 0, "max": 16 }]
      },
      defaultValue: "6px",
      hidden: content => !content.showPresets
    },
    
    // States
    disabled: {
      label: {
        en: "Disabled",
        pt: "Desabilitado"
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false
    },
    
    readonly: {
      label: {
        en: "Read Only",
        pt: "Somente Leitura"
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false
    },
    
    // Helper text
    helperText: {
      label: {
        en: "Helper Text",
        pt: "Texto de Ajuda"
      },
      type: "Text",
      multiLang: true,
      defaultValue: ""
    },
    
    helperColor: {
      label: {
        en: "Helper Text Color",
        pt: "Cor do Texto de Ajuda"
      },
      type: "Color",
      defaultValue: "#6b7280",
      hidden: content => !content.helperText
    },
    
    helperSize: {
      label: {
        en: "Helper Text Size",
        pt: "Tamanho do Texto de Ajuda"
      },
      type: "Length",
      options: {
        unitChoices: [{ "value": "px", "label": "px", "min": 8, "max": 18 }]
      },
      defaultValue: "12px",
      hidden: content => !content.helperText
    }
  }
}
