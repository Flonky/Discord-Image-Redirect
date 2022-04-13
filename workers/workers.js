async function handleRequest(request) {
    const userAgent = request.headers.get('User-Agent') || '';
    if (!userAgent.includes('discordapp')) {
        return Response.redirect('https://blog.flky.dev');
    }
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  