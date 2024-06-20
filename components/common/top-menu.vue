<template>
  <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">
            Automation
          </a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="/guide/guide-index">Guide</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- <div>
    <nuxt-link to="/guide/guide-index">prop</nuxt-link>
    <nuxt-link to="/common/devextreme-button-index">common</nuxt-link>
    <nuxt-link to="/common/devextreme-chart-index">chart</nuxt-link>
    <nuxt-link to="/common/automation-index">automation</nuxt-link>
  </div> -->
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'

@Component({
  components: {}
})
export default class extends PracAppComponent {
  pageName: string = 'common'
}
</script>
