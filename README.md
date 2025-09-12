# mall

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 切换到构建目录
cd dist

# 初始化 Git 并强制推送到 gh-pages 分支
git init
git add .
git commit -m "手动部署"
git branch -M gh-pages
git remote add origin https://github.com/ping888/pingMall.git
git push -f origin gh-pages
