<template>
  <b-card v-if="isVisible">
    <b-col cols="12" class="mb-2">
      <h4>PDF Yükle</h4>
      <p> Klasik soru cevap anahtarını içeren <strong>1 PDF dosyası</strong> yükleyiniz</p>
    </b-col>
    <b-form-file
        class="mb-xl-2"
        v-model="selectedFile"
        placeholder="Dosya seçin veya sürükleyerek bırakın..."
        drop-placeholder="Dosyayı buraya sürükleyin..."
        accept=".pdf"
        :multiple="false"/>

    <b-card-text class="my-1">
      Seçili Dosya: <strong>{{ selectedFile ? selectedFile.name : '' }}</strong>
    </b-card-text>

    <b-col cols="12" class="mt-2 d-flex justify-content-end">
      <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mt-1 mb-2"
          @click.prevent="kaydet">
        Kaydet
      </b-button>
    </b-col>

  </b-card>
</template>

<script>
import {
  BCardText,
  BFormFile,
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
import Test from "@/views/Test.vue";
import Klasik from "@/views/Klasik.vue";
import Hibrit from "@/views/Hibrit.vue";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";

export default {
  components: {
    BCardText,
    BFormFile,
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
  props:['cevaplarTest', 'isVisible',],
  data() {
    return {
      tablo: false,
      pageLength: 3,
      dir: false,
      selectedFile: null,
    }
  },
  methods:{
    kaydet() {
      console.log(this.cevaplarKlasik);
    },
  }
}
</script>