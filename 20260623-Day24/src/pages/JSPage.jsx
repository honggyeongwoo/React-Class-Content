import React from 'react'

export default function JSPage() {
  return (
    <div>
      <div className='jspage-wrap'>
        <div className='jspage-wrap-header'>
        <div className='jspage-header'>
          <div className='jspage-header-left'>
            <img src="https://img.icons8.com/fluent/1200/facebook-messenger.jpg" alt="" />
            <div>
              <h1>JS Board Hub</h1>
              <p>map() 기반 웹 컴포넌트 게시판</p>
            </div>
          </div>
          <button>새 글 작성하기</button>
        </div>
        </div>
      <div className='jspage-wrap-main'>
        <div className='jspage-main'>

          <div className='jspage-main-search'>
            <div className='jspage-main-search-input'>
              <input type="text" placeholder='제목,내용,작성자를 검색해보세요.'/>
            </div> 

            <div className='jspage-main-search-category'>
              <button>전체</button>
              <button>공지사항</button>              
              <button>자유게시판</button>
              <button>질문/답변</button>
              <button>정보공유</button>              
            </div>
          </div>

        <div className='jspage-main-post'>
          <div className='jspage-main-post-category'>
            <h3>정보공유</h3>
            <p>2026-06-23</p>
          </div>
          <div className='jspage-main-post-name'>
            <h2>React에서 map() 함수를 마스터하는 가장 빠른 방법!</h2>
            <p>배열의 내장 함수인 map은 자신이 전달받은 콜백 함수를 매 루프마다 대신 실행해 줍니다. 이때 내부적으로 숫자출력(numbers[i], i, 원본배열) 처럼 현재 원소 값을 첫 번째 인자로 직접 주입하여 호출해주므로, 우리는 소괄호 기호 없이 함수 이름만 대입해도 파라미터가 자동으로 매핑되는 것입니다!</p>

          </div>
        </div>

        <div className='jspage-main-post'></div>

        </div>
        </div>

      </div>
    </div>
  )
}
