// 리액트는 css파일을 link태그로 가져오지 않고
// import 가져온다.
// App라는 태그를 사용할때 App.css파일을 포함해서
// 디자인 적용해라!


import './App.css'
// 신입 개발자들 면접에서 리액트를 사용한 이유?

function App() {  
  return (
    <>
      <h1>Jsx 리액트 문법</h1>
            <h2>JSX?</h2>
      <p>자바스크립트 + HTML을 섞어서 쓰는 문법</p>



      <img src="https://i.namu.wiki/i/3sPSlECHC86sOaStO70d-RariMVaARUBYBnVIwPFEpQ4Fbh-5sVsU3Q0GSRxjm4AmOEnW0mQ1jE0kCu_26RYgg.webp" alt="" />
      <img src="https://i.namu.wiki/i/SclunUllfKbXvnQbdGh_RB8y_HgrfBgSk_DIqZz9ye5j7RTN-rUqagokG2-L8E1lftKv1RT_DVrQHQ_bwnabvg.webp" alt="" />
      <img src="https://i.namu.wiki/i/CDAnoHXhCs3DXfs5C3-kURBOA07Kw6WMXuwIs3PgvCiKtMHR17unf5GsA1gZ4_fUp5hZc_oR9FDK5Jc_lgq44w.webp" alt="" />

      <h2>리액트 실행하는 순서!</h2>
      <ol>
       <li>고객이 url을 입력한다. </li>
       <li>index.html 파일이 크롬(브라우저)읽는다</li>
       <li>script태그를 만난다. 그래서 리액트 파일로 넘어간다</li>
       <li>main이라는 리액트가 App이라는 리액트 파일 읽는다.</li>
       <li>안에서 태그를 만든고 하나로 묶어서 main으로 보낸다.</li>
       <li>main이 app한테 받아서 index.html로 내용을 갈아끼운다.</li>
      </ol>
    </>
  )
}

export default App


// graph TD
//     A[index.html] -->|브라우저가 로드| B[main.jsx]
//     B -->|React가 DOM 요소를 찾음| C[index.html의 <div id='root'>]
//     B -->|App 컴포넌트를 렌더링 시작| D[App.jsx]
//     D -->|내부 자식 컴포넌트| E[Component]
//     C -->|최종 결과물을 화면에 그림| F[사용자 화면]