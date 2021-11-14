

function my_func(){
    const input_img = document.getElementById('image-input')
    let conf = window.confirm('شما فقط ۳ عمس مستولنید برای مخصوبات انتهابکند')
    if (conf){
        input_img.click()
    }

}


function submit(){
    const submit_btn = document.getElementById('submit-btn')
    let conf = window.confirm('شما فقط ۳ عمس مستولنید برای مخصوبات انتهابکند')
    if (conf){
        submit_btn.click()
    }

}
