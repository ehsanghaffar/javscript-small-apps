        let result = document.getElementById("result");
        let resultInfo = `
        <h5 style="margin: 8px 0;">Tip : </h5>
        <h5 style="margin: 8px 0;">Total : </h5>
        <h5 style="margin: 8px 0;">Each Person Pay : </h5>
        `
        result.innerHTML = resultInfo

        function calculateTip() {
            let bill = Number(document.getElementById("totalBill").value);
            let numOfPerson = Number(document.getElementById("numOfPerson").value);

            let tip = bill * .15;
            let totalBill = bill + tip;
            let perPersonPay = totalBill / numOfPerson

            result.innerHTML = `
            <h5 style="margin: 8px 0;">Tip : ${tip}</h5>
            <h5 style="margin: 8px 0;">Total : ${totalBill}</h5>
            <h5 style="margin: 8px 0;">Each Person Pay : ${perPersonPay}</h5>
            `
        }

