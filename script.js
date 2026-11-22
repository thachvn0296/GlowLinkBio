function applyTheme(theme) {
            document.body.classList.toggle('light', theme === 'light');
            localStorage.setItem('theme', theme);
            const toggleIcon = document.querySelector('.toggle i');
            if (toggleIcon) {
                toggleIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-adjust';
            }
        }

        function toggleTheme() {
            const isLight = document.body.classList.contains('light');
            applyTheme(isLight ? 'dark' : 'light');
        }

        const savedTheme = localStorage.getItem('theme');
        applyTheme(savedTheme === 'light' ? 'light' : 'dark');
