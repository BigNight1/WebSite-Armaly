import React from "react";

const Comments = () => {
  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v20.0&appId=823013262921057"
        nonce="DHgoNINe"
      ></script>
      <div class="fb-comments" data-href="https://web-site-armaly.vercel.app/" data-width="" data-numposts="5"></div>
    </div>
  );
};

export default Comments;
