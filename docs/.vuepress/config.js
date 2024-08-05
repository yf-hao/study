import {
	viteBundler
} from '@vuepress/bundler-vite'
import {
	defaultTheme
} from '@vuepress/theme-default'
import {
	defineUserConfig
} from 'vuepress'
import {customSidebar} from './sidebar/customSiderbar.js'
export default defineUserConfig({
	dest: 'site',
	base: '/study/site/',
	title: "Hao's Note",
	bundler: viteBundler(),
	theme: defaultTheme({
		// default theme config
		navbar: [{
			text: 'Home',
			link: '/',
		}, ],
		sidebarDepth: 2,
		sidebar: customSidebar
	}),
})
