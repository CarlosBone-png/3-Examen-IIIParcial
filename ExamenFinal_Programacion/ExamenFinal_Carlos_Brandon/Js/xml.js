let xhr = new XMLHttpRequest();

xhr.onload = function (){
    if (this.readyState === 4 && this.status === 200) {
        mostrarCategorias (this);
        }
    };

xhr.open('GET', 'http://127.0.0.1:5500/tienda.xml', true);
xhr.send();

function mostrarCategorias (xml){
    let Catalogo = xml.responseXML;
    let listado = Catalogo.getElementsByTagName('Catalogo');
    let article = document.getElementById('tiendaXML');
    article.innerHTML = '';

    for (let i=0; i<listado.length; i++ ){
        let tagNombre = document.createElement('h2');
            tagNombre.innerHTML = listado[i].getElementsByTagName('Nombre')[0].textContent; 
        let listaCateg = listado[i].getElementsByTagName('Consola');
        
        

    for (let c=0; c< listaCateg.length; c++){
        console.log (listaCateg[c]);
                    
                let tagImg = document.createElement('h4');
                    tagImg.innerHTML = listaCateg[c].getElementsByTagName('img')[0].innerHTML;

                let tagCode = document.createElement('h3');
                    tagCode.innerHTML = listaCateg[c].getElementsByTagName('Videojuegos')[0].textContent;
            
                let tagDesc  = document.createElement('p');
                    tagDesc.innerHTML = listaCateg[c].getElementsByTagName('Accesorios')[0].textContent;
                    
                let tagBr = document.createElement('br');

            
article.appendChild(tagNombre);
article.appendChild(tagimg);
article.appendChild(tagVideojuegos);
article.appendChild(tagAccesorios); 
article.appendChild(tagBr);
        }        
    }
}
