export function Child(){
    return <h1>Child Component Named Export</h1>;
}
export default function Child2(){
    return <h1>Child2 Component Default Export</h1>;
}


export function Child3(){
    return <h1>Child3 Component Named Export</h1>;
}


  
  //2. Named
//module.export = {Child,Child2}

/*
    {
        //1. P:V
        //2. Method
    }

    var module = {
        export:<Child>
    }

    //module.exports is a JS Object {}
*/