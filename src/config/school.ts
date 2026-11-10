// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'cespc-la-gloire-de-dieu-kara',
  logo: '/logo-cespc-la-gloire-de-dieu.png',
  settings: {
    name: 'CESPC LA GLOIRE DE DIEU',
    shortName: 'CESPC LA GLOIRE DE DIEU',
    slogan: 'FOI, SAVOIR ET EXCELLENCE',
    address: 'Quartier Tomdè — Kara, Togo',
    email: 'contact@cespc-gloirededieu.tg',
    phone: '+228 91 62 77 11',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 90000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un complexe éducatif à Tomdè (Kara) qui accompagne chaque élève de la maternelle jusqu’au baccalauréat, dans la discipline et l’excellence.',
  hero: {
    eyebrow: 'FOI - DISCIPLINE - RÉUSSITE',
    titleLines: ['Complexe', 'Éducatif'],
    highlight: 'LA GLOIRE DE DIEU',
    intro:
      'Bienvenue sur le site officiel du CESPC LA GLOIRE DE DIEU, au quartier Tomdè à Kara : un complexe éducatif où chaque élève peut suivre tout son parcours scolaire au même endroit, de la maternelle jusqu’au baccalauréat.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction du CESPC LA GLOIRE DE DIEU',
    eyebrow: 'UN MOT DU DIRECTEUR',
    titleLines: ['Grandir, apprendre,', 'réussir ensemble.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au CESPC LA GLOIRE DE DIEU, nous croyons au potentiel de chaque enfant. Notre ambition est de l’accompagner pas à pas, de ses premiers jours à l’école jusqu’au baccalauréat, dans un cadre stimulant, discipliné et bienveillant.',
      'Notre équipe éducative suit les élèves avec exigence et attention, en lien étroit avec les familles de Tomdè et de toute la ville de Kara, pour leur permettre de construire un avenir dont ils seront fiers.',
    ],
    signature: 'BILAO Agnidoufer — Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le CESPC LA GLOIRE DE DIEU est implanté dans le quartier Tomdè, à Kara. Il est né de la volonté d’offrir aux familles un établissement « tout-en-un », où les enfants peuvent suivre l’intégralité de leur scolarité au même endroit.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons bâti un complexe qui allie excellence académique et épanouissement personnel, en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque élève.',
      'Le CESPC LA GLOIRE DE DIEU regroupe le jardin d’enfants, l’école primaire (du CP1 au CM2, préparation au CEPD), le collège (de la 6e à la 3e, préparation au BEPC) et le lycée (de la Seconde à la Terminale, préparation au baccalauréat). Il suit les programmes officiels togolais et cultive la discipline, le travail et les valeurs morales.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Du CEPD au baccalauréat, nous visons la réussite de chaque élève.' },
    { icon: 'heart', title: 'Valeurs chrétiennes', text: 'L’amour du prochain, le respect et l’honnêteté au quotidien.' },
    { icon: 'idea', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Kara.' },
  ],
  faq: [
    {
      q: 'Quels niveaux propose le CESPC LA GLOIRE DE DIEU ?',
      a: 'C’est un complexe éducatif : le jardin d’enfants, l’école primaire (CP1 au CM2), le collège (6e à la 3e) et le lycée (Seconde à Terminale). Les élèves peuvent y suivre tout leur parcours, jusqu’au baccalauréat.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Kara desservis.',
    },
    {
      q: 'Les frais de scolarité au CESPC LA GLOIRE DE DIEU s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle constitue la première étape du parcours scolaire. Elle favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Musique et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Découvrir, expérimenter et apprendre en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux et développe la curiosité. Chaque élève progresse dans un cadre structuré et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Maîtrise du français et initiation à l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en Maternelle 1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
