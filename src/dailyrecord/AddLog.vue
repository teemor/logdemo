<template>
  <el-form :model="formdate">
    <el-form-item label="标题"
                  prop="title">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="内容"
                  prop="content">
      <el-input type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">确定</el-button>
      <el-button type="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      formdate: {}
    }
  }
}
</script>