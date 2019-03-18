import Vue from 'vue'
import {
  Table,
  TableColumn,
  Dialog,
  Radio,
  Button,
  Pagination,
  Message
} from 'element-ui'
Vue.prototype.$Message = Message
Vue.component('el-table', Table)
Vue.component('el-table-column', TableColumn)
Vue.component('el-dialog', Dialog)
Vue.component('el-radio', Radio)
Vue.component('el-button', Button)
Vue.component('el-pagination', Pagination)
