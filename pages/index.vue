<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- <Tutorial /> -->
    <NuxtLogo />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import NuxtLogo from '~/components/NuxtLogo.vue'

@Component({
  components: {}
})
export default class extends PracAppComponent {
  name: string = 'nuxt-ts-decorator'
}
</script>
