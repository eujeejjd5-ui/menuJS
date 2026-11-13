var btnSave=document.getElementById("btnSave");
var btnEdit=document.getElementById("btnEdit");
const productos=[];
btnSave.onclick=()=>{
    txtNombre=document.getElementById("nombre");
    txtPrecio=document.getElementById("precio");
    txtCantidad=document.getElementById("cantidad");
    if(txtNombre.value===""|| txtPrecio.value===""|| txtCantidad.value===""){
        alert("ERROR: CAMPOS VACIOS")
        return;
    }
    const producto={
        nombre:txtNombre.value,
        precio:txtPrecio.value,
        cantidad:txtCantidad.value
    }
    productos.push(producto);
    console.log(productos)
    localStorage.setItem("productos",JSON.stringify(productos));
    document.getElementById("addProducto").close();
    txtNombre.value="";
    txtPrecio.value="";
    txtCantidad.value="";
    cargarProductos();
}

btnEdit.onclick=()=>{
    txtNombre=document.getElementById("nombree");
    txtPrecio=document.getElementById("precioe");
    txtCantidad=document.getElementById("cantidade");
    posicion=document.getElementById("posicion");
    if(txtNombre.value===""|| txtPrecio.value===""|| txtCantidad.value===""){
        alert("ERROR: CAMPOS VACIOS")
        return;
    }
    productos[posicion.value].nombre=txtNombre.value;
    productos[posicion.value].precio=txtPrecio.value;
    productos[posicion.value].cantidad=txtCantidad.value;
    localStorage.setItem("productos",JSON.stringify(productos));
    document.getElementById("editProducto").close();
    txtNombre.value="";
    txtPrecio.value="";
    txtCantidad.value="";
    cargarProductos();
}


const cargarProductos=()=>{
    let posicion=0;
    var productos=JSON.parse(localStorage.getItem("productos"));
    tbody=document.getElementById("productos");
    var tabla="";
    productos.map((producto)=>{

    tabla+= `<tr class="text-center">
    <td><b>${producto.nombre.toUpperCase()}</b></td>
    <td><b>$${parseFloat(producto.precio).toFixed(2)}</b></td>
    <td><b>${producto.cantidad}</b></td>
    <td>
        <button class="btn-solid theme-danger" onclick="eliminarProducto(${posicion})"><i class="bi bi-trash"></i></button>
        <button class="btn-solid theme-warning" data-bs-toggle="dialog" data-bs-target="#editProducto" onclick="editarProducto(${posicion})"><i class="bi bi-pencil-square"></i></button>
    </td>
    </tr>`;
    posicion++;

    })
    tbody.innerHTML=tabla;
}
cargarProductos();

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success mx-5",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false
});

const eliminarProducto=(posicion)=>{
swalWithBootstrapButtons.fire({
  title: "ELIMINAR REGISTRO",
  text: "Estas seguro de eliminar este producto?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Sí",
  cancelButtonText: "No",
  reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
        productos.splice(posicion,1);
        localStorage.setItem("productos",JSON.stringify(productos));
        cargarProductos();
        Swal.fire({title: "ELIMINADO", text: "Se elimino correctamente", icon: "success"});
    }
});

}

const editarProducto=(posicion)=>{
    const producto=productos[posicion];
    document.getElementById("nombree").value=producto.nombre;
    document.getElementById("precioe").value=producto.precio;
    document.getElementById("posicion").value=posicion;


}