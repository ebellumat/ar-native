<template>
    <Page>
      <ActionBar title="NativeScript AR"></ActionBar>
      <GridLayout class="page">
        <AR v-if="loaded"
         :detectPlanes="true"
         @planeDetected="showAlert"
         @planeTapped="onPlaneTapped">
        </AR>
      </GridLayout>
    </Page>
</template>

<script>
  import { Color } from "tns-core-modules/color";
  import { ARMaterial } from "nativescript-ar";
  import * as camera from "nativescript-camera";
  export default {
    data() {
      return {
        msg: 'Hello World!',
        loaded: false,
        planeMaterial: {
          diffuse: new Color("white"),
          transparency: 0.0
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.loaded = true;
      }, 1000);
    },
    methods: {
      showAlert () {
        alert('Scan concluído!');
      },
      onPlaneTapped(args) {
        const ar = args.object;
        ar.addBox({
          position: {
            x: args.position.x,
            y: args.position.y,
            z: args.position.z
          },
          dimensions: {
            x: 0.1,
            y: 0.1,
            z: 0.1
          },
          mass: 20,
          materials: [new Color("#4db87d")]
        });
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    AR {
      height: 100%;
      width: 100%;
      z-index: 999;
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
