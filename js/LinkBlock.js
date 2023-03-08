const linksData = [
    {
        id: 1,
        name: "Love Family",
        platform: "Facebook",
        platformLink: "https://www.facebook.com/Lovehobbyandrepair"
    },
    {
        id: 2,
        name: "Love Family",
        platform: "Instagram",
        platformLink: "https://www.instagram.com/shopmadebylove"
    },
    {
        id: 3,
        name: "Love Family",
        platform: "Gmail",
        platformLink: "lovefamllc@gmail.com"
    },
    {
        id: 4,
        name: "Love Family",
        platform: "Phone",
        platformLink: "+15802168694"
    }
];

const linksPart = document.querySelector(".linksPart");

linksData.forEach((linkData) => {
    const linkBlock = document.createElement("a");

    if (linkData.platform === "Gmail") {
        linkBlock.href = `mailto:${linkData.platformLink}`;
        linkBlock.target = "_self";
    } else if (linkData.platform === "Phone") {
        linkBlock.href = `tel:${linkData.platformLink}`;
        linkBlock.target = "_self";
    } else {
        linkBlock.href = linkData.platformLink;
        linkBlock.target = "_blank";
    }

    linkBlock.classList.add("linkBlock");

    const linkName = document.createElement("h3");
    linkName.classList.add("linkName", "linkNameMarginRight");
    linkName.textContent = linkData.name;

    const linkPlatform = document.createElement("h3");
    linkPlatform.classList.add("linkPlatform");
    linkPlatform.textContent = linkData.platform;

    linkBlock.appendChild(linkName);
    linkBlock.appendChild(linkPlatform);
    linksPart.appendChild(linkBlock);
});