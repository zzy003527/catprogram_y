<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="370px" class="elAside">
        <div class="userProgressLeft">

          <div class="userProgressLeftImg"></div>
        </div>
      </el-aside>
      <el-main>
        <div class="userProgressRight">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script lang='ts' setup>

</script>
<style scoped>
.elAside {
  padding: 10px;
}

.userProgressRight {
  padding: 20px;
  width: 812px;
  border-radius: 20px;
  box-shadow: 0px 4px 21px -5px rgb(50 88 130 / 32%);

}

.userProgressLeft {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 1px 4px 39px -12px rgb(32 118 210 / 32%);
  flex-wrap: wrap;
  align-content: flex-end;


}

.userProgressLeft .userProgressLeftImg {
  width: 100%;
  height: 221px;
  background: url(../../../public/userprogress.png) center;
}

/* .userProgressRight .wirteStep {} */
</style>