// Array of image filenames (make sure these exist in your repo under /images/)
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

const gallery = document.getElementById('gallery');
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const closeBtn = document.getElementById('close');

// Loop to add images to gallery
images.forEach((filename) => {
  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => showImage(filename));
  gallery.appendChild(img);
});

// Function to open viewer
function showImage(filename) {
  viewerImg.src = `images/${filename}`;
  viewer.classList.remove('hidden');
}

// Close viewer when X is clicked
closeBtn.addEventListener('click', () => {
  viewer.classList.add('hidden');
  viewerImg.src = '';
});
