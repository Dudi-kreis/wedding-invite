const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        invitation.classList.remove("hidden");
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }, 700);
});