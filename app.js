
$().ready(()=> {
    const formID = $('#form')
    const cardholderName = $('#cardholderName')
    const cardImageName = $('.card-image-name')
    const cardNumber = $('#cardNumber')
    const cardImageNumber = $('.card-image-number')
    const monthNumber = $('#month')
    const monthImageNumber = $('.card-image-month')
    const yearNumber = $('#year')
    const yearImageNumber = $('.card-image-year')
    const cvcNumber = $('#cvc')
    const cvcImageNumber = $('.card-image-cvc')
    // Replace the input on the card to the input typed
    cardholderName.on('input', ()=> {
        var name = cardholderName.val()
        cardImageName.text(name)
    })
    cardNumber.on('input', ()=> {
        var number = cardNumber.val()
        cardImageNumber.text(number)
    })
    monthNumber.on('input', ()=> {
        var number = monthNumber.val()
        monthImageNumber.text(number)
    })
    yearNumber.on('input', ()=> {
        var number = yearNumber.val()
        yearImageNumber.text(number)
    })
    cvcNumber.on('input', ()=> {
        var number = cvcNumber.val()
        cvcImageNumber.text(number)
    })

    // form validation
    formID.validate({
        rules: {
            cardholderName: 'required',
            cardNumber: {
                required: true,
                creditcard: true
            },
            month: {
                required: true,
                digits: true,
                max: 12,
                minlength: 2
            },
            year: {
                required: true,
                digits: true,
                max: 99,
                minlength: 2
            },
            cvc: {
                required: true,
                digits: true,
                range: [100, 999]
            }
        },
        messages: {
            cardholderName: "Please enter your name",
            cardNumber: {
                required: "Please enter your card number",
                creditcard: "Please enter a vaild credit card number"
            },
            month: {
                required: "Can't be blank",
                digits: "This is not a number",
                max: "Enter month in MM",
                minlength: "If your month is 1 enter as 01"
            },
            year: {
                required: "Can't be blank",
                digits: "This is not a number",
                max: "Enter year in YY",
                minlength: "If your year is 2001 enter as 01"
            },
            cvc: {
                required: "Can't be blank",
                digits: "This is not a number",
                range: "Your cvc is invaild"
            }
        },
        submitHandler: function(form) {
            form.submit()
        }
    })

})


// https://html.form.guide/jquery/validation-using-jquery-examples/
// jQuery got their own validation