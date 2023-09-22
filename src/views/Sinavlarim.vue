<!-- Sinavlariim.vue -->
<template>
  <div>
    <b-card>
      <div>
        <!-- Arama çubuğunu ekleyin -->
        <input v-model="searchTerm" class="form-control mb-3" placeholder="Ara">

        <!-- Tabloyu oluşturun -->
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Ders Kodu</th>
            <th>Ders Adı</th>
            <th>Sinav Adi</th>
            <th>Durum</th>
            <th>Detay</th>
            <th>Düzenle</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ sinav.DersKodu }}</td>
            <td>{{ sinav.DersAdi }}</td>
            <td>{{ sinav.SinavAdi }}</td>
            <td>Durum</td>
            <td>
              <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  v-b-modal.modal-detay
                  variant="outline-primary">
                Detay
              </b-button>
              <Detay><!-- detay modalı --></Detay>
            </td>
            <td>
               <span>
            <b-dropdown
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
            >
              <template v-slot:button-content>
                <feather-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="text-body align-middle mr-25"
                />
              </template>
              <b-dropdown-item @click="editButton">
                <feather-icon
                    icon="Edit2Icon"
                    class="mr-50"
                />
                <span>Edit</span>
              </b-dropdown-item>
              <b-dropdown-item @click="deleteButton" variant="danger">
                <feather-icon
                    icon="TrashIcon"
                    class="mr-50"
                />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </b-card>
    <!--<Detay v-if="isVisible"></Detay>-->
  </div>
</template>

<script>
import {
  BModal,
  VBModal,
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
  BDropdown,
  BDropdownItem,
  BTable,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import Test from '@/views/Test.vue'
import Klasik from '@/views/Klasik.vue'
import Hibrit from '@/views/Hibrit.vue'
import Vue from "vue";
import vSelect from 'vue-select'
import PDFekle from "@/views/PDFekle.vue";
import boolean from "vue-good-table/src/components/types/boolean";
import SinavTanimlama from "@/views/SinavTanimlama.vue";
import {mapGetters} from "vuex";
import Detay from '@/views/Detay.vue'
export default {
  components: {
    Detay,
    PDFekle,
    BDropdown,
    BDropdownItem,
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
    VBModal,
    BButton,
    Test,
    Klasik,
    Hibrit,
    vSelect,
    SinavTanimlama,
    BTable,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      selected: 'USA',
      option: ['USA', 'Canada', 'Maxico'],
      searchTerm: '',
      isVisible: false,
    };
  },
  props:['ders',],
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

    editButton(){

    },

    deleteButton(){

    },
  }
};
</script>
