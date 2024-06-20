<template>
  <body class="hold-transition skin-red layout-top-nav">
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="container">
          <section class="content">
            <div class="row">
              <!-- Content Right -->
              <div class="col-md-12">
                <div class="box box-danger">
                  <div class="box-header with-border">
                    <h3 class="box-title"></h3>
                    <div class="box-tools pull-right"></div>
                  </div>
                  <div class="box-body" style="height: 700px">
                    <div id="image_container">
                      <input type="text" />
                      <input type="button" value="prop" @click="propBtn" />
                      <label for="username">emit1: {{ emit1 }}</label>

                      <prop-component ref="refPropComponent" :prop1="prop1" @emit1="methodEmit1" :propSync1.sync="propSync1" />

                      <input type="text" />
                      <input type="button" value="propsync parent" @click="propSyncBtn" />
                      <label for="username">propSync1 parent: {{ propSync1 }}</label>
                      <input type="button" value="ref" @click="refClick" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content Right -->
            </div>
          </section>
          <!-- Content Body-->
        </div>
      </div>
    </div>
  </body>
</template>


<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import { DxChart, DxSeries, DxCommonSeriesSettings, DxLegend, DxSize, DxLabel, DxFormat, DxValueAxis, DxTooltip } from 'devextreme-vue/chart'
import { spawn, exec } from 'child_process'
import DxButton from 'devextreme-vue/button'
import PropComponent from '@/components/guide/prop-component.vue'

@Component({
  name: 'automation-index',
  layout: 'default',
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxLegend,
    DxSize,
    DxLabel,
    DxFormat,
    DxValueAxis,
    DxTooltip,
    DxButton,
    PropComponent,
  },
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  // @Ref() refPropComponent :PropComponent

  prop1: string = ''

  emit1: string = ''

  propSync1: string = ''

  // bbb1(value) {
  //   console.log('emit', value)
  //   this.parentTest = value
  // }

  // @Watch('bbb1')
  // adfasdfasdf(value) {
  //   console.log(value)
  //   console.log('bbb1 watch')
  // }

  created() {
    this.init()
    // this.aaaaa = 'aaaa'
    // this.pageName = 'automation'
  }

  init() {
    this.prop1 = ''
    this.emit1 = ''
    this.propSync1 = ''
  }

  mounted() {
    // spawn('C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', ['127.0.0.1:8080']);
  }

  propBtn() {
    // alert('temp')
    console.log('prop click')
    this.prop1 = 'prop data1'
  }

  propSyncBtn() {
    console.log('propSyncBtn click')
    this.propSync1 = 'propsync data11111111'
  }

  methodEmit1(value: any) {
    console.log('emit parent')
    this.emit1 = value
  }

  refClick() {
    console.log('ref')
    var propComponent = this.$refs['refPropComponent'] as PropComponent
    propComponent.refValue1 = '2222222'
    // this.$refs["refPropComponent"].refValue1 = '2222222'
    // this.$refs.refPropComponent.refValue1 = '2222222'

    // this.refPropComponent.refValue1 = '11111111'
  }

  onClick(e: any) {
    const buttonText = e.component.option('text')
    alert(`The ${this.capitalize(buttonText)} button was clicked`)
  }

  capitalize(text: any) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}
</script>
<style>
#app {
  align-self: center;
}

.demo-container {
  display: flex;
  justify-content: center;
  height: 450px;
}

.buttons-demo {
  width: 600px;
  align-self: center;
}

.buttons-column > .column-header {
  flex-grow: 0;
  width: 150px;
  height: 35px;
  font-size: 130%;
  opacity: 0.6;
  text-align: left;
  padding-left: 15px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons > div {
  width: 300px;
  flex-wrap: nowrap;
  display: flex;
}

.buttons-column > div {
  width: 150px;
  height: 50px;
  text-align: center;
}

.buttons-column {
  width: 150px;
  justify-content: center;
}
</style>
