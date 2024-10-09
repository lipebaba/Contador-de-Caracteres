function updateCharacterCount() {
    const text = document.getElementById("textArea").value;
    const charCount = text.length;
    document.getElementById("charCount").textContent = charCount;
}

function clearText() {
    document.getElementById("textArea").value = '';
    document.getElementById("charCount").textContent = '0';
}
