1. 탐색 기본명령어
pwd - 현재 작업 디렉토리를 표시
$ pwd
/home/vagrant/test

cd -  디렉토리 변경
[vagrant@host1 ~]$ cd test
[vagrant@host1 test]$

ls - 파일 리스트 보기
$ ls 
a.txt

file - 지정된 파일의 종류(타입)을 확인하는 명령어
$ file a.txt
a.txt: ASCII text

less -  파일의 내용을 한 화면에 보여주는 명령어 입니다 

$ less -N a.txt
1 abcdefg
2 hijklmn
3 opqrtsu

2. 파일과 디렉토리 조작 명령어

cp -  파일, 디렉토리를 복사 명령어
사용법 : cp [복사할 파일이름] [생성할 이름]
$ cp a.txt b.txt

mv - move의 줄임말로 파일이나 디렉토리를 이동시키는 명령어
사용법 :  mv [옵션][이동 할 파일][이동 될 위치]
[vagrant@host1 test]$ mv b.txt ..

mkdir - mkdir 명령어는 Make Directory의 약자로 디렉토리 생성할 경우 사용되는 명령어
사용법 : mkdir [옵션][생성 할 디렉토리]
[vagrant@host1 ~]$ mkdir test2

rm - rm 명령어는 remove의 약자로 파일 혹은 디렉토리를 삭제하는 명령어
사용법 : rm [옵션] [삭제파일 or 삭제 디렉토리]
[vagrant@host1 ~]$ rm -r test2

ln - ln 명령어는 Link의 줄임말로 리눅스에서 링크파일을 만드는 명령어(윈도우의 바로가기 라고생각하면 편함)
사용법 : ln [선택파일][링크생성이름]
[vagrant@host1 test]$ ln a.txt ../abc

3. 명령어를 다루는 명령어

type : 해당 명령어가 쉘에 내장된 명령어인지, 외부명령어인지, 앨리어스된 명령어 인지 출력
사용법 : file [명령어]
$ type ls
ls is aliased to 'ls --color=auto'

which - which는 특정명령어의 위치를 찾아주는 명령어이다.
사용법 : which [명령어]
$ which ls
alias ls = 'ls --color=auto'
	/usr/bin/ls
man -  man 명령어(유틸리티)를 사용하여 각종 명령어, 프로그램의 사용법(매뉴얼)을 확인한다
사용법 : man [명령어]
man rm
해당 사용법이 영어로 주구장창나옴

apropos - 검색어와 관련있는 명령어를 설명과 함께 출력하는 명령어 mam -k 명령어와 동일
사용법 : apropos [검색어]

info - 명령어의 사용방법 옵션등을 나타냄
사용법 : info [명령어]
$ info ls

whatis - 명령어에 대한 간략한 기능을 출력해주는 명령어
사용법 : whatis [명령어]
$ whatis ls

alias -  alias는 사용자가 명령어를 다른 이름으로 바꿔서 사용할 수 있는 쉘 내부 명령어를 말합니다. 
사용법 alias 명령어별칭='명령어'
$ alias la='ls -A'
