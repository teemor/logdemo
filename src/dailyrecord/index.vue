<template>
  <div id="main">
    <el-button @click="addlog = true">新增</el-button>
    <!-- 新增 -->
    <el-dialog title="新增日志"
               :visible.sync="addlog"
               v-model="datab">
      <!-- <add-log @cancel-dialog="addmodel=false"
               @submit-btn="addlogl"
               ref="form"></add-log> --> 
                 <edit-log @cancel-dialog="addmodel=false"
               @edita="addlogl"
               ref="form"></edit-log>

    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改日志"
               :visible.sync="editlog"
               v-model="editlog"
                >
        <edit-log @cancel-dialog="editlog=false"
               @edita="edita" :data="formdata"  ref="form"></edit-log>
    </el-dialog>
    <el-table :data="datab"
              width="100%"
              max-height="500"
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
                     @click="edit(datab[scope.$index])">编辑</el-button>
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
import EditLog from '@/dailyrecord/EditLog'
export default {
  data () {
    return {
      datab: [],
      addlog: false,
      editlog: false,
      addtitle: '',
      edittitle: '',
      addmodel: false,
      editmodel: false,
      formdata: {
        content: '',
        summary: '',
        user: '',
        id: ''
      }
    }
  },
  methods: {
    loadlist () {
      this.$axios.get('http://qianjia.space:8000/logs')
        .then(((res)) => {
          this.datab = res.data
        })
    },
    addlogl (formdata) {
      this.$axios.post('http://qianjia.space:8000/logs', formdata)
        .then((res) => {
          this.addlog = false
          this.loadlist()
          this.$refs.form.reset()
        })
    },
    deleteRow (index, rows) {
      var id = rows[index]._id.$oid
      this.$axios.delete('http://qianjia.space:8000/logs' + '/' + id)
        .then((res) => {
          rows.splice(index, 1)
          // this.loadlist()
        })
      this.$message('删除成功')
    },
    edit (row) {
      this.formdata = row
      this.editlog = true
      //  赋值
    },
    edita (model) {
      // var id = rows[index]._id.$oid
      console.log('http://qianjia.space:8000/logs' + '/' + model._id.$oid)
      console.log('我获取的是传过来的值', model)
      let json = {
        'summary': this.formdata.summary,
        'content': this.formdata.content,
        'user': this.formdata.user
      }
      this.$axios.put('http://qianjia.space:8000/logs' + '/' + model._id.$oid, json)
      .then((res) => {
        this.editlog = false
      })
    }
  },
  // 初始化
  mounted () {
    this.loadlist()
    // this.formdata = this.datab
  },
  components: {
    AddLog, EditLog
  }
}
</script>
<style>

</style>



