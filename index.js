const gerGrade = (
    experience,
    isEnglish,
    isDifficultProjects,
    isTeamManagement
) => {
    switch (true) {
        case experience > 2 && experience <= 5 && isEnglish:
            return "middle";
        case experience > 5 && isEnglish && isDifficultProjects:
            return "senior";
        case experience >= 10 &&
            isEnglish &&
            isDifficultProjects &&
            isTeamManagement:
            return "principal";
        default:
            return "junior";
    }
};

const getSalary = (grade) => {
    switch (grade) {
        case "middle":
            return "от 1500$ до 2700$";
        case "senior":
            return "от 3000$";
        case "principal":
            return "от 7000$";
        default:
            return "от 300$ до 1500$";
    }
};

const getChance = (isEnglish, isAlgorithms, isDifficultProjects) => {
    switch (true) {
        case !isEnglish || !isAlgorithms:
            return "Шансов нет";
        case !isDifficultProjects:
            return "Шансов мало";
        default:
            return "Шансы есть";
    }
};

const showAnketa = (fullName, experience, grade, salary, chance) => {
    alert(`
    Ваше Имя: ${fullName}
    Ваш опыт в годах: ${experience}
    Градация: ${grade}
    Примерная зп: ${salary}
    Шансы попасть на работу в корпорацию: ${chance}
  `);
};

const init = () => {
    const name = prompt("Введите имя");
    const surname = prompt("Введите фамилию");
    const experience = +prompt("Введите опыт работы в годах");
    const isDifficultProjects = confirm("Ваши проекты были сложные?");
    const isEnglish = confirm("Вы свободно говорите на английском?");
    const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
    const isTeamManagement = confirm("Тебе нравится управлять командой?");
    const fullName = `${name} ${surname}`;

    const grade = getGrade(
        experience,
        isEnglish,
        isDifficultProjects,
        isTeamManagement
    );
    const salary = getSalary(grade);
    const chance = getChance(isEnglish, isAlgorithms, isDifficultProjects);
    
    showAnketa(fullName, experience, grade, salary, chance);
};

init();
