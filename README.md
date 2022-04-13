#  Discord Image Redirect Demo 

A demo that shows how easy it is to send unsuspcting users to a scam site via an picture.


## Setup

#### Step 1
Fork this repository and let cloudflare pages or any other website hosting platform deploy the `/public/` folder (under your [sub-]domain of course).

#### Step 2
Head over to your Cloudflare dashboard and create a new worker from the code in `workers.js` in the `/workers/` directory.

#### Step 3
Set the worker to the domain you wish to redirect and you're done!
