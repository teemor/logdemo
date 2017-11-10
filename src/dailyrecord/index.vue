<template>
  <div id="main">
    <el-table :data="datab"
              width="100%"
              stripe
              border
              ref="multipleTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期"
                       width="350"
                       prop="date">
      </el-table-column>
      <el-table-column label="人员"
                       width="250"
                       prop="name"></el-table-column>
      <el-table-column label="标题"
                       prop="title"
                       width="840">

      </el-table-column>
      <el-table-column label="操作"
                       width="407">

        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>

      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datab: [{
        date: '2017-11-10',
        name: '王小虎',
        title: '我还好吗？'
      },
      {
        date: '2017-11-10',
        name: 'hh',
        title: 'rwer'
      },
      {
        date: '2017-11-10',
        name: 'hh',
        title: 'rwer'
      }]
    }
  }
}
</script>
<style>
</style>



