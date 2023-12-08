let questionP=document.querySelector('.hint_handler')
let inputs=document.querySelector('.box_child_circle')
let wrongLetters=document.querySelector('.wrong_letters')
let limitHtml = document.querySelector('.limit_')
let resetBtn = document.querySelector('.reset_btn')


let wrongArr = []
wrongLetters.innerHTML = `Wrong letters:${wrongArr}` 
let random;
let limit = 7
limitHtml.innerHTML = `Chance: ${limit}`
let key;
function test(){
    random = wordList[Math.floor(Math.random()*wordList.length)]
    console.log(random);
    questionP.innerHTML =  random.hint

    inputs.innerHTML = ''
    for(let i=0;i<random.word.length;i++){
        inputs.innerHTML +=`
        <input class="disabledInp" disabled typle="text">
        `
    }
}
test()

function inpFunc(e){
    key = e.target.value.toLowerCase()
    console.log(key);   
    if(random.word.includes(key)){
        for(let i=0;i<random.word.length;i++){
            if(random.word[i]===key){
                inputs.querySelectorAll('input')[i].value = key
            }
        }
    }else{
        let findWrong = wrongArr.find(data=> data === key)
        if(!findWrong){
            wrongArr.push(key)
            wrongLetters.innerHTML = `Wrong letters:${wrongArr}` 
            if(limit === 0){
                alert('you lost')
                document.location.reload()
            }else{
                limit -=1
                limitHtml.innerHTML = `Chance: ${limit}`
            }
        }
        else{
            alert('you already put that word')
        }
    }resetBtn.addEventListener('click',()=>{
    e.target.value = '';
    wrongLetters.innerHTML = `Wrong letters:${wrongArr.length = ''}` 
    limit = 7
    limitHtml.innerHTML = `Chance: ${limit}`
    test();
})
}




