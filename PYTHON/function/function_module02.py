# 사용자 정의 함수 : 사칙연산 calc()
# calc(100, 200, '+')



# 함수 선언
def calc(v1, v2, op):                                   # input
    result = 0
    if op == '+':
        result = v1 + v2
    elif op == '-':
        result = v1 - v2
    elif op == '*':
        result = v1 * v2
    elif op == '/':
        result = v1 / v2
    else :                                              # ERROR 처리
        print("연산자를 올바르게 입력해 주세요 (+,-,*,/)")

    return result                                       # return
        

# 메인 코드
res1, res2 = 0, 0
res1 = calc(100, 200, '+')
res2 = calc(100, 200, '-')
res3 = calc(100, 200, '*')
res4 = calc(100, 200, '/')
res5 = calc(10, 20, '&')

print(res1, res2)
