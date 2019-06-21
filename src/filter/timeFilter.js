export default (value)=>{
    const time=new Date(value)
    return time.toLocaleString(['en-US'],{hour:'2-digit',
        minute:'2-digit'
    })
}