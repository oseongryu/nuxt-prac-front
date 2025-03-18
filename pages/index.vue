<template>
  <div>
    <el-button @click="test" />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  layout: 'default',
  components: {},
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  mounted() {
    // this.$router.push({ path: '/guide/guide-index', append: true })
  }

  test() {
    this.$message('This is a message.')
  }
}
</script>
