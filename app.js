const miapp = new Vue({
    el: '#app',
    data: {
        hola: 'andy',
        productos: [
            {nombre: 'Colores largos', precio: 12.0, cantidad: 5},
            {nombre: 'Cuaderno cuadriculado', precio: 3.50, cantidad: 2},
        ],
        editarIndice:0,
        nuevoNombre: '',
        nuevoPrecio: 0,
        nuevoCantidad: 0,
        modo: 0
        // 0 agregar, 1 editar
    },
    methods: {
        agregar: function(){
            this.productos.push({nombre: this.nuevoNombre, precio: this.nuevoPrecio, cantidad: this.nuevoCantidad});
            this.nuevoNombre = '',
            this.nuevoPrecio = 0,
            this.nuevoCantidad = 0           
        },
        eliminar: function(item){
            let i = this.productos.indexOf(item)
            this.productos.splice(i, 1)
        },
        editar: function(){
            this.productos[this.editarIndice].nombre = this.nuevoNombre
            this.productos[this.editarIndice].precio = this.nuevoPrecio
            this.productos[this.editarIndice].cantidad = this.nuevoCantidad
        },
        abrir_modal_nuevo(){
            this.modo = 0
            this.nuevoNombre = '',
            this.nuevoPrecio = 0,
            this.nuevoCantidad = 0
        },
        abrir_modal_editar(item){
            this.modo = 1
            let i = this.productos.indexOf(item)
            this.editarIndice = i
            this.nuevoNombre = this.productos[i].nombre
            this.nuevoPrecio = this.productos[i].precio
            this.nuevoCantidad = this.productos[i].cantidad
        }
    },
    computed:{
        total: function(){
            let sum = 0
            for(n of this.productos){
                sum += n.cantidad            
            }          
            return sum
        }
    }
});