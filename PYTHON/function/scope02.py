### 반환값이 없는 함수

## 함수 선언 부분
def func1() :
    result = 100
    return result

def func2() :
    print("반환값이 없는 함수 실행")

## 전역 변수 선언 부분
hap = 0

## 메인 코드
hap = func1()
print("func1() 에서 돌려준 값 ==> %d" %hap)
func2()

### 반환값이 여러개인 함수 - 리스트로 반환 

# 함수 선언 부분
def multi(v1, v2) :
    retList = []        # 반환할 리스트
    res1 = v1 + v2
    res2 = v1 - v2
    res3 = v1 * v2
    res4 = v1 / v2
    retList.append(res1)
    retList.append(res2)
    retList.append(res3)
    retList.append(res4)
    return retList

# 메인 코드
myList = []
myList = multi(100, 200)

print("multi()에서 돌려준 값 => %d, %d, %d, %d" % (myList[0], myList[1], myList[2], myList[3]))  # 인덱싱!