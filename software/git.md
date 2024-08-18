## 使用 git config 设置代理

使用git config命令来配置代理。有两个关键的配置项需要设置，分别是http和https。

```bash
git config --global https.proxy 127.0.0.1:1087

git config --global http.proxy 127.0.0.1:1087
```

请注意，如果您只想在当前项目中设置代理而不是全局设置，可以去掉`--global`选项。



可以使用以下命令验证代理配置是否生效：

```bash
git config --get http.proxy

git config --get https.proxy
```

取消代理设置

```bash
git config --global --unset http.proxy

git config --global --unset https.proxy
```



## 提交

```bash
> git add . && git commit -m $(date +%Y-%m-%d)
> git push 
```

