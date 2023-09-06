<template>
  <div>
    <h1>{{ pageName }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import NuxtLogo from '~/components/NuxtLogo.vue'

@Component({
  layout: 'default',
  components: {}
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  mounted() {
    // this.$router.push({ path: '/automation/automation-index', append: true })
  }
}
</script>
