document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('year').textContent = new Date().getFullYear();

    // Social links data
    const socials = [
        { name: "Twitter", icon: "fab fa-twitter", class: "twitter", url: "https://x.com/miniboiiiiiii" },
        { name: "YouTube", icon: "fab fa-youtube", class: "youtube", url: "https://www.youtube.com/channel/UC16Avs3eE1fSfHqZbZPulrg" },
        { name: "Instagram", icon: "fab fa-instagram", class: "instagram", url: "https://www.instagram.com/miniboi_ig/" },
        { name: "Discord", icon: "fab fa-discord", class: "discord", url: "https://discord.gg/bwKEuDEFrM" },
        { name: "Roblox", icon: "fas fa-gamepad", class: "roblox", url: "https://www.roblox.com/users/1591006467/profile" }
    ];

    
    const socialGrid = document.getElementById('socialGrid');
    
    socials.forEach(social => {
        const socialCard = document.createElement('a');
        socialCard.href = social.url;
        socialCard.target = "_blank";
        socialCard.className = `social-card ${social.class}`;
        
        socialCard.innerHTML = `
            <i class="${social.icon}"></i>
            <span>${social.name}</span>
        `;
        
        socialGrid.appendChild(socialCard);
    });

   
});