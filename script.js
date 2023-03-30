const width = 600,
      height = 500,
      left_position = (window.innerWidth - width) / 2,
      top_position = (window.innerHeight - height) / 2;

let url = window.location.href;
     title = document.querySelector('meta[property="og:title"]').getAttribute("content"),
     description = document.querySelector('meta[property="og:description"]').getAttribute("content"),
     image = document.querySelector('meta[property="og:image"]').getAttribute("content");

// Partager sur Twitter
// var twitterUrl = 'https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);

let button = document.querySelector("button");
let copyText = document.querySelector(".copy-txt");

button.addEventListener("click", () => { 
    let link =  window.location.protocol + '//' + window.location.hostname + window.location.pathname;
    let root = window.location.origin;
    let filteredUrl = link.replace(root, '');
    navigator.clipboard.writeText(link);
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function() {
        copyText.classList.remove("active");
    }, 2000)
})

function shareLinkedin() {
    let linkedinUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description) + '&source=' + encodeURIComponent(window.location.hostname);

    window.open(linkedinUrl, 'Partager sur LinkedIn', 'width=' + width + ',height=' + height + ',left=' + left_position + ',top=' + top_position);
}

function shareFacebook() {
    let facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

    window.open(facebookUrl, 'Partager sur Facebook', 'width=' + width + ',height=' + height + ',left=' + left_position + ',top=' + top_position);
}
