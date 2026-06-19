// SnsPage.jsx
// 자동으로 함수 틀을 만들어주는 단축키 rfc
import React from "react";
import Feed from "./component/Feed";

//SnsPage를 만들어서 중복되는 태그들을 Feed새로운 태그를 만들어서
// 중복 제거 했는데 문제가 발생 Feed의 내용들이 다 똑같아
export default function SnsPage() {
  return (
    <div>
    {/* Feed라는 게시글 틀을 만들 건데 사진과 내용을 밖에서
      받아온다.  */}
      <Feed 
        name= "Hong"
        content= "술한잔.."
        path= "https://i.pinimg.com/236x/f1/31/a9/f131a9d8f6d1851b3376ccca24230824.jpg"
        />

      <Feed 
        name= "Hong"
        content= "씁노.."
        path= "https://i.pinimg.com/236x/d2/79/a6/d279a6b5f5a3be5590cfc84404d1c456.jpg"
        />    

      <Feed 
        name= "Hong"
        content= "쿄.."
        path= "https://i.pinimg.com/236x/d5/30/9f/d5309f88074ba1331208b98a9195967c.jpg"
        />   

      <Feed 
        name= "Hong"
        content= "긩.."
        path= "https://i.pinimg.com/236x/17/1d/b9/171db91550385b7934ec2438298443ef.jpg"
        /> 

      <Feed 
        name= "Hong"
        content= "쨥.."
        path= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5_0scnodSaTCxG9BiGFlFbR6eHi1oBgEJ190izKicoJrIu-wt4_gh7ox&s=10"
        />

    </div>  
  )  
}
