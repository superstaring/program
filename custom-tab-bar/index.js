Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    "list": [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/article/article",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "文章页"
      },
      {
        "pagePath": "/pages/list/list",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "列表页"
      },
      {
        "pagePath": "/pages/logs/logs",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "日志"
      },
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})