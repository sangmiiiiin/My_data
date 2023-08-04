# Test : 주어진 점수들의 평균과 평점을 출력하는 함수 생성
def grade(*scores):
    score_sum, score_avg = 0, 0.0                   # sum, avg 값 초기화
    score_list = []                                 # List 초기화
    for score in scores :                           # for문 : scores 길이만큼 score 값을 score_sum에 더해주기
        score_sum += score
    score_avg = round(score_sum / len(scores), 1)   # round 함수 : 소수점 첫번째 자리서 반올림

    if score_avg >= 90 :
        grade = "A"
    elif score_avg >= 80 :
        grade = "B"
    elif score_avg >= 70 :
        grade = "C"
    elif score_avg >= 60 :
        grade = "D"
    else :
        grade = "F"
    
    # return
    score_list.append(score_avg)                    # list 에 append 함수로 추가할땐 하나씩 넣어줘야함 (score_list.append(score_avg, grade) ==> ERROR)
    score_list.append(grade)

    return score_list

print(grade(86, 90, 76))
print(grade(86, 90, 76, 60, 40))
