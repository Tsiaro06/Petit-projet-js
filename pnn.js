const images = [
   
    {src:"Buckingham palace.jpeg" ,text:'Buckingham palace'},
    {src:"Burj khalifa.jpeg",text: 'Burj khalifa' },
    {src:"Disneyland Paris.jpeg" ,text: 'Disneyland Paris' },
    {src:"La freedom tower.jpeg" ,text: 'La freedom tower' },
    {src:"La status de la libertée à New York.jpeg",text: 'La status de la libertée à New York' },
    {src:"La Tour Eiffel.jpeg" ,text: 'La Tour Eiffel' },
    {src:"L'arc de Triomphe.jpeg" ,text: 'L/arc de Triomphe' },
    {src:"Le CN tower.jpeg" ,text: 'Le CN tower' },
    {src:"Le musée du Louvre.jpeg" ,text: 'Le musée du Louvre' },
    {src:"Le pont de San-Francisco.jpeg" ,text: 'Le pont de San-Francisco' },
    {src:"le site meghalitique.jpeg" ,text: 'le site meghalitique' },
    {src:"Le vatican.jpeg" ,text: 'Le vatican' },
    {src:"L'empire state building.jpeg" ,text: 'L/empire state building' },
    {src:"les moaïs de l'île de pâques.jpeg" ,text: 'les moaïs de l/île de pâques' },
    {src:"Les pyramides de Gizeh.jpeg" ,text: 'Les pyramides de Gizeh' },
    {src:"les temples de Kiyomizu-dera a kyoto.jpeg" ,text: 'les temples de Kiyomizu-dera a kyoto' },
    {src:"L'Opéra de sydney.jpeg",text: 'L/Opéra de sydney' },
    {src:"mosqué blueu.jpeg",text: 'mosqué blueu' },
    {src:"murberlin.jpeg" ,text: 'mur de berlin' },
    {src:"madagascar.jpg" ,text: 'Madagascar'}, 
];

let currentIndex = 0;
const container = document.getElementById('container');
const imgElements = container.getElementsByTagName('img');
const textElement = container.querySelector('.text');

function changeImage() {
    const nextIndex = (currentIndex + 1) % images.length;

    imgElements[currentIndex].style.filter = 'blur(10px)';
    imgElements[nextIndex].style.opacity = '1';
    imgElements[nextIndex].style.filter = 'blur(0)';
    textElement.textContent = images[nextIndex].text;

    setTimeout(() => {
        imgElements[currentIndex].style.opacity = '0';
        currentIndex = nextIndex;
    }, 1000);
}

setInterval(changeImage, 5000);