# 문자열을 입력 받아서 거꾸로 출력하기

inStr = input("문자열을 입력하세요 : ")

count = len(inStr)

outStr = ''

for i in range(0, count) :
    outStr =  outStr + inStr[count - (i+1)]

print("거꾸로 출력 : %s" % outStr)