export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/front/", { loader: () => import(/* webpackChunkName: "front_index.html" */"/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/front/index.html.js"), meta: {"title":""} }],
  ["/front/VuePress.html", { loader: () => import(/* webpackChunkName: "front_VuePress.html" */"/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/front/VuePress.html.js"), meta: {"title":"## 配置侧边栏"} }],
  ["/front/docsify.html", { loader: () => import(/* webpackChunkName: "front_docsify.html" */"/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/front/docsify.html.js"), meta: {"title":"提交到github"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Volumes/Hao 1/Users/hao/hao_data/blog/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
