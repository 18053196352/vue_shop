import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// import { Button } from 'element-ui'
// import { Form } from 'element-ui'
// import { FormItem } from 'element-ui'
// import { Input } from 'element-ui'
// import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Element)
Vue.prototype.$message = Message

