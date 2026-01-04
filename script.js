function showInfo(avatar) {
    let info = " ";
    switch(avatar) {
        case "matsya":
            info="🐟 Matsya Avatar saved the Vedas and humanity from a great flood, symbolizing divine protection 🌊📜";
            break;
        case "kurma":
            info="🐢 Kurma Avatar supported Mount Mandara during Samudra Manthan, teaching patience and stability 🏔️";
            break;
        case "varaha":
            info="🐗 Varaha Avatar rescued Mother Earth from the cosmic ocean, showing divine strength 🌍💪";
            break;
        case "narasimha":
            info="🦁 Narasimha Avatar protected Prahlada and destroyed evil, proving faith always wins 🔥🙏";
            break;
        case "vamana":
            info="🧒 Vamana Avatar humbled King Mahabali, teaching that ego fades before humility 👣✨";
            break;
        case "parashurama":
            info="🪓 Parashurama Avatar restored justice by ending arrogance and oppression ⚔️";
            break;
        case "rama":
            info="🏹 Lord Rama lived as the ideal human, teaching truth, duty, and sacrifice 🌿👑";
            break;
        case "krishna":
            info="🪈 Lord Krishna guided humanity through love and the Bhagavad Gita 💙📖";
            break;
        case "buddha":
            info="☸️ Buddha Avatar spread compassion and non-violence, guiding people to peace 🕊️";
            break;
        case "kalki":
            info="⚔️ Kalki Avatar will appear to destroy evil and restore dharma at the end of Kali Yuga 🔥🌅";
            break;
        case "buddha":
            info = "☸️ Buddha Avatar spread compassion and non-violence, guiding people to peace 🕊️";
            break;
        case "venkateswara":
            info="🛕 Lord Venkateswara of Tirumala blesses devotees in Kali Yuga, removing sins and granting peace 🙏✨";
            break;
    }
    document.getElementById("infoBox").innerHTML="<p>" + info + "</p>";
}