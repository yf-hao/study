## 首页

在docs文件夹下面创建一个`README.md`：

```markdown
home: true
heroImage: icon.svg
heroText: Hao's Notes
tagline:  记录教与学中的点点滴滴
actions:
  - text:  开始阅读
    link: /front/
    type: primary
```

## 配置侧边栏

在项目目录下。首先创建customSidebar.js文件：

```bash
mkdir docs/.vuepress/sidebar/

cd docs/.vuepress/sidebar/

touch customSidebar.js
```

之后配置侧边栏：

```shell
export const customSidebar = {
  # 为docs/front下的文件配置目录
	'/front/': [{
		text: '前端技巧',
		children: [{
				text: 'docisfy',
				link: 'docisfy.md',
			},
			{
				text: 'demo',
				link: '/network/在Jekyll中创建一个新的列表页面.md',
			}
		],
		'/reference/': 'heading',
	}, ]
}

```

> 注意：需要在front下创建README.md文件作为该目录的首页



然后打开config.js

```bash
vim .vuepress/config.js
```

引入：

```js
import {customSidebar} from './sidebar/customSiderbar.js'
```

并设置：

```js
export default defineUserConfig({
	theme: defaultTheme({
		sidebar: customSidebar
	}),
})
```



此时 目录如下：

![image-20240805213124198](/images/image-20240805213124198.png)



## 使用插件插入html代码

在.vuepress下创建plungin/customPlugin.js

```js
//该插件简化了 [markdown-it-container](https://github.com/markdown-it/markdown-it-container) 的使用方法
import {
	containerPlugin
} from '@vuepress/plugin-container'
export const customPlugin = [
	[
		containerPlugin({
			type: 'html',
			before: (info) => `<div  style="height:100px;background-color:red;" class="custom-html">`,
			after: () => '</div>'
		})
	]
]
```

在config.js下：
```js
import {
	customPlugin
} from './plugin/customPlugin.js'

export default defineUserConfig({
	plugins: customPlugin,
})

```

最后，在md文件中使用：

```markdown
::: html
<p>This is raw HTML content</p>
:::
```

