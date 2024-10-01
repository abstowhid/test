document.addEventListener('DOMContentLoaded', function () {
  const rabitDiv = document.querySelector('.the_rabit');
  const joinOnDiv = document.querySelector('.join_on');
  const dollDiv = document.querySelector('.doll');
  const chartParagraph = document.querySelector('.chart_text p'); // Target the <p> inside .test
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(rabitDiv);
  observer.observe(joinOnDiv);
  observer.observe(chartParagraph); // Observe the <p> tag

  const dollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  dollObserver.observe(dollDiv);
});
