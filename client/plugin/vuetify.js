import { createVuetify } from 'vuetify';
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    theme: { defaultTheme: 'light' },
    ssr: true,
    components,
  directives,
});

export default vuetify;