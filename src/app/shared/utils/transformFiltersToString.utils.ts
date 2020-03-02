export function transformFilterToString(params:Object){
    var out = "";
    for(const [campo,valor] of Object.entries(params)){
        if(valor !== "")
        {
            if(out!==""){
                out += "&";
            }
            out += `?${campo}=?${valor}`;    
        }
    }
    return out
}