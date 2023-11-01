function trackProgress() {
    const goal = document.getElementById("goal").value;
    const progress = document.getElementById("progress").value;

    const output = document.getElementById("output");
    output.innerHTML = `Goal: ${goal}, Progress: ${progress} minutes`;
}
