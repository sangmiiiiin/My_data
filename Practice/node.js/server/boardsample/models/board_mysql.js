var b1 = {
    _id: 0,
    title: '첫번째 게시물',
    writer: '김철수',
    content: '첫번째 게시물 입니다.',
    view: 0,
    regdate: '2023-09-06 23:06:12'
};

var b2 = {
    _id: 1,
    title: '두번째 게시물',
    writer: '이영희',
    content: '두번째 게시물 입니다.',
    view: 0,
    regdate: '2023-09-06 23:07:33'
}

var boardList = [b1, b2];

module.exports = {
    // 게시물 목록 조회
    list: function(){

    },
    // 게시물 상세 조회
    show: function(no){

    },
    // 게시물 등록
    create: function(article){

    },
    // 게시물 삭제
    remove: function(no){
        
    }
};
