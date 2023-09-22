<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-form-group>
          <h2>Cevap Anahtarı</h2>
        </b-form-group>
      </b-col>
    </b-row>

    <b-card>
      <b-form @submit.prevent>
        <h4 class="mt-2 mb-3">Kağıt tipi seçiniz</h4>
        <b-row>
          <!-- Kağıt tipi -->
          <b-col cols="12">
            <b-form-group
                label="Kağıt Tipi"
                label-for="v-kagit-tipi">
              <div class="kagit-tipi-grubu">
                <b-form-radio
                    v-model="selectedKagit"
                    name="kagit-tipi"
                    value="Test">
                  <img :src="testSrc" alt="Test" height="350px"/>
                  <h4>Test</h4>
                </b-form-radio>
                <b-form-radio
                    v-model="selectedKagit"
                    name="kagit-tipi"
                    value="Klasik">
                  <img :src="klasikSrc" alt="Test" height="350px"/>
                  <h4>Klasik</h4>
                </b-form-radio>
                <b-form-radio
                    v-model="selectedKagit"
                    name="kagit-tipi"
                    value="Hibrit">
                  <img :src="hibritSrc" alt="Test" height="350px"/>
                  <h4>Hibrit</h4>
                </b-form-radio>
              </div>
            </b-form-group>
          </b-col>

          <!-- -->
          <b-col >
            <!-- kitapcik türü -->
            <b-row class="justify-content-center mt-2">
              <b-row v-if="selectedKagit === 'Test' || selectedKagit === 'Hibrit'"
                     class="m-3">
                <div > Kitapcik türü </div>
                <b-form-checkbox
                    class="ml-1"
                    v-model="selectedKitapcik"
                    value="kitapcikA">
                  A
                </b-form-checkbox>
                <b-form-checkbox
                    class="ml-1"
                    v-model="selectedKitapcik"
                    value="kitapcikB">
                  B
                </b-form-checkbox>
                <b-form-checkbox
                    class="ml-1"
                    v-model="selectedKitapcik"
                    value="kitapcikC">
                  C
                </b-form-checkbox>
                <b-form-checkbox
                    class="ml-1"
                    v-model="selectedKitapcik"
                    value="kitapcikD">
                  D
                </b-form-checkbox>
              </b-row>
              <!-- klasik cevap tipi -->
              <b-form-group
                  v-if="selectedKagit === 'Klasik' || selectedKagit === 'Hibrit'"
                  label="Klasik cevap tipi"
                  label-for="h-cevap-tipi"
                  label-cols-md="12">
                <b-form-select
                    :options="options"
                    v-model="selectedCevapTipi"/>
              </b-form-group>
              <!-- soru sayısı -->
              <b-form-group
                  v-if="selectedKagit === 'Test' || selectedKagit === 'Hibrit'"
                  class="pr-1 ml-1"
                  label="Test soru Sayısı"
                  label-cols-md="12"
                  label-for="v-test-soru-sayisi">
                <b-form-input type="number"
                       id="test-soru-sayisi"
                       v-model="soruSayisi"
                       placeholder="Soru sayısı giriniz" />
              </b-form-group>
              <b-form-group
                  v-if="selectedKagit === `Klasik` || selectedKagit === 'Hibrit'"
                  class="pr-1 ml-1"
                  label="Klasik soru Sayısı"
                  label-cols-md="12"
                  label-for="v-klasik-soru-sayisi">
                <b-form-input type="number"
                       id="klasik-soru-sayisi"
                       v-model="klasikSoruSayisi"
                       placeholder="Soru sayısı giriniz"/>
              </b-form-group>
              <!-- onayla butonu -->
              <div class="mt-1">
                <b-button
                    v-if="selectedKagit"
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mt-2"
                    @click="onaylaFonk">
                  Onayla
                </b-button>
              </div>
            </b-row>
          </b-col>
        </b-row>

      </b-form>
    </b-card>

    <!-- cevap anahtarı -->
    <div>
      <Test :isVisible="tablo" :cevaplarTest="cevaplarTest" :selected-kitapcik="selectedKitapcik" v-if="this.selectedKagit === 'Test' && this.soruSayisi > 0"/>
      <Klasik :isVisible="tablo" :cevaplar-klasik="cevaplarKlasik"
              v-if="this.selectedKagit === 'Klasik' && this.klasikSoruSayisi > 0 && this.selectedCevapTipi === 'Manuel'"/>
      <Hibrit :manuel-mi="manuelMi" :isVisible="tablo"  :cevaplar-test="cevaplarTest"  :cevaplar-klasik="cevaplarKlasik"
              v-if="this.selectedKagit === 'Hibrit' && this.soruSayisi > 0 && this.klasikSoruSayisi >0"/>
      <PDFekle :isVisible="pdf && tablo" v-if="selectedCevapTipi === 'PDF'" :cevaplar-klasik="cevaplarKlasik"/>
    </div>
  </div>
</template>

