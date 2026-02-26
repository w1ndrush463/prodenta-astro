export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  expertise?: string[];
  profilePage?: boolean;
  section: 'clinician' | 'specialist' | 'nurse' | 'support';
}

export const teamMembers: TeamMember[] = [
  // Main Clinicians
  {
    slug: 'shubhra-lallu',
    name: 'Dr. Shubhra Lallu',
    role: 'BDSc MSc - Principal Dentist',
    image: '/images/shubhra-lallu.jpg',
    bio: [
      'Dr. Shubhra Lallu graduated with honours from the University of Melbourne before moving to the UK in 2006. She completed a Master of Science degree at King\'s College London, specializing in prosthodontics and restorative dentistry.',
      'With extensive experience working in both Australia and the UK, Dr. Lallu has developed particular expertise in cosmetic dentistry, complex restorative cases, and prosthodontic treatments. She is passionate about helping patients achieve their ideal smile through comprehensive treatment planning.',
      'Dr. Lallu treats both children and adults, taking a gentle and patient-centered approach to ensure comfort throughout treatment. She stays current with the latest developments in dentistry through regular continuing education.',
    ],
    expertise: ['Prosthodontics', 'Restorative Dentistry', 'Cosmetic Dentistry', 'General Dentistry'],
    profilePage: true,
    section: 'clinician',
  },
  {
    slug: 'nicole-verschaeren',
    name: 'Nicole Verschaeren',
    role: 'Associate Dentist',
    image: '/images/nicole-verschaeren.jpg',
    bio: [
      'Nicole graduated with her dental degree from the University of Amsterdam in the Netherlands before moving to the UK to further her career. She has developed a special interest in endodontics and completed her Diploma in Endodontics at King\'s College London.',
      'Nicole is dedicated to providing high-quality preventative care and has particular expertise in root canal treatments. Her gentle approach and thorough explanations help put even the most nervous patients at ease.',
      'She believes in taking time to understand each patient\'s concerns and developing personalized treatment plans that prioritize long-term oral health.',
    ],
    expertise: ['Endodontics (Root Canal Treatment)', 'Preventative Dentistry', 'General Dentistry', 'Nervous Patients'],
    profilePage: true,
    section: 'clinician',
  },
  {
    slug: 'robbie-stewart',
    name: 'Robbie Stewart',
    role: 'Dental Therapist',
    image: '/images/robbie-stewart.jpg',
    bio: [
      'Robbie is our highly skilled dental therapist, committed to delivering patient-focused care with a gentle and caring approach. Robbie offers comprehensive hygiene appointments, routine check-ups, and preventive dental care for both children and adults.',
      'In addition to dental therapy, Robbie has extensive training in facial aesthetics treatments, offering anti-wrinkle injections and dermal fillers to help patients achieve natural-looking results.',
      'Robbie\'s calm demeanor and thorough approach make every visit comfortable and informative, ensuring patients understand their oral health and aesthetic treatment options.',
    ],
    expertise: ['Dental Hygiene Therapy', 'Preventative Care', 'Cosmetic Treatments', 'Facial Aesthetics', 'Children\'s Dentistry'],
    profilePage: true,
    section: 'clinician',
  },
  // Specialists
  {
    slug: 'amar-lal-sarin',
    name: 'Dr. Amar Lal-Sarin',
    role: 'Endodontist',
    image: '/images/amar-lal-sarin.jpg',
    bio: [
      'Dr. Amar Lal-Sarin graduated from the University of Birmingham in 2011 and completed his MClinDent in Endodontology at the prestigious Eastman Dental Institute. He has also passed the Membership in Endodontics examination from the Royal College of Surgeons of Edinburgh.',
      'Dr. Lal-Sarin specializes in complex root canal treatments, including cases involving challenging diagnosis, dental trauma, and retreatment of failed root canals. His expertise with microscopic endodontics ensures the highest success rates.',
      'He uses the latest techniques and equipment to provide pain-free treatment and save teeth that might otherwise need extraction.',
    ],
    expertise: ['Complex Root Canal Treatment', 'Microscopic Endodontics', 'Dental Trauma Management', 'Endodontic Retreatment'],
    section: 'specialist',
  },
  {
    slug: 'leonor-chen-kuo',
    name: 'Dr. Leonor Chen-Kuo',
    role: 'Orthodontist',
    image: '/images/leonor-chen-kuo.jpg',
    bio: [
      'Dr. Leonor Chen-Kuo earned her Bachelor of Dental Science from the University of Melbourne and completed her Diploma in Orthodontics from the Royal College of Surgeons UK. With over 17 years of experience, she has helped create over 5,000 beautiful smiles.',
      'Dr. Chen-Kuo is passionate about orthodontics and facial aesthetics, currently pursuing a Masters in Facial Aging and Aesthetic Medicine. She offers a full range of orthodontic treatments including traditional braces, clear aligners, and Invisalign.',
      'Her artistic eye and attention to detail ensure not just straight teeth, but balanced, beautiful smiles that enhance facial aesthetics.',
    ],
    expertise: ['Orthodontics', 'Invisalign & Clear Aligners', 'Fixed Braces', 'Facial Aesthetics', 'Smile Design'],
    section: 'specialist',
  },
  {
    slug: 'jonathan-avanessian',
    name: 'Jonathan Avanessian',
    role: 'Oral Surgeon & Implant Specialist',
    image: '/images/jonathan-avanessian.jpg',
    bio: [
      'Jonathan Avanessian has been a member of the Oral and Maxillofacial Surgery department at Royal Surrey County Hospital since 2008. He holds the FGDP Diploma in Implant Dentistry from the Royal College of Surgeons.',
      'With extensive experience in dental implants and complex surgical dentistry, Jonathan provides advanced surgical treatments including implant placement, bone grafting, and wisdom tooth removal.',
      'His hospital background ensures the highest standards of surgical care, and his gentle technique minimizes discomfort and recovery time.',
    ],
    expertise: ['Dental Implants', 'Oral Surgery', 'Bone Grafting', 'Wisdom Tooth Extraction', 'Complex Surgical Cases'],
    section: 'specialist',
  },
  // Dental Nurses
  {
    slug: 'agi-paragi',
    name: 'Agi Paragi',
    role: 'Head Dental Nurse',
    image: '/images/agi-paragi.jpg',
    bio: [
      'Agi has been our Head Nurse since May 2017 and is an invaluable member of our team. She holds her NVQ in Dental Nursing and is certified in Radiography, ensuring she provides the highest standard of clinical support.',
      'As our Practice Oral Health Educator, Agi is passionate about helping patients understand their oral health and providing guidance on preventive care. Her warm personality and clinical expertise make every patient feel comfortable and well-cared for.',
      'Agi is currently on maternity leave but will be returning to continue providing exceptional patient care.',
    ],
    section: 'nurse',
  },
  {
    slug: 'flori-pastor',
    name: 'Flori Pastor',
    role: 'Qualified Dental Nurse',
    image: '/images/flori-pastor.jpg',
    bio: [
      'Flori joined our team in 2019 and has quickly become an essential part of our practice. In addition to her excellent clinical nursing skills, Flori heads our skincare consultations program, helping patients develop personalized skincare routines.',
      'Flori works closely with Dr. Shubhra and Dr. Leonor, providing chairside assistance and ensuring every procedure runs smoothly. Her attention to detail and caring nature ensure patients feel comfortable and informed throughout their treatment.',
    ],
    section: 'nurse',
  },
  {
    slug: 'angela-bidaud',
    name: 'Angela Bidaud',
    role: 'Trainee Dental Nurse',
    image: '/images/angela-bidaud.jpg',
    bio: [
      'Angela joined our team in March 2024 as a Trainee Dental Nurse and is currently studying for her Diploma in Dental Nursing. She brings enthusiasm and dedication to her role, quickly learning the skills needed to provide excellent patient care.',
      'Angela\'s compassionate approach and willingness to go the extra mile ensure every patient receives personalized attention and support throughout their visit.',
    ],
    section: 'nurse',
  },
  // Support Staff
  {
    slug: 'julia-burcham',
    name: 'Julia Burcham',
    role: 'Practice Manager',
    image: '/images/julia-burcham.jpg',
    bio: [
      'Julia is our Practice Manager, overseeing all administrative, marketing, and back-office operations to ensure ProDenta runs smoothly. Working remotely from West Sussex, Julia ensures every aspect of practice management is handled professionally and efficiently.',
      'Her organizational skills and attention to detail keep our practice running like clockwork, allowing our clinical team to focus on providing exceptional patient care.',
    ],
    section: 'support',
  },
];

