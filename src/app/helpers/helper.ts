export const linkScrollTo = (event) => {
  console.log(event);
  event.preventDefault();
  window.scrollTo({
    top: (document.querySelector(event.target.attributes.href.nodeValue) as HTMLElement).offsetTop - 150,
    behavior: 'smooth'
  });
};
