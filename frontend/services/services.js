
class libroServicio{
    constructor(){
    this.URI = 'http://localhost:3000/api/libros';
            
  
}

    
// metodos para el servicio
async getLibros(){
       const res = await fetch(this.URI);
        const Libros =  await res.json();
        return Libros
        }


async postLibros(libro){
     const res =  await fetch(this.URI,{
          method: 'POST',
          body:libro
      });  


       const data =  await res.json();      
     
    }



async delateLibros(idLibro){

        const res=  await fetch(`${this.URI}/${idLibro}`,{
             headers:{
                 'Content-Type':'aplication/json'
             },

            method:'DELETE'
         });
          await res.json()
    }
}

export  default   libroServicio;