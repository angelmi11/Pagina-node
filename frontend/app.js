import './style/app.css';
import libroServicio  from './services/services'; // import archivo servicio 

const form = document.getElementById('form-control')

//EventeListeners();

//function EventeListeners(){
    .addEventListener('submit',function(e){
           // eventos que capturan  los datos del html  por formulario
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

    
       // const formDate = new FormDate(); // formulario  virtual  para pasar datos 
       
 const  formData = new FormData();
        formData.append("titulo",titulo);
        formData.append("autor",autor);
        formData.append("isbn",isbn);
        formData.append("image",image);

const ServiceLibro = new libroServicio();
         ServiceLibro.postLibros(formData)
         e.preventDefault();
    })
     
        

//}
