import {useState} from "react"
import './App.css';
import Box from "./component/Box"
import 'bootstrap/dist/css/bootstrap.min.css';

//1.박스 두 개 (타이틀, 사진 정보, 결과 값)
//2.가위바위보 버튼
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3번 4번 의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6.승패결과에 따라 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 - 검정)

const choice = { // 사진과 이름을 저장하는 객체 아이템
  rock:{
    name:"Rock",
    img:"https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-104.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-103.png"
  },
  paper:{
    name:"Paper",
    img:"https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-102.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play=(userChoice)=>{
    console.log("선택됨....", userChoice)
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()

    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  //가위바위보 알고리즘
  const judgement = (user, computer) => {
    console.log("user=> ", user)
    console.log("computer=> ", computer)

    // user == computer -> tie
    // user == rock, computer == scissors -> user win
    // user == rock, computer == paper -> user lose
    // user == scissors, computer == paper -> user win
    // user ==scissors, computer == rock -> user lose
    // user == paper, computer == rock -> user win
    // user ==paper, computer == scissors -> user lose

    if (user.name == computer.name) return "TIE"
    else if (user.name == "Rock") return computer.name == "Scissors" ? "WIN" : "LOSE"
    else if (user.name == "Scissors") return computer.name == "Paper" ? "WIN" : "LOSE"
    else if (user.name == "Paper") return computer.name == "Rock" ? "WIN" : "LOSE"
    // user.name == "Rock" && computer.name == "Scissors" ? "win" : "lose"
    // user.name == "Scissors" && computer.name == "Paper" ? "win" : "lose"
    // user.name == "Paper" && computer.name == "Rock" ? "win" : "lose"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice) //객체의 키값(rock, scissors, paper)만 뽑아서 array로 만들어주는 함수
    console.log("itemArray는", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    console.log("랜덤 값은,,", randomItem)
    let final = itemArray[randomItem]
    console.log("final은 ", final)
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/>
      </div>
      <div className="main pointer">
        {/* 콜백함수 형태로 넣기! */}
        {/* <button onClick={() => play("scissors")}>가위</button> 
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>  */}
                
        <i class="fa fa-hand-rock fa-2x" onClick={() => play("rock")}></i>
        <i class="fa fa-hand-scissors fa-2x"
          onClick={() => play("scissors")}></i>
        <i class="fa fa-hand-paper fa-2x" onClick={() => play("paper")}></i>
      </div>
      <div className="resetBtn">
      <button type="button" class="btn btn-outline-secondary" 
      onClick={()=>window.location.replace("/main")}>reset</button>
      </div>
    </div>
  );
}

export default App;
