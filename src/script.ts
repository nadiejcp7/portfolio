const navbar = document.querySelector<HTMLElement>(".navbar")!;
navbar.addEventListener('mouseover', function(){
    if(Number(window.innerWidth)>991){
        navbar.style.width = "430px";
        navbar.style.transitionDuration = '0.7s';
        document.querySelector<HTMLElement>(".navbar-user-content")!.style.opacity = '1';
        const elements = document.querySelectorAll<HTMLElement>('.nav-link-big')!;
        elements.forEach (element => {
            element.style.willChange = 'opacity';
            element.style.opacity = "1";
            element.style.display='grid'
        });
    }
});

navbar.addEventListener('mouseout', function(){
    if(Number(window.innerWidth)>991){
        navbar.style.width = "94px";
        document.querySelector<HTMLElement>(".navbar-user-content")!.style.opacity = '0';
        const elements = document.querySelectorAll<HTMLElement>('.nav-link-big')!;
        elements.forEach (element => {
            element.style.opacity = "0";
            element.style.display = 'none'
        });
    }
});

const expand = document.getElementsByClassName('nav-links')[1] as HTMLElement;
expand.addEventListener('mouseover', function(){
    document.getElementById('w-dropdown-toggle-0')?.setAttribute('aria-expanded', 'true');
    const ver = document.getElementById('w-dropdown-list-0');
    if(ver!=null){
        ver.style.removeProperty("height");
        ver.style.opacity = '1';
        ver.classList.add('w--open');
    }
});

expand.addEventListener('mouseout', function(){
    document.getElementById('w-dropdown-toggle-0')?.setAttribute('aria-expanded', 'false');
    const ver = document.getElementById('w-dropdown-list-0');
    if(ver!=null){
        ver.classList.remove('w--open')
        ver.style.opacity = '0';
        ver.style.height = '0px'
    }
});

const age = document.getElementById('age');
if (age!=null){
    let dateFrom = new Date('1995-12-14');
    let dateTo = new Date();
    let years = dateTo.getFullYear() - dateFrom.getFullYear();
    if (dateTo.getMonth() < dateFrom.getMonth()){
        years -= 1;
    }
    age.innerHTML = '' + (years);
}

const elements = document.querySelectorAll<HTMLElement>('.nav-link-big')!;
elements.forEach (element => {
    element.style.opacity = "0";
    element.style.display = 'none'
});

var showing = false;
const button = document.getElementsByClassName('menu-button')[0] as HTMLElement;
button.addEventListener('click', function(){
    const nav = document.getElementById('w-nav-overlay-0') as HTMLElement;
    if (!showing){
        nav.style.height = '300px'; 
        nav.style.display = 'block';
        const navi = document.getElementsByClassName('nav-menu')[0] as HTMLElement;
        navi.style.transition = 'all, transform 401ms';
        navi.style.transform = 'translateY(0px) translateX(0px)';
        navi.setAttribute('data-nav-menu-open', '');
        nav.append(navi);
        console.log(navi);
        navbar.style.transitionDuration = '0.7s';
        document.querySelector<HTMLElement>(".navbar-user-content")!.style.opacity = '1';
        const elements = document.querySelectorAll<HTMLElement>('.nav-link-big')!;
        elements.forEach (element => {
            element.style.willChange = 'opacity';
            element.style.opacity = "1";
            element.style.display='grid'
        });
        showing = true;
    }else{
        showing = false;
        nav.style.display = 'none';
        nav.style.height = '0px';
    }
    
})

window.onload = function (){
    const projects = document.getElementById('projects-container') as HTMLElement;
    console.log(projects)
    if (projects){
        fetch("./Projects/projects.txt")
            .then((res) => res.text())
            .then((text) => {
                const libros = text.split('\n')
                libros.forEach ( libro =>{
                    const data = libro.split(",");
                    projects.appendChild(createElement('./Projects/Images/'+ data[0], data[1], Number(data[2])))
                });
            })
            .catch((e) => console.error(e));
    }else{
        const title = document.getElementById('page-title') as HTMLElement;
        if(title){
            const nameFile = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length).split("=")[1];
            fetch('../Projects/Description/'+ nameFile.substring(0, nameFile.lastIndexOf('.')) + '.txt')
                .then((res) => res.text())
                .then((text) => {
                    console.log('aqui')
                    console.log(text)
                    if(text.startsWith('<')){
                        title.innerHTML = 'Trying to hack NASA?';
                        setDatatoElement('p1', 'This is an informative site, do not try to screw it!');
                        setDatatoElement('p2', 'If you are here by accident. I apologize, something may have gone wrong.');
                        setDatatoElement('p3', 'I still offer you my help, wanna be my friend?');
                        setDatatoElement('p4', 'Click the logo below.');
                        (document.getElementById('page-logo') as HTMLMediaElement).src = '../Projects/Images/LogoNotFound.png';
                        (document.getElementById('page-link') as HTMLLinkElement).href = '../index.html';
                    }else{
                        const infos = text.split('\n');
                        title.innerHTML = infos[0];
                        setDatatoElement('p1', infos[1]);
                        setDatatoElement('p2', infos[2]);
                        setDatatoElement('p3', infos[3]);
                        setDatatoElement('p4', infos[4]);
                        (document.getElementById('page-logo') as HTMLMediaElement).src = '../Projects/Images/Logo' + nameFile;
                        (document.getElementById('page-link') as HTMLLinkElement).href = infos[5];
                    }
                })
            

        }
    }
}
function setDatatoElement(id:string, text:string){
    (document.getElementById(id) as HTMLElement).innerHTML = text;
}

function createElement(source: string, titulo: string, tipo: number){
    const div = document.createElement('div');
    div.role = 'listitem';
    div.className = 'project-grid-item w-dyn-item';

    const a1 = document.createElement('a');
    a1.href = "./Projects/Proyecto.html?nameProject=" + source.split('Logo')[1];
    a1.className = "project-item w-inline-block";

    const div1 =  document.createElement('div');
    div1.className = 'project-image-wrapper';

    const img11 = document.createElement('img');
    img11.src = source
    img11.loading = 'lazy'
    img11.sizes = "(max-width: 767px) 85.375px, (max-width: 991px) 14vw, (max-width: 1439px) 20vw, 31vw";
    img11.className = "project-image-abs"

    const div11 = document.createElement('div')
    div11.className = 'project-dummy';

    div1.appendChild(img11)
    div1.appendChild(div11)
    a1.appendChild(div1);


    const div2 = document.createElement('div')
    div2.className = 'project-content';

    const div21 = document.createElement('div')
    div21.className = 'project-title';
    div21.innerHTML = titulo;

    const types = ['Página Web', 'Página Web - Backend', 'Ciencia de datos']
    const div22 = document.createElement('div')
    div22.className = 'project-description';
    div22.innerHTML = types[tipo];

    div2.appendChild(div21)
    div2.appendChild(div22)

    a1.appendChild(div2)

    div.append(a1)
    return div
}