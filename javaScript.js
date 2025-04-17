
let conTainer = document.querySelector(".container");
let mode = document.getElementById("btnMode");

function lightDark(){
    if(mode.innerHTML === "Dark Mode"){
        mode.innerHTML = "Light Mode";
        conTainer.style.backgroundColor = 'black';
        conTainer.style.color = 'white';
    }
    else{
        mode.innerHTML = "Dark Mode";
        conTainer.style.backgroundColor = 'white';
        conTainer.style.color = 'black';
    }
}

document.querySelectorAll('.revCard').forEach(card => {
    let btnRead = card.querySelector('button');
    let para = card.querySelector('p');
    
    btnRead.addEventListener('click', () => {
        if (btnRead.innerHTML === "Read More") {
            btnRead.innerHTML = "Show Less";
            para.innerHTML = para.getAttribute('data-full-text');
            card.style.height = "auto"; // Adjust card height to fit full content
        } else {
            btnRead.innerHTML = "Read More";
            para.innerHTML = para.getAttribute('data-short-text');
            card.style.height = "auto"; // Adjust card height back to fit short content
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('div[id]');
        const navLinks = document.querySelectorAll('.mainMenu a');

        const updateActiveLink = () => {
            let currentSection = '';
            if (window.scrollY === 0) {
                currentSection = 'home';
            } else {
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                        currentSection = section.getAttribute('id');
                    }
                });
            }
        
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink);

        updateActiveLink();
    });



