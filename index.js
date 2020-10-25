const someHost = "https://static-links-page.signalnerve.workers.dev"
const links =[{name: "amazon" ,
link:"https://www.amazon.com/"},
{name: "google" ,
            link:"https://www.google.com/"},
{name: "cloudflare" ,
            link:"https://developers.cloudflare.com/workers/learning/getting-started#4b-routing-and-filtering-requests"}
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
      element.setAttribute('src' , 'https://di-uploads-pod15.dealerinspire.com/orangecoastchryslerjeepdodgeram/uploads/2019/12/2020-Dodge-Challenger-Costa-Mesa-CA-grey-Left.jpg')
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




