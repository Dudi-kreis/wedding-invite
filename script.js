const fontPresets = {
    romantic: {
        title: '"Cormorant Garamond", serif',
        body: '"Assistant", sans-serif'
    },
    modern: {
        title: '"Heebo", sans-serif',
        body: '"Heebo", sans-serif'
    },
    elegant: {
        title: '"Playfair Display", serif',
        body: '"Assistant", sans-serif'
    },
    bellefair: {
        title: '"Bellefair", serif',
        body: '"Assistant", sans-serif'
    }
};
const invitationData = {
    theme: "bellefair",

    fonts: {
        title: '"Cormorant Garamond", serif',
        body: '"Assistant", sans-serif'
    },
    introLabel: "Wedding Invitation",
    envelopeText: "לחצו על החותמת לפתיחת ההזמנה",

    monogram: "N&A",
    sealText: "N&A",

    heroBadge: "תמונה של הזוג תיכנס כאן",
    heroKicker: "מתרגשים להזמין אתכם",
    coupleNames: "נועה ואלון",
    heroDate: "יום חמישי | 12.09.2026",

    welcomeTitle: "בשעה טובה",
    welcomeText:
        "נשמח לחגוג איתכם את היום הכי מרגש שלנו. הכנו עבורכם הזמנה דיגיטלית קצרה ונוחה, כדי שכל הפרטים יהיו במקום אחד.",

    detailDate: "12.09.2026",
    receptionTime: "19:30",
    ceremonyTime: "20:30",
    venueName: "גן האירועים קדם",
    wazeLink: "https://waze.com/ul?ll=32.1740,34.9070&navigate=yes",
    googleMapsLink: "https://www.google.com/maps?q=32.1740,34.9070",

    closingTitle: "מילה מאיתנו",
    closingText:
        "הנוכחות שלכם תשמח אותנו מאוד. תודה שאתם חלק מהחיים שלנו, ואנחנו כבר מחכים לחגוג איתכם.",

    schedule: [
        {
            time: "19:30",
            title: "קבלת פנים",
            text: "נשנושים, דרינקים ומפגש עם כולם לפני שמתחילים."
        },
        {
            time: "20:30",
            title: "חופה",
            text: "הרגע שלנו, ואנחנו רוצים אתכם איתנו שם."
        },
        {
            time: "21:00",
            title: "ארוחה ומסיבה",
            text: "אוכל טוב, מוזיקה וריקודים עד הלילה."
        }
    ]
};

function applyFonts() {
    const selectedPreset = fontPresets[invitationData.theme];

    if (!selectedPreset) return;

    document.documentElement.style.setProperty(
        "--font-title",
        selectedPreset.title
    );

    document.documentElement.style.setProperty(
        "--font-body",
        selectedPreset.body
    );
}
const introScreen = document.getElementById("introScreen");
const envelope = document.getElementById("envelope");
const sealButton = document.getElementById("sealButton");
const invitation = document.getElementById("invitation");
const timeline = document.getElementById("timeline");

let opened = false;

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function applyInvitationData() {
    applyFonts();
    setText("introLabel", invitationData.introLabel);
    setText("envelopeShortText", invitationData.envelopeText);

    setText("monogram", invitationData.monogram);
    setText("sealText", invitationData.sealText);

    setText("heroBadge", invitationData.heroBadge);
    setText("heroKicker", invitationData.heroKicker);
    setText("coupleNames", invitationData.coupleNames);
    setText("heroDate", invitationData.heroDate);

    setText("welcomeTitle", invitationData.welcomeTitle);
    setText("welcomeText", invitationData.welcomeText);

    setText("detailDate", invitationData.detailDate);
    setText("receptionTime", invitationData.receptionTime);
    setText("ceremonyTime", invitationData.ceremonyTime);
    setText("venueName", invitationData.venueName);

    setText("closingTitle", invitationData.closingTitle);
    setText("closingText", invitationData.closingText);

    const wazeButton = document.getElementById("wazeButton");
    if (wazeButton) {
        wazeButton.href = invitationData.wazeLink;
    }

    const googleMapsButton = document.getElementById("googleMapsButton");
    if (googleMapsButton) {
        googleMapsButton.href = invitationData.googleMapsLink;
    }

    renderSchedule();
}

function renderSchedule() {
    timeline.innerHTML = "";

    invitationData.schedule.forEach((item) => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";

        timelineItem.innerHTML = `
      <div class="timeline-time">${item.time}</div>
      <div class="timeline-content">
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    `;

        timeline.appendChild(timelineItem);
    });
}

function openInvitation() {
    if (opened) return;

    opened = true;
    envelope.classList.add("open");
    introScreen.classList.add("fade-out");

    setTimeout(() => {
        invitation.classList.remove("hidden");

        requestAnimationFrame(() => {
            invitation.classList.add("visible");
            invitation.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }, 850);
}

sealButton.addEventListener("click", openInvitation);

sealButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openInvitation();
    }
});

applyInvitationData();