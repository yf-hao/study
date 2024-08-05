import comp from "/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/front/demo.html.vue"
const data = JSON.parse("{\"path\":\"/front/demo.html\",\"title\":\"提交到github\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"front/demo.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
