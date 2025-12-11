let html_inp = document.getElementById('input');
let html_btn = document.getElementById('btn');

const Datas = async () => {
  let search = html_inp.value.trim(); 

  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=KfpqKSLF1wwJencONCA3eHHwQge0_eE5StZNnsbJNuU`
  );
  let result = await response.json();
  let photos = [];
  photos.push(result.results);
  console.log(photos);
  RenderPhotos(photos);
};

const RenderPhotos = (photos) => { 
   const container = document.getElementById("photos-container");
  container.innerHTML = "";
  photos[0].forEach(photo => {
    let html_div = document.createElement('div');
   html_div.className = "photo-card"; 
    html_div.innerHTML = `
      <div class="card" style="width: 351px;">
        <img src="${photo.urls.regular}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${photo.user.name}</h5>
          <p class="card-text">${photo.alt_description || "No description"}</p>
          <a href="${photo.links.html}" target="_blank" class="btn btn-primary">View</a>
        </div>
      </div>
    `;
    document.body.append(html_div);
  });
};