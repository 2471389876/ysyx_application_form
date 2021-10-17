new Vue({
    el: "#questionnaire",
    data: {
        isTeacher: false,
        isStudent: false,
        isShow_page1: true,
        isShow_page2: false,
        isShow_page3: false,
        isShow_page4: false,
    },
    methods: {
        acquireTec () {
            this.isTeacher = true;
            this.isStudent = false;
        },
        acquireStu () {
            this.isTeacher = false;
            this.isStudent = true;
        },
        nextpage2 () {
            this.isShow_page1 = false;
            this.isShow_page2 = true;
            this.isShow_page3 = true;
        },
        back () { 
            this.isShow_page1 = true;
            this.isShow_page2 = false;
            this.isShow_page3 = false;
        },
        nextpage4 () {
            this.isShow_page4 = true;
            this.isShow_page2 = false;
            this.isShow_page3 = false;
        },
        backup () { 
            this.isShow_page2 = true;
            this.isShow_page3 = true;
            this.isShow_page4 = false;
        },
    }
})