export const contactEmail = 'alfredtackiequaye@gmail.com';
export const contactPhone = '+233 240 791 866';
export const contactPhoneHref = '+233240791866';
export const contactWhatsappHref = 'https://wa.me/233240791866?text=Hello%20Alfred%2C%20I%27d%20like%20to%20discuss%20a%20project.';
export const contactLocation = 'Accra, Ghana';

// Keep shared navigation labels and destinations consistent across routes.
export const navigation = [
  ['Home', '/#main'],
  ['About', '/#about'],
  ['How I help', '/#clarify'],
  ['Services', '/#services'],
  ['Selected work', '/#work'],
  ['Books', '/#books'],
  ['Certifications', '/#credentials'],
  ['Contact', '/#contact'],
] as const;

export const books = [
  {
    title: 'AI Knowledge-to-Income Blueprint',
    description: 'A practical guide to turning skills into digital income with AI, even without a technical background.',
    image: '/images/books/ai-knowledge-to-income-blueprint.jpg',
  },
  {
    title: 'AI Prompt Engineering Mastery',
    description: 'A guide to designing stronger prompts and AI workflows for clearer, more useful results.',
    image: '/images/books/ai-prompt-engineering-mastery.jpg',
  },
  {
    title: 'AI Productivity Mastery',
    description: 'A practical system for using AI to improve focus, execution, and high-impact results.',
    image: '/images/books/ai-productivity-mastery.jpg',
  },
  {
    title: 'Generational Assignment',
    description: 'A faith-centered reflection on discovering your purpose, serving your generation, and building a lasting legacy.',
    image: '/images/books/generational-assignment.jpg',
  },
] as const;

export const services = [
  { number: '01', title: 'Brand identity & graphic design', description: 'Logo and identity design, campaign direction, and communication systems that help people recognise the message and trust what they see.', tag: 'Recognisable by design' },
  { number: '02', title: 'UI/UX design', description: 'Digital journeys shaped around real tasks—clearer paths, calmer decisions, and experiences people can use with confidence.', tag: 'Useful by design' },
  { number: '03', title: 'Digital strategy', description: 'Practical guidance on messaging, social content, and channel planning—so every digital touchpoint works together.', tag: 'Made to connect' },
  { number: '04', title: 'Data storytelling', description: 'Power BI reports and visual analysis that turn complex information into an informed next step.', tag: 'Evidence, made useful' },
];

export const credentials = [
  ['PL-300', 'Microsoft Power BI Data Analyst'],
  ['DP-700', 'Implementing Data Engineering Solutions Using Microsoft Fabric'],
  ['SC-900', 'Microsoft Security, Compliance, and Identity Fundamentals'],
  ['ITIL', 'ITIL Certification'],
] as const;
