$().ready(()=> {
    const formID = $('#form')
    const formSection = $('.formSection')
    $.ajax({
        type: "POST",
        url: "/",
        data: JSON.stringify({ cardholderName: $('#cardholderName')}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('li').text(`${data.username}`)
        },
        error: function (error) {
            console.log(error);
        }
        
    })
    module.exports =

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
            // round around way because i don't know servers much
           
            
            // 
        }
    })
})

// https://html.form.guide/jquery/validation-using-jquery-examples/
// jQuery got their own validation



// formSection.addClass("hide")
// $('.thanksClass').removeClass("hide")
// $('#continueBtn').on('click', ()=> {
//     form.submit()
// })