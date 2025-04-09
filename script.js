const counters = document.querySelectorAll('.counter');
  const speed = 100;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
 // Show after 5 seconds
 setTimeout(function() {
  document.getElementById("discountOffer").style.display = "block";
}, 5000); // 5 seconds delay

// Close the offer on clicking the cross
document.getElementById("closeOffer").addEventListener("click", function() {
  document.getElementById("discountOffer").style.display = "none";
});


AOS.init();
AOS.init();


  // List of names, cities and activity
  const users = [
    { name: "Ali", city: "Lahore", activity: "jumping slide" },
    { name: "Aliya", city: "Bhawalpur", activity: "jumping castle" },
    { name: "Ahmed", city: "Karachi", activity: "inflatable bounce house" },
    { name: "Sara", city: "Islamabad", activity: "jumping trampoline" },
    { name: "Kashan", city: "Rawalpindi", activity: "jumping castle angry bird" },
    { name: "Fatima", city: "Multan", activity: "bouncy house" },
    { name: "Abdul-Rehman", city: "Islamabad", activity: "Cartoon Character" },
    { name: "Ismail", city: "Islamabad", activity: "Cartoon Character" },
    { name: "Rehan", city: "Islamabad", activity: "jumping slide Micky mouse" },
    { name: "Ibrahim", city: "Islamabad", activity: "jumping slide Micky mouse" },
    { name: "rizwan khan", city: "Islamabad", activity: "jumping slide Micky mouse" },
    { name: "Issa Khan", city: "Islamabad", activity: "jumping slide Micky mouse" },
    { name: "mussa Khan", city: "Islamabad", activity: "jumping slide Micky Gate" },
    { name: "Zainab Areeb", city: "Islamabad", activity: "jumping slide Micky Gate" },
    { name: "Iqra Faisal", city: "Islamabad", activity: "jumping slide Dora Gate" },
  ];
  
  // Function to display a random notification
  function showNotification() {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const notificationMessage = `${randomUser.name} is buying ${randomUser.activity} from ${randomUser.city}`;
  
    const notificationElement = document.getElementById('notification');
    notificationElement.innerHTML = notificationMessage;
    notificationElement.style.display = 'block';
  
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notificationElement.style.display = 'none';
    }, 3000); // Notification disappears after 3 seconds
  }
  
  // Show a new notification every 5 seconds
  setInterval(showNotification, 7000);



  // form ki coding
  