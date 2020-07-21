import('./index.scss')
import afn from './a'

afn()

document.getElementById('img')

if(process.env.NODE_ENV === 'development'){
    console.log('baseurl is localhost')
} else {
    console.log('baseurl is imooc.com')
}