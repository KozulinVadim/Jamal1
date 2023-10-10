
var i = 0;
var a = 0;
var que1 = false;
var que2 = false;
document.getElementById("button1").addEventListener("click", function() {
    que(i);
    
    if (i==10){
        if(que2){
            document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (сладенький)"}
            else if(que1){
                document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (маленький)"}
            else if(que1 && que2){
                document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (сладенький + маленький)"}
            else{
                document.getElementById("text1").textContent = "Ты жамальчик на " + a + "%"}
            }
    a = a +10;        
    i++;
        
    }
);

document.getElementById("button2").addEventListener("click", function() {
    que(i);
    if (i==10){
        if(que2){
            document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (сладенький)"}
            else if(que1){
                document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (маленький)"}
            else if(que1 && que2){
                document.getElementById("text1").textContent = "Ты жамальчик на " +a + "% (сладенький + маленький)"}
            else{
                document.getElementById("text1").textContent = "Ты жамальчик на " + a + "%"}
            }     
    i++;
}
        
);


function que(i){
    

    switch (i) {
        
        case 0:
            document.getElementById("text1").textContent = "Твой рост меньше 170см?";
            document.getElementById("button1").addEventListener("click", function() {
                que1 = true;
            });
            break;
        case 1:
            document.getElementById("text1").textContent = "Любишь покушать питсу?";
            break;
        case 2:
            document.getElementById("text1").textContent = "А сладенько дунуть?";
            break;
        case 3:
            document.getElementById("text1").textContent = "Как тебе идея сначала покурить а потом вкусно покушать?";
            break;
        case 4:
            document.getElementById("text1").textContent = "Любишь татушки?";
            break;
        case 5:
            document.getElementById("text1").textContent = "Нравится залипнуть в тикитоки?";
            break;
        case 6:
            document.getElementById("text1").textContent = "Уважаешь Южный парк и Выживалово?";
            break;
        case 7:
            document.getElementById("text1").textContent = "Любишь крепко обниматься?";
            break;
        case 8:
            document.getElementById("text1").textContent = "Тебя называют Сладенький?";
            document.getElementById("button1").addEventListener("click", function() {
                que2 = true;
            });
            break;
        case 9:
            document.getElementById("text1").textContent = "Есть дома крыса?";
            break;
}};


