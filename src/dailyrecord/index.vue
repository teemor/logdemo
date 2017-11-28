<template>
  <div id="main">
    <el-button @click="addlog = true">新增</el-button>
    {{ hh }}
    <test @submit="wo"></test>
    <!-- 新增 -->
    <el-dialog title="新增日志"
               :visible.sync="addlog">
      <!-- <add-log @cancel-dialog="addmodel=false"
               @submit-btn="addlogl"
               ref="form"></add-log> --> 
                 <edit-log @cancel-dialog="addmodel=false"
               @edita="close"
               ref="form"></edit-log>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改日志"
               :visible.sync="editlog"
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
                       width="55"
                       align="center"
                       fixed>
      </el-table-column>
      <el-table-column label="日期"
                       width="350"
                       prop="date"
                      align="center">
      </el-table-column>
      <el-table-column label="人员"
                       width="250"
                       prop="summary"
                      align="center"></el-table-column>
      <el-table-column label="标题"
                       prop="content"
                       width="840"
                      align="center">
      </el-table-column>
      <el-table-column label="操作"
                       width="405"
                        align="center">
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
import test from '@/dailyrecord/test'
// import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import request from '@/api/api'
export default {
  data () {
    return {
      addlog: false,
      editlog: false,
      addmodel: false,
      editmodel: false,
      hh:'',
      formdata:{}
    }
  },
  computed: {
    // ...mapState({
    //   datab: 'datab'
    // })
    ...mapGetters({
      datab: 'datab',
      modifyModel: 'modifyModel'
    })
  },
  methods: {
    loadlist:function(){
      this.$store.dispatch('initPage')
    },
    deleteRow (index, rows) {
      this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(()=>{
        var id = rows[index]._id.$oid
        this.$store.dispatch('del', id)
        .then((res) => {
          rows.splice(index, 1)
        })
      this.$message('删除成功')
      })
    },
    close () {
      this.addlog = false
    },
    edita (){
      this.editlog = false
    },
    edit (row) {
      this.$store.dispatch('editid' ,row._id.$oid)
      this.formdata = row
      this.editlog = true
      console.log('rwe', row)
      //  赋值
    },
    wo (gg){
     this.hh = gg
    }
  },
  // 初始化
  mounted () {
    this.loadlist()
    // this.formdata = this.datab
  },
  components: {
    AddLog, EditLog, test
  }
}
</script>
<style>

</style>



