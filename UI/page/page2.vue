<template>
  <div>
    <section class="page2">
      <div class="question">
        <div class="title">
          <span class="answerTitle">您所教授的相关课程:</span>
        </div>
        <textarea
          id="course"
          cols="60"
          rows="5"
          ref="course"
          v-model="info_tec.course"
        ></textarea>
      </div>
      <div class="question">
        <div class="title">
          <span class="answerTitle">
            您辅导学生参加过的比赛（请注明比赛名称、参加时间和获奖名次):
          </span>
        </div>
        <textarea
          id="contest"
          cols="60"
          rows="5"
          ref="contest"
          v-model="info_tec.contest"
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
.page2 {
  margin: 2em 0 0.5em 0;
  padding: 1.8em 3em;
  box-shadow: 0 0.25em 0.5em 0 var(--shadow);
  transition: 0.3s;
  border-radius: 5px;
}
.page2:hover {
  box-shadow: 0 0.5em 1em 0 var(--shadow);
}
.page2 .question {
  margin: 1em 0 1.8em 0;
}
.page2 .title {
  color: var(--fontcolor);
  margin: 0.25em 0;
}
.up_button,
.down_button {
  width: 7em;
  height: 3em;
  font-size: 1em;
  color: var(--mainbgc);
  background-color: var(--accent);
  margin: 2.5em 2em;
  border-radius: 3px;
}
</style>
