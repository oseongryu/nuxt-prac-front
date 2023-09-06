<template>
  <div>
    <h1>{{ pageName }}</h1>
    <DxChart id="chart01" :data-source="chartData2">
      <DxSeries argument-field="day" value-field="point" type="spline" color="#529275" />
      <DxValueAxis :visual-range="[0, maxLength1]">
        <DxLabel :rotation-angle="45" overlapping-behavior="rotate" />
      </DxValueAxis>
      <DxTooltip :enabled="true" format="###,###,###,##0건" />
      <DxLegend :visible="false" />
      <DxSize :height="270" />
    </DxChart>
    <DxChart id="chart02" :data-source="chartData2">
      <DxSeries argument-field="day" value-field="point" type="area" color="#2fa6ce" />
      <DxValueAxis :visual-range="[0, maxLength1]">
        <DxLabel :rotation-angle="45" overlapping-behavior="rotate" />
      </DxValueAxis>
      <DxTooltip :enabled="true" format="###,###,###,##0명" />
      <DxLegend :visible="false" />
      <DxSize :height="270" />
    </DxChart>
    <DxChart id="chart03" :data-source="chartData2">
      <DxSeries argument-field="day" value-field="point" type="line" color="#8775db" />
      <DxValueAxis :visual-range="[0, maxLength1]">
        <DxLabel :rotation-angle="45" overlapping-behavior="rotate" />
      </DxValueAxis>
      <DxTooltip :enabled="true" format="###,###,###,##0원" />
      <DxLegend :visible="false" />
      <DxSize :height="270" />
    </DxChart>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import { DxChart, DxSeries, DxCommonSeriesSettings, DxLegend, DxSize, DxLabel, DxFormat, DxValueAxis, DxTooltip } from 'devextreme-vue/chart'

@Component({
  layout: 'empty',
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
  },
})
export default class extends PracAppComponent {
  pageName: string = 'chart'
  maxLength1: number = 100

  chartData2 = [
    {
      point: 10,
      day: '10/16',
    },
    {
      point: 20,
      day: '10/17',
    },
    {
      point: 30,
      day: '10/18',
    },
    {
      point: 100,
      day: '10/19',
    },
    {
      point: 90,
      day: '10/20',
    },
    {
      point: 20,
      day: '10/21',
    },
    {
      point: 50,
      day: '10/22',
    },
    {
      point: 30,
      day: '10/23',
    },
    {
      point: 20,
      day: '10/24',
    },
    {
      point: 70,
      day: '10/25',
    },
    {
      point: 10,
      day: '10/26',
    },
    {
      point: 80,
      day: '10/27',
    },
    {
      point: 70,
      day: '10/28',
    },
    {
      point: 20,
      day: '10/29',
    },
    {
      point: 60,
      day: '10/30',
    },
  ]
}
</script>
