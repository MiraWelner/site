// List of  phrases
const phrases = [
    "Hello, world!",
    "Epesooj",
    "Fish+Micro+Ghostty+VSCode",
    "ML but not the chatbot kind",
    "git switch",
    "chmod 777 *",
    "GNU's Not Unix",
    "git rebase -i HEAD~98",
    "rm -r *",
    ":(){ :|:& };:",
    "Please hire me :)",
    "Please hire me :)",
    "Actively Job Searching",
    "Actively Job Searching",
    "Stats+Biotech+Code",
    "More Optimum",
    "Most Optimum",
    "Launched June 9th, 2000 3:30PM",
    "fish_config theme choose Lava"  
];


function getData() {

    const promptSpan = document.getElementById("prompt");
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    promptSpan.textContent = `user@mirasite ~> ${randomPhrase}`;

    $.get('txt/stats.txt', function (data) {
        document.getElementById('stats').innerHTML = data;
    });

};
