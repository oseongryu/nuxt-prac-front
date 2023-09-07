<template>
  <dx-scroll-view class="mgt-20">

    <top-menu />
    <nuxt />
  </dx-scroll-view>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import TopMenu from '@/components/common/top-menu.vue'
import { DxScrollView } from 'devextreme-vue/scroll-view'

@Component({
  components: { TopMenu, DxScrollView },
})
export default class extends PracAppComponent {
  mounted() { }
  beforeCreate() { }
  beforeMount() { }
}
</script>
