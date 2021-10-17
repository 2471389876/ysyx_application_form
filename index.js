new Vue({
    el: "#questionnaire",
    data: {
        isTeacher: '',
        isStudent:'',
        isShow_page1: false,
        isShow_page2: false,
        isShow_page3: false,
        isShow_page4: true,
    },
    methods: {
        nextpage2 () {
            this.isShow_page1 = !this.isShow_page1;
            this.isShow_page2 = !this.isShow_page2;
        }
    }
})