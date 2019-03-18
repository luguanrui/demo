## 前端分页

### 业务场景

选择商品之后，可以通过选择商家自定的优惠活动来为报名者减免优惠

### 需求

1. 由于优惠活动并不多，后端返回全部的优惠活动，由前端实现分页，每页5条数据
2. 要求，点击 `选择优惠活动` 按钮，调用后台接口，重新获取一下优惠活动
3. 已经选择的优惠活动，不能重复选择，实现效果为每次选择一个优惠活动，优惠活动列表中就减少一个活动
4. 已选择的优惠活动可以删除

### 具体实现
mockjs+vuex+elementUI+vue-router


### A&Q

elementUI的dialog组件，使用visible属性绑定的变量位于vuex的store内，使用.sync不会正常工作，还会报错[Vue warn]: Computed property "xxx" was assigned to but it has no setter.此时需要去除 .sync 修饰符
