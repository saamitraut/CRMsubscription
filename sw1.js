self.addEventListener("push", (event) => {
  let res2 = event.data.json();
  //   console.log(res2.msg);
  //   console.log(res2.body);
  var options = {
    body: res2.body,
    icon: "https://extraordinary-selkie-f925b7.netlify.app/images/mozilla-firefox-icon-logo-png-3.png",
    vibrate: [100, 50, 100],
    image: "https://extraordinary-selkie-f925b7.netlify.app/images/banner.png",
    actions: [
      {
        action: "coffee-action",
        title: "Coffee",
        // icon: "images/cofee.png",
      },
    ],
    data: { primaryKey: 1 },
  };

  event.waitUntil(self.registration.showNotification(res2.msg, options));
});

self.addEventListener("notificationclick", function (event) {
  if (!event.action) {
    // Was a normal notification click
    console.log("Notification Click.");
    return;
  }

  switch (event.action) {
    case "coffee-action":
      console.log("User ❤️️'s coffee.");
      break;
    case "doughnut-action":
      console.log("User ❤️️'s doughnuts.");
      break;
    case "gramophone-action":
      console.log("User ❤️️'s music.");
      break;
    case "atom-action":
      console.log("User ❤️️'s science.");
      break;
    default:
      console.log(`Unknown action clicked: '${event.action}'`);
      break;
  }
});
