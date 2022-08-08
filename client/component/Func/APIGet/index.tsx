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

export interface GetIntroProp
{
    id_typephim:any;
    limit:any;
    offset:any;
}
export interface GetIntroGenreProp
{
    link:any;
    limit:any;
    offset:any;
}
export interface GetIntroTheLoaiProp
{
    id_theloai:any;
    limit:any;
    offset:any;
}

export interface GetIntroSearchProp
{
    s_search:any;
    limit:any;
    offset:any;
}

export const APIGetTheLoai=()=>{
    return MethodGet("/api/theloai")
}
export const APIGetCountry=()=>{
    return MethodGet("/api/country")
}

export const APIGetIntro=(param:GetIntroProp)=>{
    const {id_typephim,limit,offset}=param
    let url="/api/introfilm?id_typephim="+id_typephim
    if(limit)
    {
        url=url+"&limit="+limit
    }
    if(offset)
    {
        url=url+"&offset="+offset
    }
    return MethodGet(url)
}

export const APIGetIntroGenre=(param:GetIntroGenreProp)=>{
    const {link,limit,offset}=param
    let url="/api/genre?link="+link
    if(limit)
    {
        url=url+"&limit="+limit
    }
    if(offset)
    {
        url=url+"&offset="+offset
    }
    return MethodGet(url)
}
export const APIGetIntroCountry=(param:GetIntroGenreProp)=>{
    const {link,limit,offset}=param
    let url="/api/intro-country?link="+link
    if(limit)
    {
        url=url+"&limit="+limit
    }
    if(offset)
    {
        url=url+"&offset="+offset
    }
    return MethodGet(url)
}
export const APIGetIntroSearch=(param:GetIntroSearchProp)=>{
    const {s_search,limit,offset}=param
    let url="/api/intro-search?s_search="+s_search
    if(limit)
    {
        url=url+"&limit="+limit
    }
    if(offset)
    {
        url=url+"&offset="+offset
    }
    return MethodGet(url)
}

export const APIGetIntroTheLoai=(param:GetIntroTheLoaiProp)=>{
    const {id_theloai,limit,offset}=param
    let url="/api/intro-theloai?id_theloai="+id_theloai
    return MethodGet(url)
}
export const APIGetCarousel=()=>{
    return MethodGet("/api/carousel")
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

export const APIGetUpdateView=(param:IntroLinkProp)=>{
    const {link} = param
    return MethodGet("/api/update-views?link="+link)
}
const MethodGet=async(url:string)=>{
    let ret = await axios({
        method:"GET",
        url:"http://localhost:3000"+url
    })
    return ret.data
}