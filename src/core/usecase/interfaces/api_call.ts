export interface IOptions {
   headerList?:{[key:string]:string}
   bodyContent?:any
   method:"GET" | "POST"
}

export interface IApiCall{
    call <Json>(url: string, options?: IOptions) : Promise<Json>
}