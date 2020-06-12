const miapp = new Vue({
    el: '#app',
    data: {
        hola: 'andy',
        productos: [
            {nombre: 'Colores largos', precio: 12.0, cantidad: 5},
            {nombre: 'Cuaderno cuadriculado', precio: 3.50, cantidad: 2},
        ],
        nuevoNombre: '',
        nuevoPrecio: 0,
        nuevoCantidad: 0
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
        }
    }
});