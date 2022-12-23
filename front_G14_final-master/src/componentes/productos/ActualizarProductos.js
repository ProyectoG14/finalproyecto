import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from 'react-router-dom';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';

const ActualizarProducto = () => {

  const navigate = useNavigate();

  const { _id } = useParams();
  //console.log(idCategoria);
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    stock: '',
    precio: '',
    imagen: '',
    categoriaId: ''
  })

  const cargarProducto = async () => {
    const response = await crud.GET(`/api/productos/${_id}`);
    console.log(response);
    setProducto(response.producto);
  }

  useEffect(() => {
    cargarProducto();
  }, []);

  //console.log(categoria);

  const { nombre, descripcion, stock, precio, imagen } = producto;

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  };

  const ActualizarProducto = async () => {
    const data = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
      imagen: producto.imagen
    }
    const response = await crud.PUT(`/api/productos/${_id}`, data);
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
  }

  const onSubmit = (e) => {
    e.preventDefault();
    ActualizarProducto();
  }

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
            <h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-600 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Actualizar Producto
            </h1>
          </div>

          <div className="mt-10 flex justify-center">
            <form
              onSubmit={onSubmit}
              className="my-10 bg-white shadow rounded-lg p-10"
            >
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-lx font-bold">Nombre del producto</label>
                <input
                  type="nombre"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={nombre}
                  onChange={onChange}
                />
                <label className="uppercase text-gray-600 block text-lx font-bold">Descripcion del producto</label>
                <input
                  type="descripcion "
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={descripcion}
                  onChange={onChange}
                />
                <label className="uppercase text-gray-600 block text-lx font-bold">stock del producto</label>
                <input
                  type="stock"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={stock}
                  onChange={onChange}
                />
                <label className="uppercase text-gray-600 block text-lx font-bold">precio del producto</label>
                <input
                  type="precio"
                  id="precio"
                  name="precio"
                  placeholder="Precio"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={precio}
                  onChange={onChange}
                />
                <label className="uppercase text-gray-600 block text-lx font-bold">Imagen de la Producto</label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder="Imagen"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={imagen}
                  onChange={onChange}
                />
              </div>
              <input
                type="submit"
                value="Actualizar Producto"
                className="bg-sky-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
              />

            </form>
          </div>

        </main>


      </div>


    </>
  );
}

export default ActualizarProducto;