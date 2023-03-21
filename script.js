
    // var url = window.location.href; // URL de la page courante
    var url = 'https://www.linkedin.com/posts/lanignancabinet_vousmaezriteznotreexpertise-vmne-oif-activity-7043590580588670976-Gm-L?utm_source=share&utm_medium=member_desktop';
    let title = document.querySelector('meta[property="og:title"]').getAttribute("content"); // Titre de l'article
    let description = document.querySelector('meta[property="og:description"]').getAttribute("content"); // Description de l'article
    let image = document.querySelector('meta[property="og:image"]').getAttribute("content"); // Image de l'article
  
    // Partager sur Facebook
    // var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    
    // Partager sur Twitter
    // var twitterUrl = 'https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
function shareLinkedin() { 
    // Partager sur LinkedIn
    let linkedinUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description) + '&source=' + encodeURIComponent(window.location.hostname);
    
    // Ouvrir une nouvelle fenêtre pop-up pour chaque réseau social
    // window.open(facebookUrl, 'Partager sur Facebook', 'width=600,height=500');
    // window.open(twitterUrl, 'Partager sur Twitter', 'width=600,height=500');
   window.open(linkedinUrl, 'Partager sur LinkedIn', 'width=600,height=500');
}