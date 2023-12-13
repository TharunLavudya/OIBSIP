const ans=document.querySelector("#answer");
const degree=document.querySelector("#celcius");
const button=document.querySelector("#convert");
const type=document.querySelector("#temp-type");

window.addEventListener("load",()=>{
    degree.value="";
    ans.innerHTML="";
})
button.addEventListener("click",(x)=>{
    x.preventDefault();
    fun();
    button.innerHTML="<span>Converting...</span>";
    setTimeout(() =>{
        button.innerHTML="<span>convert</span>";
    },1000)
})

function fun()
{
    const y=degree.value;

    setTimeout(() =>{
        if(type.value==="kelvin"){
            const ctof=Number(y)+273.15;
            ans.innerHTML=`${ctof.toFixed(3)} K`;
        }
        if(type.value=="fahrenheit"){
            const ctof=(y*(1.8))+32;
            ans.innerHTML=`${ctof.toFixed(3)} F`;
        }
       
        
        
    },500)
}
