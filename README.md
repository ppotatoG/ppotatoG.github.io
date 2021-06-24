# git-story-template


## 개요

[GIT-STORY](https://github.com/git-story/git-story)가 사용하는 블로그 기본 템플릿입니다.

이용자들은 블로그 생성시 무조건 해당 템플릿을 사용해 레포지토리를 만들게 됩니다.

## 테마

테마 레포지토리는 [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)을 통해 themes 폴더 안에서 관리됩니다.

사용할 테마를 `themes` 폴더에 추가하고 `_config.yml`을 수정한 뒤 빌드하면 테마가 적용됩니다.

사용자가 직접 커스텀 테마를 적용할 수 있고, 플랫폼에서 제공하는 테마 목록은 [hexo-themes](https://github.com/git-story/hexo-themes) 레포지토리를 확인하세요.

## 빌드

```shell
npm run build
```

위 명령어를 사용하여 빌드합니다.

`meta-data.json`은 헥소 공식 파일이 아니지만, GIT-STORY에서 사용하는 데이터 파일입니다.

`docs` 폴더에 정적 웹 파일이 생성되며, github pages는 해당 폴더를 참조합니다.

새로운 페이지가 커밋되면, Actions가 자동으로 빌드해 커밋합니다.
