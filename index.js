const someHost = "https://static-links-page.signalnerve.workers.dev"
const links =[
  {name: "Linked-in" ,
link:"https://www.linkedin.com/in/aishwarya-sharma-70564bb4/"},
{name: "Rent-it-mate" ,
            link:"https://rent-it-mate.herokuapp.com/"},
{name: "Github" ,
            link:"https://github.com/SharmaAishwarya"},
{name: "Card-Game" ,
            link:"https://fall2020-team01-sprint3.herokuapp.com/"}
]
/**
 * Class to transform html
 */
class LinksTransformer {
  constructor(attributeName) {
    this.attributeName = attributeName
    console.log(attributeName, 'inside constructor', this.attributeName)
  }
  
  async element(element) {
    console.log('inside element', element.tagName == 'div')

    if(element.getAttribute('id') == 'links'){
      console.log(element.getAttribute('id'))
      for(var index = 0 ; index < links.length; index++){
        element.prepend("<a id="+links[index].name+" href="+links[index].link+">"+links[index].name+"</a>", {html:true})
      }
    }if(element.getAttribute('id') == 'avatar'){
      element.setAttribute('src' , 'https://github.com/SharmaAishwarya/MyWorkersProject/blob/master/asset/IMG_6633.JPG')
    }if(element.getAttribute('id') == 'profile'){
      element.removeAttribute('style')
    }if(element.getAttribute('id') == 'name'){
      element.prepend("Aishwarya Sharma", {html:false})
    }
    
  }
}
const rewriter = new HTMLRewriter()
  .on("div#links", new LinksTransformer('id'))
  .on("div#profile", new LinksTransformer('style'))
  .on("img#avatar", new LinksTransformer('src'))
  .on("h1#name", new LinksTransformer('id'))
  



/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }

  if(request.method == "GET" && request.url.match('json-api.aishwaryasharma8961.workers.dev/links')){
    return new Response(JSON.stringify(links),{
      headers:{'content-type': 'application/json'}
    })
  } else {
    const res = await fetch(someHost,{
      headers: {
        "content-type": "text/html;charset=UTF-8",
      }
    })
    return rewriter.transform(res)
  }
  
  
}
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})




