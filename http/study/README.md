# HTTP
# [내블로그](https://congsoony.github.io/http/index)
- http요청
    - 웹브라우저가 웹서버에 요청


- 네트워킹
    - Connection-Oriented(연결 지향) : 연결후 통신 ->TCP(데이터 전송 신뢰성 확보) -> http1,2 는 TCP
        - Statueful : 한번 연결한후 연결 끊을때까지 여러번 통신 ->적은 수의 클라이언트에 대응
        - Statless : 요청때마다 연결 매번 연결 
    - Connectionless(비연결) : 연결없이/데이터 전송 ->UDP(데이터 전송 신뢰성 X -> 별도의 처리 필요) ->http3 은 UDP
    - Proxy 서버 : client 와 server 중간에서 통신을 중재
        - cache
            - 응답 데이터를 보관 -> 같은 자원을 요청할때 보관된 데이터를 즉시 전달 -> 네트워크 오버헤드를 줄이단 -> 응답속도 개선
            - 모니터링 -> 요청/응답 내용 값시 ->보안강화


# http method
- POST 
    - 헤더 
        - 
    - post 요청 message-body부분에 데이터를보냄
    - 특징
        - Binary 데이터 전송가능
        - url 노출안됨 -> url에 데이터를 폼하해야 하는 경우에 적합하지않음
        - 여러개의 파일첨부가능
        - 용량제한 없다.


# CSS 사용법
- 테두리(border)

    - padding : 10px 20px 30px 40px  순서 시계방향

- Image 종류 
    - Raster 폰트 -> 픽셀단위로 글자를 만든다.
    - pixel 출력속도가 빠름
    - 폰트크기에 따라 각문자를 만듦
    - 정해진 크기보다 더크게 출력하나만 단순히 각 픽셀의 크기를 느리기 때문에 계단현상 발생
    - 이미지의 복잡도와 상관없이 픽셀크기만 같다
    


# javascript
- docuemnt :  도구를 다루는 기능이있음
    - getElementById(태그아이디)
 ->태그객체가 리턴
    - getElementByTagName(태그이름) -> 태그목록이 리턴
    - createElement(태그이름) -> 태그객체를 생성해서 리턴
    - setAttribute(속성명,속성값) : 태그의 속성 값을 설정