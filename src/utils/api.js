import axios from 'axios'

export function getPosts() {
    return axios.get('https://healltech.herokuapp.com/api/paciente/gora921128hdfnmr08');
  }


  export function ultimate() {
    return axios.get("https://healltech.herokuapp.com/api/consulta/gora921128hdfnmr08");
  }


  export function lab() {
    return axios.get("https://healltech.herokuapp.com/api/estudio/gora921128hdfnmr08");
  }


  export function consulta(data) {
    return axios.post("https://healltech.herokuapp.com/api/consulta", data);
  }



  export function calendar(data) {
    return axios.get("https://healltech.herokuapp.com/api/consultas/fechas/gora921128hdfnmr08");
  }

  export function catalogs(data) {
    return axios.get("https://healltech.herokuapp.com/api/consulta/gora921128hdfnmr08/all");
  }


  export function detail(data) {
    return axios.get(`https://healltech.herokuapp.com/api/consultas/detalle/gora921128hdfnmr08/${data}/`);
  }


  export function login(data) {
    return axios.post("https://healltech.herokuapp.com/api/login", data);
  }

  











