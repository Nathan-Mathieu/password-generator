

const letters = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I',
'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u',
'U','v','V','w','W','x','X','y','Y','z','Z'];
 const numbers = ['0','1','2','3','4','5','6','7','8','9'];
 const symbols = ['ù','%','?',';','/','!',';','*','$','@','&'];

 function shuffle(tab) {
    console.log(tab);
    for (let i = tab.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tab[i], tab[j]] = [tab[j], tab[i]];
    }
    console.log(tab);

    let password_str = tab.join('');
    
    const password_input = document.getElementById('password-value');
    password_input.value = password_str;
}

function generate(max){
    let password= new Array();
    let checkbox_nb = document.getElementById('numbers').checked;
    let checkbox_symbols = document.getElementById('symbols').checked;
    let max_nb = max;

    for(let i = 0; i < max_nb ; i++){
        let random_nb_letters = Math.floor(Math.random() * Math.floor(letters.length));
        let random_nb_numbers = Math.floor(Math.random() * Math.floor(numbers.length));
        let random_nb_symbols = Math.floor(Math.random() * Math.floor(symbols.length));

        if(i == 1 || i == 5 || i == 9 || i == 12 ){
            if(checkbox_nb == true){
                let new_char = numbers[random_nb_numbers];
                password.push(new_char);
            }
            else{
                let new_char = letters[random_nb_letters];
                password.push(new_char);
            }
        }
        else if(i == 2){
            if(checkbox_symbols == true){
                let new_char = symbols[random_nb_symbols];
                password.push(new_char);
            }
            else{
                let new_char = letters[random_nb_letters];
                password.push(new_char);
            }
        }
        else{
            let new_char = letters[random_nb_letters];
            password.push(new_char);
        }
    }
    shuffle(password);
}


const btn_generate = document.getElementById('btn-generate');
btn_generate.addEventListener('click', () => {
    let nb_char_value = document.getElementById('nb-char-input').value;

    nb_char_value < 5 ? nb_char_value = 5 : nb_char_value = nb_char_value;
    nb_char_value > 20 ? nb_char_value = 20 : nb_char_value = nb_char_value;

    generate(nb_char_value);
});

function copy() {
    let copyText = document.getElementById("password-value");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    tooltip();
}

const clipboard = document.getElementById("clipboard");

clipboard.addEventListener("click", () => {
    copy();
});

function tooltip() {
    let div_tooltip = document.getElementById("tooltip");
    div_tooltip.classList.remove("hide");

    setTimeout(() => {
        div_tooltip.classList.add("hide");
    }, 2000);
}