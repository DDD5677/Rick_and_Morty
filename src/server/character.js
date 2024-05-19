import axios from "./axios";
const CharacterService = {
   getCharacters(payload) {
      return axios.get(`/character`, {
         params: {
            page: payload.page,
            status: payload.status,
            name: payload.name,
         },
      });
   },
};

export default CharacterService;
