<template>
  <div>
    <h1>{{ pageName }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  layout: 'empty',
  components: {}
})
export default class extends PracAppComponent {
  pageName: string = 'common'
}
</script>
