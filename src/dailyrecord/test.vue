<template>
<div>
<p  style="text-align:center">
  
<el-button type="" @click="submit">提交</el-button>
</p>
</div>
</template>
<script>
export default {
data: function (){
return{
  gg: 'listen to my boy'
 }
},
mounted: function () {
},
methods: {
 // 提交表单
submit: function () {
  this.$emit('submit', this.gg)}
}
}
</script>
