new Vue({
    el: "#questionnaire",
    data: {
        isTeacher: false,
        isStudent: false,
        isShow_page1: true,
        isShow_page2: false,
        isShow_page3: false,
        isShow_page4: false,
        //基本信息page1
        info: {
            name: '',
            phone: '',
            email: '',
            school: '',
            identity:'',
        },
        information: {},
        //老师信息page2
        info_tec:{
            course: '',
            contest:'',
        },
        //学生信息page3
        info_stu: {
            grade: '',
            recommend: '',
            subject:'',
        },
        //最后信息page4
        info_last: {
            interest: [],
            achievement: '',
        },
        otherInterset:'',
        isName: false,
        isPhone: false,
        isEmail: false,
        isSchool: false,
        isIdentity:false,
    },
    methods: {
        acquireTec () {
            var ui = document.getElementById("identity");
                ui.style.display="none";
            this.isTeacher = true;
            this.isStudent = false;
            this.info.identity = "老师"
        },
        acquireStu () {
            var ui = document.getElementById("identity");
                ui.style.display="none";
            this.isTeacher = false;
            this.isStudent = true;
            this.info.identity = "学生"
        },
        recommendTec () {
            this.info_stu.recommend="教师推荐"
        },
        recommendStu () {
            this.info_stu.recommend="同学推荐"
        },
        recommend () {
            this.info_stu.recommend="其他途径"
        },
        nextpage2 () { 
            //验证name
            if (this.$refs.name.value.length < 2 || this.$refs.name.value.length > 20) {
                var ui = document.getElementById("name");
                ui.style.display="inline";
                console.log('name is error')
            } else {
                var ui = document.getElementById("name");
                ui.style.display="none";
                this.info.name = this.$refs.name.value;
                this.isName = true;
            }

            //验证phone
            var s = this.$refs.phone.value;
            var r = /^1(3|4|5|6|7|8|9)\d{9}$/;
            if (r.test(s)) {
                var ui = document.getElementById("phone");
                ui.style.display="none";
                this.info.phone = this.$refs.phone.value;
                this.isPhone = true;
            } else {
                var ui = document.getElementById("phone");
                ui.style.display="inline";
                console.log('phone is error')
            }

            //验证email
            var str = this.$refs.email.value
            var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if (re.test(str)) {
                var ui = document.getElementById("email");
                ui.style.display="none";
                this.info.email = this.$refs.email.value;
                this.isEmail = true;
            } else {
                var ui = document.getElementById("email");
                ui.style.display="inline";
                console.log('email is error')
            }

            //验证school
            if (this.$refs.school.value.length < 1) {
                var ui = document.getElementById("school");
                ui.style.display="inline";
                console.log('school is error')
            } else {
                var ui = document.getElementById("school");
                ui.style.display="none";
                this.info.school = this.$refs.school.value;
                this.isSchool = true;
            }

            //验证identity
            if (this.info.identity.length < 1) {
                var ui = document.getElementById("identity");
                ui.style.display="inline";
                console.log('identity is error')
            } else {
                this.isIdentity = true;
            }
            var right = this.isName && this.isPhone && this.isEmail && this.isSchool && this.isIdentity;
            if (right) {
                this.isShow_page1 = false;
                this.isShow_page2 = true;
                this.isShow_page3 = true;
            } else {
                this.isShow_page1 = true;
                this.isShow_page2 = false;
                this.isShow_page3 = false;
             }    
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
            if(this.isTeacher){
                this.info_tec.course = this.$refs.course.value;
                this.info_tec.contest = this.$refs.contest.value;
            }
            if (this.isStudent) {
                this.info_stu.grade = this.$refs.grade.value;
                this.info_stu.subject = this.$refs.subject.value;
            }
        },
        backup () { 
            this.isShow_page2 = true;
            this.isShow_page3 = true;
            this.isShow_page4 = false;
        },
        submit () {
            this.info_last.achievement = this.$refs.achievement.value;
            this.info_last.interest = this.info_last.interest.indexOf('其他')>-1 ? [...this.info_last.interest.filter(item => item !== '其他'),this.otherInterset] : this.info_last.interest,
            this.information = Object.assign(this.info, this.info_tec, this.info_stu, this.info_last);
            console.log(this.information);
            alert('提交成功');
        },
        uploadFile () {
            var input = document.getElementById("up_file");
            input.click();
            input.onchange = function () {
                var file = input.files[0];
                console.log(file);
                var fd = new FormData();
                fd.append("file", file);
                console.log(fd)
            }
        }
    }
})