new Vue({
    el: '#app',
    data: {
        age: 23,
        x: 0,
        y: 0
    },
    methods: {
        addone: function () {
            this.age++;
        },
        subone: function () {
            // console.log(age)
            this.age--;
        },
        add: function (inc) {
            this.age += inc;
        },
        sub: function (inc) {
            this.age -= inc;
        },
        // updatevaluexy use for update value xy in box according for mouse move in box
        updatevaluexy: function (event) {
            // console.log(event)
            this.x = event.offsetX;
            // console.log(event.offsetX);
            this.y = event.offsetY;
        },
        // clicklink use for reload the link during the click
        clicklink: function () {
            alert("hello")
        },
        // keyboard event 
        namelog: function () {
            console.log("enter your name");
        },
        agelog: function () {
            console.log("enter your age");
        }
    }
});