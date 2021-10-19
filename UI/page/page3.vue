<template>
  <div>
    <section class="page3">
      <div class="question">
        <div class="title">
          <span class="answerTitle">在读年级:</span>
        </div>
        <input type="text" ref="grade" v-model="info_stu.grade" />
      </div>
      <div class="question">
        <div class="title">
          <span class="answerTitle">报名来源:</span>
        </div>
        <ul>
          <li
            :class="info_stu.recommend == '教师推荐' ? 'changeColor' : ''"
            @click="recommendTec()"
          >
            教师推荐
          </li>
          <li
            :class="info_stu.recommend == '同学推荐' ? 'changeColor' : ''"
            @click="recommendStu()"
          >
            同学推荐
          </li>
          <li
            :class="info_stu.recommend == '其他途径' ? 'changeColor' : ''"
            @click="recommend()"
          >
            其他途径
          </li>
        </ul>
      </div>
      <div class="question">
        <div class="title">
          <span class="answerTitle">
            上过哪些与“一生一芯”计划相关的课程，如数字电路、组成原理、体系结构等:
          </span>
        </div>
        <textarea
          cols="67"
          rows="5"
          ref="subject"
          v-model="info_stu.subject"
        ></textarea>
      </div>
    </section>
    <div style="display: flex; flex-direction: row;">
      <button class="up_button" @click="back()">上一步</button>
      <button class="down_button" @click="nextpage4()">下一步</button>
    </div>
  </div>
</template>
<style scoped>
.page3 {
  margin: 2em 0 0.5em 0;
  padding: 1.8em 3em;
  box-shadow: 0 0.25em 0.5em 0 var(--shadow);
  transition: 0.3s;
  border-radius: 5px;
}

.page3:hover {
  box-shadow: 0 0.5em 1em 0 var(--shadow);
}
.page3 .question {
  margin: 1em 0 1.5em 0;
}
.page3 .title {
  color: var(--fontcolor);
  margin: 0.2em 0;
}
.page3 ul li {
  display: inline-block;
  margin-right: 2em;
  width: 6.875em;
  border: 1px solid var(--fontcolor);
  border-radius: 2px;
  color: var(--fontcolor);
  text-align: center;
}
.page3 .question ul li:hover {
  cursor: pointer;
  background-color: var(--dashcolor);
  border: 1px solid var(--accent);
}
</style>
