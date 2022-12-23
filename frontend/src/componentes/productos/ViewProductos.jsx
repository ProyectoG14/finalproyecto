import React from 'react'
//import crud from '../../conexiones/crud';
//import swal from 'sweetalert';
//import { useNavigate } from 'react-router-dom';



export const ViewProductos = ({producto}) => {
    /*const navigate = useNavigate();*/
    
    const { nombre, descripcion, stock, precio, imagen, /*_id*/ } = producto;
    
    
    /*const ActualizarProducto = async () => {
        const data = {
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          stock: producto.stock,
          precio: producto.precio,
          imagen: producto.imagen
        }
         await crud.PUT(`/api/productos/${_id}`, data);
        const mensaje = "El Producto se actualizo correctamente";
        swal({
          title: 'Información',
          text: mensaje,
          icon: 'success',
          buttons: {
            confirm: {
              text: 'OK',
              value: true,
              visible: true,
              className: 'btn btn-primary',
              closeModal: true
            }
          }
        });
        navigate("/admin");
      }*/
    return(
        <div className='border-b p-5 flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <p className='mb-1 text-xl text-gray-50'>nombre:{nombre} </p>
                <p className='mb-1 text-sm text-gray-50 uppercase '>descripción:{descripcion} </p>
                <p className='mb-1 text-gray-50'>stock:{stock} </p>
                <p className='mb-1  text-gray-50'>precio:{precio} </p>
                <img src={imagen} width="150" height="150" 
                ></img>
            
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
                    <button
                          className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                          //onClick={() => handleModalEditarTarea(tarea)}
                          //onClick={(e) => ActualizarProducto(item._id)}
                      >Editar</button>

                    <button
                          className="bg-sky-300 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                         // onClick={() => handleModalEliminarTarea(tarea)}
                         //onClick={(e) => BorrarProducto(e, item._id)}
                      >Eliminar</button>

            </div>
        </div>
    )
}

export default ViewProductos;