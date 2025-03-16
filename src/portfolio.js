import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: ' ',
  title: 'Bigdwarf',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Yash',
  role: '',
  description:
    'A Computer science student with a love for crafting software, developing games, and telling great stories!',
  resume: 'https://drive.google.com/file/d/1o6vjs-eZG49IrjE-65jp99uWhcGHcY7B/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/yash-wankhedkar-876496193/',
    github: 'https://github.com/bigdwarf43',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dnnovate educational games prototypes',
    description:
      'Collaborated with two team members to design and develop educational game prototypes during an internship at dnnovate digitals.',
    stack: ['Unity3d', 'C#'],
    // sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://bigdwarf43.itch.io/educationalmathgameprototypes',
    
    gif: 'assets/dnnovate_games_gif.gif'

  },
  {
    name: 'Abstractive long text Summarizer',
    description:
      'Led a four-member team in the development of a long text summarization and Retrieval-Augmented Generation (RAG) system using the LLama2 large language model for our final year project.',
    stack: ['langchain', 'Llama2', 'Python'],
    sourceCode: 'https://github.com/bigdwarf43/langchain-pdf-chat',
    gif: 'assets/abstractive_text_summarizer.png'

    // livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: "Pharaoh Neko Chan's Dungeon",
    description:
      'Made for Wowie jam 3.0, My first game jam ever!',
    stack: ['Godot', 'gdscript'], 
    // sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://bigdwarf43.itch.io/pharaoh-neko-chans-dungeon',
    gif: 'assets/pharaoh_neko_v2.gif'

  },
  {
    name: 'Bunnykillinator',
    description:
      "Made for 'So Bad it's Good' Jam 2022' Won the third place!",
    stack: ['Godot', 'gdscript'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://bigdwarf43.itch.io/bunnykillinator',
    gif: '/assets/bunnykillinator_gif.gif'

    
  },

  {
    name: 'Bubble ctrl',
    description:
      "A Singleplayer/ Co-Op game where you are fans and have to work together to keep the bubble in the circle while dodging bees. Made for GGJ 2025 in a team of 3.",
    stack: ['Unity', 'C#'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://grrayin.itch.io/bubble-ctrl',
    gif: 'assets/bubbleCtrl_gif.gif'

    
  },

  {
    name: 'Captain clown nose',
    description:
      "A small Metroidvania made for BYOG'24 in 72 hours!",
    stack: ['Unity', 'C#'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://bigdwarf43.itch.io/captain-clown-nose',
    gif: 'assets/captain_clown_nose_gif.gif'

    
  },

  
  {
    name: 'Teatro Grottesco',
    description:
      "A Broughlike/Roguelike made in Javascript!",
    stack: ['Unity', 'C#'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://bigdwarf43.itch.io/the-grotto',
    gif: 'assets/teatro_grottesco_gif.gif'

    
  },

  {
    name: 'Elostirian',
    description:
      "Made for LOWREZJAM 2021!",
    stack: ['Godot', 'gdscript'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://bigdwarf43.itch.io/elostirian',
    gif: 'assets/elostirian_gif.gif'

    
  },
  {
    name: 'Holy Harvest',
    description:
      "Made for BYOG 2023!",
    stack: ['Unity', 'C#'],
    // sourceCode: 'https://github.com/Cognitive-Activation/Mindinator',
    livePreview: 'https://bigdwarf43.itch.io/holyharvest',
    gif: 'assets/holy_harvest_gif.gif'

    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Unity',
  'Godot',
  'Java',
  'Python',
  'Langchain',
  'C#',
  'JavaScript',
  'Svelte',
  'HTML',
  'CSS',
  'GDscript'
]

const familiarWithSkills = [
  'Node.js',
  'Express.js',
  'React',
  'MongoDB',
  'Redux',
  'SQL',
  'Git',
  'Docker',
  'Blender',
  'Asperite'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yashwankhedkar43@gmail.com  ',
}

export { header, about, projects, skills, contact, familiarWithSkills}
