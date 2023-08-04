# 지역변수, 전역변수

## 함수 선언 부분
def func1():
    a = 10               # 지역변수
    print("func()1에서 a의 값 : %d" % a)

def func2():
    print("func()2에서 a의 값 : %d" % a)

## 전역 변수 선언 부분 ##
a = 20                   # 전역변수


# 메인 코드
func2()                 # 20
func1()                 # 10

### global 예약어 - 지역변수 대신 전역변수를 사용할때 사용

## 함수 선언 부분
def func1():
    global a             # 이 함수 안에서 a는 전역 변수
    a = 10               # 지역변수
    print("func()1에서 a의 값 : %d" % a)

def func2():
    print("func()2에서 a의 값 : %d" % a)

## 전역 변수 선언 부분 ##
a = 20                  # 전역변수


# 메인 코드
func1()                 # 10
func2()                 # 10

## 함수 선언 부분
def func1():
    b = 10               # 지역변수
    print("func()1에서 a의 값 : %d" % b)

#def func2():
    #print("func()2에서 a의 값 : %d" % b)


# 메인 코드
func1()                 # 10
func2()                 # ERROR > 전역 변수가 선언되지 않음