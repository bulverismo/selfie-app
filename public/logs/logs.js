getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const name = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');

    name.textContent = `nome: ${item.name}`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = 'Image.';

    root.append(name, date, image);
    document.body.append(root);
  }
  console.log(data);
}
