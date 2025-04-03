// Corona case

async function getCovidApi(){
    const jsonData = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true.');
  
    const data = await jsonData.json();
    console.log(data);
    const ActiveCase = data.activeCases;
    const RecoverCase = data.recovered;
    const DeathCase = data.deaths;
  
    document.querySelector('.recoverCase').innerHTML = RecoverCase;
    document.querySelector('.deathCase').innerHTML = DeathCase;
    document.querySelector('.activeCase').innerHTML = ActiveCase;
  
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
  };
  
  }
  
  // Accordian
  
  
  var accordions = document.getElementsByClassName("accordion");
   
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
      this.classList.toggle('is-open');
   
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        // accordion is currently open, so close it
        content.style.maxHeight = null;
      } else {
        // accordion is currently closed, so open it
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  }
  
  // Toggle
  function list_1(){
      document.querySelector('#accordian-1').style.display = 'block';
      document.querySelector('#accordian-2').style.display = 'none';
      document.querySelector('#accordian-3').style.display = 'none';
      document.querySelector('#accordian-4').style.display = 'none';
      document.querySelector('#accordian-5').style.display = 'none';
      document.querySelector('#accordian-6').style.display = 'none';
  }
  
  function list_2(){
      document.querySelector('#accordian-2').style.display = 'block';
      document.querySelector('#accordian-3').style.display = 'none';
      document.querySelector('#accordian-1').style.display = 'none';
      document.querySelector('#accordian-4').style.display = 'none';
      document.querySelector('#accordian-5').style.display = 'none';
      document.querySelector('#accordian-6').style.display = 'none';
  
  }
  function list_3(){
      document.querySelector('#accordian-3').style.display = 'block';
      document.querySelector('#accordian-2').style.display = 'none';
      document.querySelector('#accordian-1').style.display = 'none';
      document.querySelector('#accordian-4').style.display = 'none';
      document.querySelector('#accordian-5').style.display = 'none';
      document.querySelector('#accordian-6').style.display = 'none';
  }
  function list_4(){
      document.querySelector('#accordian-4').style.display = 'block';
      document.querySelector('#accordian-3').style.display = 'none';
      document.querySelector('#accordian-2').style.display = 'none';
      document.querySelector('#accordian-1').style.display = 'none';
      document.querySelector('#accordian-5').style.display = 'none';
      document.querySelector('#accordian-6').style.display = 'none';
  }
  function list_5(){
      document.querySelector('#accordian-5').style.display = 'block';
      document.querySelector('#accordian-4').style.display = 'none';
      document.querySelector('#accordian-3').style.display = 'none';
      document.querySelector('#accordian-2').style.display = 'none';
      document.querySelector('#accordian-1').style.display = 'none';
      document.querySelector('#accordian-6').style.display = 'none';
  }
  function list_6(){
      document.querySelector('#accordian-6').style.display = 'block';
      document.querySelector('#accordian-5').style.display = 'none';
      document.querySelector('#accordian-4').style.display = 'none';
      document.querySelector('#accordian-3').style.display = 'none';
      document.querySelector('#accordian-2').style.display = 'none';
      document.querySelector('#accordian-1').style.display = 'none';
  }
  
  
  
  
  // Hamburger
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-list");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  const navLink = document.querySelectorAll(".nav-item");
  
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }