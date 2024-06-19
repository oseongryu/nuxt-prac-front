<template>
  <div class="buttons-demo">
    <div class="buttons">
      <div>
        <div class="buttons-column">
          <div class="column-header">
            Normal
          </div>
          <div>
            <DxButton :width="120" text="Contained" type="normal" styling-mode="contained" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Outlined" type="normal" styling-mode="outlined" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" icon="check" text="Text" type="normal" styling-mode="text" @click="onClick($event)" />
          </div>
        </div>
        <div class="buttons-column">
          <div class="column-header">
            Success
          </div>
          <div>
            <DxButton :width="120" text="Contained" type="success" styling-mode="contained" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Outlined" type="success" styling-mode="outlined" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Text" type="success" styling-mode="text" @click="onClick($event)" />
          </div>
        </div>
      </div>
      <div>
        <div class="buttons-column">
          <div class="column-header">
            Default
          </div>
          <div>
            <DxButton :width="120" text="Contained" type="default" styling-mode="contained" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Outlined" type="default" styling-mode="outlined" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Text" type="default" styling-mode="text" @click="onClick($event)" />
          </div>
        </div>
        <div class="buttons-column">
          <div class="column-header">
            Danger
          </div>
          <div>
            <DxButton :width="120" text="Contained" type="danger" styling-mode="contained" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Outlined" type="danger" styling-mode="outlined" @click="onClick($event)" />
          </div>
          <div>
            <DxButton :width="120" text="Text" type="danger" styling-mode="text" @click="onClick($event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
  pageName: string = 'button'

  created() {
  }

  mounted() {
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
