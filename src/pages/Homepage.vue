<!-- @format -->

<template>
  <section class="page-module explore-more">
    <div class="module-content">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="back-tip">
            <h3>汪小鱼的主页</h3>
          </div>
          <el-table :data="tableData" border stripe highlight-current-row>
            <el-table-column prop="name" label="项目名称" width="120">
            </el-table-column>
            <el-table-column prop="address" label="在线地址" width="210">
              <template slot-scope="scope">
                <a :href="scope.row.address"
                  target="_blank" rel="noreferrer noopener">
                  {{ scope.row.address }}
                </a>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="作品描述"
              show-overflow-tooltip min-width="160">
              <template slot-scope="scope">
                <span v-html="scope.row.description"></span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="上线日期" width="100">
            </el-table-column>
            <el-table-column label="操作" width="180">
              <span>-</span>
            </el-table-column>
          </el-table>

        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  props: {},
  data() {
    return {
      title: '发现更多',
      description:
        '汪小鱼的个人空间',
      tableData: [
        {
          name: '博客地址',
          address: 'http://blog.coderw.cn/',
          description:
            '汪小鱼的个人空间',
          date: '2019-01-15'
        }
      ],
      currentPage: 1,
      currentRowIndex: -1
    }
  },

  components: {

  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  filters: {},

  methods: {
    handleSizeChange() {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      // console.log(`当前页: ${val}`)
    }
    /* ----------------------------On Click Event---------------------------- */
  }
}
</script>

<style lang="scss">
.explore-more {
  width: 100%;
  max-width: 56rem;
  height: 100vh;
  @include flex-box-center(row);
  margin: 2 * $size-factor auto;
  .module-content {
    width: 100%;
    .back-tip {
      margin: 2 * $size-factor auto;
    }
    .table-operate {
      margin-top: 15px;
    }
    .operation-area {
      @include flex-box-center(row);
    }
    .heart {
      content: '';
      display: block;
      width: 20px;
      min-height: 16px;
      position: relative;
      transform-origin: 50% 50% 0;
    }
    .heart:before {
      content: '';
      display: block;
      width: 10px;
      height: 16px;
      position: absolute;
      top: 0;
      left: 10px;
      border-radius: 10px 10px 0 0;
      background: #f05b72;
      transform: rotateZ(-45deg);
      transform-origin: 0 100% 0;
    }
    .heart:after {
      content: '';
      display: block;
      width: 10px;
      height: 16px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px 10px 0 0;
      background: #f05b72;
      transform: rotateZ(45deg);
      transform-origin: 100% 100% 0;
    }
    .heart-link {
      display: inline-block;
      margin-left: 15px;
      padding: 10px 20px;
      border-radius: 4px;
      background-color: $brand;
      vertical-align: top;
    }
  }
}

@media (max-width: 768px) {
  .explore-more {
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: block;
  }
}
</style>
