<template>
  <div>
    <el-button @click="test">Default</el-button>
    <div class="block">
      <span class="demonstration">Default</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">Color for different levels</span>
      <el-rate v-model="value2" :colors="colors"> </el-rate>
    </div>
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

  value1 = null
  value2 = null
  colors = ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
  mounted() {
    // this.$router.push({ path: '/guide/guide-index', append: true })
  }

  test() {
    this.$message('This is a message.')
  }
}
</script>
