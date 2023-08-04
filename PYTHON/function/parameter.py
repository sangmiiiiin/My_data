### 함수의 매개변수의 전달 방법

## 1) 매개변수의 개수를 지정해 전달하는 방법 

# 숫자 2개의 합과 숫자 3개의 합을 구하는 코드

# 함수 선언
def func1(v1, v2) :
    return v1 + v2

def func2(v1, v2, v3) :
    return v1 + v2 + v3

# 메인코드

hap1, hap2 = 0, 0

hap1 = func1(10, 20)            # func1 에 두개의 매개변수를 가져와 함수 실행
hap2 = func2(10, 20 ,30)        # func2 에 세개의 매개변수를 가져와 함수 실행

print(hap1)
print(hap2)

## 2) 매개변수에 기본값을 설정해 놓고 전달하는 방법

# 함수 선언

def func2(v1, v2, v3=0) :       # 숫자 두개와 기본값 지정(두 값만 넣어도 오류 x 정상 실행)     
    return v1 + v2 + v3

# 메인코드

hap1, hap2 = 0, 0

hap1 = func1(10, 20)            
hap2 = func2(10, 20 ,30)        

print(hap1)
print(hap2)


## 3) 매개변수의 개수를 지정하지 않고 전달하는 방법(가변매개변수)

# *매개변수 --> 튜플형식

# 함수 선언
def func(*para) :
    print(para)
    print(type(para))
    result = 0
    for num in para :
        result += num
    return result

# 메인 코드
hap = 0 

hap = func(10, 20)
print(hap)

hap = func(10, 20, 30)
print(hap)

hap = func(10, 20, 30, 40, 50, 60, 70, 80, 90)
print(hap)

# **매개변수 --> 딕셔너리 형식의 매개변수 : 키 = 값

# 함수 선언
def dic_func(**para) :
    print(para)
    print(type(para))
    for k, v in para.items():
        print("%s -- > %d" % (k, v))
# 메인 코드
dic_func(트와이스=9, 소녀시대=7, 걸스데이=4, 블랙핑크=4) # 키=값 양식 지켜서 사용


