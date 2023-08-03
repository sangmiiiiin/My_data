# Test : 년/월/일 형식으로 문자열을 입력 받아 10년 후 날짜를 출력하는 코드

# "2020/02/25" >> 키보드 입력은 다 문자열

ss = input("날짜 입력(년/월/일) : ")

ssList = ss.split("/")

print("입력한 날짜의 10년 후 = >", end =" ")
print(str(int(ssList[0]) + 10) + "년", end=" ")
print(ssList[1]+"월", end=" ")
print(ssList[2]+"일")