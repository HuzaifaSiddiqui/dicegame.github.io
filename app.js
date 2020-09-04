

var score, roundScore, activePlayer, isPlaying, dice, p1, p2, p3, p4, p5, dark;
init();
dark=false;
//document.querySelector('.lastdice').disabled=true;
document.querySelector('.btn-roll').disabled=true;
document.querySelector('.btn-hold').disabled=true;
//document.querySelector('.target').disabled=true;

document.querySelector('.btn-roll').addEventListener('click', function(){ 
    if(isPlaying){
        document.querySelector('.btn-hold').disabled=false;
        var dice1=Math.ceil(Math.random()*6);
        var dice2=Math.ceil(Math.random()*6);

        document.getElementById('h2').innerHTML=dice1+' & '+dice2;
        

        document.getElementById('dice1').style.display='block';
        document.getElementById('dice2').style.display='block';

        document.getElementById('dice1').src='dice-'+dice1+'.png';
        document.getElementById('dice2').src='dice-'+dice2+'.png';
        
        if(dice1!==1&&dice2!==1){
            dice=dice1+dice2;
            roundScore+=dice;
            document.querySelector('#current'+activePlayer).textContent=roundScore;
        }
        else{
            nextActive(); 
        }
    
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isPlaying){
        score[activePlayer-1]+=roundScore;
        document.querySelector('#score'+activePlayer).textContent=score[activePlayer-1];
        
        //var input=document.querySelector('.target').value;
        var winningscore;
        
        if(isNaN(p5)||p5<=20||p5>=1000){
            winningscore=100;
        }else{
            winningscore=p5;
        }
        if(score[activePlayer-1]>=winningscore){
        document.querySelector('#name'+activePlayer).textContent=document.querySelector('#name'+activePlayer).textContent+' WINS';
        
        document.getElementById('dice1').style.display='none';
        document.getElementById('dice2').style.display='none';
        
        document.querySelector('.player-'+activePlayer).classList.add('winner');
        document.querySelector('.player-'+activePlayer).classList.remove('active');
        isPlaying=false;
    }
    else{
        nextActive();
    }
    }
});

function nextActive(){
    document.querySelector('.btn-hold').disabled=true;
    roundScore=0;
        document.querySelector('#current'+activePlayer).textContent=roundScore;
        if(activePlayer==1){
            activePlayer=2;
            document.querySelector('.player-1').classList.toggle('active');
            document.querySelector('.player-2').classList.toggle('active');
        }
        else if(activePlayer==2){
            activePlayer=3;
            document.querySelector('.player-2').classList.toggle('active');
            document.querySelector('.player-3').classList.toggle('active');
        }
        else if(activePlayer==3){
            activePlayer=4;
            document.querySelector('.player-3').classList.toggle('active');
            document.querySelector('.player-4').classList.toggle('active');
        }
        else{
            activePlayer=1;
            document.querySelector('.player-4').classList.toggle('active');
            document.querySelector('.player-1').classList.toggle('active');
        }
        document.getElementById('dice1').style.display='none';
        document.getElementById('dice2').style.display='none';
};


document.querySelector('.btn-new').addEventListener('click', function(){
    init();
    document.querySelector('.player-1').classList.add('active');
    document.querySelector('.btn-roll').disabled=false;
    document.getElementById('h1').innerHTML='LAST DICE';

    p1=prompt('Enter Player 1 name: ');
    p2=prompt('Enter Player 2 name: ');
    p3=prompt('Enter Player 3 name: ');
    p4=prompt('Enter Player 4 name: ');
    

    if(p1==null||p1==""||p2==null||p2==""||p3==null||p3==""||p4==null||p4==""){
        alert('Please fill all 4 player names')
        init();
        
    }
    else{
        p5=prompt('Enter the target score between 20 and 100');
        if(isNaN(p5)||p5<=20||p5>=1000){
            alert("Entered target value is not matched so deafault target (100) is selected");
            document.getElementById('h1').innerHTML="Target (default:100)";
            //document.querySelector('.target').value="Target (default:100)";
        }
        else{
            document.getElementById('h1').innerHTML='Target: '+p5;
            ///document.querySelector('.target').value='Target: '+p5;
        }
        
        document.getElementById('name1').textContent=p1;
        document.getElementById('name2').textContent=p2;
        document.getElementById('name3').textContent=p3;
        document.getElementById('name4').textContent=p4;

        isPlaying=true;
    }
});

document.querySelector('.btn-mode').addEventListener('click', function(){
    
    const body=document.querySelector('body');
    body.classList.toggle('light');
    if(dark==false){
        document.querySelector('.ion-ios-moon').className='ion-ios-sunny';
        dark=true;
    }
    else{
        document.querySelector('.ion-ios-sunny').className='ion-ios-moon';
        dark=false;
    }
});

function init(){
    score=[0,0,0,0];
    roundScore=0;
    activePlayer=1;
    isPlaying=true;
    
    document.getElementById('dice1').style.display='none';
    document.getElementById('dice2').style.display='none';

    document.getElementById('score1').textContent='0';
    document.getElementById('score2').textContent='0';
    document.getElementById('score3').textContent='0';
    document.getElementById('score4').textContent='0';
    
    document.getElementById('current1').textContent='0';
    document.getElementById('current2').textContent='0';
    document.getElementById('current3').textContent='0';
    document.getElementById('current4').textContent='0';

    document.getElementById('name1').textContent='Player1';
    document.getElementById('name2').textContent='Player2';
    document.getElementById('name3').textContent='Player3';
    document.getElementById('name4').textContent='Player4';

    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-2').classList.remove('winner');
    document.querySelector('.player-3').classList.remove('winner');
    document.querySelector('.player-4').classList.remove('winner');

    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.player-3').classList.remove('active');
    document.querySelector('.player-4').classList.remove('active');
    
}