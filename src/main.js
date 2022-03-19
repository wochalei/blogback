import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/icon/iconfont.css'
import '../src/assets/icon/index/iconfont.css'
import './style/common/index.scss'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import './http/index'
import { io } from "socket.io-client";
import './plugins/element.js'
const socket = io();

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VMdPreview.use(vuepressTheme, {
  Prism,
});
createApp(App).use(router).use(VueMarkdownEditor).use(VMdPreview).mount('#app')
export {
   socket
}