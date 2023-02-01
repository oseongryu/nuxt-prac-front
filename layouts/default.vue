<template>
  <div style="width: 50%; height: 50%;">
    <top-menu />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import TopMenu from '~/components/common/top-menu.vue'


@Component({
  components: { TopMenu },
})
export default class extends PracAppComponent {
  mounted() { }
  beforeCreate() { }
  beforeMount() { }
}
</script>
