rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:heycn/tree-animation-website.git &&
git push -f -u origin master &&
cd - &&
echo -e "\033[36m部署完毕 \033[0m"
echo -e "\033[36m仓库地址: https://github.com/heycn/tree-animation-website \033[0m"
echo -e "\033[36m预览地址: https://heycn.github.io/tree-animation-website \033[0m"