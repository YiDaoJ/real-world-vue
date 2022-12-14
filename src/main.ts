import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { camelCase, upperFirst } from 'lodash'

const requireComponent = require.context(
  './components',
  false,
  /Base[A_Z]\w+\.(vue|ts)$/
)

const app = createApp(App)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig) // register the component as a global component
})

app.use(store).use(router).mount('#app')