<script>
import {
  BFormSelect,
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
import Test from '@/views/Test.vue'
import Klasik from '@/views/Klasik.vue'
import Hibrit from '@/views/Hibrit.vue'
import Vue from "vue";
import vSelect from 'vue-select'
import PDFekle from "@/views/PDFekle.vue";
import boolean from "vue-good-table/src/components/types/boolean";

export default {
  components: {
    PDFekle,
    BFormSelect,
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
    Test,
    Klasik,
    Hibrit,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selectedKitapcik:[],
      selectedCevapTipi:'',
      pdf: false,
      tablo: false,
      manuelMi: boolean,
      pageLength: 3,
      dir: false,
      selectedKagit: '',
      testSrc: require('@/views/image/test.jpg'),
      klasikSrc: require('@/views/image/klasik.jpg'),
      hibritSrc: require('@/views/image/hibrit.jpg'),
      soruSayisi: null,
      klasikSoruSayisi: null,
      cevaplarTest: {},
      cevaplarKlasik: [],
      options: [
        { value: 'PDF', text: 'PDF' },
        { value: 'Manuel', text: 'Manuel' },
      ],
    }
  },
  watch: {
    cevaplarTest(yeni, eski) {
      //console.log(yeni)
    },
    cevaplarKlasik(yeni, eski) {
      //console.log(yeni)
    },
    selectedKagit(yeni, eski) {
      this.soruSayisi = null;
      this.klasikSoruSayisi = null;
      this.cevaplarTest = [];
      this.cevaplarKlasik=[];
      this.tablo = false;
    },
    soruSayisi (yeni,eski) {
      this.tablo = false;
      this.cevaplarTest = [];
    },
    klasikSoruSayisi (yeni,eski){
      this.tablo = false;
      this.cevaplarKlasik = [];
    },
    selectedCevapTipi (yeni,eski){
      this.cevaplarKlasik = [];
      this.tablo = false;
    }
  },
  methods: {
    onaylaFonk() {
      if (this.selectedKitapcik.length === 0){
        this.selectedKitapcik = ['A'];
      }
      if ((this.selectedKagit === 'Test' || this.selectedKagit === 'Hibrit') && (this.soruSayisi === null || this.soruSayisi === '' || this.soruSayisi <= 0 || this.soruSayisi >= 100 || this.soruSayisi === undefined)) {
        Vue.prototype.$toastSubu('Test soru sayısı giriniz.', 'danger')
        return;
      }
      if ((this.selectedKagit === 'Klasik' || this.selectedKagit === 'Hibrit') && (this.klasikSoruSayisi === null || this.klasikSoruSayisi === '' || this.klasikSoruSayisi <= 0 || this.klasikSoruSayisi >= 100)) {
        Vue.prototype.$toastSubu('Klasik soru sayısı giriniz.', 'danger')
        return;
      }
      if ((this.selectedKagit === 'Klasik' || this.selectedKagit === 'Hibrit') && this.selectedCevapTipi === ''){
        Vue.prototype.$toastSubu('Cevap tipi seçiniz', 'danger')
        return;
      }

      this.tablo = true;
      if (this.soruSayisi >= 100) {
        this.soruSayisi = 100;
      }
      if (this.klasikSoruSayisi >= 100) {
        this.klasikSoruSayisi = 100;
      }
      this.cevaplarTest = {};
      this.cevaplarKlasik = [];
      //const soruSayisiToUse = this.selectedKagit === 'Klasik' ? this.klasikSoruSayisi : this.selectedKagit === 'Hibrit' ? (this.soruSayisi + this.klasikSoruSayisi) : this.soruSayisi;
      if (this.selectedKagit === 'Test') {
        this.selectedKitapcik.forEach(kitapcikturu => {
          this.cevaplarTest[kitapcikturu] = [];
          for (let i = 1; i<= this.soruSayisi; i++){
            this.cevaplarTest[kitapcikturu].push({soru:i, cevap: null});
          }
        })
      }else if (this.selectedKagit === 'Klasik') {
        if (this.selectedCevapTipi === 'Manuel'){
          for (let i = 1; i <= this.klasikSoruSayisi; i++) {
            this.cevaplarKlasik.push({ soru: i, cevap: null });
          }
        } else {
          this.pdf = true;
        }
      } else if (this.selectedKagit === 'Hibrit') {
        this.selectedKitapcik.forEach(kitapcikturu => {
          this.cevaplarTest[kitapcikturu] = [];
          for (let i = 1; i<= this.soruSayisi; i++){
            this.cevaplarTest[kitapcikturu].push({soru:i, cevap: null});
          }
        })
        if (this.selectedCevapTipi === 'Manuel'){
          for (let i = 1; i <= this.klasikSoruSayisi; i++) {
            this.cevaplarKlasik.push({ soru: i, cevap: null });
          }
          this.manuelMi = true;
        }else {
          this.manuelMi = false;
          this.pdf = true;
        }
      }

      console.log(this.cevaplarTest)
    }
  }
}
</script>

<style scoped>
.kagit-tipi-grubu {
  display: flex;
  justify-content: space-evenly;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>