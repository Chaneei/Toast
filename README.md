# 🍞 ISSAC TOAST

<p align='center'>
<img width="80%" src="https://user-images.githubusercontent.com/96166013/190034457-8ef3b3e6-ce44-48a8-bc1b-4cd962abaaf1.gif"/>
</p>

<p align='center'>
  <a href="https://toast-picker.herokuapp.com/" target="_blanket">Go to Website</a>
</p>

### 현재 Heroku Free버전으로 Dyno 업그레이드예정!!!

## 🛠 Using Skill

<p align='center'>
    <img src="https://img.shields.io/badge/React-blue?logo=React"/>
    <img src="https://img.shields.io/badge/react_dom-blueviolet?logo=ReactOS"/>
    <img src="https://img.shields.io/badge/react_router_dom-critical?logo=React Table"/>
    <img src="https://img.shields.io/badge/node.js-green?logo=Node.js"/>
    <img src="https://img.shields.io/badge/mongoDB-green?logo=MongoDB"/>
    <img src="https://img.shields.io/badge/express.js-black?logo=express"/>
    <img src="https://img.shields.io/badge/sass-pink?logo=sass"/>
</p>

## 🔥 Introducing Project
#### 🍞 이삭메뉴 골라담아보기!
🔓 DB관리는 mongoDB로, Backend는 node.js로! Frontend는 React로! 

#### 💖 최애 메뉴를 담아보자
평소 즐겨먹는 이삭토스트의 메뉴들을 나만의 관심목록에 담는 토이프로젝트를 진행해보았습니다.
<br/>
mongoDB에 저장된 데이터를 해당 탭에 따라 불러오고 즐겨먹는 메뉴를 즐겨찾기에 지정하고 삭제할 수 있게 만들어보았습니다.

## ✔ 제작 과정
<a href="https://berry-aries-40a.notion.site/Toy-Project-1-e25fef26a19c4d299381f3c903adea89" target="_blanket">Toast #1</a>
<br/>
<a href="https://berry-aries-40a.notion.site/Toy-Project-2-e3de4bbc67d24303961b9612b084488c" target="_blanket">Toast #2</a>
<br/>
<a href="https://berry-aries-40a.notion.site/Toy-Project-3-2d7b63542aeb4a28abb8054fb279e9f7" target="_blanket">Toast #3</a>
<br/>
<a href="https://berry-aries-40a.notion.site/Toy-Project-4-ed2dcc4428184115b33eeb6ce0cd5073" target="_blanket">Toast #4</a>
<br/>
<a href="https://berry-aries-40a.notion.site/Toy-Project-5-a3d697da35b84d67afda3a59a7a3ca23" target="_blanket">Toast #5</a>


## 📁 폴더 구조
- client : FrontEnd로 화면 구성을 위해 pages, 공통 components로 구성되어있습니다.
- api : BackEnd로 index.js 와 model, route로 구성되어있습니다.

## 💎 How To Use?

#### start

```
//Back
/cd api
npm install
npm start

//Front
/cd client
npm install
npm start
```

#### build

```
/cd client
npm run build
```

#### deploy
use herokuapp
```
heroku login
git init
heroku git:remote -a <app-name>
git add .
git commit -am "my first commit"
git push heroku master
```



