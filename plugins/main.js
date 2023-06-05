import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import 'vue2-datepicker/locale/id'
Vue.component('VSelect', vSelect)
// eslint-disable-next-line no-undef
Vue.use(DatePicker)
Vue.use(vSelect)
