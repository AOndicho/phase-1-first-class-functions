const receivesAFunction=function (callback){
    callback()

}

const returnsAnAnonymousFunction= function(){
    return function () {
        console.log('labs')
    }
}

const returnsANamedFunction= function(){
    return function tests(){
        console.log('tests')
    }
}

