
    const toggleBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      toggleBtn.textContent = "☀️ Toggle Light Mode";
    }

    toggleBtn.onclick = () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      toggleBtn.textContent = isDark ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };

