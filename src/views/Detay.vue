<template>
  <div>
    <b-modal
        id="modal-detay"
        cancel-variant="outline-secondary"
        ok-title="Kaydet"
        cancel-title="Kapat"
        centered
        title="Detay">
      <b-row>
        <b-col cols="12">
          <b-form-group
              label="Sınav Adı"
              label-for="h-sinav-adi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-sinav-adi"
                placeholder="Sınav Adı"
                :value="sinav.SinavAdi"
                readonly disabled
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label="Ders Kodu"
              label-for="h-ders-kodu"
              label-cols-md="4"
          >
            <b-form-input
                id="h-ders-kodu"
                placeholder="Ders Kodu"
                :value="sinav.DersKodu"
                readonly disabled
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label="Ders Adı"
              label-for="h-ders-adi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-ders-adi"
                placeholder="Ders Adı"
                :value="sinav.DersAdi"
                readonly disabled
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label="Sınav Yılı"
              label-for="h-sinav-yili"
              label-cols-md="4"
          >
            <b-form-input
                id="h-sinav-yili"
                placeholder="Sınav Yılı"
                :value="sinav.SelectedYil"
                readonly disabled
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label="Sınav Dönemi"
              label-for="h-sinav-donemi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-sinav-donemi"
                placeholder="Sınav Donemi"
                :value="sinav.SelectedDonem"
                readonly disabled
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label="Sınav Tipi"
              label-for="h-sinav-tipi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-sinav-tipi"
                placeholder="Sınav Tipi"
                readonly disabled />
            <!-- bunu yukarıdaki inputun içine koy
            :value="sinav.SinavAdi" -->
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label=" Test Soru Sayısı"
              label-for="h-test-soru-sayisi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-test-soru-sayisi"
                placeholder="Test Soru Sayısı"
                readonly disabled/>
            <!-- :value="sinav.TestSoruSayisi"    bunu yukarıdaki inputun icine yaz -->
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
              label=" Klasik Soru Sayısı"
              label-for="h-klasik-soru-sayisi"
              label-cols-md="4"
          >
            <b-form-input
                id="h-klasik-soru-sayisi"
                placeholder="Klasik Soru Sayısı"
                readonly disabled/>
            <!-- :value="sinav.KlasikSoruSayisi"    bunu yukarıdaki inputun icine yaz -->
          </b-form-group>
        </b-col>
        <b-col cols="12">
           <!-- cevap anahtari -->
        </b-col>
      </b-row>
    </b-modal>
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
  BRow,
  BTable,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import Test from '@/views/Test.vue'
import Klasik from '@/views/Klasik.vue'
import Hibrit from '@/views/Hibrit.vue'
//import Vue from "vue";
import vSelect from 'vue-select'
import PDFekle from "@/views/PDFekle.vue";
//import boolean from "vue-good-table/src/components/types/boolean";
import SinavTanimlama from "@/views/SinavTanimlama.vue";
import {mapGetters} from "vuex";
import Detay from '@/views/Detay.vue'

export default {
  components: {
    Detay,
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
    SinavTanimlama,
    BTable,
  },
  directives: {
    Ripple,
  },
  computed: {
    ...mapGetters({
      sinav:'subu/getSinavTanimlama'
    }),
  },
  methods:{
    getSinavTanimlama() {
      const sinavTanimlama = this.$store.getters.getSinavTanimlama;
    },

    updateSinavlar(yeniSinavlar) {
      this.$store.dispatch('changeSinavTanimlari', yeniSinavlar);
    },
  }
}
</script>