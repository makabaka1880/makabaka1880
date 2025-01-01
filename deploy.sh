#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# # 生成静态文件
# yarn docs:build

cd ~/blog/
# 生成静态文件
sudo npm run docs:build --allow-root --unsafe-perm=true
# 进入生成的文件夹
cd src/.vuepress/dist
touch CNAME # Custom Domain
echo "makabaka1880.xyz" > CNAME # Write custom domain
git init
git remote add origin git@github.com:makabaka1880/makabaka1880.git
git add -A
echo "ready to deploy"
git commit -m 'deploy'
git branch deploy
git checkout deploy

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f origin deploy

cd -