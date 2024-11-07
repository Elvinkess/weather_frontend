import { IApiCall, IOptions } from "../../usecase/interfaces/api_call";


export class ApiCall implements IApiCall {
    async call<T>(url: string, options?: IOptions): Promise<T> {
        console.log(url)
        console.log('started')
        //where T is a generic type(when you dont know what type to expect)
        let response = await fetch(url, {
            method : options?.method,
            body: options?.bodyContent,
            headers: options?.headerList
        })

        if(response.ok){
            console.log({'status': url})
            return response.json() as T
            
        }
        console.log(`${response.statusText} ${response.status}`)
        throw new Error(`${response.statusText} ${response.status}`)
    }

}
