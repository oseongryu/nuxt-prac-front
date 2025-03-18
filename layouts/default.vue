<template>
  <nuxt />
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

@Component({
  components: {},
})
export default class extends PracAppComponent {
  mounted() {}
  beforeCreate() {}
  beforeMount() {}
}
</script>
