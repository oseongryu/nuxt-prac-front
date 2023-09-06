<template>
  <div>
    <nuxt-link to="/common/index">common</nuxt-link>
    <nuxt-link to="/common/devextreme-chart-index">chart</nuxt-link>
    <nuxt-link to="/common/automation-index">web automation</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  components: {}
})
export default class extends PracAppComponent {
  pageName: string = 'common'
}
</script>
