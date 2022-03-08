let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");
let msg1 = document.getElementById("msg1");

function strengthChecker(){
    let password = document.getElementById("password").value;

    parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 7)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    console.log(Object.values(parameters), barLength);

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                msg.textContent = "Your password is very weak";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                msg.textContent = "Your password is weak";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                msg.textContent = "Your password is good";
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                msg.textContent = "Your password is strong";
                break;
        }
    }


    let pass = document.getElementById("password").value;
    let len=pass.length;
    console.log(pass);
    console.log(len);
    let num=0;
    let lw=0;
    let up=0;
    let sp=0;
   



    for(let i=0;i<pass.length;i++)
    {
        if (pass[i] >= "A" && pass[i] <= "Z") up++;
          else if (pass[i] >= "a" && pass[i] <= "z") lw++;
          else if (pass[i] >= "0" && pass[i] <= "9") num++;
          else sp++;
    }
    let lu=lw + up;
    let lun=lw + up + num;
    let luns= lw + up + num + sp;

    if(len > 0 && len <= 5)
    {
        
        msg1.textContent ="It would take a computer about instantly to crack your password";
        
    }
    else if(len == 6)
    {
        if(num == len || lw == len || lu == len)
        {
            msg1.textContent = "It would take a computer about instantly to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent ="It would take a computer about 1 sec to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 5 sec to crack your password ";
        }

    }
    else if(len == 7)
    {
        if(num == len || lw == len )
        {
            msg1.textContent ="It would take a computer about instantly to crack your password";
        }
        else if(lu == len)
        {
            msg1.textContent ="It would take a computer about 25 sec to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 1 min to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 6 min to crack your password";
        }
    }
    else if(len == 8)
    {
        if(num == len )
        {
            msg1.textContent ="It would take a computer about Instantly to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 5 sec to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent ="It would take a computer about 22 mins to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent ="It would take a computer about 1 hour to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 8 hours to crack your password";
        }
    }
    else if(len == 9)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about Instantly to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 2 mins to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 19 hours to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent ="It would take a computer about 3 days to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 3 weeks to crack your password";
        }
    }
    else if(len == 10)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about Instantly to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 58 mins to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 1 month to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 7 months to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent ="It would take a computer about 5 years to crack your password";
        }
    }
    else if(len == 11)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 2 secs to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 1 day to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 5 years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 41 years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 400 years to crack your password";
        }
    }
    else if(len == 12)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 25 secs to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 3 weeks to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 300 years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 2000 years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 34000 years to crack your password";
        }
    }
    else if(len == 13)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 4 mins to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 1 years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 16000 years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent ="It would take a computer about 100000 years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 2 million years to crack your password";
        }
    }
    else if(len == 14)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 41 mins to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 51 years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 800000 years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 9 million years to crack your password"
        }
        else if( luns == len)
        {
            msg1.textContent ="It would take a computer about 200 million years to crack your password";
        }
    }
    else if(len == 15)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 6 hours to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 1000 years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 43 million years to crack your password"
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 600 million years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 15 billion years to crack your password";
        }
    }
    else if(len == 16)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 2 days to crack your password to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 34000 years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 2 billion years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 37 billion years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 1 trillion years to crack your password";
        }
    }
    else if(len == 17)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 4 weeks to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 800000 years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 100 billion years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 2 trillion years to crack your password";
        }
        else if( luns == len)
        {
            msg1.textContent ="It would take a computer about 93 trillion years to crack your password";
        }
    }
    else if(len == 18)
    {
        if(num == len )
        {
            msg1.textContent = "It would take a computer about 9 months to crack your password";
        }
        else if( lw == len )
        {
            msg1.textContent = "It would take a computer about 23 million years to crack your password";

        }
        else if(lu == len)
        {
            msg1.textContent = "It would take a computer about 6 trillion years to crack your password";
        }
        else if(lun == len)
        {
            msg1.textContent = "It would take a computer about 100 trillion years to crack your password"
        }
        else if( luns == len)
        {
            msg1.textContent = "It would take a computer about 7 quindecillion years to crack your password";
        }
    }
    else if(len>18)
    {
        msg1.textContent = "It would take a computer about More than 7 quindecillion years to crack your password";
    }


}


function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = "#0be881";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#808080";
    }
}




