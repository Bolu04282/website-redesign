function initMap(){
    let location = { lat:6.6112, lng:3.3402}
    let map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 4,
      center: location
    });
    let marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }
let btnScrollToTop = document.querySelector('.btnToTop');
window.addEventListener('scroll', scrollfunction);

function scrollfunction(){
  if (window.pageYOffset > 300) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

btnScrollToTop.addEventListener('click', function(){
  // window.scrollTo(0,0)

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})
// $(document).ready(function(){
//   $(".btnToTop").click(function(){
//     $(".icon").fadeIn("slow")
//   })
// })