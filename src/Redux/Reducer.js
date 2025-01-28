

let inttial= {
    "Move":false
}

  export  let MyReducer = ((  state= inttial,{type,payload}   )=>{

    switch (type){

        case "Move":
            return ({...inttial,"Move": true })


        default : return state    


        }



})