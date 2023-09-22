<template>
  <div>
    <b-card v-if="isVisible">
      <div class="ml-3 mt-2">
        <b-form>
          <b-col cols="12" class="mb-2">
            <h4>Test Soru Cevapları</h4>
          </b-col>
          <div>
            <div v-for="(item,key) in cevaplarTest">
              <div class="mt-3 mb-2 d-flex justify-content-center"> {{kitapcikIsimlendirme(key)}} Kitapçığı</div>
              <div v-for="val in item"
                    class="d-flex justify-content-center">
                <b-row class="mt-1">
                  <div style="width: 30px">{{ val.soru }} - </div>
                  <b-form-radio-group
                      class="radio-color"
                      style=""
                      v-model="item.find(x=>x.soru === val.soru).cevap">
                    <b-form-radio value="answerA">A</b-form-radio>
                    <b-form-radio value="answerB">B</b-form-radio>
                    <b-form-radio value="answerC">C</b-form-radio>
                    <b-form-radio value="answerD">D</b-form-radio>
                    <b-form-radio value="answerE">E</b-form-radio>
                  </b-form-radio-group>
                </b-row>
              </div>
            </div>
          </div>
          <b-col cols="12" class="mt-2 d-flex justify-content-end">
            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                type="submit"
                variant="primary"
                class="mt-1 mb-2"
                @click.prevent="cevapKaydet">
              Cevapları Kaydet
            </b-button>
          </b-col>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BButton,
  BCard,
  BCol,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BRow
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import CevapAnahtari from '/src/views/CevapAnahtari.vue';
//import {eventBus} from "@/views/EventBus";

export default {
  components: {
    CevapAnahtari,
    BFormRadio,
    BFormRadioGroup,
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  props:['cevaplarTest', 'isVisible',],
  data() {
    return {
      tablo: false,
      pageLength: 3,
      dir: false,
      //receivedSelectedKitapcik: null,
    }
  },
  methods: {
    cevapKaydet() {
      console.log(this.cevaplarTest);
      this.$router.push('/sinavlarim')
    },
    kitapcikIsimlendirme(str){
      if (str === 'kitapcikA'){
        str = 'A'
      } else if (str === 'kitapcikB'){
        str = 'B'
      }else if (str === 'kitapcikC'){
        str = 'C'
      }else if (str === 'kitapcikD'){
        str = 'D'
      }
      return str;
    },
  }
}
</script>

<style scoped>

</style>