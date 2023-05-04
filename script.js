const links = document.querySelectorAll('a');


window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
});


function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}


async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();

    replaceContent(pageText);
  }


function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}


links.forEach(link => link.addEventListener('click', handleClick));