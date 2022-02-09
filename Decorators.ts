
function Decorators( tag: string, data: any){
    console.log(`<${tag}>${data}</${tag}>`)
}

Decorators('h1','This is header')
