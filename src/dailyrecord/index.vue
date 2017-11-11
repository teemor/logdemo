<template>
  <div id="main">
    <el-button @click="addlog = true">新增</el-button>
    <el-dialog title="新增日志"
               :visible.sync="addlog">
      <add-log @cancel-dialog="addlog=false"
               @submit-btn="addlogl"
               ref="form"></add-log>
    </el-dialog>
    <el-table :data="datab"
              width="100%"
              stripe
              border
              ref="multipleTable">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column label="日期"
                       width="350"
                       prop="summary">
      </el-table-column>
      <el-table-column label="人员"
                       width="250"
                       prop="user"></el-table-column>
      <el-table-column label="标题"
                       prop="content"
                       width="840">
      </el-table-column>
      <el-table-column label="操作"
                       width="405">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click.native.prevent="deleteRow(scope.$index, datab)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import AddLog from '@/dailyrecord/AddLog'
export default {
  data () {
    return {
      datab: [],
      addlog: false
    }
  },
  methods: {
    loadlist () {
      this.$axios.get('http://qianjia.space:8000/logs')
        .then(res => {
          this.datab = res.data
          console.log('获取一下吧', this.datab)
        })
    },
    addlogl (formdata) {
      this.$axios.post('http://qianjia.space:8000/logs', formdata)
        .then((res) => {
          console.log('再获取一下吧', res.data)
          this.addlog = false
          this.loadlist()
          this.$refs.form.reset()
        })
    }
  },
  mounted () {
    this.loadlist()
    this.formdata = this.datab
  },
  components: {
    AddLog
  }
}
</script>
<style>

</style>



