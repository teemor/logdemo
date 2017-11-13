<template>
  <div v-if="formdata">
    <el-form :model="formdata"
             :rules="rules"
             ref="hh">
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
                   @click="edita">确定</el-button>
        <el-button type="cancel"
                   @click="$emit('cancel-dialog')">取消</el-button>
        <el-button @click="hh">ai</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data () {
    return {
      formdata: this.setlog(),
      rules: {
        content: { required: true, message: '请输入标题', trigger: 'blur' },
        user: { required: true, message: '请输入内容', trigger: 'blur' }
      }
    }
  },
  mounted () {
    if (this.data && Object.keys(this.data).length) {
      this.setlog()
    } else {
      this.formdata = this.initModel()
    }
  },
  watch: {
    data: function () {
      this.setlog()
      console.log('watch')
    }
  },
  methods: {
    edita: function () {
      this.$refs.hh.validate(valid => {
        if (valid) {
          console.log(this.formdata)
          this.$emit('edita', this.formdata)
        }
      })
    },
    // hh: function () {
    //   console.log('父组件能获取到的', this.data, this.formdata)
    // },
    initModel: function () {
      return {
        content: '',
        summary: '',
        user: ''
      }
    },
    reset: function () {
      this.formdata = this.initModel()
    },
    setlog: function () {
      this.formdata = this.data
    }
  }
}
</script>