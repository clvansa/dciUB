let spacing = document.getElementById('spacing');
let blur = document.getElementById('blur');
let color = document.getElementById('base');

spacing.addEventListener('change',()=>{
document.documentElement.style.setProperty('--spacing',spacing.value + 'px')
})


blur.addEventListener('change',()=>{
    document.documentElement.style.setProperty('--blur',blur.value + 'px')
    })



color.addEventListener('change',()=>{
    document.documentElement.style.setProperty('--base',color.value)
    })