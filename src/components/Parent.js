//import something from something
import Child2, { Child,Child3 } from "./Child";

export default function Parent(){
    return <>
                    (<h1>
                        Parent <Child /> 
                            <Child2 />
                            <Child3 />
                    </h1>
                    <h2>My Compoent</h2>
                     )
            </>
           
}

//export 

//1 Defaults

//2. Named