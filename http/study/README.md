# HTTP
# [내블로그](https://congsoony.github.io/http/index.html/)
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
    - post 요청ㅇㄴ message-body부분에 데이터를보냄
    - 특징
        - Binary 데이터 전송가능
        - url 노출안됨 -> url에 데이터를 폼하해야 하는 경우에 적합하지않음
        - 여러개의 파일첨부가능
        - 용량제한 없다.

