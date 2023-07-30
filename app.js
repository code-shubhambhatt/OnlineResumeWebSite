
const parentDiv = document.querySelectorAll('.parentdiv');
const addmoreButton = document.querySelector('.addmoreinfo');
parentDiv.forEach(item => {
    item.addEventListener('click',(e)=>{
        let variable = e.target.innerHTML;
        if(variable == 'Add more Qualification'){
            
            
            const acedemicSection = document.createElement('div');
            acedemicSection.classList.add("acedemic-section");
            // acedemicSection.classList.add("skills-section");
            item.insertBefore(acedemicSection,item.lastElementChild);
            
            
            // const lineap = document.createElement('div');
            // lineap.classList.add('space');
            // acedemicSection.appendChild(lineap)

            const newInfoElement = document.createElement('input');
            newInfoElement.setAttribute("type","text");
            newInfoElement.setAttribute("id","degree-name");
            newInfoElement.setAttribute("placeholder","Name of Degree/Course and Marks");
            newInfoElement.classList.add('formControl');
            acedemicSection.appendChild(newInfoElement)
            
            const newInfoElement2 = document.createElement('input');
            newInfoElement2.setAttribute("type","text");
            newInfoElement2.setAttribute("id","degree-institute");
            newInfoElement2.setAttribute("placeholder","Name of College/Institute");
            newInfoElement2.classList.add('formControl');
            acedemicSection.appendChild(newInfoElement2)
            
            const newInfoElement3 = document.createElement('input');
            newInfoElement3.setAttribute("type","text");
            newInfoElement3.setAttribute("id","degree-year");
            newInfoElement3.setAttribute("placeholder","20XX - 20XX");
            newInfoElement3.classList.add('formControl');
            acedemicSection.appendChild(newInfoElement3)
            
        }
        else if (variable == 'Add more Work Experience'){

            const expSection = document.createElement('div');
            expSection.classList.add("exp-section");
            item.insertBefore(expSection,item.lastElementChild); 
            // expSection.classList.add("skills-section");

            // const lineap = document.createElement('div');
            // lineap.classList.add('space');
            // expSection.appendChild(lineap);
            
            const newInfoElement = document.createElement('input');
            newInfoElement.setAttribute("type","text");
            newInfoElement.setAttribute("id","exp-role");
            newInfoElement.setAttribute("placeholder","Your Role");
            newInfoElement.classList.add('formControl');
            expSection.appendChild(newInfoElement);

            const newInfoElement2 = document.createElement('input');
            newInfoElement2.setAttribute("type","text");
            newInfoElement2.setAttribute("id","exp-organization");
            newInfoElement2.setAttribute("placeholder","Name of the organizatoin");
            newInfoElement2.classList.add('formControl');
            expSection.appendChild(newInfoElement2);

            const newInfoElement3 = document.createElement('input');
            newInfoElement3.setAttribute("type","text");
            newInfoElement3.setAttribute("id","exp-year");
            newInfoElement3.setAttribute("placeholder","20XX - 20XX");
            newInfoElement3.classList.add('formControl');
            expSection.appendChild(newInfoElement3);

        }
        else if (variable == 'Add more Skills'){
            const newInfoElement = document.createElement('input');
                newInfoElement.setAttribute("type","text");
                newInfoElement.setAttribute("placeholder","Skills");
                newInfoElement.setAttribute("class","skill-ip");
                newInfoElement.classList.add('formControl');
                item.insertBefore(newInfoElement, item.lastElementChild);
        }
        else if (variable == 'Add more Projects'){
            const projSection = document.createElement('div');
            projSection.classList.add("project-section");
            item.insertBefore(projSection,item.lastElementChild);
            
            const newInfoElement = document.createElement('input');
            newInfoElement.setAttribute("type","text");
            newInfoElement.setAttribute("placeholder","Project Name");
            newInfoElement.classList.add('formControl');
            projSection.appendChild(newInfoElement);
            
            const newInfoElement2 = document.createElement('input');
            newInfoElement2.setAttribute("type","url");
            newInfoElement2.setAttribute("placeholder","Project Link");
            newInfoElement2.classList.add('formControl');
            projSection.appendChild(newInfoElement2);
            
        }
        
    })
});

