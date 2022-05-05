---
title 工具函数
---

## 前端批量下载并压缩文件

```js
import axios from 'axios'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

// 把路径指向文件转成ArrayBuffer对象
const getFile = url => {
    return new Promise((resolve, reject) => {
        axios({
            method:'get',
            url,
            responseType: 'arraybuffer'
        }).then(data => {
            resolve(data.data)
        }).catch(error => {
            reject(error.toString())
        })
    })
}

    //批量下载方法
    batchDownload() {
        const data = [{url: '下载路径1', name: '文件名1'}, {url: '下载路径2', name: '文件名2'}] // 需要下载打包的路径, 可以是本地相对路径, 也可以是跨域的全路径
        const zip = new JSZip()
        const cache = {}
        const promises = []
        data.forEach(item => {
            const promise = getFile(item.url).then(data => {
                const file_name = item.name // 获取文件名
                // 文件名需要带有文件类型
                zip.file(file_name, data, { binary: true }) // 逐个添加文件
                cache[file_name] = data
            })
            promises.push(promise)
        })
        Promise.all(promises).then(() => {
            zip.generateAsync({type:"blob"}).then(content => { // 生成二进制流
                FileSaver.saveAs(content, "批量下载.zip") // 利用file-saver保存文件
            })
        })
    },
```

## vue3-useState

```ts
import { createNamespacedHelpers, useStore, mapState } from "vuex";
import { computed } from "vue";

export default function (moduleName: string | string[], mapper?: string[]) {
  const newStoreState: any = {};
  const store = useStore();
  if (typeof moduleName === "string" && moduleName.length > 0) {
    const { mapState } = createNamespacedHelpers(moduleName);
    const storeState: any = mapState(mapper as string[]);
    Object.keys(storeState).forEach((fnKey) => {
      newStoreState[fnKey] = computed(
        storeState[fnKey].bind({ $store: store })
      );
    });
  } else {
    const storeState: any = mapState(moduleName as string[]);
    Object.keys(storeState).forEach((fnKey) => {
      newStoreState[fnKey] = computed(
        storeState[fnKey].bind({ $store: store })
      );
    });
  }
  return newStoreState;
}

// 使用

const { entireDepartment, entireRole } = useState([
  "entireDepartment",
  "entireRole",
]);

const { userMenus } = useState("userModule", ["userMenus"]);
```

## vue3-useGetters

```ts
import { createNamespacedHelpers, useStore } from "vuex";
import { computed } from "vue";

export default function (moduleName: string, mapper: string[]) {
  const store = useStore();
  const { mapGetters } = createNamespacedHelpers(moduleName);
  const storeState: any = mapGetters(mapper);
  const newStoreState: any = {};
  Object.keys(storeState).forEach((fnKey) => {
    newStoreState[fnKey] = computed(storeState[fnKey].bind({ $store: store }));
  });

  return newStoreState;
}

// 使用

const { getPageList, getPageListCount } = useGetters("moduleName", [
  "getPageList",
  "getPageListCount",
]);
```
