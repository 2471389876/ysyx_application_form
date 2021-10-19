<template>
  <div id="questionnaire">
    <div class="main">
      <header style="padding-top: 1em;">
        <img src="../../YSYX.png" alt="" style="height: 2em;" />
        <h1>第三期“一生一芯”计划报名表</h1>
        <p>
          您好，这是一份关于【第三期“一生一芯”计划】的报名表，欢迎踊跃报名！
        </p>
      </header>
      <div class="content">
        <div class="page" v-if="isShow_page1">
          <page1></page1>
        </div>
        <div class="page" v-if="isShow_page2">
          <page2></page2>
        </div>
        <div class="page" v-if="isShow_page3">
          <page3></page3>
        </div>
        <div class="page" v-if="isShow_page4">
          <page4></page4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import page1 from './page/page1.vue'
import page2 from './page/page2.vue'
import page3 from './page/page3.vue'
import page4 from './page/page4.vue'
export default {
  name: 'Form',
  components: {
    page1,
    page2,
    page3,
    page4,
  },
}
</script>
<style scoped>
#questionnaire {
  width: 100%;
  height: 100%;
  background-color: var(--bodybgc);
}
.main {
  width: 58em;
  background-color: var(--mainbgc);
  margin: auto;
}
header h1 {
  color: var(--accent);
  font-size: 1.5em;
  text-align: center;
  padding-top: 1em;
}
header p {
  text-align: center;
  color: var(--fontcolor);
  padding: 2em 0 1em;
  border-bottom: 1px dashed var(--dashcolor);
}
.title .star {
  color: var(--red);
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
