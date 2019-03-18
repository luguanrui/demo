import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    dataList: {
      default() {
        return []
      }
    }
  },
  data() {
    return {
      layout: 'total,prev, pager, next',
      currentPage: 1,   // 当前页
      pageSize: 5,// 每页多少条数据

      chooseData: {}, // 当前选择
      headerCellStyle: {
        backgroundColor: '#f5f7fa',
        lineHeight: '30px',
        padding: '5px 0'
      },
    }
  },
  computed: {
    ...mapGetters(['show']),
    // 分页
    computedData() {
      return this.dataList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  methods: {
    ...mapActions(['setShow']),
    // 当前页
    handleCurrentChange(num) {
      this.currentPage = num
      this.$emit('handleCurrentChange', num)
    },
    // 上一页
    handlePrev(num) {
      this.currentPage = num
      this.$emit('handlePrev', num)
    },
    // 下一页
    handleNext(num) {
      this.currentPage = num
      this.$emit('handleNext', num)
    },
    // 关闭弹窗
    handleClose() {
      this.setShow(false)
    },
    // 选择
    handleChoose(val) {
      this.chooseData = val
    },
    // 确定选择
    handleConfirmChoose() {
      // 是否选择
      if (Object.keys(this.chooseData).length > 0) {
        this.setShow(false)
        // 将选择的到父级组件中
        this.$emit('chooseData', this.chooseData)
        // 清空选择
        this.chooseData = {}
      } else {
        this.$Message.error('请选择优惠活动')
        return
      }
    },
  }
}
