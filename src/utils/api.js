import axios from 'axios'

export function getPosts() {
    return axios.get('https://delivery-proud-mongoose.mybluemix.net/api/paciente/gora921128hdfnmr08');
  }


  export function ultimate() {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/consulta/gora921128hdfnmisNilr08");
  }



  export function lab() {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/estudio/gora921128hdfnmr08");
  }


  export function consulta(data) {
    return axios.post("https://delivery-proud-mongoose.mybluemix.net/api/consulta", data);
  }







