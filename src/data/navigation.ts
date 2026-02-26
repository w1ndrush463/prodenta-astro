export interface NavItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  items: NavItem[];
}

export interface NavDropdown {
  label: string;
  href: string;
  columns: NavColumn[];
  wide?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const dentalDropdown: NavDropdown = {
  label: 'Dental Treatments',
  href: '/treatments',
  wide: true,
  columns: [
    {
      heading: 'Straighten',
      items: [
        { label: 'Orthodontics', href: '/dental/orthodontics' },
        { label: 'Invisalign & Clear Aligners', href: '/dental/clear-braces' },
        { label: 'Fixed Braces', href: '/dental/fixed-braces' },
      ],
    },
    {
      heading: 'Enhance',
      items: [
        { label: 'Composite Bonding', href: '/dental/composite-bonding' },
        { label: 'Teeth Whitening', href: '/dental/teeth-whitening' },
        { label: 'Veneers', href: '/dental/veneers' },
      ],
    },
    {
      heading: 'Repair',
      items: [
        { label: 'Fillings', href: '/dental/fillings' },
        { label: 'Root Canal', href: '/dental/root-canal' },
      ],
    },
    {
      heading: 'Maintain',
      items: [
        { label: 'New Patient Appointments', href: '/dental/new-patients' },
        { label: 'Routine Appointments', href: '/dental/check-ups' },
        { label: 'Dental Hygiene', href: '/dental/hygiene' },
        { label: 'Emergency Appointments', href: '/dental/emergency' },
      ],
    },
    {
      heading: 'Restore',
      items: [
        { label: 'Crowns', href: '/dental/crowns' },
        { label: 'Dentures', href: '/dental/dentures' },
        { label: 'Implants', href: '/dental/dental-implants' },
        { label: 'Oral Surgery', href: '/dental/oral-surgery' },
      ],
    },
  ],
};

export const aestheticsDropdown: NavDropdown = {
  label: 'Facial Aesthetics & Skin Care',
  href: '/facial-aesthetics-treatments',
  columns: [
    {
      heading: 'Enhance',
      items: [
        { label: 'Wrinkle Reduction', href: '/aesthetics/wrinkle-reduction' },
        { label: 'Dermal Fillers', href: '/aesthetics/dermal-fillers' },
        { label: 'Aqualyx', href: '/aesthetics/aqualyx' },
      ],
    },
    {
      heading: 'Maintain',
      items: [
        { label: 'Sunekos', href: '/aesthetics/sunekos' },
        { label: 'Profhilo', href: '/aesthetics/profhilo' },
        { label: 'The Perfect Peel', href: '/aesthetics/perfect-peel' },
      ],
    },
    {
      heading: 'Restore',
      items: [
        { label: 'Microneedling', href: '/aesthetics/microneedling' },
        { label: 'Chemical Peels', href: '/aesthetics/chemical-peels' },
        { label: 'Mesotherapy', href: '/aesthetics/mesotherapy' },
        { label: 'Skincare Consultations', href: '/aesthetics/skincare-consultations' },
      ],
    },
  ],
};

export const mainNavLinks: NavLink[] = [
  { label: 'Team', href: '/team' },
  { label: 'Our Reviews', href: '/dental/nervous-patients' },
  { label: 'Fees', href: '/fees' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks: NavLink[] = [
  { label: 'New Patients', href: '/dental/new-patients' },
  { label: 'Cosmetic Dentistry', href: '/dental/cosmetic-dentistry' },
  { label: 'Teeth Whitening', href: '/dental/teeth-whitening' },
  { label: 'Invisalign', href: '/dental/clear-braces' },
  { label: 'Facial Aesthetics', href: '/facial-aesthetics-treatments' },
  { label: 'Contact', href: '/contact' },
];
