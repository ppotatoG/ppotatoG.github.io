---
layout: post
title:  "SCSS 사용하기"
date:   2021-10-04
categories: SCSS
---

## ruby 설치하기

scss를 사용하려면 컴파일이 필요하기 때문에 ruby를 설치해야 한다

<a href="
https://rubyinstaller.org/downloads" target="_blank">ruby 설치하기</a>

<br>

링크 접속 후 원하는 버전을 선택하여 설치하면 된다

나는 체크된걸로 설치했다

<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMjI1/MDAxNjMyMzEyMTgzMDgz.qz_fMF1MxalMnZWPkgYA-doTaHfMfgFhoaA69QY5mdsg.Uutb9VXfapLfcqL1N2wUKvUAv_8fNiYqsFnsvqcM45Mg.PNG.thgus2270/image.png?type=w966">

<br>
<br>

웹에서 설치 후 창에서 이것저것 클릭하며 넘기다보면 cmd창이 열리며 아래와 같은 내용이 표시된다

너무 귀여워...ㅜ

<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMTQy/MDAxNjMyMzEyNDAyNzky.S-EZVUFF-rTfQmVvfTKW9WXTx-n87iYVNwUNQRrgMP4g.Tv_A5y3-UTvqDDOfeawbrlDy8dsZFWC0jE_oVAKDMtkg.PNG.thgus2270/image.png?type=w966">

<br>
<br>

cmd창에서 `gem install sass` 입력하면 나머지들은 알아서 설치된다
```
gem install sass
```

<br>
<br>

설치가 완료된것 같으면 `ruby -v` 입력해보자

이미지처럼 나온다면 정상적으로 설치가 된거다(❀╹◡╹)
```
ruby -v
```
<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMjcx/MDAxNjMyMzEyNzA2ODE3.9d12R-0SYYF7EDXVo0LLDkinDz_OtjjuWn99a0MA7Zog.iYAFFyDtshB7qSwRlBlBny-QDe4d_Y1KeqO54vx34DEg.PNG.thgus2270/image.png?type=w966">

---

## vscode에서 scss 자동 컴파일 하기


ruby 가 제대로 설치됐다면, vs code 내 확장 탭에서 'sass'를 검색한 뒤 최상단 두가지를 설치하면 된다

<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMTY2/MDAxNjMyMzEzMTM4NDU4.D2ymsARJ_J33-jcPpTSS7rwSjAoRso3Z7HZxSJ7lj4Mg.ml4BUdskTP4vAMmMcUimuble1t640n0ESK1X8txFI1Yg.PNG.thgus2270/image.png?type=w966">

<br>
<br>

186줄에 background: red; 를 추가하면, 아무런 반응이 없다!
<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMjIg/MDAxNjMyMzEzMjk3ODcz.JxQHSo6c5GiHW0JrX2-pfPNb6Q1tbLt8Y_HzrnOhCgUg._xFw1FMMnpDayJlWqEkCv891cYfB_TR3IMB6PkJlzsog.PNG.thgus2270/image.png?type=w966">

<br>
<br>

우측 하단 `Watch Sass`를 클릭해줘야 한다
<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMzAg/MDAxNjMyMzEzMzY4MjEy.TPPJmJE29FgaOWDlVx-KOEMtInn9pDHMT8IvwLxPsVkg.i6dZB67EvyWZdQ1QC03bnyVAS2NRii_w85q8KjVmH5gg.PNG.thgus2270/image.png?type=w966">

<br>
<br>

`Watch Sass`를 클릭하면 scss파일 뿐 아니라 css파일과 map이 함께 변한다

live를 켜놓으면 바로바로 되기때문에 완전 편리하다!
<img width="800px" height="auto"
 src="https://postfiles.pstatic.net/MjAyMTA5MjJfMjI3/MDAxNjMyMzEzNDEwMzc3.hcKizYmP45ZyfsFeN9jwhQaOKfUojWrbC1eJBBtfYNEg.x_i8KwtZSQsoWRFwZ72jK3XzDrQUHvcA0jRoM0J5x_Yg.PNG.thgus2270/image.png?type=w966">