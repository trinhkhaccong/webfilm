import axios from "axios"
interface IntroLinkProp
{
    link:string;
}
export const APIGetTheLoai=()=>{
    return MethodGet("/get/theloai")
}
export const APIGetCountry=()=>{
    return MethodGet("/get/country")
}
export const APIGetIntro=()=>{
    return MethodGet("/get/introfilm")
}
export const APIGetIntroLink=(param:IntroLinkProp)=>{
    const {link} = param
    console.log("link",link);
    
    return MethodGet("/get/introlink?link="+link)
}
const MethodGet=async(url:string)=>{
    let ret = await axios({
        method:"GET",
        url:"http://localhost:5000"+url
    })
    return ret.data
}