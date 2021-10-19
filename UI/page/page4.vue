<template>
  <div>
    <section class="page4">
      <div class="question">
        <div class="title">
          <span class="answerTitle">
            对“一生一芯”计划的哪些部分比较感兴趣 :
          </span>
        </div>
        <div class="option">
          <input
            type="checkbox"
            id="structure"
            value="体系结构设计"
            v-model="info_last.interest"
          />
          <label for="structure">体系结构设计</label>
        </div>
        <div class="option">
          <input
            type="checkbox"
            id="rtl"
            value="RTL开发和验证"
            v-model="info_last.interest"
          />
          <label for="rtl">RTL开发和验证</label>
        </div>
        <div class="option">
          <input
            type="checkbox"
            id="soc"
            value="SoC集成和验证"
            v-model="info_last.interest"
          />
          <label for="soc">SoC集成和验证</label>
        </div>
        <div class="option">
          <input
            type="checkbox"
            id="ic"
            value="IC后端设计"
            v-model="info_last.interest"
          />
          <label for="ic">IC后端设计</label>
        </div>
        <div class="option">
          <input
            type="checkbox"
            id="etc"
            value="其他"
            v-model="info_last.interest"
          />
          <label for="etc">其他</label>
          <input type="text" v-model="otherInterset" />
        </div>
      </div>
      <div class="question">
        <div class="title">
          <span class="answerTitle">
            参加“一生一芯”计划预期想要获得什么样的提升和成果:
          </span>
        </div>
        <textarea
          id="achievement"
          cols="82"
          rows="5"
          ref="achievement"
          v-model="info_last.achievement"
        ></textarea>
      </div>
      <div class="question">
        <div class="title">
          <span class="answerTitle">
            请上传简历，或发送简历到
            opensource-talents@pcl.ac.cn，格式为【一生一芯+名字+学校】:
          </span>
        </div>
        <input type="file" id="up_file" style="display: none;" />
        <div class="upload" @click="uploadFile()">
          <i class="fa fa-upload"></i>
          <span>选择文件(最大限30M)</span>
        </div>
      </div>
    </section>
    <div style="display: flex; flex-direction: row;">
      <button class="up_button" @click="backup()">上一步</button>
      <button class="down_button" @click="submit()">提交</button>
    </div>
  </div>
</template>
<style scoped>
.page4 {
  margin: 1em 0 0 0;
  padding: 0 3em;
  box-shadow: 0 0.25em 0.5em 0 var(--shadow);
  transition: 0.3s;
  border-radius: 5px;
}
.page4:hover {
  box-shadow: 0 0.5em 1em 0 var(--shadow);
}
.page4 .question {
  margin: 1em 0 1.5em 0;
}
.page4 .title {
  color: var(--fontcolor);
  margin: 0.2em 0;
}
.page4 .upload {
  position: relative;
  width: 100%;
  height: 2.5em;
  cursor: pointer;
  display: inline-block;
  border: 1px solid var(--bordercolor);
}
.page4 .upload i {
  position: absolute;
  top: 50%;
  left: 39%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  color: var(--dashcolor);
}
.page4 .upload span {
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
  color: var(--dashcolor);
}
.option {
  color: var(--fontcolor);
  margin: 0.25em 1em;
}
</style>
