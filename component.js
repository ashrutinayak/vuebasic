Vue.component('great', {
    template: '<p>Demo {{ name }} <button v-on:click="Changename()">Change Name</button></p>',
    data: function () {
        return {
            name: 'Mahi'
        }
    },
    methods: {
        Changename: function () {
            this.name = "Rahi"
        }
    }
});




new Vue({
    el: "#pra"
});
new Vue({
    el: "#test"
});