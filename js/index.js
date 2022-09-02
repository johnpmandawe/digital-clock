window.addEventListener('pageshow', function () {
  // set value function
  const setValue = (element, value) => {
    element.innerText = value;
  };

  const runClock = () => {
    // declaring variables and targeting elements
    const now = new Date();
    const hrValidate = now.getHours() % 12 || 12;
    const hr = hrValidate > 9 ? hrValidate : '0' + parseInt(hrValidate + 2);
    const min =
      now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
    const sec =
      now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
    const hrElement = document.querySelector('.hr'),
      minElement = document.querySelector('.min'),
      secElement = document.querySelector('.sec'),
      ampmElement = document.querySelector('.ampm');
    // icon = document.querySelector('.fa');
    const amPm = now
      .toLocaleString('en-US', { hour12: true })
      .split(',')[1]
      .split(' ')[2];
    // const parsedHr = parseInt(hr);
    // setting up a condition for icon renderring
    // setting values
    setValue(hrElement, hr);
    setValue(minElement, min);
    setValue(secElement, sec);
    setValue(ampmElement, amPm);
  };
  // running the main function on page show
  runClock();
  // again, running the main function every second
  setInterval(() => {
    runClock();
  }, 1000);
});
