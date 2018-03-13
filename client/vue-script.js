new Vue({
    el: '#app',
    data: {
        test: 'Hello World',
        categories: [{
            id: 1,
            name: 'NOTEBOOK / LAPTOP CONSUMER'
        },{
            id: 2,
            name: 'GADGET'
        },{
            id: 3,
            name: 'AKSESORIS GADGET & KOMPUTER'
        }],
        items: [{
            id: 1,
            categoryId: 1,
            name: 'APPLE MacBook Pro (Touch Bar) [MLH32ID/A] - Space Gray',
            description: 'Intel Core i7 2.6GHz, 256GB SSD, BluetoothVGA, Camera, Touch Bar, 16GB DDR3, Wi-Fi, VGA Radeon Pro 450 with 2GB, 15.4 inch LED, Mac OS Sierra',
            price: 34939000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/APPLE-MacBook-Pro-with-Retina-Display-Touch-Bar-MLH32ID-A-Space-Gray-SKU00317234-2017417145214.jpg'
        },{
            id: 2,
            categoryId: 1,
            name: 'APPLE MacBook Air [MJVG2] (Merchant)',
            description: 'Intel Core i7 2.6GHz, 256GB SSD, BluetoothVGA, Camera, Touch Bar, 16GB DDR3, Wi-Fi, VGA Radeon Pro 450 with 2GB, 15.4 inch LED, Mac OS Sierra',
            price: 17950000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/APPLE-MacBook-Air-MMGF2-Merchant--SKU13416145-2016111614294.jpg'
        },{
            id: 3,
            categoryId: 1,
            name: 'APPLE MacBook Pro [MLW82] - Silver (Merchant)',
            description: 'Intel Core i7 2.6GHz, 256GB SSD, BluetoothVGA, Camera, Touch Bar, 16GB DDR3, Wi-Fi, VGA Radeon Pro 450 with 2GB, 15.4 inch LED, Mac OS Sierra',
            price: 25149000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/APPLE-MacBook-Pro-MLW82-Silver-Merchant--SKU14916402-201772611433.jpg'
        },{
            id: 4,
            categoryId: 2,
            name: 'SAMSUNG Galaxy J2 Prime [SM-G532] - Gold/White Gold',
            description: 'Exynos Quad-core 1.4 GHz, 8GB Storage, Camera 8MP + 5MP, Battery 2600 mAh, 5.0 inch HD TFT, 1.5GB RAM, Android Marshmallow',
            price: 1599000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/SAMSUNG-Galaxy-J2-Prime-SM-G532-Gold-SKU13516901-2016112484314.jpg'
        },{
            id: 5,
            categoryId: 2,
            name: 'SAMSUNG Galaxy Tab A with S Pen - Blue',
            description: 'Exynos Quad-core 1.4 GHz, 8GB Storage, Camera 8MP + 5MP, Battery 2600 mAh, 5.0 inch HD TFT, 1.5GB RAM, Android Marshmallow',
            price: 3999000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/SAMSUNG-Galaxy-TAB-A-Blue-SKU02715771_6-20150527104530.jpg'
        },{
            id: 6,
            categoryId: 2,
            name: 'LENOVO Vibe K5 Plus (16GB/3GB RAM) - Champagne Gold',
            description: 'Exynos Quad-core 1.4 GHz, 8GB Storage, Camera 8MP + 5MP, Battery 2600 mAh, 5.0 inch HD TFT, 1.5GB RAM, Android Marshmallow',
            price: 1949000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/LENOVO-K5-Plus-16GB-3GB-RAM-Champagne-Gold-SKU05116395-201671110843.jpg'
        },{
            id: 7,
            categoryId: 3,
            name: 'LOGITECH Wired Optical Mouse B100 [910-001439]',
            description: '800 dpi, USB, Wired Optical Mouse',
            price: 55000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/LOGITECH-Wired-Optical-Mouse-B100-[910-001439]-SKU00311877_1-20150325163736.jpg'
        },{
            id: 8,
            categoryId: 3,
            name: 'WD Elements New Edition USB 3.0 1TB [WDBUZG0010BBK]',
            description: '1TB, USB 3.0, 2.5 inch, Windows/Mac',
            price: 910000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/WD-Elements-New-Edition-USB-3-0-1TB-[WDBUZG0010BBK-PESN]-SKU01213302_3-20150311163809.jpg'
        },{
            id: 9,
            categoryId: 2,
            name: 'WD Elements New Edition USB 3.0 1TB [WDBUZG0010BBK]',
            description: '1TB, USB 3.0, 2.5 inch, Windows/Mac',
            price: 910000,
            img: 'https://assets.bmdstatic.com/assets/Data/image_product_500x500/WD-Elements-New-Edition-USB-3-0-1TB-[WDBUZG0010BBK-PESN]-SKU01213302_3-20150311163809.jpg'
        }],
        carts: []
    },
    methods: {
        formatUang: (number) => {
            reverse = number.toString().split('').reverse();
            arr= [];
            for(var i = 0; i<reverse.length;i++){
              if((i+1) % 3 === 0 && (i+1) !== reverse.length){
                arr.push(reverse[i]);
                arr.push('.');
              }else{
                arr.push(reverse[i]);
              }
            }
            return 'Rp. '+arr.reverse().join('');
        },
        addToCarts: function (item) {
            if(this.carts.length === 0){
                let obj = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: 1
                }
                this.carts.push(obj);
                return this.carts;
            }else{
                for(let i=0; i<this.carts.length; i++){
                    if(this.carts[i].id === item.id){
                        this.carts[i].quantity += 1;
                        this.carts[i].price *= this.carts[i].quantity;
                        return this.carts;
                    }
                }
                let obj = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: 1
                }
                this.carts.push(obj);
                return this.carts;
            }
        },
        deleteFromCart: function (index, price) {
            if(this.carts[index].quantity > 1){
                this.carts[index].quantity -= 1;
                this.carts[index].price -= price;
                console.log(this.carts[index]);
            }else{
                this.carts.splice(index, 1);
                console.log(this.carts[index]);
            }
        }
    }
})