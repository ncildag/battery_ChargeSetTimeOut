class Battery {

    constructor() {
        this.charge = $('.charge');
        this.decharge = $('.decharge');
        this.setListeners();
        this.cells = $('.cell');
    }

    setListeners() {
        this.charge.click(() => {
            let colors = ["red", "orange", "green"];
            let chargeTime = +document.getElementById("exampleInputEmail1").value;
            for (let i = 0; i < this.cells.length; i++) {
                setTimeout(() => {
                    $(this.cells[i]).css('background', colors[i]);


                }, i*1000);

            }

        });
        this.decharge.click(() => {
            
            let dechargeTime = +document.getElementById("exampleInputEmail2").value;
            for (let i = 0; i < this.cells.length; i++) {
                setTimeout(() => {
                    $(this.cells[i]).css('background', "white");


                }, i * 1000);

            }

        });
    }

    



}



new Battery();