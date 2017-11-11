<template>
  <el-form :model="formdata"
           :rules="rules"
           ref="forma">
    <el-form-item label="人员"
                  prop="user">
      <el-input v-model="formdata.user"></el-input>
    </el-form-item>
    <el-form-item label="标题"
                  prop="content">
      <el-input type="textarea"
                v-model="formdata.content"></el-input>
    </el-form-item>
    <el-form-item label="日期"
                  prop="summary">
      <el-input type="textarea"
                v-model="formdata.summary"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="addlogone">确定</el-button>
      <el-button type="cancel"
                 @click="$emit('cancel-dialog')">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      formdata: {
        content: '',
        summary: '',
        user: ''
      },
      rules: {
        content: { required: true, message: '请输入标题', trigger: 'blur' },
        user: { required: true, message: '请输入内容', trigger: 'blur' }
      }
    }
  },
  methods: {
    addlogone: function () {
      this.$refs.forma.validate((val) => {
        if (val) {
          this.$emit('submit-btn', this.formdata)
        }
      })
    },
    reset: function () {
      this.formdata.user = ''
      this.formdata.content = ''
      this.formdata.summary = ''
    }
  }
}
</script>