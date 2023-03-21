
    let baseUrlLinkedin = 'https://www.linkedin.com/posts/lanignancabinet_vousmaezriteznotreexpertise-vmne-oif-activity-7043590580588670976-Gm-L?utm_source=share&utm_medium=member_desktop';
    let baseUrlFacebook = 'https://www.facebook.com/lanignancabinet/posts/pfbid02uupCn91sxGEVioUWweXzVDpLJSLXy5oYAvJNXkRBYQTZwuRg4s8N5myaMFKds44Kl';
    let title = document.querySelector('meta[property="og:title"]').getAttribute("content"); // Titre de l'article
    let description = document.querySelector('meta[property="og:description"]').getAttribute("content"); // Description de l'article
    let image = document.querySelector('meta[property="og:image"]').getAttribute("content"); // Image de l'article
  
    // Partager sur Twitter
    // var twitterUrl = 'https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
function shareLinkedin() { 
    // Partager sur LinkedIn
    let linkedinUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(baseUrlLinkedin) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description) + '&source=' + encodeURIComponent(window.location.hostname);

   window.open(linkedinUrl, 'Partager sur LinkedIn', 'width=600,height=500');
}

function shareFacebook() { 
    let facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(baseUrlFacebook);

   window.open(facebookUrl, 'Partager sur Facebook', 'width=600,height=500');
}