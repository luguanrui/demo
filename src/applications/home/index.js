import { getData } from '@/api/index'
import dialogList from '@/components/dialog-list/index.vue'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dataList: [],
      chooseList: [],
      headerCellStyle: {
        backgroundColor: '#f5f7fa',
        lineHeight: '30px',
        padding: '5px 0'
      },
    }
  },
  components: {
    dialogList
  },
  created() {

  },
  methods: {
    ...mapActions(['setShow']),
    // 点击添加
    handleClick() {
      this._getData()
      this.setShow(true)
    },
    // 删除选择的list
    handleDelete(id) {
      this.chooseList.map((v, i) => {
        if (v.id === id) {
          this.chooseList.splice(i, 1)
        }
      })
    },
    // 获取list
    _getData() {
      getData().then(res => {
        let {code, rs} = res.data
        if (code === 200 && rs.length > 0) {
          // 默认this.dataList是存在
          this.dataList = rs
          if (this.chooseList.length > 0) {
            // 遍历已选择的列表
            for (let i = 0; i < this.chooseList.length; i++) {
              // 遍历数据列表
              for (let j = 0; j < this.dataList.length; j++) {
                // 过滤数据列表中的id与已选择的列表相同id的数据
                this.dataList = this.dataList.filter(v => {
                  return v.id !== this.chooseList[i].id
                })
              }
            }
          }
        }
      })
    },
    // 选择列表
    chooseData(val) {
      this.chooseList.push(val)
    }
  }
}
