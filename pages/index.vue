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
              <div class="col-md-12">
                <div class="box box-danger">
                  <div class="box-header with-border">
                    <h3 class="box-title"></h3>
                    <div class="box-tools pull-right"></div>
                  </div>
                  <div class="box-body" style="height: 700px">
                    <div id="drawingView" class="table-responsive" style="width: 100%; height: 100%; overflow: auto"></div>
                  </div>
                </div>
              </div>
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

@Component({
  layout: 'default',
  components: {},
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  mounted() {
    // this.$router.push({ path: '/guide/guide-index', append: true })
  }
}
</script>
