<template>
  <body>
  <header>
    <h3>业务系统</h3>
  </header>
  <nav>
  <div class="hello">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      @node-click = "view"
      ref="tree">
    </el-tree>
  </div>
  </nav>
  <section>
    <h1 >业务系统详细信息</h1>
      <Hello :dataChange = 'menuId'></Hello>
  </section>
  </body>
</template>
<style>
  header{
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
    margin: 0px;
  }
  nav{
    line-height:30px;
    background-color:#eeeeee;
    height:80%;
    width:30%;
    float:left;
    margin:0px;
    padding: 0px;
  }
  section{
    width:calc(100% - 30%);
    float:left;
    padding:0px;
    margin:0px;
  }
  h{
    float: top;
  }
</style>

<script>import Hello from '@/components/HelloWorld'
export default {
  name: 'myWeb',
  components: {
    Hello
  },
  data () {
    return {
      menuId: '11-13-15',
      filterText: '',
      data: [{
        id: '11-13-15',
        label: '江西移动零售库存中心',
        children: [{
          id: '11-13-15-10',
          label: '号卡模块',
          children: [{
            id: '11-13-15-10-10',
            label: '号卡类'
          }, {
            id: '11-13-15-10-11',
            label: '基础功能'
          }]
        }]
      }, {
        id: '11-13-16',
        label: '客户交互中心',
        children: [{
          id: '11-13-16-10',
          label: '域管理'
        }, {
          id: '11-13-16-11',
          label: '通道管理'
        }]
      }, {
        id: '11-13-17',
        label: '个人网台',
        children: [{
          id: '11-13-17-10',
          label: '查询服务'
        }, {
          id: '11-13-17-11',
          label: '充值'
        }]
      }

      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    view (value, data) {
      if (value.id) {
        this.menuId = value.id
        sessionStorage.setItem('ID', value.id)
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  component: {
  }
}
</script>
