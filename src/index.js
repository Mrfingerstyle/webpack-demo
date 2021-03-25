import x from './x'
import png from './assets/1.png'

console.log(x)
console.log('hi--');

const div = document.getElementById('app')
// delete img tag
// const img = document.createElement('img')
// console.log(png);
// img.src = png
// console.log(img);
// div.appendChild(img)

const btn = document.createElement('button')
btn.innerText = 'lazy loader'

btn.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    }, ()=>{
        console.log('lazy load error');
    })
}

// 点击该按钮采取下载JS文件
div.appendChild(btn)