// Profile page content (differs from team page bios)
export const profileContent: Record<string, { image: string; bio: string[] }> = {
  'shubhra-lallu': {
    image: '/images/pexels-cedric-fauntleroy-4269934.jpg',
    bio: [
      'Dr. Lallu completed her dental degree from the University of Melbourne in 2001. Following her undergraduate training, she completed a hospital officer post at the prestigious Monash Medical Centre where she trained and learned further under prosthodontics, endodontics and pedodontics specialists.',
      'She has worked consistently in private practice and moved to the UK in 2006. Dr. Lallu treats both children and adults with a focus on preventative care. She has a keen interest in prosthodontics, restorative dentistry and cosmetic dentistry. Her focus on patient care ensures her patients feel comfortable, are well informed and receive pain free treatment.',
    ],
  },
  'nicole-verschaeren': {
    image: '/images/pexels-olly-3779703.jpg',
    bio: [
      'Nicole Verschaeren was born in the Netherlands and finished her dental degree in 2015 in Amsterdam. She likes to make sure that her work is always perfect, and that the patient is at ease and pain-free.',
      'She has a special interest in root canal treatments. She recently completed her Diploma in Endodontics at Kings College University. She takes time for prevention, because she believes that is the key to a healthy mouth.',
    ],
  },
  'robbie-stewart': {
    image: '/images/pexels-pavel-danilyuk-6812547.jpg',
    bio: [
      'Robbie is a passionate and approachable dental therapist, committed to delivering high-quality, patient-focused care. He offers a range of treatments including routine check ups, hygiene appointments, fillings, cosmetic treatments and facial aesthetics -- always with a focus on comfort, prevention and confidence building.',
      'He loves working as part of a collaborative team, helping patients achieve healthy, happy smiles.',
    ],
  },
};
