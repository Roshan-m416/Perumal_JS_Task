function changeContent() {
    document.getElementById("title").innerText = "Text Changed";

    let p = document.getElementById("para");
    p.innerHTML = "Paragraph content changed";

    p.style.color = "blue";
    p.style.fontSize = "20px";
}