## 1. 配置文件
fish 首先会读取全局配置文件（如果是 brew 安装的话位于 /usr/local/etc/fish/config.fish), 然后读取你 home 下的 ~/.config/fish/config.fish (如果存在的话)。

就像 .bashrc .zshrc一样，这个文件会在 fish 每次初始化时读取， (包含 login 以及非 login)。



## 2.设置环境变量

fish 没有 export, 而是通过 set -x 命令设置环境变量，例如

```bash
set -x blog "/Volumes/Hao 1/Users/hao/hao_data/blog"  
```

只对当前 shell 设定环境变量，而

```bash
set -Ux blog "/Volumes/Hao 1/Users/hao/hao_data/blog"  
```

则会让环境变量全局生效，即使 shell 重启也会保留。推荐使用 set -Ux 保存常用环境变量， (而不是写到 config.fish 文件) 这样你的 app 就算不是从 shell 启动，也会获得这些变量。

而：

```bash
set -e blog
```

可以删除环境变量。

## 3. **设置 path**

fish 里面的 path 是一个路径数组（fish 独有的数组类型），而不是 : 分隔的路径字符串，你可以在 fish.config 里面设置：

```bash
set PATH /new/path $PATH
```

或者使用变量 fish_user_paths，结合 set -u 永久保存：

```bash
set -U fish_user_paths $fish_user_paths /usr/local/share/npm/bin/
```

fish 会自动添加 fish_user_paths 的内容到 PATH 变量前面，同时确保该变量内容不会重复。