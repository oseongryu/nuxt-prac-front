<template>
  <body class="hold-transition skin-red layout-top-nav">
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="container">
          <!-- Content Header -->
          <!-- <section class="content-header"></section> -->
          <!-- Content Header -->
          <!-- Content Body-->
          <section class="content">
            <div class="row">
              <!-- Content Left -->
              <div class="col-md-4">
                <div class="box box-danger">
                  <div class="box-header with-border">
                    <h3 class="box-title">정보</h3>
                    <div class="box-tools pull-right">
                    </div>
                  </div>
                  <div class="box-body" style="height: 400px;">
                    <div id="drawingView" class="table-responsive" style="width:100%; height:100%; overflow:auto"></div>
                  </div>
                </div>
              </div>

              <!-- Content Right -->
              <div class="col-md-8">
                <div class="box box-danger">
                  <div class="box-header with-border">
                    <h3 class="box-title">정보</h3>
                    <div class="box-tools pull-right">
                      <input type="button" id="btnOn" class="btn btn-danger" value="On" />
                      <input type="button" id="btnOff" class="btn btn-secondary" value="Off" />
                    </div>
                  </div>
                  <div class="box-body" style="height: 500px;">
                    <div id="image_container">
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
import DxButton from 'devextreme-vue/button';

@Component({
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
    DxButton
  },
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  created() {
    // this.pageName = 'automation'
  }

  mounted() {
    // spawn('C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', ['127.0.0.1:8080']);
  }

  onClick(e: any) {
    const buttonText = e.component.option('text');
    alert(`The ${this.capitalize(buttonText)} button was clicked`);
  }

  capitalize(text: any) {
    return text.charAt(0).toUpperCase() + text.slice(1);
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

.buttons-column>.column-header {
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

.buttons>div {
  width: 300px;
  flex-wrap: nowrap;
  display: flex;
}

.buttons-column>div {
  width: 150px;
  height: 50px;
  text-align: center;
}

.buttons-column {
  width: 150px;
  justify-content: center;
}
</style>
