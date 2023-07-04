export function labelUp() {
    const inputs = document.querySelectorAll('.forms__item input')
    inputs.forEach(i => i.addEventListener('focus', (e) => {
        e.target.parentNode.childNodes[1].style.animation = 'label-up 0.2s ease-in-out 1 normal forwards'
    }))
}

export function labelDown() {
    const inputs = document.querySelectorAll('.forms__item input')
    inputs.forEach(i => i.addEventListener('blur', (e) => {
        e.target.parentNode.childNodes[1].style.animation = 'label-down 0.2s ease-in-out 1 normal forwards'
    }))
}