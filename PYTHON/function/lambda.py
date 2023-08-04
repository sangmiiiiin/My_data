## 람다 함수

# 함수의 이름 없이 사용할 수 있는 익명의 함수

# 일반 함수
def f(x, y):
    return x + y

print(f(1, 4))


# 람다 함수 (파이썬에만 있다)
f2 = lambda x, y : x + y

print(f2(2, 5))

# 매개변수를 지정하지 않으면 기본값으로 설정, 매개변수를 넘겨주면 기본값 무시

f3 = lambda x=10, y=20 : x + y
print(f3())
print(f3(100, 200))

# 리스트
myList = [1, 2, 3, 4, 5]
add10 = lambda num : num+10
print(add10(myList[0]))                 # 11

# 리스트에 모두 10을 더하는 코드 - 람다 함수와 map() 함수 사용
myList = [1, 2, 3, 4, 5]
add10 = lambda num : num+10
print(list(map(add10, myList)))         # map 함수는 for문 보다 간단하게 반복 가능

# 두 리스트의 각 자릿수를 합쳐서 새로운 리스트를 생성
list1 = [1, 2, 3, 4, 5]
list2 = [10, 20, 30, 40, 50]
adder = lambda n1, n2 : n1+n2
print(list(map(adder, list1, list2)))

