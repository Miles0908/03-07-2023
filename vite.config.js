import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`
        @import "./src/scss/variables/colors.scss";
        @import "./src/scss/helpers/mixins.scss";
        @import "./src/scss/helpers/devices.scss";
        @import "./src/scss/helpers/borderBox.scss";
        @import "./src/scss/helpers/padding.scss";
        @import "./src/scss/helpers/heroText.scss";
        @import "./src/scss/helpers/functions.scss";
        @import "./src/scss/helpers/columns.scss";
        @import "./src/scss/helpers/layout.scss";

        `
      }
    }
  }

})
