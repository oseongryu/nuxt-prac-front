<template>
  <dx-scroll-view class="mgt-20">

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
  </dx-scroll-view>
</template>

<script lang="ts">
import { Component, Ref, Prop, PropSync, Emit, Watch, Model, Inject, InjectReactive, Provide, ProvideReactive, Vue } from 'vue-property-decorator'
import PracAppComponent from '@/components/prac-app-component'
import { DxScrollView } from 'devextreme-vue/scroll-view'

@Component({
  layout: 'default',
  components: { DxScrollView }
})
export default class extends PracAppComponent {
  pageName: string = 'index'

  mounted() {
    // this.$router.push({ path: '/automation/automation-index', append: true })
  }
}
</script>
