let playerOneScore = 0;
let playerTwoScore = 0;
let turnNo=0
let playerTurn=null
let SelectStickNum= null
let playerOneName = ''
let playerTwoName = ''
let coinFlip = null
let accPlayerOne
let accPlayerTwo
const makePlayer=(Name)=>{
    return{
        Name:Name,
        Stickman:{
            '1':0,
            '2':0,
            '3':0,
            '4':0,
            '5':0
        },
        Points:0
    }
}
const returnRandomNumberFromRange=(limit)=>{
    return Math.floor(Math.random()*(limit)+1)
}
const flipCoin = ()=>{
    const turn = returnRandomNumberFromRange(282105)
    if(turn%2==0){
        coinFlip = 0
    }else{
        coinFlip = 1
    }
}
const updateTurn =()=>{
    turnNo++
}
const SelectStickNumber=()=>{
    const moveNumber = returnRandomNumberFromRange(5)
    SelectStickNum= moveNumber
}
const updateRemark=(playerOne)=>{
    if(playerOne){
        document.getElementById("remark").textContent=`${accPlayerOne.Name} the current Box is filled , try again latter rounds`
    }else{
        document.getElementById("remark").textContent=`${accPlayerTwo.Name} the current Box is filled, try again latter rounds`
    }
}
const resetRemark=()=>{
    document.getElementById("remark").textContent=''
}
const UpdateStickmanObject=(SelectStickNum)=>{
    console.log(SelectStickNum)
    if(turnNo%2==1){
        if(accPlayerOne.Stickman[`${SelectStickNum}`] <6){
            accPlayerOne.Stickman[`${SelectStickNum}`]=accPlayerOne.Stickman[`${SelectStickNum}`]+1;
            accPlayerOne.Points++
            resetRemark()
        }else{
            updateRemark(true)
        }
    }else{
        if(accPlayerTwo.Stickman[`${SelectStickNum}`]<6){
            accPlayerTwo.Stickman[`${SelectStickNum}`]=accPlayerTwo.Stickman[`${SelectStickNum}`]+1;
            accPlayerTwo.Points++
            resetRemark()
        }else{
            updateRemark(false)
        }
    }
}
const DrawStickForBox =(canvas,value)=>{
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height);
    switch(value){
        case 0:
            break;
        case 1:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            break;
        case 2:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            ctx.fillRect(canvas.width/2,canvas.height/3+10,canvas.width/200,canvas.height/8)
            break;
        case 3:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            ctx.fillRect(canvas.width/2,canvas.height/3+10,canvas.width/200,canvas.height/8)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/8)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)
            ctx.rotate(30*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            break;
        case 4:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            ctx.fillRect(canvas.width/2,canvas.height/3+10,canvas.width/200,canvas.height/8)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/8)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)
            ctx.rotate(60*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.translate(0,0)
            ctx.rotate(-60*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            break;
        case 5:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            ctx.fillRect(canvas.width/2,canvas.height/3+10,canvas.width/200,canvas.height/8)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/8)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)
            ctx.rotate(60*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.translate(0,0)
            ctx.rotate(-60*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/24)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.rotate(30*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            break;
        case 6:
            ctx.beginPath()
            ctx.arc(canvas.width/2,canvas.height/3,10,0,2*Math.PI)
            ctx.stroke()
            ctx.fillRect(canvas.width/2,canvas.height/3+10,canvas.width/200,canvas.height/8)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/8)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)
            ctx.rotate(60*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.translate(0,0)
            ctx.rotate(-60*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            ctx.translate(canvas.width/2,canvas.height/3+10+canvas.height/24)
            ctx.rotate(-30*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.rotate(60*Math.PI/180)
            ctx.fillRect(0,0,canvas.width/200,canvas.height/8)     
            ctx.rotate(30*Math.PI/180)
            ctx.setTransform(1,0,0,1,0,0)
            break;
        }
}
const updateBoxes = () =>{
    for(let i=1;i<6;i++){
        for(let j=1;j<3;j++){
            let box = document.getElementById(`col_${i}_${j}`)
            if(j%2==0){
                DrawStickForBox(box,accPlayerTwo.Stickman[`${i}`])
                box.textContent= accPlayerTwo.Stickman[`${i}`]
            }else{
                DrawStickForBox(box,accPlayerOne.Stickman[`${i}`])
                box.textContent= accPlayerOne.Stickman[`${i}`]
            }
        }
    }
}
const updateCurrentMoveAndValue =()=>{
    document.getElementById('currentTurnDisplay').textContent=`Current Turn: ${turnNo%2==0?accPlayerOne.Name:accPlayerTwo.Name}`
    document.getElementById('currentDieRoll').textContent=`Current Value: ${SelectStickNum}`
}
const updateScore=()=>{
    document.getElementById('player1Score').textContent=`Player 1 ${accPlayerOne.Name}: ${accPlayerOne.Points}`
    document.getElementById('player2Score').textContent=`Player 2 ${accPlayerTwo.Name}: ${accPlayerTwo.Points}`
}
const UpdateGameUI=()=>{
    updateBoxes()
    updateCurrentMoveAndValue()
    updateScore()
}
const resetPlayerScoreAndSwap=()=>{
    let name_one = accPlayerOne.Name
    let name_two = accPlayerTwo.Name
    coinFlip=null
    accPlayerTwo=makePlayer(name_one)
    accPlayerOne = makePlayer(name_two)
    turnNo=0
    playerOneScore=0
    playerTwoScore=0
    playerTurn=0
    SelectStickNum=null
}
const newGameFromGameOver=()=>{
    clearLayout()
    resetPlayerScoreAndSwap()
    makeGameLayout()
    gameLayoutEventListeners()
    StartSticcGame()
}
const gameOverEventListeners =()=>{
    let gameOverButton = document.getElementById('newGameButton')
    gameOverButton.addEventListener('click',newGameFromGameOver)
    let returnHomeButton = document.getElementById('homePageButton')
    returnHomeButton.addEventListener('click',returnHomeButtonAndStuff)
}
const resetValues=()=>{
    playerOneScore = 0;
    playerTwoScore = 0;
    turnNo=0
    playerTurn=null
    SelectStickNum= null
    playerOneName = ''
    playerTwoName = ''
}
const returnHomePage = ()=>{
    homePageLayout()
    homePageEventListeners()
}
const returnHomeButtonAndStuff =()=>{
    resetValues()
    returnHomePage()
}
const checkIfGameOver=()=>{
    let count=0
    let flag=null
    if(turnNo%2==1){
        for(let i=1;i<6;i++){
            count+=accPlayerOne.Stickman[`${i}`]
        }
        flag=true
    }else{
        for(let i=1;i<6;i++){
            count+=accPlayerTwo.Stickman[`${i}`]
        }
        flag=false
    }
    console.log(count)
    if(count==30){
        gameOverScreen(flag)
        gameOverEventListeners()
    }
}
const gameOverScreen=(flag)=>{
    clearLayout()
    let root = document.getElementById('root')
    root.innerHTML=`
    <div class="gameOverContent">
        <h2>Game Over</h2>
        <p id="theFinalScore">${flag==true? accPlayerOne.Name : accPlayerTwo.Name} won with ${flag==true? accPlayerOne.Points : accPlayerTwo.Points} Points</p>
        <div class="FinalButtonList">
            <div id="ButtonGameOptions">
                <button id="newGameButton">New Game</button>
                <button id="homePageButton">Return Home</button>
            </div>
        </div>
    </div>
    `
}
let StartSticcGame =()=>{
    updateTurn()
    SelectStickNumber()
    UpdateStickmanObject(SelectStickNum)
    UpdateGameUI()
    checkIfGameOver()
}
const MakePlayerGame=()=>{
    flipCoin()
    if(coinFlip){
        accPlayerOne = makePlayer(playerOneName)
        accPlayerTwo = makePlayer(playerTwoName)
    }else{
        accPlayerOne = makePlayer(playerTwoName)
        accPlayerTwo = makePlayer(playerOneName)
    }
}
const makeIntermediateLayout =()=>{
    const homePage = document.getElementById("root")
    homePage.innerHTML=`
    <div class="TossScreen">
        <div class="tossContainer">
            <p class="tossPreContent">The toss has been done</p>
            <p class="tossMainContent">${accPlayerOne.Name} has won the toss</p>
            <button id="actualGameButton">Click me to start the first round</button>
        </div>
    </div>
    `
}
const makeIntermediateLayoutEventListeners=()=>{
    const button = document.getElementById('actualGameButton')
    button.addEventListener('click',actuallyStartTheGame)
}
const gameLayoutEventListeners =()=>{
    const button = document.getElementById("nextRound")
    button.addEventListener('click',StartSticcGame)
    const endGame = document.getElementById("endGameButton")
    endGame.addEventListener('click',endGameEarly)
}
const declareVictor =()=>{
    let theFinalScore = document.getElementById('theFinalScore')
    console.log(accPlayerOne.Points,accPlayerTwo.Points)
    if(accPlayerOne.Points>accPlayerTwo.Points){
        theFinalScore.textContent=`${accPlayerOne.Name} won with ${accPlayerOne.Points} Points`
    }else if(accPlayerOne.Points<accPlayerTwo.Points){
        theFinalScore.textContent=`${accPlayerTwo.Name} won with ${accPlayerTwo.Points} Points`
    }else{
        theFinalScore.textContent="It's a draw"
    }
}
const DisplayLeaderBoard=(scores)=>{
    let LeaderBoard = document.getElementById('LeaderBoard')
    for(let i=0;i<5;i++){
        let score = document.createElement('p')
        LeaderBoard.appendChild(score)
        score.textContent=`${scores[i].Name} : ${scores[i].Points}`
        score.className='UserScore'
    }
}
const implementLeaderBoard=()=>{
    let LeaderBoard = localStorage.getItem('leaderBoard')
    if(!LeaderBoard){
        localStorage.setItem('leaderBoard',JSON.stringify([]))
        LeaderBoard = JSON.parse(localStorage.getItem('leaderBoard'))
    console.log(LeaderBoard)

    }
    console.log(LeaderBoard)
    LeaderBoard = JSON.parse(LeaderBoard)
    LeaderBoard.push(accPlayerOne,accPlayerTwo)
    LeaderBoard.sort((a,b)=>{
        return(a.Points -b.Points)
    })
    LeaderBoard=LeaderBoard.reverse()
    console.log(LeaderBoard)
    localStorage.setItem('leaderBoard',LeaderBoard)
    DisplayLeaderBoard()
}
const endGameEarly=()=>{
    clearLayout()
    gameOverScreen(false)
    gameOverEventListeners()
    declareVictor()
    //TODO: implement leaderBoard
    //implementLeaderBoard()

}
const resetGameUi=()=>{
    clearLayout()
    makeGameLayout()
}
const actuallyStartTheGame =()=>{
    clearLayout()
    makeGameLayout()
    gameLayoutEventListeners()
    StartSticcGame()
}
const startGame =()=>{
    if(!(playerOneName && playerTwoName)){
        return alert("Enter player names")
    }
    clearLayout()
    MakePlayerGame()
    makeIntermediateLayout()
    makeIntermediateLayoutEventListeners()
}
const makeGameGrid=()=>{
    const mainDiv = document.getElementById("gameBox")
    for(let i=0;i<6;i++){
        let row_i = document.createElement('div')
        mainDiv.appendChild(row_i)
        row_i.className="row"
        row_i.id =`row_${i}`
        for(let j=0;j<3;j++){
            let column_i_j
            if(j>0 && i>0){
                column_i_j= document.createElement('canvas')
                
            }else{
                column_i_j = document.createElement('div')
            }
            row_i.appendChild(column_i_j)
            column_i_j.className="column"
            column_i_j.id = `col_${i}_${j}`
        }
    }
}
const nameDivContent=()=>{
    document.getElementById("col_0_0").textContent="BoxContent"
    document.getElementById("col_0_1").textContent="Player 1"
    document.getElementById("col_0_2").textContent="Player 2"
    document.getElementById("col_1_0").textContent="1"
    document.getElementById("col_2_0").textContent="2"
    document.getElementById("col_3_0").textContent="3"
    document.getElementById("col_4_0").textContent="4"
    document.getElementById("col_5_0").textContent="5"
}
const makeGameLayout=()=>{
    const homePage = document.getElementById("root")
    console.log(accPlayerOne,accPlayerTwo)
    homePage.innerHTML=`
    <div id="displayScoreMoveAndTurn">
        <div id="DisplayScore">
            <p id="player1Score">Player 1 ${accPlayerOne.Name}: </p>
            <p id="player2Score">Player 2 ${accPlayerTwo.Name}: </p>
        </div>
        <div id="DisplayTurn">
            <p id="currentTurnDisplay">Current Turn: ${turnNo%2==0?accPlayerOne.Name:accPlayerTwo.Name} </p>
            <p id="currentDieRoll">Current Value: ${SelectStickNum}</p>
        </div>
        <div id="DisplayBox">

        </div>
    </div>
    <div id="gameBox">

    </div>
    <div class="ButtonGameOption">
        <button id="nextRound">Next Round</button>
        <button id="endGameButton">End Game</button>
    </div>
    <div id="remark">
    
    </div>
    `
    makeGameGrid()
    nameDivContent()
}
const updateText=(e)=>{
    if(e.target.name=='playerOneName'){
        playerOneName=e.target.value
    }else{
        playerTwoName=e.target.value
    }
}
const homePageEventListeners =()=>{
    const userInput = document.querySelectorAll(".playerInput")
    userInput.forEach(x=>x.addEventListener('change',updateText))
    const button = document.getElementById('startButton')
    button.addEventListener('click',startGame)
}
const clearLayout =()=>{
    const homePage = document.getElementById('root')
    homePage.innerHTML=''
}
const homePageLayout =()=>{
    clearLayout()
    const homePage=document.getElementById("root")
    homePage.innerHTML=
`
    <div id="homePageTitle" class="homePageTitle">
        
        <div class="nameCardParent" id="gameContent">
            <div class="nameCard" id="takingPlayerNameAsInput">
                <div class="InputForPlayerName">
                    <p>Enter first player Name:</p>
                    <input name="playerOneName" class="playerInput" placeholder="Enter name"/>
                </div>
                <div class="InputForPlayerName">
                    <p>Enter second player Name:</p>
                    <input name="playerTwoName" class="playerInput" placeholder="Enter name"/>
                </div>
            </div>
            <button class="startButton" id="startButton">Start game</button>
        </div>
    </div>
`
}
function main(){
    homePageLayout()
    homePageEventListeners()
}
main()
/*<div>
                <h2>Rules</h2>
                <p>See Spider Site</p>
</div>*/