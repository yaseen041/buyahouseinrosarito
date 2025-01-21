


export class api {
    static async Get(url,header){
        try {
            const response = await fetch(url,{headers:header})
            if(response.ok){
                const data = await response.json()
                return data
            }else{
                return response
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    static async Post(url,data,header){
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:header,
            body:data
        })
        if(response.ok){
            const data = await response.json()
            return data
        }else{
            return response
        }
    } catch (error) {
        console.log(error)
        throw error
    }
    }

}
