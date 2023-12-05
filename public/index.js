window.addEventListener('load', function () {
  let ccEverywhere;

  const script = document.createElement('script');
  script.src = 'https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js';
  script.async = true;

  script.onload = () => {
    document.getElementById('initialize').onclick = async () => {
        ccEverywhere = await window.CCEverywhere.initialize({
          clientId: 'client-id',
          appName: 'app-name',
        });
    }

    document.getElementById('terminate').onclick = () => {
      const terminate = ccEverywhere.terminate();
    }
  };

  document.body.appendChild(script);
})
