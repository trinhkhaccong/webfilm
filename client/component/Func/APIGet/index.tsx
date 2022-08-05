import axios from "axios"
export interface IntroLinkProp
{
    link:string;
}
export interface GetWatchFilmProp
{
    root_link:any;
    episode:any;
}

export interface GetEpisodeProp
{
    root_link:any;

}
export const APIGetTheLoai=()=>{
    return MethodGet("/api/theloai")
}
export const APIGetCountry=()=>{
    return MethodGet("/api/country")
}
export const APIGetIntro=()=>{
    return MethodGet("/api/introfilm")
}
export const APIGetIntroLink=(param:IntroLinkProp)=>{
    const {link} = param    
    return MethodGet("/api/introlink?link="+link)
}
export const APIGetWatchFilm=(param:GetWatchFilmProp)=>{
    const {root_link,episode} = param
    let url = "/api/watchfilm?root_link="+root_link
    if(episode)
    {
        url = "/api/watchfilm?root_link="+root_link+"&episode="+episode

    }
    return MethodGet(url)
}
export const APIGetEpisode=(param:GetEpisodeProp)=>{
    const {root_link} = param
    return MethodGet("/api/episode?root_link="+root_link)
}

const MethodGet=async(url:string)=>{
    let ret = await axios({
        method:"GET",
        url:"http://localhost:3000"+url
    })
    return ret.data
}