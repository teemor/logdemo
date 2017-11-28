<template>
  <div>
    <el-form :model="formdata"
             :rules="rules"
             ref="hh">
      <el-form-item label="摘要"
                    prop="summary">
        <el-input v-model="formdata.summary"></el-input>
      </el-form-item>
      <el-form-item label="标题"
                    prop="content">
        <el-input type="textarea"
                  v-model="formdata.content"></el-input>
      </el-form-item>
      <el-form-item label="姓名"
                    prop="user">
        <el-input placeholder="选择姓名"
                  v-model="formdata.user">
        </el-input>
      </el-form-item>
      <el-form-item label="日期"
                    prop="date">
        <el-date-picker type="date"
                        value-format="yyyy-MM-dd"
                        v-model="formdata.date"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="edita(formdata)">确定</el-button>
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
        user: { required: true, message: '请输入日期', trigger: 'blur' }
      }
    }
  },
  watch: {
    data: function () {
      this.formdata = this.data
    }
  },
  mounted () {
    if (this.data && Object.keys(this.data).length) {
      this.formdata = this.data
    } else {
      this.formdata = this.initModel()
    }
  },
  methods: {
    edita: function (formdata) {
      this.$refs.hh.validate(valid => {
        if (valid) {
          // this.$emit('edita', this.formdata)
          if (this.data) {
      let json = {
        'user': this.formdata.user,
        'content': this.formdata.content,
        'summary': this.formdata.summary
      }
    this.$store.dispatch('edit',formdata)
      .then((res) => {
        this.$commonUtils.setMessage('success', '修改成功')
       this.$emit('edita')
      })
          } else {
             this.$store.dispatch('addlogl', formdata)
              .then((res) => {
                this.$commonUtils.setMessage('success', '添加成功')
              })
            this.$emit('edita')
          }
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