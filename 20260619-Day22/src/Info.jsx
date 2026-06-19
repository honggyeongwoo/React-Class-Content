// Into.jsx
// 매번 
//  우리가 만든 페이지를 다른 곳에서도 또 사용할 수있다.
import Member from "./component/Member";
import "./Info.css";

function Info(){
  //페이지 만들면 main에게 보내줘야된다. 
  // return 현재 페이지를 보낸다!
  //       여러개를 한꺼번에 묶어서 그룹을 지어서!
  return (
    <>
      <Member />
      <Member />
      <Member />
      
    </>
  )
}
// 메인한테 위에서 만든 return 값을 내보내기 하겠다.
// 위에서 만든 페이지 태그들을 내보내기 하겠다.
export default Info;

    // <div className="container">
    //   <div className="profile">
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX745YMnwFeZf9-R25-LcrJ30CwK-JVKcR0Q&s" alt="" />
    //     <h2>How</h2>
    //     <p>Full</p>
    //   </div>

    //   <div className="profile">
    //     <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-personal-personalization-profile-user-line-icon-vector-png-image_5253966.jpg" alt="" />
    //     <h2>Why</h2>
    //     <p>Half</p>
    //   </div>

    //   <div className="profile">
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAUeT5UwmwkNAJWUCvI_3QvDS-E0JbzRH-ATi5URqo52R9a7GsnHOptM&s=10" alt="" />
    //     <h2>When</h2>
    //     <p>Quarter</p>
    //   </div>

    //   <div className="profile">
    //     <img src="https://i.pinimg.com/236x/f1/31/a9/f131a9d8f6d1851b3376ccca24230824.jpg" alt="" />
    //     <h2>Orai</h2>
    //     <p>Duck</p>
    //     <p className="new-member-tag">New</p>

    //     {/* <div className="new-member">
    //       <p>New</p>
    //     </div> */}
    //   </div>

    // </div>  