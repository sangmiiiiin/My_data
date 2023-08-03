# 문자열 정렬하기, 채우기
ss = '파이썬'
print(ss.center(30))        #              파이썬              

print(ss.center(30, '-'))   # -------------파이썬--------------

print(ss.ljust(30))         # 파이썬                           

print(ss.rjust(30))         #                            파이썬

print(ss.zfill(30))         # 000000000000000000000000000파이썬

mm = '3'
print(mm.zfill(2))          # 03

dd = '2'
print(dd.zfill(2))          # 02

# 문자열 구성 파악하기

print('1234'.isdigit())     # True

a = '1234'
print(a.isdigit())          # True

a = '1234abc'
print(a.isdigit())          # false

a = 'abcd'
print(a.isalpha())          # True

a = '파이썬'
print(a.isalpha())          # True

a = '123파이썬'
print(a.isalnum())          # True   ===> 아이디 비밀번호 유효성 검사시 쓰일수 있겠다.

a = 'abcd'
print(a.islower())          # True

a = 'ABCD'
print(a.isupper())          # True

a = '     '
print(a.isspace())          # True

