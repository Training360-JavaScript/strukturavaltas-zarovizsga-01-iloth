function manipulateDom() {
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach((item) => {
    item.style.borderColor = 'blue';
    item.style.backgroundColor = 'lightblue';
    item.style.fontStyle = 'italic';
  });
}

export { manipulateDom };