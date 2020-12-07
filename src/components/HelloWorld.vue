
<template>
  <div class="hello">
    <el-table
      v-loading="loading"
      element-loading-text="道友请留步，稍等几秒~~~"
      element-loading-spinner="el-icon-loading"
      :data="busiData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="kbp"
        label="业务系统编号"
        >
      </el-table-column>
      <el-table-column
        prop="busiName"
        label="业务系统名称"
        >
      </el-table-column>
      <el-table-column
        prop="busiContacts"
        label="业务责任人"
        >
      </el-table-column>
      <el-table-column
        prop="status"
        label="业务状态"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="selectMessage(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="updateMessage(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<router-link to="/">to myWeb</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'BusiClass',
  props: ['dataChange'],
  data () {
    return {
      busiData: [],
      loading: false
    }
  },
  methods: {
    selectMessage (row) {
      console.log(row.kbp)
    },
    updateMessage (row) {
      console.log(row.kbp)
    },
    getdata (newValue) {
      this.$axios.get('http://127.0.0.1:8088/busiClass/info', {
        params: {
          KBP: newValue
        }
      }).then(
        resp => {
          console.log(resp.data)
          this.busiData = resp.data
        }).catch(function (error) {
        console.log(error)
      })
    }
  },
  watch: {
    dataChange: function (newValue, oldValue) {
      this.getdata(newValue)
      this.loading = true
    },
    busiData: function () {
      this.loading = false
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.el-table__row td, .el-table__row th{
    line-height: 30px;
    height: 25px;
     padding: 3px;
  }
</style>
