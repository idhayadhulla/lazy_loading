function preload_image(img) {
  img.src = img.dataset.src;
  console.log(`Loading ${img.src}`);
}

const config_opts = {
  rootMargin: '200px 200px 200px 200px'
};

let observer = new IntersectionObserver(function(entries, self) {
  for(entry of entries) { 
    if(entry.isIntersecting) return ;{
      // let elem = entry.target;
      // preload_image(elem);   
      // self.unobserve(elem);
      entry.target.src=entry.target.dataset.src;
      entry.target.addEventListener('load',()=>{
      	entry.target.classList.remove("lazy-load")
      })

    }
  }
}, config_opts);

let images = document.querySelectorAll('img.lazy-load');

for(image of images) {
  observer.observe(image);
}