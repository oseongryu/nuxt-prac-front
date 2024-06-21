<template>
  <div>
    <!-- <input type="text" v-model="inputTest"/> -->
    <input type="button" value="emit" @click="emitClick" />
    <input type="button" id="btnOn" value="propsync child" @click="propSyncBtn" />
    <label for="username">prop1: {{ prop1 }}</label
    ><br />
    <label for="username">prop1Sync1 component: {{ proSync1Data }}</label>
    <label for="username">ref value: {{ refValue1 }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  name: 'tcom',
  components: {},
})
export default class extends PracAppComponent {
  @Prop({ default: '' }) readonly prop1: any

  @PropSync('propSync1', { default: '' }) proSync1Data: any

  refValue1: string = ''

  inputTest: string = ''

  pageName: string = 'common'

  mounted() {
    console.log(this.prop1)
    console.log('components mounted')
  }

  @Watch('prop1')
  watchprop1() {
    console.log(this.prop1)
  }

  emitClick() {
    console.log('emitClick')
    this.$emit('emit1', 'emitdata11111')
  }

  propSyncBtn() {
    console.log('propSyncBtn')
    this.proSync1Data = 'propSync component data111111'
  }

  // @Watch('inputTest')
  // tesssss(e) {
  //   console.dir(e)
  //   console.log('watch', e)
  //   this.$emit('emit1', e)
  // }

  // @Watch('propChildTemp')
  // asdfsadfsdf() {
  //   console.log('sync', this.propChildTemp)
  // }
}
</script>