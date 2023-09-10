const pool = require('./pool');

const boardModel = {
    // 게시물 목록 조회
    async find(){
        try{
            const sql = `
            select board2.*, user.name
            from board2
            left join user on board2.userId = user.id
            `;
            const [ result ] = await pool.query(sql);
            return result;
        }catch(err){
            throw new Error('DB Error', { cause: err });
        }
    },
    async findById(id){
        try{
            const sql = `
            select temp.*, user.name as commentUserName from (select
                board2.*,
                user.name,
                user.email,
                user.profile,
                comment.id as commentId,
                comment.userId as commentUserId,
                comment.content as commentContent,
                DATE_FORMAT(comment.createdAt, '%Y-%M-%D') as commentCreatedAt
            from board2
            left join user on board2.userId = user.id
            left join board_comment2 comment on board2.id = comment.boardId
            where board2.id = ?) temp
          left join user on temp.commentUserId = user.id
          `;
          const [ result ] = await pool.query(sql, [id]);
          const article = result[0];
          let comments = [];
          if(article.commentId){
            comments = result.map(item => ({
                id: item.commentId,
                userId: item.commentUserId,
                userName: item.commentUserName,
                content: item.commentContent,
                createAt: item.commentCreatedAt
            }));
          }
          article.comments = comments;
          console.log(article);
          return article;
        }catch(err){
            throw new Error('DB Error', { cause: err });
        }
    },
    async create(article){
        try{
            const sql = `insert into board2 set ?`;
            const [ result ] = await pool.query(sql, [article]);
            return result.insertId;
        }catch(err){
            throw new Error('DB Error', { cause: err });
        }
    },
    async update(id, article){
        try{
            const sql = `update board2 set ? where id =?`;
            const [ result ] = await pool.query(sql, [article, id]);
            return result.affectedRows;
        }catch(err){
            throw new Error('DB Error', { cause: err });
        }
    },
    async delete(id, conn = pool){
        try{
            const sql = `delete from board2 where id = ?`;
            const [ result ] = await conn.query(sql, [id]);
            return result.affectedRows;
        }catch(err){
            throw new Error('DB Error', { cause: err });
        }
    }
};

module.exports = boardModel;