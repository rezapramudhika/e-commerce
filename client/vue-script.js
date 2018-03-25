const request = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'token': localStorage.getItem('token') }
})

new Vue({
    el: '#app',
    data: {
        test: 'Hacktivcommerce',
        categories: [],
        items: [],
        carts: [],
        token: '',
        fileUpload: '',
        isAdmin: false,
        transactionList: []
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
        checkout: function () {
            request.post('http://localhost:3000/carts', {
                items: this.carts,
                user: localStorage.getItem('id'),
            })
                .then((data) => {
                    this.carts = []
                    window.location.href = 'index.html';
                })
                .catch(err => {
                    console.log(err)
                })
        },
        onFileChange: function (e) {
            const files = e.target.files || e.dataTransfer.files
            this.fileUpload = files
        },
        addItem: function () {
            let category = document.querySelector('#categoryItem').value;
            let itemName = document.querySelector('#itemName').value;
            let itemDescription = document.querySelector('#itemDescription').value;
            let itemPrice = document.querySelector('#itemPrice').value;
            if (itemName == '' || itemDescription == '' || itemPrice == null || itemImage == '') {
                alert('Form cannot be empty!');
            } else {
                let send = new FormData()
                send.append('image', this.fileUpload[0])
                send.append('category', category)
                send.append('name', itemName)
                send.append('description', itemDescription)
                send.append('price', itemPrice)
                axios.post('http://localhost:3000/items', send)
                    .then((data) => {
                        alert('New item added');
                        window.location.href = 'index.html';
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        register: function () {
            let name = document.querySelector('input#name').value;
            let email = document.querySelector('input#emailRegister').value;
            let password = document.querySelector('input#passwordRegister').value;
            axios.post('http://localhost:3000/register', {
                name: name,
                email: email,
                password: password
            })
                .then((data) => {
                    alert('Register success');
                    window.location.href = 'index.html';
                })
                .catch(err => {
                    console.log(err)
                })
        },
        login: function () {
            let email = document.querySelector('input#emailLogin').value;
            let password = document.querySelector('input#passwordLogin').value;
            axios.post('http://localhost:3000/login', {
                email: email,
                password: password
            })
                .then((data) => {
                    localStorage.setItem('id', data.data.user.id)
                    localStorage.setItem('token', data.data.token)
                    if (data.data.user.isAdmin) {
                        window.location.href = '#';
                    } else {
                        window.location.href = 'index.html';
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        logout: function () {
            localStorage.removeItem('id');
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
                if (data.data.isAdmin) {
                    this.isAdmin = true;
                }
            })
            .catch(err => {
                console.log(err)
            })
        if (localStorage.getItem('token') !== null) {
            this.token = localStorage.getItem('token');
            axios.get(`http://localhost:3000/carts/${localStorage.getItem('id')}`, {
                headers: { token: localStorage.getItem('token') }
            })
                .then((data) => {
                    this.transactionList = data.data.data;
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})
