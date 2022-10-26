import axios from "axios";

// eslint-disable-next-line
export default () => {
  
  const getPoke = async () => {
    
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
       if(response.status === 200){
       return response.data.results
       }
       else{
         return {
           message:'No se pudo completar la peticion intente mas tarde'
         }
       }
       
 };
 const getPokeData = async (url) => {
    
  const response = await axios.get(url);
     if(response.status === 200){
     return response.data
     }
     else{
       return {
         message:'No se pudo completar la peticion intente mas tarde'
       }
     }
     
};
const getPokeDetail = async (name) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
     if(response.status === 200){
     return response.data
     }
     else{
       return {
         message:'No se pudo completar la peticion intente mas tarde'
       }
     }
     
};


  return {
  
    getPoke,
    getPokeData,
    getPokeDetail

  };
};