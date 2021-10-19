<template>
  <div>
    <section class="page1">
      <div class="question">
        <div class="title">
          <span class="star">*</span>
          <span class="answerTitle">姓&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
        </div>
        <input
          type="text"
          class="inputContent"
          ref="name"
          v-model="info.name"
          placeholder="请输入2～20个字符"
        />
        <i class="fa fa-times" id="name" style="display: none;"></i>
      </div>
      <div class="question">
        <div class="title">
          <span class="star">*</span>
          <span class="answerTitle">电&nbsp;&nbsp;&nbsp;&nbsp;话:</span>
        </div>
        <input
          type="text"
          class="inputContent"
          ref="phone"
          v-model="info.phone"
          placeholder="请输入11位数字"
        />
        <i class="fa fa-times" id="phone" style="display: none;"></i>
      </div>
      <div class="question">
        <div class="title">
          <span class="star">*</span>
          <span class="answerTitle">邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</span>
        </div>
        <input
          type="text"
          class="inputContent"
          ref="email"
          v-model="info.email"
          placeholder="请输入您的常用邮箱"
        />
        <i class="fa fa-times" id="email" style="display: none;"></i>
      </div>
      <div class="question">
        <div class="title">
          <span class="star">*</span>
          <span class="answerTitle">学&nbsp;&nbsp;&nbsp;&nbsp;校:</span>
        </div>
        <input
          type="text"
          class="inputContent"
          ref="school"
          v-model="info.school"
          placeholder="请输入你所在的学校或单位"
        />
        <i class="fa fa-times" id="school" style="display: none;"></i>
      </div>
      <div class="question">
        <div class="title">
          <span class="star">*</span>
          <span class="answerTitle">身&nbsp;&nbsp;&nbsp;&nbsp;份:</span>
        </div>
        <ul style="display: inline-block;">
          <li :class="isTeacher ? 'changeColor' : ''" @click="acquireTec()">
            老师
          </li>
          <li :class="isStudent ? 'changeColor' : ''" @click="acquireStu()">
            学生
          </li>
          <i class="fa fa-times" id="identity" style="display: none;"></i>
        </ul>
      </div>
    </section>
    <button class="buttonClick" @click="nextpage2()">下一步</button>
  </div>
</template>
<script>
export default {
  name: 'page1',
}
</script>
<style scoped>
.title .star {
  color: var(--red);
}
.page1 {
  margin: 2em 0 0.5em 0;
  padding: 1em 0;
  box-shadow: 0 0.25em 0.5em 0 var(--shadow);
  transition: 0.3s;
  border-radius: 5px;
}
.page1:hover {
  box-shadow: 0 0.5em 1em 0 var(--shadow);
}
.page1 .question {
  margin: 1.7em 6em 1.7em 4em;
}
.page1 .question .title {
  display: inline-block;
  /* text-align-last: justify; */
  color: var(--fontcolor);
  margin: 0.25em 2em 0.25em 1em;
}
.page1 .question .inputContent {
  width: 18em;
  height: 2em;
  border: 1px solid var(--fontcolor);
  border-radius: 2px;
}
.page1 .question .inputContent:focus {
  border: 1px solid var(--accent);
}
.page1 .question ul li {
  display: inline-block;
  width: 6.875em;
  border: 1px solid var(--fontcolor);
  border-radius: 2px;
  color: var(--fontcolor);
  text-align: center;
}
.changeColor {
  background-color: var(--dashcolor);
}
.page1 .question ul li:hover {
  cursor: pointer;
  background-color: var(--dashcolor);
  border: 1px solid var(--accent);
}
.page1 .question ul li:first-child {
  margin-right: 1em;
}
.buttonClick {
  width: 10em;
  height: 3em;
  font-size: 1em;
  color: var(--mainbgc);
  background-color: var(--accent);
  margin: 3.5em 0;
  border-radius: 3px;
}
</style>
