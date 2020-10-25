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
  constructor(link) {
    this.link = link
    console.log(link, 'inside constructor', this.link)
  }
  
  async element(element) {
    console.log('inside element', element.tagName)
    if(element.getAttribute('id') == 'links'){
      console.log(element.getAttribute('id'))
      element.prepend("<a></a>", {html:true})
      element.prepend("<a></a>", {html:true})
      element.prepend("<a></a>", {html:true})
    }

  }
}
const rewriter = new HTMLRewriter()
  .on("div#links", new LinksTransformer('id'))
  



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




