document.addEventListener("DOMContentLoaded", function() {
    function random_project_1() {
        const classNames = [
            "text-red-500",
            "text-orange-500",
            "text-green-500",
            "text-blue-500",
            "text-purple-500",
        ]; // Array of classes to choose from
        const projectElement = document.querySelector('#project_1'); // Get the project element

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * classNames.length); // Generate a random index
            const randomClass = classNames[randomIndex]; // Get a random class from classNames array
            projectElement.classList.add(randomClass); // Add the random class to project element
        }, 1000 + 1); // Repeat every 1 second (1000 + 1 milliseconds)
    }

    
    function random_project_2() {
        const classNames = [
            "text-red-800",
            "text-orange-800",
            "text-green-800",
            "text-blue-800",
            "text-purple-800",
        ]; // Array of classes to choose from
        const projectElement = document.querySelector('#project_2'); // Get the project element

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * classNames.length); // Generate a random index
            const randomClass = classNames[randomIndex]; // Get a random class from classNames array
            projectElement.classList.add(randomClass); // Add the random class to project element
        }, 1000 + 1); // Repeat every 1 second (1000 + 1 milliseconds)
    }

    
    function random_project_3() {
        const classNames = [
            "text-red-600",
            "text-orange-600",
            "text-green-600",
            "text-blue-600",
            "text-purple-600",
        ]; // Array of classes to choose from
        const projectElement = document.querySelector('#project_3'); // Get the project element

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * classNames.length); // Generate a random index
            const randomClass = classNames[randomIndex]; // Get a random class from classNames array
            projectElement.classList.add(randomClass); // Add the random class to project element
        }, 1000 + 1); // Repeat every 1 second (1000 + 1 milliseconds)
    }

    
    function random_project_4() {
        const classNames = [
            "text-red-700",
            "text-orange-700",
            "text-green-700",
            "text-blue-700",
            "text-purple-700",
        ]; // Array of classes to choose from
        const projectElement = document.querySelector('#project_4'); // Get the project element

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * classNames.length); // Generate a random index
            const randomClass = classNames[randomIndex]; // Get a random class from classNames array
            projectElement.classList.add(randomClass); // Add the random class to project element
        }, 1000 + 1); // Repeat every 1 second (1000 + 1 milliseconds)
    }

    
    function random_project_5() {
        const classNames = [
            "text-red-400",
            "text-orange-400",
            "text-green-400",
            "text-blue-400",
            "text-purple-400",
        ]; // Array of classes to choose from
        const projectElement = document.querySelector('#project_5'); // Get the project element

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * classNames.length); // Generate a random index
            const randomClass = classNames[randomIndex]; // Get a random class from classNames array
            projectElement.classList.add(randomClass); // Add the random class to project element
        }, 1000 + 1); // Repeat every 1 second (1000 + 1 milliseconds)
    }

    random_project_1()
    random_project_2()
    random_project_3()
    random_project_4()
    random_project_5()
});


function downloadPDF() {
    const pdfUrl = 'assets/portofolio.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'file_name.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}
