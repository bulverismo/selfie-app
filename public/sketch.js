function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(160, 120);

  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const name = document.getElementById('name').value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { name, image64 };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });

}
