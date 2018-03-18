Vue.component('cart-component', {
    template: `
        <td>{{cart.name}}</td>
        <td>{{cart.quantity}}</td>
        <td>{{formatUang(cart.price)}}</td>
        <td>
            <button v-on:click="deleteFromCart(index, (cart.price-(cart.price/cart.quantity)))">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        </td>
    `,
    props:['cart', 'index'],
    data: function() {
        return {}
    },

})