new Vue({
    el: '#app',
    data: {
        test: 'Hacktivcommerce',
        categories: [],
        items: [],
        carts: [],
        token: ''
    },
    methods: {
        formatUang: (number) => {
            reverse = number.toString().split('').reverse();
            arr = [];
            for (var i = 0; i < reverse.length; i++) {
                if ((i + 1) % 3 === 0 && (i + 1) !== reverse.length) {
                    arr.push(reverse[i]);
                    arr.push('.');
                } else {
                    arr.push(reverse[i]);
                }
            }
            return 'Rp. ' + arr.reverse().join('');
        },

        deleteFromCart: function (index, price) {
            if (this.carts[index].quantity > 1) {
                this.carts[index].quantity -= 1;
                this.carts[index].price -= price;
            } else {
                this.carts.splice(index, 1);
            }
        },
        itemDetail: function (itemId) {
            window.location.href = 'item-detail.html';
            console.log(itemId)
        },
        logout: function () {
            localStorage.removeItem('token');
            window.location.href = 'index.html'
        }
    },
    created: function () {
        axios.get('http://localhost:3000/', {
            headers: { token: localStorage.getItem('token') }
        })
            .then((data) => {
                this.categories = data.data.categories;
                this.items = data.data.items;
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

        if (localStorage.getItem('token') !== null) {
            this.token = localStorage.getItem('token');
        }
    }
})
