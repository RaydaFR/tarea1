//Задание 1
//1 вариант присвоения значения для переменных
{
    const myName="Райда";                      
    let myAge =33;                         
    const isStudent=true;                   
    let height="170 см";                   
    let hobby="чтение";                   
    let favouriteNumber=9;                
    const isGraduated=true;               
    
    console.log (typeof myName + "," + typeof myAge + "," + typeof isStudent + "," + typeof height + "," + typeof hobby + "," + typeof favouriteNumber + "," + typeof isGraduated)
    }

//2 вариант присвоения значения для переменных
{
    const myName="Райда";                        
    let myAge =33;                          
    let isStudent="прохожу курс в ЦОПП";      
    let height=170;                     
    let hobby=true;                        
    let favouriteNumber=true;             
    let isGraduated=true;                
    console.log (typeof myName + "," + typeof myAge + "," + typeof isStudent + "," + typeof height + "," + typeof hobby + "," + typeof favouriteNumber + "," + typeof isGraduated)
}

//Задание 2
{
    let studyResult;
    let progress=undefined;
    let question=null;
    console.log(typeof studyResult + "||" + typeof progress + "||" + typeof question)
    }

//Задание 3
{
    const birthYear=1991;
    let nowYear=2024;
    let myAge=nowYear-birthYear;
    console.log("Привет, мне " + myAge + " года")  
    }

 //задание 4   
    {
    const birthYear=1991;
    let nowYear = new Date().getFullYear();
    let myAge=nowYear-birthYear;
    console.log("Привет, мне " + myAge + " года")  
    }

    //или
    
    {
        const birthYear=1991;
        let nowDate = new Date();
        let nowYear = nowDate.getFullYear();
        let myAge=nowYear-birthYear;
        console.log("Привет, мне " + myAge + " года")  
        }
    