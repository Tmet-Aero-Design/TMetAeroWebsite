const year = "2024_2025";

const teamMembers = [
    {
      name: "Reyan Anwar",
      role: "Team Captain",
      subteam: "Management",
      description: "Potentially the greatest captain in TMAD's history (emphasis on 'potentially'). 5th year aerospace student " + 
                    "with both an intolerance and addiction to dairy. Ex-Senior wing lead (2021-2023). CATIA Demon (Certified). " +
                    "Peak Toad (Mario) Impersonations.",
      image: `team_pictures/${year}/Reyan-Anwar.JPG`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/reyan_al_buni",
        linkedin: "https://www.linkedin.com/in/reyan-anwar/"
      }
    },
    {
        name: "Justin Sam Kumplapallil",
        role: "Manager",
        subteam: "Management",
        description: "5th year aerospace student and former Fuselage Lead with skills in manufacturing and management. Have a passion for aircrafts, JDM cars and riding my motorcycle. AKA Panda.",
        image: `team_pictures/${year}/Justin-Sam-Kumplapallil.PNG`,
        social: {
          facebook: "",
          twitter: "",
          instagram: "https://www.instagram.com/just1n.s_",
          linkedin: "https://www.linkedin.com/in/justin-sam-kumplapallil-9161b918a/"
        }
    }, 
    {
      name: "Darren Chu",
      role: "Micro-Class Captain",
      subteam: "Management",
      description: "3rd year Aerospace Engineering Student. I am the micro class team manager in charge of coordinating junior leads and generals in the SAE micro class competition. I look forward to seeing you all!",
      image: `team_pictures/${year}/Darren-Chu.PNG`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/darren-chu-712311271/"
      }
    },
    {
      name: "Julian Bardin",
      role: "Design Advisor",
      subteam: "Management",
      description: "Graduate student and former flight mechanics lead, specializing in aircraft design optimization and tool development.",
      image: `team_pictures/${year}/Julian-Bardin.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/juliancbardin/"
      }
    }, 
    {
      name: "Minsu Joo",
      role: "Design Analysis and Experimental Validations Director/Technical Advisor",
      subteam: "Management",
      description: "Graduate Student in Aerospace Engineering with specialization in Low-Speed Aerodynamics and Wind Tunnel Testing.",
      image: `team_pictures/${year}/Minsu-Joo.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/lieutenantminus/",
        linkedin: "https://www.linkedin.com/in/minsu-joo-761648a6"
      }
    },
    {
      name: "Khadija Nouh",
      role: "Advanced Junior Manager",
      subteam: "Management",
      description: "Hi, I am in my 3rd year of aerospace engineering and I am excited to be part of the team!",
      image: `team_pictures/${year}/Khadija-Nouh.jpeg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/khadija-nouh-58456a295/"
      }
    },
    {
      name: "Sarah Murshed",
      role: "Micro-Class Junior Manager",
      subteam: "Management",
      description: "Hi I'm Sarah, a 3rd-year Aerospace student. I am a Junior Manager, overseeing the Micro-Class team.",
      image: `team_pictures/${year}/Sarah-Murshed.png`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/sarah-murshed-62421b22b/"
      }
    },
    {
      name: "Eric Holyk Sanchez",
      role: "Flight Mechanics Lead",
      subteam: "Flight Mechanics",
      description: "Third Year Aerospace Engineering Student with a passion for Aviation and Aeronautics",
      image: `team_pictures/${year}/Eric_HS.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/erhsaero/",
        linkedin: "https://www.linkedin.com/in/eric-rafael-holyk-sanchez-b5b00032a/"
      }
    },
    {
      name: "Nicholas Hrdlicka",
      role: "Flight Mechanics Jr. Lead",
      subteam: "Flight Mechanics",
      description: "Hi, I'm Nicholas! I am in my 3rd year of aerospace engineering, focusing on aircraft. I love skiing, soccer, and music.",
      image: `team_pictures/${year}/NicholasH.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/nicholas_hrd/",
        linkedin: "https://www.linkedin.com/in/nicholashrdlicka"
      }
    },
    {
      name: "Gabriel Jan",
      role: "Flight Mechanics Jr. Lead",
      subteam: "Flight Mechanics",
      description: "3rd year aerospace engineering student and xflr5 enthusiast",
      image: `team_pictures/${year}/Gabriel_Jan.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/gabrielmjan/"
      }
    },
    {
      name: "Krishna Patel",
      role: "Wing Lead",
      subteam: "Aerostructures",
      description: "Greetings, my name is Krishna. I am going into my fourth year of aerospace engineering and I'll be your wing lead for this year.",
      image: `team_pictures/${year}/Krishna-Patel.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/krishhna_",
        linkedin: "https://www.linkedin.com/in/krishna-patel-926557290"
      }
    },
    {
      name: "Anna Topacio",
      role: "Micro Wing Lead",
      subteam: "Aerostructures",
      description: "Hi I'm Anna! I'm a wing junior lead, I love music, art, and matcha.",
      image: `team_pictures/${year}/AnnaT.JPG`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/annatopacio/"
      }
    },
    {
      name: "Amitabha Ghosh",
      role: "Micro Wing Lead",
      subteam: "Aerostructures",
      description: "Hey everyone, my name is Amitabha and I'm in my 2nd year of Aerospace Engineering.",
      image: `team_pictures/${year}/AmitabhaG.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/aghosh05/"
      }
    },
    {
      name: "Alex Alfredo Aguilar",
      role: "Fuselage Lead",
      subteam: "Aerostructures",
      description: "In my 4th Year of study going into the aircraft stream and I've been a part of the team for 3 years.",
      image: `team_pictures/${year}/Alex-Alfredo-Aguilar.png`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/fultra_",
        linkedin: "https://www.linkedin.com/in/aalguilar/"
      }
    },
    {
      name: "Siyona Singh Rathore",
      role: "Micro Fuselage Lead",
      subteam: "Aerostructures",
      description: "2nd year Aerospace student. Epoxy beast. Impractical plane enthusiast.",
      image: `team_pictures/${year}/Siyona-Singh-Rathore.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/iwantanicepage",
        linkedin: ""
      }
    },
    {
      name: "Nayoung Kim",
      role: "Empennage Lead",
      subteam: "Aerostructures",
      description: "4th year undergraduate Mechanical Engineering student. CA uncure specialist.",
      image: `team_pictures/${year}/Nayoung-Kim.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/nayoung_kim21",
        linkedin: "https://www.linkedin.com/in/nayoung--kim"
      }
    },
    {
      name: "Aiden Vagen",
      role: "Micro Empennage Lead",
      subteam: "Aerostructures",
      description: "Second year aerospace engineering. Planes are very cool.",
      image: `team_pictures/${year}/AidenV.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/aidenv312?igsh=MzJvbHZrbm41NGRy",
        linkedin: "https://www.linkedin.com/in/aiden-vaagen-445383292"
      }
    },
    {
      name: "Kelly Loac",
      role: "Micro Empennage Lead",
      subteam: "Aerostructures",
      description: "Hey! My name is Kelly and I'm in my co-op year for mechanical engineering. I will be a tail junior lead this year and I am looking forward to all the experiences I will gain from this opportunity!",
      image: `team_pictures/${year}/KellyL.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/kellyloac/"
      }
    },
    {
      name: "Saket Bharade",
      role: "Avionics Manager",
      subteam: "Management",
      description: "Designing, Managing and delivering Avionics Solutions.",
      image: `team_pictures/${year}/Saket-Bharade.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/__saket_",
        linkedin: "https://www.linkedin.com/in/saket-bharade-86b1a3180/"
      }
    },
    {
      name: "Romit Sagu",
      role: "Avionics Specialist",
      subteam: "Avionics",
      description: "I am a fifth-year undergraduate student specializing in Computer Engineering with a focus on Software. "+
                    "My background enables me to contribute effectively in various capacities, "+
                    "including the development of this site. ",
      image: `team_pictures/${year}/Romit-Sagu.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/romit-sagu"
      }
    },
    {
      name: "Minsu Kim",
      role: "Avionics Lead",
      subteam: "Avionics",
      description: "Motivated 3rd year Aerospace student.",
      image: `team_pictures/${year}/Minsu-Kim.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/bigbread_su/",
        linkedin: "https://www.linkedin.com/in/minsu-kim-39955b165/"
      }
    },
    {
      name: "Leo Tomarchio",
      role: "Avionics Lead",
      subteam: "Avionics",
      description: "3rd year aerospace engineer, specializing in trial and (mostly) error.",
      image: `team_pictures/${year}/Leo-Tomarchio.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://ca.linkedin.com/in/leandro-tomarchio"
      }
    },
    {
      name: "Nishad Awasthy",
      role: "Avionics Jr. Lead",
      subteam: "Avionics",
      description: "3rd year electrical engineering student and avid aerospace larper.",
      image: `team_pictures/${year}/Nishad-Awasthy.png`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/nishad-awasthy-581a13258/"
      }
    },
    {
      name: "Chi Ta",
      role: "Avionics Jr. Lead",
      subteam: "Avionics",
      description: "Hi everyone, my name is Chi and I'm currently in my third year of Electrical Engineering. I'm joining TMAD as an Avionics Junior Lead this year, and I'm very excited to work and learn from the team!",
      image: `team_pictures/${year}/ChiT.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/chita124/"
      }
    },
    {
      name: "Anh Quan Luu",
      role: "Composite Lead",
      subteam: "Manufacturing",
      description: "In love with Boba lover.",
      image: `team_pictures/${year}/Anh-Quan-Luu.jpg`,
      social: {
        facebook: "https://www.facebook.com/quan.luuanh.9?mibextid=LQQJ4d",
        twitter: "",
        instagram: "https://www.instagram.com/aquan_lwu",
        linkedin: "https://www.linkedin.com/in/anhquanluu"
      }
    },
    {
      name: "Jeongyun Jeong",
      role: "Composite Lead",
      subteam: "Manufacturing",
      description: "Hi, My name is Jeongyun Jeong. I was GTV Lead in 2022-23 and Team Manager 2023-24. I will be helping the team as a co-designer with Quan as well as composite works.",
      image: `team_pictures/${year}/Jeongyun-Jeong.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/jeongyun-jeong-37100b295/"
      }
    },
    {
      name: "Leah Ben-Tzur",
      role: "R&D Lead",
      subteam: "Research and Development",
      description: "3rd year mechanical engineer, streams in Mechanics of Solids and Mechatronics, research assistant at the Applied Aerodynamics Laboratory of Flight.",
      image: `team_pictures/${year}/LeahB.JPG`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/leah-ben-tzur-bb121a249/"
      }
    },
    {
      name: "Jadon Jackman",
      role: "Media Manager",
      subteam: "Media & Marketing",
      description: "Hi my name is Jadon. I'm in my second year of aerospace engineering and I am one of the media managers for this year. When I'm not studying I'm either drawing or in the gym. If you ever see me around campus feel free to stop me.",
      image: `team_pictures/${year}/JadonJ.jpg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/jadon-jackman-b50a39260/"
      }
    },
    {
      name: "Sharon Ebenesar",
      role: "Media Manager",
      subteam: "Media & Marketing",
      description: "Hello!! I'm going into my third year of Aerospace Engineering and I'm going to be one of the media managers for the team.",
      image: `team_pictures/${year}/Sharon-Ebenesar.png`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/sharon_ebenesar",
        linkedin: "https://www.linkedin.com/in/sharon-ebenesar-9b25a0267/"
      }
    },
    {
      name: "Arshad Usman",
      role: "Web Developer",
      subteam: "Media & Marketing",
      description: "Software Engineer suffering from a major case of senioritis.",
      image: `team_pictures/${year}/Arshad-Usman.jpeg`,
      social: {
        facebook: "",
        twitter: "",
        instagram: "https://www.instagram.com/ar5hadahmed",
        linkedin: "https://ca.linkedin.com/in/arshad-usman-b32110194"
      }
    }
  ];
  
  export default teamMembers;
  