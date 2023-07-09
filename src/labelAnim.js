import {inputs} from './inputs.js'

export function labelUp() {
    inputs.forEach(i => i.addEventListener('focus', (e) => {
        e.target.parentNode.childNodes[1].style.animation = 'label-up 0.5s ease-in-out 1 normal forwards'
    }))
}

export function labelDown() {
    inputs.forEach(i => i.addEventListener('blur', (e) => {
        if (e.target.value !== '') return
        e.target.parentNode.childNodes[1].style.animation = 'label-down 0.5s ease-in-out 1 normal forwards'
    }))
}