const generateCV = document.querySelector('#submit');
generateCV.addEventListener('click',()=>{
    const mainDiv = document.querySelector(".cv-data")
    const stylesheet1 = document.getElementById('style1')
    const stylesheet2 = document.createElement('link');

    stylesheet2.setAttribute("rel",'stylesheet')
    stylesheet2.setAttribute("href",'style2.css')
    stylesheet2.setAttribute("id",'style2')
    document.head.appendChild(stylesheet2);
    stylesheet1.remove();
    mainDiv.style.display = 'none';
    




    // CSS 2
    
    const userNameIP = document.getElementById('nameField');
    const nameValue = userNameIP.value;
    const userNameOP = document.querySelector(".name");
    userNameOP.textContent = nameValue;

    const userImgIP = document.getElementById('userImg').files[0];
    const userImgOP = document.querySelector(".profile-img");
    
    console.log(userImgIP);
    
    let reader =  new FileReader();
    
    reader.readAsDataURL(userImgIP);
    console.log(reader.result)
    
    reader.onloadend = function()
    {
        userImgOP.src = reader.result;
    };

    const imgValue = "default-profile-square.png";
    userImgOP.src = imgValue;


    // let file = userImgIP.files[0];
    // console.log(userImgOP)








    const userDObIP = document.querySelector('#dobField');
    const dobValue = userDObIP.value;
    const userDobOP = document.querySelector('.dob-info');
    userDobOP.innerHTML += dobValue;

    const userNumIP = document.querySelector('#numField');
    const numValue = userNumIP.value;
    // numValue.split('').reverse().join('');
    const userNumOP = document.querySelector('.num-info');
    userNumOP.innerHTML += numValue;
    
    const userMailIP = document.querySelector('#mailField');
    const mailValue = userMailIP.value;
    const userMailOP = document.querySelector('.mail-info');
    userMailOP.innerHTML += mailValue;

    const userAdressIP = document.querySelector('#adressField');
    const adressValue = userAdressIP.value;
    const userAdressOP = document.querySelector('.adress-info');
    userAdressOP.innerHTML += adressValue;

    
    const userSkillIP = document.querySelectorAll('.skill-ip');
    userSkillIP.forEach(item=>{
        const newSkillOP = document.createElement('li')
        const skillOPSection = document.querySelector('.skills-section');
        newSkillOP.classList.add('skill-name');
        const skillData = item.value ;
        newSkillOP.textContent = skillData;
        skillOPSection.appendChild(newSkillOP);
        
    })

    const summaryOP = document.querySelector('.summary');
    const summaryIP = document.querySelector('#obje');

    summaryOP.textContent = summaryIP.value;

    const educationSectionIP = document.querySelectorAll('.acedemic-section');
            educationSectionIP.forEach(item=>{

        // const educationOPelement = document.createElement('div');
        // educationOPsection.appendChild(educationOPelement);
        
        
        const educationOPsection = document.querySelector('.education-section');
        const edu = item.children;



        const degreeNameOP = document.createElement('div');
        degreeNameOP.classList.add('degree-name');
        degreeNameOP.textContent = edu[0].value;    
        educationOPsection.appendChild(degreeNameOP);

        const collegeNameOP = document.createElement('div');
        collegeNameOP.classList.add('degree-institute');
        collegeNameOP.textContent = edu[1].value;   
        educationOPsection.appendChild(collegeNameOP);

        const degreeYearOP = document.createElement('div');
        degreeYearOP.classList.add('degree-year');
        degreeYearOP.textContent = edu[2].value;    
        educationOPsection.appendChild(degreeYearOP);

        
        const newSpace = document.createElement('br');
        educationOPsection.appendChild(newSpace);
        
        
    })

    const expSectionIP = document.querySelectorAll('.exp-section');
    expSectionIP.forEach(item=>{
        
        const expOPsection = document.querySelector('.exp-op-section');
        const exp = item.children;
        
        //console.log(exp)
        
        const expNameOP = document.createElement('div');
        expNameOP.classList.add('exp-name');
        expNameOP.textContent = exp[0].value;   
        expOPsection.appendChild(expNameOP);
        
        const compNameOP = document.createElement('div');
        compNameOP.classList.add('exp-comp');
        compNameOP.textContent = exp[1].value;  
        expOPsection.appendChild(compNameOP);
        
        const expYearOP = document.createElement('div');
        expYearOP.classList.add('exp-year');
        expYearOP.textContent = exp[2].value;   
        expOPsection.appendChild(expYearOP);
        
        const newSpace = document.createElement('br');
        expOPsection.appendChild(newSpace);
    })

    const projectSectionIP = document.querySelectorAll('.project-section');
    console.log(projectSectionIP)
    projectSectionIP.forEach(item=>{
        
        const projectOPsection = document.querySelector('.project-section-op');
        const project = item.children;


        const projectNameOP = document.createElement('a');
        const projectLink = project[1].value;

        projectNameOP.classList.add('project-name');
        projectNameOP.textContent = project[0].value;   
        projectNameOP.setAttribute('href', projectLink);  

        
        projectOPsection.appendChild(projectNameOP);
    
    })
    const printBtn = document.querySelector('.printbtn');
    printBtn.addEventListener('click', ()=>{
        printBtn.style.display = 'none';
        window.print();
    })
})

