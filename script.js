const burger = document.getElementById('burger')
        const mobile = document.getElementById('mobile')

        burger.addEventListener('click', () => {
            mobile.classList.toggle('show')
            mobile.classList.toggle('hide')
            burger.classList.toggle('btnn')
        })