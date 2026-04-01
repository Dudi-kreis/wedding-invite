const envelope = document.getElementById("envelope");
const sealButton = document.getElementById("sealButton");
const invitation = document.getElementById("invitation");

let opened = false;

function openInvitation() {
    if (opened) return;

    opened = true;
    envelope.classList.add("open");

    setTimeout(() => {
        invitation.classList.remove("hidden");
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 950);
}

sealButton.addEventListener("click", openInvitation);

sealButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openInvitation();
    }
});