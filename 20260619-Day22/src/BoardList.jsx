
// Boardlist로 새로운 페이지를 만든다

import Post from "./component/Post";


function BoardList(){
  return (
    <>
      <h2>게시글 페이지</h2>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />







      <div>
        <h3>첫번째공지</h3>
        <p>HTML 마무리 잘하기</p>
      </div>

      <div>
        <h3>두번째공지</h3>
        <p>HTML 마무리 잘하기</p>
      </div> 

      <div>
        <h3>세번째공지</h3>
        <p>HTML 마무리 잘하기</p>
      </div>      
    </>
  )
}

export default BoardList;