import { ref } from "vue";
import { defineStore } from "pinia";
import CharacterService from "@/server/character";

export const useCharacterStore = defineStore("character", () => {
   const characters = ref(null);
   const pageSize = ref(1);
   const isLoading = ref(false);
   const errors = ref(null);
   function getCharacters(payload) {
      return new Promise((resolve, reject) => {
         isLoading.value = true;
         errors.value = null;
         characters.value = null;
         CharacterService.getCharacters(payload)
            .then((response) => {
               characters.value = response.data.results;
               pageSize.value = response.data.info.pages;
               isLoading.value = false;
               console.log(response);
               resolve();
            })
            .catch((error) => {
               console.log(error);
               isLoading.value = false;
               errors.value = error;
               reject();
            });
      });
   }
   return { isLoading, errors, characters, pageSize, getCharacters };
});
