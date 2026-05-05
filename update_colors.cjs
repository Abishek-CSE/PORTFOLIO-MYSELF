const fs = require('fs');
const path = require('path');
const files = ['index.css', 'components/TechnicalSkills.jsx', 'components/Section.jsx', 'components/ResumeModal.jsx', 'components/Projects.jsx', 'components/ProjectModal.jsx', 'components/Hero.jsx', 'components/Education.jsx', 'components/ContactModal.jsx', 'components/CareerObjective.jsx', 'App.jsx'].map(f => path.join('src', f));

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(/emerald/g, 'violet');
  t = t.replace(/Emerald/g, 'Violet');
  t = t.replace(/#10b981/gi, '#8b5cf6');
  
  t = t.replace(/import HeroBg from '\.\/HeroBg';\r?\n?/g, '');
  t = t.replace(/<HeroBg \/>\r?\n?/g, '');
  t = t.replace(/import AboutBg from '\.\/AboutBg';\r?\n?/g, '');
  t = t.replace(/<AboutBg \/>\r?\n?/g, '');
  t = t.replace(/import SkillsBg from '\.\/SkillsBg';\r?\n?/g, '');
  t = t.replace(/<SkillsBg \/>\r?\n?/g, '');
  t = t.replace(/import ProjectsBg from '\.\/ProjectsBg';\r?\n?/g, '');
  t = t.replace(/<ProjectsBg \/>\r?\n?/g, '');
  t = t.replace(/import EducationBg from '\.\/EducationBg';\r?\n?/g, '');
  t = t.replace(/<EducationBg \/>\r?\n?/g, '');
  
  fs.writeFileSync(f, t);
});

let app = fs.readFileSync('src/App.jsx', 'utf8');
if (!app.includes('import Background3D')) {
   app = app.replace("import ProjectModal from './components/ProjectModal';", "import ProjectModal from './components/ProjectModal';\nimport Background3D from './components/Background3D';");
   app = app.replace('{/* Standard Header */}', '{/* Global Background */}\n            <Background3D />\n            \n            {/* Standard Header */}');
   fs.writeFileSync('src/App.jsx', app);
}
