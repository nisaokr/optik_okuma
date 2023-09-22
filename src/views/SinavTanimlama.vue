<template>
  <div>
    <b-card>
      <p>Kayıtlı sınavları görüntülemek için tıklayın.</p>
      <b-col cols="12">
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mt-1 mb-2"
            @click.prevent="sinavlarim">
          Sınavlarım
        </b-button>
      </b-col>

    </b-card>
    <b-card>
      <b-form @submit.prevent>
        <b-row>
          <b-col cols="12">
            <b-form-group
                label="Ders Adı"
                label-for="ders.ad"
                label-cols-md="4">
              <b-form-input
                  id="ders.ad"
                  placeholder="Ders Adı"
                  list="ders-list"
                  v-model="ders.ad"/>
              <datalist id="ders-list">
                <option v-for="option in dersOptions" :value="option"></option>
              </datalist>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
                label="Ders Kodu"
                label-for="ders.kod"
                label-cols-md="4">

              <b-form-input
                  id="ders.kod"
                  placeholder="Ders Kodu"
                  list="kod-list"
                  v-model="ders.kod"/>
              <datalist id="kod-list">
                <option v-for="option in kodOptions" :value="option"></option>
              </datalist>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
              label="Tarih"
              label-for="h-tarih"
              label-cols-md="4">
              <b-form-select
              :options="optionsYil"
              v-model="selectedYil"/>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
                label="Dönem"
                label-for="h-dönem"
                label-cols-md="4">
              <b-form-select
                  :options="optionsDonem"
                  v-model="selectedDonem"/>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-form-group
                label="Sınav Adı"
                label-for="sinavAdi"
                label-cols-md="4">

              <b-form-input
                  id="sinavAdi"
                  placeholder="Sınav Adı "
                  v-model="sinavAdi"/>
            </b-form-group>
          </b-col>

          <b-col offset-md="4">
            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                type="submit"
                variant="primary"
                class="mr-1"
                @click="sinavTanimla">
              Kaydet
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BTable,
  BRow,
  BForm,
  BCol,
  BFormGroup,
  BFormSelect,
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BButton,
  BBadge,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import Ripple from "vue-ripple-directive";
import Vue from "vue";
import Sinavlarim from '@/views/Sinavlarim.vue'
export default {
  components: {
    Sinavlarim,
    BCard,
    BRow,
    BCol,
    BTable,
    BForm,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BBadge,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      sinavAdi: '',
      ders:{
        kod: '',
        ad: '',
      },
      selectedDonem: null,
      sinavTipi: null,
      selectedYil:null,
      optionsSinavTipi: [
        {value:'test', text:'Test'},
        {value:'klasik', text: 'Klasik'},
        {value: 'karma', text: 'Karma'}
      ],
      optionsYil:[
        {value:'2022-2023', text:'2022-2023'},
        {value:'2021-2022', text:'2021-2022'},
        {value:'2020-2021', text:'2020-2021'},
        {value:'2019-2020', text:'2019-2020'},
        {value:'2018-2019', text:'2018-2019'},
      ],
      optionsDonem:[
        {value:'güz', text:'Güz'},
        {value: 'bahar', text:'Bahar'},
        {value: 'yaz', text:'Yaz'}
      ],
      dersOptions:[
          'Mat-1',
          'Sayısal Analiz',
          'Mesleki İngilizce',
          'Bilgisayar Ağları',
          'Fizik-1',
          'Elektronik-1',
          'Sayısal Elektronik',
          'Elektrik Devre Temelleri',
          'Algoritma-1',
          'Algoritma-2',
          'Web Programlama',
          'Nesneye Dayalı Analiz'
      ],
      kodOptions:[
          'BM-101',
          'BM-219',
          'MF-102',
      ]
    }
  },
  //props:['ders.ad', 'ders.kod'],
  computed: {
    ...mapGetters({
      jwt: 'subu/getToken',
      userData: 'subu/getUserData',
      userName: 'subu/getUserName',
      roles: 'subu/getRoles',
      picture: 'subu/getPicture',
      canHaveRole: 'subu/getCanHaveRole'
    }),
  },
  mounted() {

  },
  created() {

  },
  methods: {
    sinavTanimla(){
      if (this.ders.ad === '' || this.ders.kod === '' || this.selectedYil === null || this.selectedDonem === null || this.sinavAdi === ''){
        Vue.prototype.$toastSubu('Tüm alanları doldurun.', 'danger')
        return;
      }

      let sinavTanim ={
        SinavAdi: this.sinavAdi,
        DersAdi: this.ders.ad,
        DersKodu: this.ders.kod,
        SelectedYil: this.selectedYil,
        SelectedDonem: this.selectedDonem,
      }
      localStorage.setItem('sinavTanimlama', JSON.stringify(sinavTanim) )
      this.$store.dispatch('subu/changeSinavTanimlari', sinavTanim)

     this.$router.push('/cevapAnahtari')
    },
    sinavlarim(){
      this.$router.push('/sinavlarim')
    }
  },
}
</script>

<style>

</style>
