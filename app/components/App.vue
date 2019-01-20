<template>
    <Page>
      <ActionBar title="NativeScript AR"></ActionBar>

      <GridLayout class="page">
        <AR v-if="loaded"
          debugLevel="FEATURE_POINTS"
          detectPlanes="true">
        </AR>
      </GridLayout>
    </Page>
</template>

<script>
  import { Color } from "tns-core-modules/color";
  export default {
    data() {
      return {
        msg: 'Hello World!',
        loaded: false,
        planeMaterial: {
          diffuse: new Color("white"),
          transparency: 0.2
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    AR {
      height: 300px;
      width: 300px;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
