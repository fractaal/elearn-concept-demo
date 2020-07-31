
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:fractaal/elearn-concept-demo.git master:gh-pages

cd..

echo deployment complete