function gradeQuiz(){
    var resultA=0;
    var resultV=0;
    var resultVR=0;
    var resultK=0;
    function checkIfElementChecked(num){
        if(document.getElementById('mc'+num+'a').checked) {
            var temp = document.getElementById('mc'+num+'a').value;
            checkvalue(temp);
        }
        else if (document.getElementById('mc'+num+'b').checked) {
            var temp = document.getElementById('mc'+num+'b').value;
            checkvalue(temp);
        }
        else if (document.getElementById('mc'+num+'c').checked) {
            var temp = document.getElementById('mc'+num+'c').value;
            checkvalue(temp);
        }
        else if (document.getElementById('mc'+num+'d').checked) {
            var temp = document.getElementById('mc'+num+'d').value;
            checkvalue(temp);
        }
    }
    function checkvalue(temp){
        if(temp=="A"){
            resultA++;
        }
        else if(temp=="V"){
            resultV++;
        }
        else if(temp=="VR"){
            resultVR++;
        }
        else if(temp=="K"){
            resultK++;
        }
    }
    function evalLearningStyle(resultA,resultK,resultV,resultVR){
        //puts the txt into the html
        if(resultA>resultK &&resultA>resultV &&resultA>resultVR){
            var txt="You are a A Learner!"
            document.getElementById("demo").innerHTML=txt;
        }
        else if(resultV>resultK &&resultV>resultA &&resultV>resultVR){
            var txt="You are a V Learner!";
            document.getElementById("demo").innerHTML=txt;
        }
        else if(resultK>resultA &&resultK>resultV &&resultK>resultVR){
            var txt="You are a VR Learner!";
            document.getElementById("demo").innerHTML=txt;
        }
        else if(resultVR>resultA &&resultVR>resultV &&resultVR>resultK){
            var txt="You are a K Learner!";
            document.getElementById("demo").innerHTML=txt;
        }
    }
    //this is the part of the code that will be ran when this function is called.
    //it contains a series of nested functions to allow for greater modularity.
    for(var num=0;num<12;num++){
        checkIfElementChecked(num+1);
    }
    evalLearningStyle(resultA,resultK,resultV,resultVR);
}