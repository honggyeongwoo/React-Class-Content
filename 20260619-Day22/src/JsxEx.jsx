// JsxEx.jsx

// Link 태그 대신 import로 파일 명,경로만 적어도 연결이 됨
import "./JsxEx.css"


// HTML에서 리액트로 넘어오게된 이유!
// - 태그들이 중복적으로 나오기 때문에 불편했다.
// - 내가 직접 태그를 만들 수있다.
//   
function JsxEx(){
  // 간단한 블로그
  // getEl~~~~ 안해도됨!
  // 변수를 만들어서 내용(content)을 {} 이용해서
  // 쉽게 변경할 수있다.

  let post = "수원 곱창맛집";
  let title = "곱창";
  return (
    <>
      <h2>Jsx (리액트를 사용하는 이유) </h2>
      
      <div className="blog-post">
        <h3>{title}</h3>
        <p>{post}</p>
      </div>

      <div className="blog-post">
        <h3>{title}</h3>
        <p>{post}</p>
      </div>

      <h2 className="blog-post">{post}</h2>
    </>
  )

}
// 현재 내가만든 JsxEx 페이지를 보이기 위해서
// main에게 보내기 
// 이 파일을 다른곳에서도 가져다 쓸 수
// 있게 허락한다. 
export default JsxEx;