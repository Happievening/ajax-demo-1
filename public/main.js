btnCSS.onclick = () => {
  let req = new XMLHttpRequest()
  req.open("GET", "style.css")
  req.onreadystatechange = ()=>{
      if(req.readyState === 4 && req.status === 200){
        let res = req.response
        let d = document.createElement("style")
        d.innerHTML = res
        document.head.appendChild(d)
      }
  }
  req.send()
};

btnJS.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", "2.js")
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            let res = req.response
            let d = document.createElement("script")
            d.innerHTML = res
            document.body.appendChild(d)
        }    
    }
    req.send()
}

btnHTML.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", "3.html")
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            let res = req.response
            let d = document.createElement("div")
            d.innerHTML = res
            document.body.appendChild(d)
        }    
    }
    req.send()
}


btnXML.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", "4.xml")
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            //XML解析的时候用responseXML
            let res = req.responseXML
            let d = document.createElement("div")
            console.log(res)
            d.innerHTML = res.getElementsByTagName("warning")[0].textContent
            document.body.appendChild(d)
        }    
    }
    req.send()
}

btnJSON.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", "5.json")
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            let res = req.response
            alert(JSON.parse(res)[0].name);
        }    
    }
    req.send()
}

let page = 1

const checkBtnAvailbility = ()=>{
    if(page === 1){
        btnPrev.setAttribute("disabled","")
    }
    if(page === 3){
        btnNext.setAttribute("disabled","")
    }
    if(page > 1 && page < 3){
        btnPrev.removeAttribute("disabled")
        btnNext.removeAttribute("disabled")
    }
}

checkBtnAvailbility()


btnPrev.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", `page${page - 1}`);
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            let res = JSON.parse(req.response)
            document.getElementById("list").innerHTML = res.map((item) => `<li>${item.id}</li>`).join('')
            page -= 1
            checkBtnAvailbility();
        }    
    }
    req.send()
}


btnNext.onclick = ()=>{
    let req = new XMLHttpRequest()
    req.open("GET", `page${page + 1}`);
    req.onreadystatechange = ()=>{
        if(req.readyState === 4 && req.status === 200){
            let res = JSON.parse(req.response)
            document.getElementById("list").innerHTML = res.map((item) => `<li>${item.id}</li>`).join('')
            page += 1
            checkBtnAvailbility();
        }    
    }
    req.send()
}