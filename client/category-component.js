Vue.component('category-component', {
    template: `
        <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 pull-left">
                <h3><strong>{{category.name}}</strong></h3>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 pull-right" style="margin-top: 20px;">
                <a href="#" style="float: right">View more</a>
            </div>
        </div>
    `,
    props:['category'],
    data: function() {
        return {}
    },

})