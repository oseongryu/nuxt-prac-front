<template>
  <nuxt />
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  components: {},
})
export default class extends PracAppComponent {
  mounted() {}
  beforeCreate() {}
  beforeMount() {}
}
</script>
