async function handleSearch() {
    const username = document.getElementById('userInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!username) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a GitHub username.</p>";
        return;acsd
    }

    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json(); // Make sure this is declared
        resultDiv.innerHTML = `
            <img src="${data.avatar_url}" alt="Avatar" width="100">
            <h2>${data.name || data.login}</h2>
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <a href="${data.html_url}" target="_blank">View Profile</a>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        console.error(error);
    }
}
