# Test : 로또 추첨하기

# 1부터 45까지의 숫자 중 6개를 중복되지 않게 만들어 출력하는 게임

import random

# 함수 선언
def lottoNumber() :
    return random.randrange(1, 46)          # 끝 수 +1


# 메인 코드
lotto = []
num = 0

print("** 로또 추첨을 시작합니다. ** ")
print()

while True :
    # 1. 번호 추첨
    num = lottoNumber()
    # 2. 중복 체크 -> 추가, 다시 추첨
    if lotto.count(num) == 0 :          # 리스트 안에 num을 세는 함수 count
        lotto.append(num)
    # 3. 6개 추첨이 끝나면 종료
    if len(lotto) >= 6 :
        break

# 4. 정렬해서 출력
lotto.sort()                            # sort() = 오름차순 정렬
print(lotto)