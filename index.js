addEventListener('fetch', event => {
  const { request } = event
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  if(request.method == "GET" && request.url.match('json-api.aishwaryasharma8961.workers.dev/links')){
    return new Response(JSON.stringify(links),{
      headers:{'content-type': 'application/json'}
    })
  } else {
    return new Response('Hello worker!', {
      headers: { 'content-type': 'text/plain' },
    })
  }
  
}

var links =[{name: "amazon" ,
link:"https://www.amazon.com/"},
{name: "google" ,
            link:"https://www.google.com/"},
{name: "cloudflare" ,
            link:"https://developers.cloudflare.com/workers/learning/getting-started#4b-routing-and-filtering-requests"}
]