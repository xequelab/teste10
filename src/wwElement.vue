<template>
  <div class="ww-time-picker" :style="containerStyle">
    <label v-if="content.showLabel && content.label" class="time-picker-label" :style="labelStyle">
      {{ wwLib.wwLang.getText(content.label) }}
    </label>
    
    <div class="time-input-container" :style="inputContainerStyle">
      <div class="time-input-wrapper">
        <!-- Hours -->
        <div class="time-section">
          <input 
            type="number" 
            v-model="hours" 
            @input="updateTime"
            @blur="validateHours"
            min="0" 
            :max="content.format24h ? 23 : 12"
            class="time-input hours-input"
            :style="inputStyle"
            :disabled="content.disabled"
            :readonly="content.readonly"
          />
          <span class="time-label" :style="timeLabelStyle">{{ content.hoursLabel || 'H' }}</span>
        </div>
        
        <span class="time-separator" :style="separatorStyle">:</span>
        
        <!-- Minutes -->
        <div class="time-section">
          <input 
            type="number" 
            v-model="minutes" 
            @input="updateTime"
            @blur="validateMinutes"
            min="0" 
            max="59"
            class="time-input minutes-input"
            :style="inputStyle"
            :disabled="content.disabled"
            :readonly="content.readonly"
          />
          <span class="time-label" :style="timeLabelStyle">{{ content.minutesLabel || 'M' }}</span>
        </div>
        
        <!-- Seconds (if enabled) -->
        <template v-if="content.showSeconds">
          <span class="time-separator" :style="separatorStyle">:</span>
          <div class="time-section">
            <input 
              type="number" 
              v-model="seconds" 
              @input="updateTime"
              @blur="validateSeconds"
              min="0" 
              max="59"
              class="time-input seconds-input"
              :style="inputStyle"
              :disabled="content.disabled"
              :readonly="content.readonly"
            />
            <span class="time-label" :style="timeLabelStyle">{{ content.secondsLabel || 'S' }}</span>
          </div>
        </template>
        
        <!-- AM/PM Toggle (12h format) -->
        <div v-if="!content.format24h" class="ampm-toggle" :style="ampmStyle">
          <button 
            @click="toggleAmPm"
            :disabled="content.disabled || content.readonly"
            class="ampm-button"
            :style="ampmButtonStyle"
          >
            {{ ampm }}
          </button>
        </div>
      </div>
      
      <!-- Preset buttons -->
      <div v-if="content.showPresets && content.presets?.length" class="presets-container">
        <button 
          v-for="preset in content.presets"
          :key="preset.label"
          @click="setPreset(preset.value)"
          class="preset-button"
          :style="presetButtonStyle"
          :disabled="content.disabled || content.readonly"
        >
          {{ preset.label }}
        </button>
      </div>
    </div>
    
    <!-- Helper text -->
    <div v-if="content.helperText" class="helper-text" :style="helperTextStyle">
      {{ wwLib.wwLang.getText(content.helperText) }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  emits: ["update:content", "trigger-event"],
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
  },
  
  setup(props) {
    const initValue = computed(() => props.content.value || "09:00");
    
    const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "value",
      defaultValue: initValue,
    });

    return {
      variableValue,
      setValue,
      initValue
    };
  },
  
  data() {
    return {
      hours: 9,
      minutes: 0,
      seconds: 0,
      ampm: 'AM'
    }
  },
  
  computed: {
    containerStyle() {
      return {
        fontFamily: this.content.fontFamily || 'system-ui, -apple-system, sans-serif',
        width: this.content.width || '100%',
        maxWidth: this.content.maxWidth || '400px',
        margin: this.content.centerAlign ? '0 auto' : '0'
      }
    },
    
    labelStyle() {
      return {
        color: this.content.labelColor || '#374151',
        fontSize: this.content.labelSize || '14px',
        fontWeight: this.content.labelWeight || '500',
        marginBottom: '8px',
        display: 'block'
      }
    },
    
    inputContainerStyle() {
      return {
        backgroundColor: this.content.backgroundColor || '#ffffff',
        border: `${this.content.borderWidth || '2px'} solid ${this.content.borderColor || '#e5e7eb'}`,
        borderRadius: this.content.borderRadius || '12px',
        padding: this.content.padding || '16px',
        boxShadow: this.content.boxShadow || '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease'
      }
    },
    
    inputStyle() {
      return {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: this.content.inputSize || '24px',
        fontWeight: this.content.inputWeight || '600',
        color: this.content.inputColor || '#111827',
        textAlign: 'center',
        width: '60px',
        padding: '8px 4px'
      }
    },
    
    separatorStyle() {
      return {
        fontSize: this.content.inputSize || '24px',
        fontWeight: this.content.inputWeight || '600',
        color: this.content.separatorColor || '#6b7280',
        margin: '0 8px',
        userSelect: 'none'
      }
    },
    
    timeLabelStyle() {
      return {
        fontSize: this.content.labelSize || '12px',
        color: this.content.timeLabelColor || '#6b7280',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }
    },
    
    ampmStyle() {
      return {
        marginLeft: '16px'
      }
    },
    
    ampmButtonStyle() {
      return {
        backgroundColor: this.content.ampmBgColor || '#f3f4f6',
        color: this.content.ampmColor || '#374151',
        border: 'none',
        borderRadius: this.content.ampmRadius || '8px',
        padding: '8px 12px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }
    },
    
    presetButtonStyle() {
      return {
        backgroundColor: this.content.presetBgColor || '#f8fafc',
        color: this.content.presetColor || '#475569',
        border: `1px solid ${this.content.presetBorderColor || '#e2e8f0'}`,
        borderRadius: this.content.presetRadius || '6px',
        padding: '6px 12px',
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        margin: '4px 4px 0 0',
        transition: 'all 0.2s ease'
      }
    },
    
    helperTextStyle() {
      return {
        color: this.content.helperColor || '#6b7280',
        fontSize: this.content.helperSize || '12px',
        marginTop: '8px'
      }
    },
    
    timeValue() {
      if (this.content.format24h) {
        return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}${this.content.showSeconds ? ':' + String(this.seconds).padStart(2, '0') : ''}`
      } else {
        return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}${this.content.showSeconds ? ':' + String(this.seconds).padStart(2, '0') : ''} ${this.ampm}`
      }
    }
  },
  
  watch: {
    initValue: {
      handler(newValue) {
        if (newValue && newValue !== this.variableValue) {
          this.parseTime(newValue);
          this.setValue(newValue);
        }
      },
      immediate: true
    },
    
    variableValue: {
      handler(newValue) {
        if (newValue && newValue !== this.timeValue) {
          this.parseTime(newValue);
        }
      },
      immediate: true
    }
  },
  
  methods: {
    parseTime(timeString) {
      if (!timeString) return
      
      const parts = timeString.split(':')
      if (parts.length >= 2) {
        let hours = parseInt(parts[0])
        const minutes = parseInt(parts[1])
        let seconds = 0
        let ampm = 'AM'
        
        if (parts.length >= 3) {
          const secondsPart = parts[2]
          if (secondsPart.includes(' ')) {
            const [sec, period] = secondsPart.split(' ')
            seconds = parseInt(sec)
            ampm = period
          } else {
            seconds = parseInt(secondsPart)
          }
        } else if (timeString.includes(' ')) {
          ampm = timeString.split(' ')[1]
        }
        
        if (!this.content.format24h && hours > 12) {
          hours = hours - 12
          ampm = 'PM'
        }
        
        this.hours = hours || 12
        this.minutes = minutes || 0
        this.seconds = seconds || 0
        this.ampm = ampm
      }
    },
    
    updateTime() {
      const newValue = this.timeValue;
      this.setValue(newValue);
      this.$emit('trigger-event', {
        name: 'change',
        event: { value: newValue }
      });
    },
    
    validateHours() {
      const max = this.content.format24h ? 23 : 12
      const min = this.content.format24h ? 0 : 1
      
      if (this.hours > max) this.hours = max
      if (this.hours < min) this.hours = min
      
      this.updateTime()
    },
    
    validateMinutes() {
      if (this.minutes > 59) this.minutes = 59
      if (this.minutes < 0) this.minutes = 0
      this.updateTime()
    },
    
    validateSeconds() {
      if (this.seconds > 59) this.seconds = 59
      if (this.seconds < 0) this.seconds = 0
      this.updateTime()
    },
    
    toggleAmPm() {
      this.ampm = this.ampm === 'AM' ? 'PM' : 'AM'
      this.updateTime()
    },
    
    setPreset(value) {
      this.parseTime(value)
      this.updateTime()
    }
  },
  
  mounted() {
    // Inicializa com valor padrão
    if (!this.variableValue) {
      this.setValue(this.timeValue);
    }
  }
}
</script>

<style scoped>
.ww-time-picker {
  font-family: system-ui, -apple-system, sans-serif;
}

.time-input-container {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.time-input-container:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.time-input-container:focus-within {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.time-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ww-time-picker {
  display: flex;
  flex-direction: column;
}

.time-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.time-input {
  -moz-appearance: textfield;
  -webkit-appearance: none;
}

.time-input::-webkit-outer-spin-button,
.time-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.time-input:focus {
  background-color: rgba(59, 130, 246, 0.05);
  border-radius: 8px;
}

.time-label {
  margin-top: 4px;
}

.ampm-button:hover:not(:disabled) {
  background-color: #e5e7eb !important;
}

.ampm-button:active:not(:disabled) {
  transform: scale(0.95);
}

.presets-container {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  flex-wrap: wrap;
}

.preset-button:hover:not(:disabled) {
  background-color: #f1f5f9 !important;
  border-color: #cbd5e1 !important;
}

.preset-button:active:not(:disabled) {
  transform: scale(0.95);
}

.time-input:disabled,
.ampm-button:disabled,
.preset-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
