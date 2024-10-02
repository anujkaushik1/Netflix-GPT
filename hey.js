const anuj = () => {
    return new Error('hey er')
}

function main(){
    const h = anuj()
    if(h instanceof Error){
        console.log('wor');
        
    }
    else{
        console.log('mo');
        
    }
}

main()