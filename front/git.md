## 配置git代理访问github

```bash
git config --global http.proxy 127.0.0.1:4780
git config --global https.proxy 127.0.0.1:4780
```

这就设置完了，可以再查看下

```shell
git config --global --get https.proxy
git config --global --get http.proxy
```

