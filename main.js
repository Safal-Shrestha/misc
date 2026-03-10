document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('activebox');
    let log = document.getElementById('logbox');
    let buttons = document.querySelectorAll('button');
    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {          
            if(e.target.innerHTML === '='){
                if(string === '')
                {
                    input.value = input.value;
                }
                else {
                    try{
                        log.value = input.value;
                        input.value = eval(string).toString();
                        string = "";
                    } catch (error) {
                        input.value = "Error";
                        string = "";
                    }
                }
            }
            else if(e.target.innerHTML === 'AC') {
                string = "";
                input.value = 0;
                log.value = string;
            }
            else if(e.target.innerHTML === 'DE') {
                if(string != ''){
                    string = string.substring(0, string.length - 1);
                    input.value = string;
                }
            }
            else if(e.target.innerHTML === '+/-') {
                try{
                    string = (parseFloat(input.value) * -1).toString();
                    input.value = string;
                } catch(error) {
                    input.value = error;
                    string = "";
                }
            }
            else 
            {
                if(e.target.innerHTML === 'x'){
                    string += '*';
                    input.value += 'x';
                }
                else{
                    string += e.target.innerHTML;
                    input.value = string;
                }
            }
        });
    });

});