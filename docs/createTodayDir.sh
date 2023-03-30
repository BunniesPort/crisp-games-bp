BASE="./"
TODAY=`date "+%Y%m%d"`

# ディレクトリのコピー
cp -r ${BASE}_template/ ${BASE}${TODAY}

# run watch
npm run watch_games

# browser
open http://localhost:4000?${TODAY}

# vscode
code ${BASE}${TODAY}/main.js


# echo `dirname $0`