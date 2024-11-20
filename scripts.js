// Récupération des éléments DOM
const videoElement = document.getElementById('video');
const nextButton = document.getElementById('nextVideo');
const prevButton = document.getElementById('prevVideo');
const videoTitle = document.getElementById('videoTitle');
const menuButton = document.getElementById('menuButton');
const videoMenu = document.getElementById('videoMenu');
const searchBar = document.getElementById('searchBar');
const videoList = document.getElementById('videoList');

// Liste des vidéos avec leurs titres
const videos = [
    { src: 'videos/Venge.mp4', title: 'Ce jeu ne vaut pas Cryzen mais ça va.' },
    { src: 'videos/postez_des_videos.mp4', title: 'Postez des vidéos ! Lien : https://newer-hub.netlify.app/newer-stream/contact' },
    { src: 'videos/minecraft_1.7.10_ep1.mp4', title: 'Minecraft 1.7.10 - Épisode 1' },
    { src: 'videos/bank_robbery.mp4', title: 'Braquer cette banque est vraiment facile.' },
    { src: 'videos/truck_driving.mp4', title: 'Ce jeu est inimaginable !' },
    { src: 'videos/bodycam_1.mp4', title: 'Ce jeu est trop réaliste !' },
    { src: 'videos/cryzen_2.mp4', title: 'C’est mon jeu préféré Cryzen !' },
    { src: 'videos/cryzen_1.mp4', title: 'Let’s play Cryzen, je suis super fort' },
    { src: 'videos/stick_defenders_letsplay.mp4', title: 'Un petit let’s play de Stick Defenders cozy' },
    { src: 'videos/stick_merge_ep1.mp4', title: 'Ce jeu est addictif ! (Stick Merge épisode 1)' },
    { src: 'videos/super_smash_sticks_episode_1.mp4', title: 'Super Smash Sticks épisode 1' },
    { src: 'videos/mv_rally_champions_pc.mp4', title: 'J’adore ce jeu ! Spoiler alert : je suis nul (Rally Champions)' },
    { src: 'videos/sans_algorithme.mp4', title: 'Newer Stream est gentil !' },
    { src: 'videos/presentation.mp4', title: 'Présentation' },
    { src: 'videos/le_jeu_de_la_maitresse_et_du_maivaise_eleve.mp4', title: 'Je ne sais plus le nom du jeu mais voilà' },
    { src: 'videos/cars_remake_teaser.mp4', title: 'Cars remake teaser' },
    { src: 'videos/jumper_shell_ep1.mp4', title: 'Jumper Shell épisode 1' },
    { src: 'videos/doberman_ep1.mp4', title: 'Goober World épisode 1' }
];

let currentIndex = 0;

// Charger et afficher la vidéo
const loadVideo = () => {
    const currentVideo = videos[currentIndex];
    videoElement.src = currentVideo.src;
    videoTitle.textContent = currentVideo.title;
    videoElement.play();
    videoElement.muted = true;
};

// Passer à la vidéo suivante
const nextVideo = () => {
    currentIndex = (currentIndex + 1) % videos.length;
    loadVideo();
};

// Revenir à la vidéo précédente
const prevVideo = () => {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    loadVideo();
};

// Ouvrir/fermer le menu des vidéos
menuButton.addEventListener('click', () => {
    videoMenu.style.display = (videoMenu.style.display === 'none' || videoMenu.style.display === '') ? 'flex' : 'none';
});

// Filtrer la liste des vidéos selon la recherche
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    renderVideoList(filteredVideos);
});

// Rendre la liste des vidéos
const renderVideoList = (videosToRender) => {
    videoList.innerHTML = '';
    videosToRender.forEach((video, index) => {
        const li = document.createElement('li');
        li.textContent = video.title;
        li.addEventListener('click', () => {
            currentIndex = index;
            loadVideo();
            videoMenu.style.display = 'none'; // Fermer le menu après sélection
        });
        videoList.appendChild(li);
};

// Afficher la liste des vidéos au chargement
window.addEventListener('load', () => {
    loadVideo();
    renderVideoList(videos);
});
