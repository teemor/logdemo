<template>
  <div>
    <el-form :model="formdata"
             :rules="rules"
             ref="hh">
      <el-form-item label="人员"
                    prop="summary">
        <el-input v-model="formdata.summary"></el-input>
      </el-form-item>
      <el-form-item label="标题"
                    prop="content">
        <el-input type="textarea"
                  v-model="formdata.content"></el-input>
      </el-form-item>
      <el-form-item label="日期"
                    prop="date">
      <el-date-picker type="date" placeholder="选择日期" v-model="formdata.date">
      </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="edita">确定</el-button>
        <el-button type="cancel"
                   @click="$emit('cancel-dialog')">取消</el-button>
        <!-- <el-button @click="hh">ai</el-button> -->
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
      formdata: {},
      rules: {
        content: { required: true, message: '请输入标题', trigger: 'blur' },
        summary: { required: true, message: '请输入内容', trigger: 'blur' },
        date: { type:'date', required:true, message: '请输入日期', trigger: 'blur'}
      }
    }
  },
  mounted () {
    if (this.data && Object.keys(this.data).length) {
          this.formdata = this.data
    } else {
      this.formdata = this.initModel()
    }
  },
  watch: {
    data: function () {
          this.formdata = this.data
    }
  },
  methods: {
    edita: function () {
      this.$refs.hh.validate(valid => {
        if (valid) {
          // let date =new Date(this.formdata.date)
          // console.log(date)
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
        date: '',
        user: ''
      }
    },
    reset: function () {
      this.formdata = this.initModel()
    }
  }
}
</script>