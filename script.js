const width = 600,
      height = 500,
      left_position = (window.innerWidth - width) / 2,
      top_position = (window.innerHeight - height) / 2;

let baseUrlLinkedin = 'https://www.linkedin.com/posts/lanignancabinet_vousmaezriteznotreexpertise-vmne-oif-activity-7043590580588670976-Gm-L?utm_source=share&utm_medium=member_desktop',
    baseUrlFacebook = 'https://www.facebook.com/lanignancabinet/posts/pfbid02uupCn91sxGEVioUWweXzVDpLJSLXy5oYAvJNXkRBYQTZwuRg4s8N5myaMFKds44Kl',
     title = document.querySelector('meta[property="og:title"]').getAttribute("content"),
     description = document.querySelector('meta[property="og:description"]').getAttribute("content"),
     image = document.querySelector('meta[property="og:image"]').getAttribute("content");


let button = document.querySelector("button");
let copyText = document.querySelector(".copy-txt");

button.addEventListener("click", () => {
    let link = window.location.href;
    let root = window.location.origin;
    let filteredUrl = link.replace(root, '');
    navigator.clipboard.writeText(filteredUrl);
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function() {
        copyText.classList.remove("active");
    }, 2000)
})

function shareLinkedin() {
    let linkedinUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(baseUrlLinkedin) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description) + '&source=' + encodeURIComponent(window.location.hostname);

    window.open(linkedinUrl, 'Partager sur LinkedIn', 'width=' + width + ',height=' + height + ',left=' + left_position + ',top=' + top_position);
}

function shareFacebook() {
    let facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(baseUrlFacebook);

    window.open(facebookUrl, 'Partager sur Facebook', 'width=' + width + ',height=' + height + ',left=' + left_position + ',top=' + top_position);
}