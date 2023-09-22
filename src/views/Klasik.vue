<template>
  <div>
    <b-card v-if="isVisible">
      <div class="ml-3 mt-2">
        <b-form>
          <b-col cols="12" class="mb-2">
            <h4> Klasik Soru Cevapları</h4>
          </b-col>
          <div v-for="(val, key, index) in cevaplarKlasik" :key="index" class="mt-3 mb-2 d-flex justify-content-center">
            <b-row class="mt-1">
              <div style="width: 30px">{{ val.soru }} - </div>
              <div
                  name="input-group"
                  class="input-group"
                  style=""
                  v-model="cevaplarKlasik.find(x=>x.soru === val.soru).cevap">
                <!--text-area-group-->
                <div>
                  <b-row>
                    <b-col
                        xl="12"
                        cols="12"
                    >
                      <label for="textarea-auto-height">Soru</label>
                      <b-form-textarea
                          id="textarea-auto-height"
                          placeholder="Soruyu giriniz."
                          rows="2"
                          max-rows="8"
                      />
                    </b-col>
                    <b-col
                        xl="12"
                        cols="12"
                    >
                      <label for="textarea-auto-height">Cevap</label>
                      <b-form-textarea
                          id="textarea-auto-height"
                          placeholder="Cevabı Giriniz."
                          rows="5"
                          max-rows="8"
                      />
                    </b-col>
                  </b-row>

                </div>
              </div>
            </b-row>
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
  BFormTextarea,
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
export default {
  components: {
    BFormTextarea,
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
  props: {
    isVisible: Boolean,
    cevaplarKlasik: Array,
  },
  data() {
    return {
      tablo: false,
      pageLength: 3,
      dir: false,
    }
  },
  methods: {
    cevapKaydet() {
      console.log(this.cevaplarKlasik);
      this.$router.push('/sinavlarim')
    },
  }
}
</script>

<style>

</style>