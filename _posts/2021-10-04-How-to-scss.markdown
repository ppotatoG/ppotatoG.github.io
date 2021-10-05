---
layout: post
title:  "SCSS 사용하기"
date:   2021-10-04
categories: SCSS
---
안써본 사람은 있어도, 한번만 써본 사람은 없다는 scss 사용하기 ٩( 'ω' )و ٩( 'ω' )و

## ruby 설치하기

scss를 사용하려면 컴파일이 필요하기 때문에 ruby를 설치해야 한다

<a href="https://rubyinstaller.org/downloads" target="_blank">ruby 설치하기</a>

<br>

링크 접속 후 원하는 버전을 선택하여 설치하면 된다

나는 체크된걸로 설치했다

<img style="display:block;" width="800px" height="auto" src="/assets/1004/img01.png">

<br>

웹에서 설치 후 창에서 이것저것 클릭하며 넘기다보면 cmd창이 열리며 아래와 같은 내용이 표시된다

<img style="display:block;" width="800px" height="auto" src="/assets/1004/img02.png">

<br>

cmd창에서 `gem install sass` 입력하면 나머지들은 알아서 설치된다
```
gem install sass
```

<br>

설치가 완료된것 같으면 `ruby -v` 입력해보자

이미지처럼 나온다면 정상적으로 설치가 된거다(❀╹◡╹)
```
ruby -v
```
<img style="display:block;" width="400px" height="auto" src="/assets/1004/img03.png">

---

## vscode에서 scss 자동 컴파일 하기


ruby 가 제대로 설치됐다면, vs code 내 확장 탭에서 'sass'를 검색한 뒤 최상단 두가지를 설치하면 된다

<img style="display:block;" width="800px" height="auto" src="/assets/1004/img04.png>

<br>

186줄에 background: red; 를 추가하면, 아무런 반응이 없다!
<img style="display:block;" width="800px" height="auto" src="/assets/1004/img05.png">

<br>

우측 하단 `Watch Sass`를 클릭해줘야 한다
<img style="display:block;" width="400px" height="auto" src="/assets/1004/img06.png">

<br>

`Watch Sass`를 클릭하면 scss파일 뿐 아니라 css파일과 map이 함께 변한다

<img style="display:block;" width="800px" height="auto" src="/assets/1004/img07.png">

<br>
live를 켜놓으면 바로바로 컴파일되기 때문에 완전 편리하다 (∗❛⌄❛∗)