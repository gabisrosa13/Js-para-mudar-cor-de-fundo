function changeTheme(){ // quando eu clico no botão chama essa função
    const theme = document.getElementById("themeSelector").value;
    document.body.classList.remove("fruta-uva", "fruta-maca", "fruta-laranja", "fruta-manga", "fruta-pera", "fruta-morango"); //quando eu clico a cor que estava é removida
    


switch(theme){ 
    case "morango": //espcifica o que é para acontecer em cada caso
        document.body.classList.add("fruta-morango")
        alert("O morango é rico em vitamina C, que fortalece o sistema imunológico, e contém antioxidantes, como as antocianinas, que ajudam a prevenir doenças cardíacas. Ele também melhora a saúde da pele e reduz inflamações.")
        break //faz com que mude a cor e pare ali
    case "uva":
        document.body.classList.add("fruta-uva")
        alert("A uva é uma boa fonte de vitaminas C e K, que beneficiam o sistema imunológico e a saúde óssea. Seus antioxidantes, como o resveratrol, protegem o coração e melhoram a circulação sanguínea.")
        break
    case "maca":
        document.body.classList.add("fruta-maca")
        alert("A maçã é uma excelente fonte de fibra, que auxilia na digestão e no controle do colesterol. Também contém antioxidantes que combatem o envelhecimento precoce e ajuda a regular o açúcar no sangue.")
        break
    case "laranja":
        document.body.classList.add("fruta-laranja")
        alert("A laranja é famosa pela sua alta concentração de vitamina C, que fortalece o sistema imunológico e promove a saúde da pele. Além disso, é rica em antioxidantes e fibras, que ajudam na digestão.")
        break
    case "manga":
        document.body.classList.add("fruta-manga")
        alert("A manga é rica em vitaminas A, C e E, ótimas para a saúde dos olhos e da pele. Ela contém antioxidantes que protegem as células e também auxilia no fortalecimento do sistema imunológico e na digestão.")
        break
    case "pera":
        document.body.classList.add("fruta-pera")
        alert("A pera é rica em fibras, que promovem uma boa digestão, e contém vitamina C, que fortalece o sistema imunológico. Ela também tem antioxidantes que ajudam a reduzir inflamações.")
        break
    default:
        document.body.classList.add("fruta-morango")
}
}