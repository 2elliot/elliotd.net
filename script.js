function showSection(section) {
  const output = document.getElementById('output');
  
  if (section === 'about') {
    output.innerHTML = "\nAbout: I am [Your Name], a software developer specializing in ...\n";
  } else if (section === 'projects') {
    output.innerHTML = "\nProjects: \n1. Project A \n2. Project B \n";
  } else if (section === 'education') {
    output.innerHTML = "\nEducation: B.Sc in Computer Science from...\n";
  } else if (section === 'contact') {
    output.innerHTML = "\nContact: Email - elliotjdalessandro@gmail.com\n";
  }
}
