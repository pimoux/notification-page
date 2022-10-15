const unseenNotifs = document.querySelectorAll(".notif:not(.notif-seen)");
const markAsRead = document.querySelector("#mark-as-read");
const notifNumber = document.querySelector("#notification-number");
let isMarkedAsRead = false;
const baseUnseenNotifsLength = unseenNotifs.length;

const markNotifsAsRead = () => {
  if (!isMarkedAsRead) {
    unseenNotifs.forEach((elt) => {
      elt.classList.add("notif-seen");
      const message = elt.querySelector(".notif-message");
      const unseen = message.querySelector(".unseen");
      message.removeChild(unseen);
    });
    let totalNumberElt = unseenNotifs.length;
    const decrementInterval = setInterval(() => {
      if (totalNumberElt === 0) {
        clearInterval(decrementInterval)
      } else {
        totalNumberElt -= 1;
        notifNumber.textContent = totalNumberElt;
      }
    }, 500 / baseUnseenNotifsLength)
    isMarkedAsRead = true;
  }
};

markAsRead.addEventListener("click", markNotifsAsRead);
