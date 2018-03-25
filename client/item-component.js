Vue.component('item-component', {
    template: `
        <div class="thumbnail thumbnail-decoration">
            <a href="#" class="" data-toggle="modal" data-target="#myModal" v-if="token !== ''" v-on:click="addToCarts(item)">
                <img :src="item.img" :alt="item.name" style="min-width: 144px; min-height: 144px">
                <div class="caption">
                    <h4 class="item-name">{{item.name}}</h4>
                    <p class="description">{{item.description}}</p>
                    <h4 class="price-text">{{formatUang(item.price)}}</h4>
                    <p class="disc-text"></p>
                </div>
            </a>
            <a href="#" class="" data-toggle="modal" data-target="#login-modal" v-else>
                <img :src="item.img" :alt="item.name" style="min-width: 144px; min-height: 144px">
                <div class="caption">
                    <h4 class="item-name">{{item.name}}</h4>
                    <p class="description">{{item.description}}</p>
                    <h4 class="price-text">{{formatUang(item.price)}}</h4>
                    <p class="disc-text"></p>
                </div>
            </a>
        </div>
    `,
    props:['token', 'item', 'carts'],
    data: function () {
        return {};
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
        addToCarts: function (item) {
            if (this.carts.length === 0) {
                let obj = {
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: 1
                }
                this.carts.push(obj);
                return this.carts;
            } else {
                for (let i = 0; i < this.carts.length; i++) {
                    if (this.carts[i].id === item._id) {
                        this.carts[i].quantity += 1;
                        this.carts[i].price *= this.carts[i].quantity;
                        return this.carts;
                    }
                }
                let obj = {
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: 1
                }
                this.carts.push(obj);
                return this.carts;
            }
        }
    }

})