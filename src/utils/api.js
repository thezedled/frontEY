import axios from 'axios'

export function getPosts() {
    return axios.get('https://delivery-proud-mongoose.mybluemix.net/api/paciente/gora921128hdfnmr08');
  }


  export function ultimate() {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/consulta/gora921128hdfnmr08");
  }



  export function lab() {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/estudio/gora921128hdfnmr08");
  }


  export function consulta(data) {
    return axios.post("https://delivery-proud-mongoose.mybluemix.net/api/consulta", data);
  }



  export function calendar(data) {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/consultas/fechas/gora921128hdfnmr08");
  }

  export function catalogs(data) {
    return axios.get("https://delivery-proud-mongoose.mybluemix.net/api/consulta/gora921128hdfnmr08/all");
  }











