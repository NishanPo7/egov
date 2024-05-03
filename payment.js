document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodImages = document.querySelectorAll('.container form .row .col .inputBox .payment-method img');
    const proceedToPayBtn = document.getElementById('proceedToPayBtn');
    const paymentSuccessPopup = document.getElementById('paymentSuccessPopup');

    paymentMethodImages.forEach(image => {
        image.addEventListener('click', function() {
            paymentMethodImages.forEach(img => img.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    proceedToPayBtn.addEventListener('click', function(event) {
        event.preventDefault();
        paymentSuccessPopup.style.display = 'block';
    });
});
