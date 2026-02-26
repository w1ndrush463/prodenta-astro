export interface Treatment {
  slug: string;
  title: string;
  pageTitle: string;
  metaDescription: string;
  category: string;
  theme: 'dental' | 'aesthetics';
  breadcrumbs: { label: string; href?: string }[];
  heroSubtitle: string;
  heroImage: string;
  heroCards: { title: string; description: string }[];
  whatIsIt: {
    title: string;
    content: string[];
    image: string;
    imagePosition: 'left' | 'right';
  };
  problems: {
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  howItWorks: {
    title: string;
    content: string[];
    image: string;
    imagePosition: 'left' | 'right';
  };
  benefits: {
    title: string;
    items: { strong: string; text: string }[];
  };
  whyChoose: {
    title: string;
    content: string[];
    image: string;
    imagePosition: 'left' | 'right';
  };
  results: { title: string; description: string }[];
  gallery?: {
    title: string;
    intro: string;
    items: { image: string; caption: string }[];
  };
  pricing: {
    heading: string;
    treatmentName: string;
    price: string;
    description: string;
    buttonText: string;
  };
  faqs: { question: string; answer: string }[];
  related: { href: string; image: string; title: string; description: string }[];
  cta: { title: string; description: string };
}

export const aestheticTreatments: Treatment[] = [
  // ─── WRINKLE REDUCTION ───────────────────────────────────────────────
  {
    slug: 'wrinkle-reduction',
    title: 'Wrinkle Reduction',
    pageTitle: 'Wrinkle Reduction & Anti-Wrinkle Injections - ProDenta Battersea',
    metaDescription: 'Professional wrinkle reduction treatments at ProDenta. Smooth forehead lines, frown lines, and crow\'s feet with our expert anti-wrinkle injections. Results last 3-4 months.',
    category: 'enhance',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Wrinkle Reduction' },
    ],
    heroSubtitle: 'Smooth away fine lines and restore a youthful, refreshed appearance with our expert anti-wrinkle treatments.',
    heroImage: '/images/wrinkle-reduction-hero.jpg',
    heroCards: [
      {
        title: 'Quick Treatment',
        description: 'Each session takes just 15-20 minutes with no downtime required',
      },
      {
        title: 'Natural Results',
        description: 'Smooth fine lines while maintaining your natural expressions',
      },
      {
        title: 'From £210',
        description: 'Affordable treatments with results lasting 3-4 months',
      },
    ],
    whatIsIt: {
      title: 'What Are Anti-Wrinkle Injections?',
      content: [
        'Anti-wrinkle injections are a safe, non-surgical treatment that relaxes the facial muscles responsible for creating fine lines and wrinkles. This treatment helps to smooth the appearance of dynamic wrinkles that form when you make facial expressions.',
        'At ProDenta, our experienced practitioners use precision techniques to deliver natural-looking results that enhance your appearance without changing who you are. We focus on subtle improvements that leave you looking refreshed and rejuvenated, never frozen or artificial.',
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Forehead Lines',
          description: 'Horizontal lines across the forehead that appear when raising eyebrows',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Frown Lines',
          description: 'Vertical lines between the eyebrows (often called "11 lines")',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: "Crows' Feet",
          description: 'Fine lines radiating from the corners of the eyes when smiling',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        'Anti-wrinkle injections work by temporarily relaxing the muscles that cause expression lines. A small amount of purified protein is injected into specific facial muscles using a very fine needle.',
        "The treatment is quick, taking just 15-20 minutes, and most patients describe only minimal discomfort - like a slight pinching sensation. There's no downtime required, so you can return to your normal activities immediately.",
        'Results begin to appear within 3-5 days, with full effects visible after about 2 weeks. The improvements typically last 3-4 months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll discuss your concerns and create a personalised treatment plan" },
        { strong: 'Treatment:', text: 'Quick, minimally invasive procedure taking 15-20 minutes' },
        { strong: 'Minimal Discomfort:', text: 'Most patients describe a slight pinching sensation' },
        { strong: 'No Downtime:', text: 'You can return to normal activities immediately' },
        { strong: 'Results:', text: 'Visible improvement within 3-5 days, full results at 2 weeks' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Wrinkle Reduction At ProDenta?',
      content: [
        'At ProDenta, we understand that choosing aesthetic treatments is a personal decision. Our experienced practitioners take a conservative, natural approach - enhancing your features rather than changing them.',
        'We use only premium products and the latest techniques to ensure your comfort and safety. Every treatment is tailored to your unique facial structure and aesthetic goals.',
        'Our patients appreciate our honest advice, attention to detail, and the natural-looking results we consistently deliver.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '15-20 minutes' },
      { title: 'Results Visible', description: '3-5 days (full results in 2 weeks)' },
      { title: 'Duration', description: '3-4 months per treatment' },
      { title: 'Recovery', description: 'No downtime required' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-forehead.jpg', caption: 'Forehead Lines' },
        { image: '/images/before-after-frown.jpg', caption: 'Frown Lines' },
        { image: '/images/before-after-crows-feet.jpg', caption: "Crows' Feet" },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Wrinkle Reduction Treatment',
      price: '£210 - £350',
      description: 'Price varies depending on the treatment areas. Each treatment typically lasts 3-4 months.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is the treatment painful?',
        answer: 'Most patients experience minimal discomfort, describing it as a slight pinching sensation. The needles used are very fine, making the procedure quite tolerable.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 3-4 months. With regular treatments, some patients find the effects last longer as the muscles become trained to relax.',
      },
      {
        question: 'Are there any side effects?',
        answer: 'Side effects are generally mild and temporary, including slight redness, swelling, or bruising at injection sites. These typically resolve within a few hours to days.',
      },
      {
        question: 'When will I see results?',
        answer: "You'll start to see improvements within 3-5 days, with full results visible after about 2 weeks.",
      },
      {
        question: 'Will I look frozen or unnatural?',
        answer: 'When administered by experienced practitioners, the treatment should leave you looking refreshed and natural, not frozen. We aim for subtle enhancement that maintains your natural expressions.',
      },
    ],
    related: [
      {
        href: '/aesthetics/dermal-fillers',
        image: '/images/dermal-fillers-thumb.jpg',
        title: 'Dermal Fillers',
        description: 'Restore volume and smooth deeper lines',
      },
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Skin hydration and firmness treatment',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalized skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Smooth Away Wrinkles?',
      description: 'Book a free consultation to discuss your aesthetic goals and create a personalised treatment plan.',
    },
  },

  // ─── DERMAL FILLERS ──────────────────────────────────────────────────
  {
    slug: 'dermal-fillers',
    title: 'Dermal Fillers',
    pageTitle: 'Dermal Fillers & Facial Contouring - ProDenta Battersea',
    metaDescription: 'Expert dermal filler treatments at ProDenta. Restore volume, enhance lips, smooth lines, and sculpt facial contours for natural, youthful results.',
    category: 'enhance',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Dermal Fillers' },
    ],
    heroSubtitle: 'Restore lost volume, enhance facial contours, and achieve natural-looking rejuvenation with our expert dermal filler treatments.',
    heroImage: '/images/dermal-fillers-hero.jpg',
    heroCards: [
      {
        title: 'Instant Results',
        description: 'See immediate volume restoration with continued improvement over weeks',
      },
      {
        title: 'Natural Enhancement',
        description: 'Subtle improvements that enhance your features without changing who you are',
      },
      {
        title: 'From £250',
        description: 'Long-lasting results typically enduring 6-18 months',
      },
    ],
    whatIsIt: {
      title: 'What Are Dermal Fillers?',
      content: [
        "Dermal fillers are injectable gel-based treatments that restore lost volume, smooth deep lines, enhance facial contours, and create a more youthful appearance. Primarily composed of hyaluronic acid - a naturally occurring substance in the skin - these fillers provide instant, visible results whilst stimulating your body's own collagen production.",
        "At ProDenta, our skilled practitioners use premium dermal fillers to achieve beautifully natural results. Whether you're looking to restore volume loss from ageing, enhance your lips, define your cheekbones, or smooth nasolabial folds, we create personalised treatment plans tailored to your unique facial structure and aesthetic goals.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Volume Loss',
          description: 'Hollowing in cheeks, temples, and under-eye areas due to ageing',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Deep Lines & Folds',
          description: 'Nasolabial folds, marionette lines, and other static wrinkles',
        },
        {
          icon: '/icons/60_Fashion_And_Beauty_Icons_source_2442771/SVG 2/5.svg',
          title: 'Thin or Undefined Lips',
          description: 'Lack of volume, definition, or symmetry in the lips',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "Dermal fillers are carefully injected beneath the skin's surface using ultra-fine needles or cannulas. The hyaluronic acid gel adds immediate volume, filling wrinkles and restoring contours. Because hyaluronic acid naturally attracts and retains water, it also hydrates the skin from within, improving overall texture and radiance.",
        "The treatment typically takes 30-45 minutes. We may apply topical anaesthetic cream beforehand to maximise comfort, though many modern fillers contain built-in anaesthetic. Most patients describe only mild pressure or a slight pinching sensation during injection.",
        'Results are visible immediately and continue to improve over the following 2-4 weeks as the filler settles and any minor swelling subsides. Depending on the product used and treatment area, results typically last 6-18 months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your facial structure, discuss your goals, and recommend appropriate treatment areas" },
        { strong: 'Treatment:', text: 'Precise injections administered with fine needles or cannulas, taking 30-45 minutes' },
        { strong: 'Comfort:', text: 'Topical anaesthetic applied beforehand; most fillers contain built-in anaesthetic' },
        { strong: 'Minimal Downtime:', text: 'Minor swelling or bruising may occur but typically resolves within days' },
        { strong: 'Results:', text: 'Immediate visible improvement, optimal results after 2-4 weeks as filler settles' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Dermal Fillers At ProDenta?',
      content: [
        "At ProDenta, we believe in enhancing your natural beauty, not changing it. Our experienced practitioners have extensive training in facial anatomy and use advanced injection techniques to deliver beautifully subtle, natural-looking results.",
        "We use only premium, MHRA-approved hyaluronic acid fillers from trusted brands. Every treatment is personalised to your unique facial structure, skin type, and aesthetic goals. We'll provide honest advice about what's achievable and recommend treatments only when appropriate.",
        'Our patients value our artistic eye, gentle technique, and commitment to creating harmonious, age-appropriate results that make you look refreshed - never overdone.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30-45 minutes' },
      { title: 'Results Visible', description: 'Immediate (optimal after 2-4 weeks)' },
      { title: 'Duration', description: '6-18 months depending on area' },
      { title: 'Recovery', description: 'Minimal downtime, resume activities immediately' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-fillers-lips.jpg', caption: 'Lip Enhancement' },
        { image: '/images/before-after-fillers-cheeks.jpg', caption: 'Cheek Augmentation' },
        { image: '/images/before-after-fillers-lines.jpg', caption: 'Nasolabial Fold Reduction' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Dermal Filler Treatment',
      price: 'From £250',
      description: 'Price varies depending on the treatment area and amount of product required. Results typically last 6-18 months depending on the area treated.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Are dermal fillers painful?',
        answer: 'Most patients experience minimal discomfort. We apply topical anaesthetic cream beforehand, and many modern fillers contain built-in anaesthetic. Most describe only mild pressure during injection.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 6-18 months depending on the treatment area, product used, and individual metabolism. Lips tend to metabolise filler faster (6-9 months), whilst cheeks and deeper structures last longer (12-18 months).',
      },
      {
        question: 'Are there any side effects?',
        answer: 'Common side effects include temporary swelling, redness, and bruising at injection sites, typically resolving within a few days. Serious complications are rare when performed by experienced practitioners.',
      },
      {
        question: 'When will I see results?',
        answer: 'Results are visible immediately, though minor swelling may initially mask the final outcome. Optimal results appear after 2-4 weeks once any swelling subsides and the filler fully integrates with surrounding tissue.',
      },
      {
        question: 'Will I look overdone or unnatural?',
        answer: 'When administered by skilled practitioners with an artistic eye, fillers should enhance your natural features subtly. We specialise in creating balanced, age-appropriate results that look refreshed, never overdone.',
      },
    ],
    related: [
      {
        href: '/aesthetics/wrinkle-reduction',
        image: '/images/wrinkle-reduction-thumb.jpg',
        title: 'Wrinkle Reduction',
        description: 'Smooth dynamic lines and wrinkles',
      },
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Skin hydration and firmness treatment',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Restore Your Natural Radiance?',
      description: 'Book a free consultation to discuss how dermal fillers can enhance your features and restore youthful volume.',
    },
  },

  // ─── AQUALYX ─────────────────────────────────────────────────────────
  {
    slug: 'aqualyx',
    title: 'Aqualyx',
    pageTitle: 'Aqualyx Fat Dissolving Treatment - ProDenta Battersea',
    metaDescription: 'Aqualyx fat dissolving injections at ProDenta. Non-surgical treatment to reduce stubborn fat deposits on chin, jowls, and body areas for a more contoured appearance.',
    category: 'enhance',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Aqualyx' },
    ],
    heroSubtitle: 'Non-surgical solution to reduce stubborn fat deposits and achieve a more sculpted, contoured appearance.',
    heroImage: '/images/aqualyx-hero.jpg',
    heroCards: [
      {
        title: 'Non-Surgical',
        description: 'Dissolve stubborn fat without surgery, liposuction, or general anaesthetic',
      },
      {
        title: 'Targeted Fat Reduction',
        description: 'Precisely treats problem areas resistant to diet and exercise',
      },
      {
        title: 'From £350',
        description: '2-8 sessions recommended depending on treatment area',
      },
    ],
    whatIsIt: {
      title: 'What Is Aqualyx?',
      content: [
        "Aqualyx is an innovative injectable treatment designed to dissolve stubborn fat deposits that resist diet and exercise. This non-surgical solution uses a specially formulated compound to break down fat cells, which are then naturally eliminated by your body's lymphatic system.",
        'At ProDenta, we use Aqualyx to target specific problem areas including double chins, jowls, and localised fat deposits. This treatment offers a non-invasive alternative to surgical procedures, providing gradual, natural-looking contouring without the risks and downtime associated with liposuction.',
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Double Chin',
          description: 'Submental fat creating a double chin appearance beneath the jawline',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Jowls',
          description: 'Fat deposits along the jawline affecting facial definition',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Stubborn Fat Deposits',
          description: 'Localised fat areas resistant to diet and exercise',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "Aqualyx contains a modified form of deoxycholic acid, a substance naturally produced by the body to aid fat digestion. When injected into fatty tissue, it breaks down the fat cell membrane, causing the cells to release their contents. The liquefied fat is then naturally processed and eliminated through the body's lymphatic system.",
        'The treatment involves multiple small injections into the target area. Each session takes approximately 30-45 minutes. Most patients require 2-8 sessions spaced 4-6 weeks apart, depending on the area being treated and the amount of fat reduction desired.',
        'Results develop gradually as your body eliminates the dissolved fat cells. Initial improvements may be visible after 3-4 weeks, with optimal results appearing after completing the full course of treatments.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess treatment areas and discuss your body contouring goals" },
        { strong: 'Treatment:', text: 'Multiple small injections administered to target areas, taking 30-45 minutes' },
        { strong: 'Tolerable Discomfort:', text: 'Some stinging and warmth during injection; local anaesthetic may be used' },
        { strong: 'Minimal Downtime:', text: 'Some swelling and tenderness for a few days; normal activities can usually resume immediately' },
        { strong: 'Results:', text: 'Gradual fat reduction over 3-4 weeks, optimal results after completing treatment course' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Aqualyx At ProDenta?',
      content: [
        'At ProDenta, we offer Aqualyx as part of our comprehensive aesthetic services. Our practitioners are expertly trained in fat dissolving injection techniques and understand the precise anatomy required for safe, effective treatment.',
        "We use only genuine Aqualyx products and conduct thorough consultations to ensure you're a suitable candidate for treatment. We'll provide honest advice about what can realistically be achieved and recommend the optimal treatment plan for your goals.",
        'Our patients value our realistic approach, attention to safety, and the gradual, natural-looking body contouring results that Aqualyx delivers.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30-45 minutes per session' },
      { title: 'Results Visible', description: '3-4 weeks after each session' },
      { title: 'Duration', description: 'Long-lasting with healthy lifestyle' },
      { title: 'Sessions Required', description: '2-8 sessions, 4-6 weeks apart' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-aqualyx-chin.jpg', caption: 'Double Chin Reduction' },
        { image: '/images/before-after-aqualyx-jawline.jpg', caption: 'Jawline Contouring' },
        { image: '/images/before-after-aqualyx-jowls.jpg', caption: 'Jowl Reduction' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Aqualyx Treatment',
      price: 'From £350 per session',
      description: 'A course of 2-8 sessions is typically recommended, spaced 4-6 weeks apart. The number of sessions required depends on the treatment area and desired results.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is Aqualyx painful?',
        answer: 'The treatment involves some discomfort including stinging and warmth during injection. Local anaesthetic may be used to minimise discomfort. Most patients find it tolerable.',
      },
      {
        question: 'How long do results last?',
        answer: "Once fat cells are destroyed, they don't return. Results are long-lasting provided you maintain a stable weight and healthy lifestyle. Weight gain can cause remaining fat cells to enlarge.",
      },
      {
        question: 'Are there any side effects?',
        answer: 'Common side effects include swelling, redness, bruising, and tenderness in the treated area for several days. These are normal signs that the treatment is working and typically resolve within a week.',
      },
      {
        question: 'When will I see results?',
        answer: 'Initial results may be visible after 3-4 weeks as your body processes the dissolved fat. Optimal results appear after completing the full course of treatments.',
      },
      {
        question: 'Am I a suitable candidate for Aqualyx?',
        answer: "Aqualyx is ideal for targeting small, stubborn fat deposits resistant to diet and exercise. It's not a weight loss treatment and isn't suitable for obese patients. A consultation will determine if you're a good candidate.",
      },
    ],
    related: [
      {
        href: '/aesthetics/dermal-fillers',
        image: '/images/dermal-fillers-thumb.jpg',
        title: 'Dermal Fillers',
        description: 'Restore volume and enhance facial contours',
      },
      {
        href: '/aesthetics/wrinkle-reduction',
        image: '/images/wrinkle-reduction-thumb.jpg',
        title: 'Wrinkle Reduction',
        description: 'Smooth fine lines and dynamic wrinkles',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Sculpt Your Profile?',
      description: 'Book a free consultation to find out if Aqualyx can help you achieve your body contouring goals.',
    },
  },

  // ─── PROFHILO ────────────────────────────────────────────────────────
  {
    slug: 'profhilo',
    title: 'Profhilo',
    pageTitle: 'Profhilo Skin Treatment - ProDenta Battersea',
    metaDescription: 'Profhilo skin hydration and bio-remodelling treatment at ProDenta. Improve skin elasticity, firmness, and texture with this innovative injectable treatment.',
    category: 'maintain',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Profhilo' },
    ],
    heroSubtitle: 'Revolutionary bio-remodelling treatment that nourishes dermal cells and restores skin firmness for a naturally radiant complexion.',
    heroImage: '/images/profhilo-hero.jpg',
    heroCards: [
      {
        title: 'Bio-Remodelling',
        description: 'Stimulates collagen and elastin production for natural skin regeneration',
      },
      {
        title: 'Deep Hydration',
        description: 'Nourishes dermal cells to improve skin texture, firmness and elasticity',
      },
      {
        title: 'From £350',
        description: '2-3 sessions recommended for optimal, lasting results',
      },
    ],
    whatIsIt: {
      title: 'What Is Profhilo?',
      content: [
        "Profhilo is an innovative injectable skin remodelling treatment that hydrates skin from within. Unlike traditional dermal fillers, Profhilo doesn't add volume - instead, it stimulates your skin's natural production of collagen and elastin to restore firmness, elasticity and radiance.",
        'At ProDenta, we use Profhilo to treat skin laxity and improve overall skin quality. This treatment is particularly effective for addressing the signs of ageing whilst maintaining a completely natural appearance. The result is healthy, glowing skin with improved texture and tone.',
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Skin Laxity',
          description: 'Loss of skin firmness and tightness, particularly on the face and neck',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Fine Lines & Wrinkles',
          description: 'Superficial lines and creases caused by dehydration and ageing',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/5.svg',
          title: 'Dehydrated Skin',
          description: 'Dull, dry skin lacking moisture and radiance',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        'Profhilo contains one of the highest concentrations of hyaluronic acid on the market. When injected into the skin, it spreads evenly beneath the surface, releasing hyaluronic acid slowly to stimulate the production of collagen and elastin in four different types of skin cells.',
        'The treatment is administered using the BAP (Bio Aesthetic Points) technique - five injection points on each side of the face, strategically placed to allow optimal diffusion of the product. The entire procedure takes about 30 minutes.',
        'A typical treatment course consists of two sessions, four weeks apart. Results are visible after the first treatment and continue to improve over time, with effects lasting up to six months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin quality and discuss your aesthetic goals" },
        { strong: 'Treatment:', text: 'Precise injections using the BAP technique, taking approximately 30 minutes' },
        { strong: 'Minimal Discomfort:', text: 'The treatment is well-tolerated with minimal discomfort' },
        { strong: 'No Downtime:', text: 'You can resume normal activities immediately after treatment' },
        { strong: 'Results:', text: 'Gradual improvement over 4 weeks, with optimal results after the second session' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Profhilo At ProDenta?',
      content: [
        'At ProDenta, we understand that healthy, radiant skin is the foundation of beauty. Our experienced practitioners are trained in the precise BAP injection technique required for optimal Profhilo results.',
        'We use only genuine Profhilo products and follow strict safety protocols to ensure your comfort and wellbeing. Every treatment plan is personalised to your unique skin concerns and aesthetic goals.',
        'Our patients value our expertise in bio-remodelling treatments and appreciate the natural, glowing results that Profhilo delivers.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30 minutes per session' },
      { title: 'Results Visible', description: 'Gradual improvement over 4 weeks' },
      { title: 'Duration', description: 'Up to 6 months after treatment course' },
      { title: 'Sessions Required', description: '2 sessions, 4 weeks apart' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-profhilo-face.jpg', caption: 'Skin Texture & Firmness' },
        { image: '/images/before-after-profhilo-neck.jpg', caption: 'Neck Laxity' },
        { image: '/images/before-after-profhilo-hydration.jpg', caption: 'Skin Hydration' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Profhilo Treatment',
      price: '£350 per session',
      description: 'A course of 2 sessions is recommended, 4 weeks apart. Maintenance treatments every 6 months help sustain results.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is Profhilo painful?',
        answer: 'Most patients find Profhilo very well-tolerated. The injections may cause slight discomfort, but the procedure is quick and uses very fine needles. No anaesthetic is typically required.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last up to 6 months after completing the initial 2-session course. Maintenance treatments every 6 months help sustain the skin improvement effects.',
      },
      {
        question: 'Are there any side effects?',
        answer: 'Side effects are minimal and temporary. You may experience slight redness, swelling, or small bumps at injection sites, which typically resolve within 24-48 hours.',
      },
      {
        question: 'When will I see results?',
        answer: "You'll notice gradual improvement over the 4 weeks between sessions. Optimal results are visible approximately 4 weeks after the second treatment, as collagen and elastin production increases.",
      },
      {
        question: 'How is Profhilo different from dermal fillers?',
        answer: "Unlike dermal fillers, Profhilo doesn't add volume or change facial structure. Instead, it bio-remodels the skin from within, improving texture, firmness and hydration for a naturally rejuvenated appearance.",
      },
    ],
    related: [
      {
        href: '/aesthetics/sunekos',
        image: '/images/sunekos-thumb.jpg',
        title: 'Sunekos',
        description: 'Advanced skin rejuvenation treatment',
      },
      {
        href: '/aesthetics/dermal-fillers',
        image: '/images/dermal-fillers-thumb.jpg',
        title: 'Dermal Fillers',
        description: 'Restore volume and smooth deeper lines',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: "Ready to Revitalise Your Skin?",
      description: "Book a free consultation to discuss how Profhilo can restore your skin's natural radiance and firmness.",
    },
  },

  // ─── SUNEKOS ─────────────────────────────────────────────────────────
  {
    slug: 'sunekos',
    title: 'Sunekos',
    pageTitle: 'Sunekos Skin Rejuvenation Treatment - ProDenta Battersea',
    metaDescription: 'Sunekos skin rejuvenation at ProDenta. Advanced amino acid and hyaluronic acid treatment to restore skin elasticity, reduce fine lines, and improve overall skin quality.',
    category: 'maintain',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Sunekos' },
    ],
    heroSubtitle: "Advanced injectable treatment combining amino acids and hyaluronic acid to regenerate your skin's natural structure and vitality.",
    heroImage: '/images/sunekos-hero.jpg',
    heroCards: [
      {
        title: 'Natural Regeneration',
        description: "Stimulates your skin's own collagen and elastin production",
      },
      {
        title: 'Dual Action Formula',
        description: 'Combines amino acids with hyaluronic acid for comprehensive rejuvenation',
      },
      {
        title: 'From £250',
        description: '4 sessions recommended for optimal, long-lasting results',
      },
    ],
    whatIsIt: {
      title: 'What Is Sunekos?',
      content: [
        "Sunekos is a revolutionary injectable treatment that combines hyaluronic acid with a patented amino acid complex to regenerate the skin's Extra Cellular Matrix (ECM). Available in two formulations - Sunekos 1200 and Sunekos Performa - this treatment stimulates natural collagen and elastin production to restore skin quality from within.",
        'At ProDenta, we use Sunekos to address a wide range of skin concerns, from fine lines and loss of elasticity to dark circles and uneven texture. The result is naturally rejuvenated skin that looks healthier, firmer, and more radiant without changing your appearance.',
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Fine Lines & Wrinkles',
          description: 'Superficial lines caused by collagen depletion and skin ageing',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Loss of Elasticity',
          description: 'Reduced skin firmness and bounce due to elastin breakdown',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Dark Circles & Hollows',
          description: 'Under-eye darkness and volume loss creating a tired appearance',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "Sunekos works through a unique amino acid complex that activates fibroblasts - the cells responsible for producing collagen and elastin. The treatment is injected into the dermis using micro-injections, where it stimulates the regeneration of your skin's natural support structure.",
        'We offer two Sunekos formulations: Sunekos 1200 for delicate areas like the under-eye region and d\u00E9colletage, and Sunekos Performa for areas requiring deeper structural support. The treatment takes approximately 30 minutes with minimal discomfort.',
        'A typical course involves 4 sessions spaced 7-10 days apart. Results develop gradually as your skin regenerates, with improvements continuing for months after treatment. Effects can last up to 6-9 months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin concerns and recommend the appropriate Sunekos formulation" },
        { strong: 'Treatment:', text: 'Precise micro-injections administered across treatment areas, taking approximately 30 minutes' },
        { strong: 'Minimal Discomfort:', text: 'Very fine needles ensure the treatment is well-tolerated' },
        { strong: 'No Downtime:', text: 'You can resume normal activities immediately after treatment' },
        { strong: 'Results:', text: 'Gradual skin improvement developing over weeks, with ongoing benefits after the course' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Sunekos At ProDenta?',
      content: [
        "At ProDenta, we're committed to offering the most advanced skin rejuvenation treatments available. Our practitioners are expertly trained in Sunekos injection techniques to ensure optimal product distribution and results.",
        "We use only genuine Sunekos products and carefully select the appropriate formulation for each patient's unique needs. Whether addressing delicate under-eye concerns or restoring facial skin quality, we create personalised treatment plans.",
        'Our patients value our expertise in regenerative skin treatments and the natural, progressive improvements that Sunekos delivers without artificial enhancement.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30 minutes per session' },
      { title: 'Results Visible', description: 'Gradual improvement over weeks' },
      { title: 'Duration', description: '6-9 months after treatment course' },
      { title: 'Sessions Required', description: '4 sessions, 7-10 days apart' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-sunekos-eyes.jpg', caption: 'Under-Eye Rejuvenation' },
        { image: '/images/before-after-sunekos-texture.jpg', caption: 'Skin Texture & Tone' },
        { image: '/images/before-after-sunekos-elasticity.jpg', caption: 'Skin Elasticity' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Sunekos Treatment',
      price: 'From £250 per session',
      description: 'A course of 4 sessions is recommended, spaced 7-10 days apart. Maintenance sessions every 6-9 months help sustain results.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is Sunekos painful?',
        answer: 'Sunekos is generally well-tolerated. The micro-injections may cause slight discomfort, but the procedure is quick and uses very fine needles. Most patients find it comfortable.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 6-9 months after completing the initial 4-session course. Maintenance treatments every 6-9 months help sustain the regenerative effects.',
      },
      {
        question: 'Are there any side effects?',
        answer: 'Side effects are minimal and temporary. You may experience slight redness, swelling, or minor bruising at injection sites, which typically resolves within 24-48 hours.',
      },
      {
        question: 'When will I see results?',
        answer: 'Results develop gradually as your skin regenerates. You may notice initial improvements during the treatment course, with ongoing enhancement continuing for several weeks after completion.',
      },
      {
        question: "What's the difference between Sunekos 1200 and Sunekos Performa?",
        answer: 'Sunekos 1200 is ideal for delicate areas like the under-eye region, neck, and d\u00E9colletage. Sunekos Performa contains additional hyaluronic acid for treating areas requiring deeper structural support like the face and hands.',
      },
    ],
    related: [
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Skin hydration and firmness treatment',
      },
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Collagen induction therapy for skin renewal',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Regenerate Your Skin?',
      description: "Book a free consultation to discover how Sunekos can restore your skin's natural elasticity and radiance.",
    },
  },

  // ─── THE PERFECT PEEL ────────────────────────────────────────────────
  {
    slug: 'perfect-peel',
    title: 'The Perfect Peel',
    pageTitle: 'The Perfect Peel Treatment - ProDenta Battersea',
    metaDescription: 'The Perfect Peel at ProDenta. Advanced chemical peel treatment to improve skin tone, texture, reduce pigmentation, and achieve a radiant, youthful complexion.',
    category: 'maintain',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'The Perfect Peel' },
    ],
    heroSubtitle: 'Transform your complexion with this advanced chemical peel that improves tone, texture, and radiance for dramatically healthier skin.',
    heroImage: '/images/perfect-peel-hero.jpg',
    heroCards: [
      {
        title: 'Comprehensive Formula',
        description: 'Unique blend of acids, antioxidants, and glutathione for complete rejuvenation',
      },
      {
        title: 'Visible Results',
        description: 'Dramatic improvement in tone, texture, and radiance',
      },
      {
        title: 'From £300',
        description: 'One treatment provides lasting results for months',
      },
    ],
    whatIsIt: {
      title: 'What Is The Perfect Peel?',
      content: [
        'The Perfect Peel is an award-winning medical-grade chemical peel featuring a unique blend of powerful ingredients including TCA, retinoic acid, phenol, salicylic acid, vitamin C, and glutathione. This comprehensive formula treats multiple skin concerns simultaneously, delivering transformative results with minimal downtime.',
        'At ProDenta, we use The Perfect Peel to address pigmentation, acne scarring, fine lines, sun damage, and uneven skin tone. Suitable for all skin types and tones, this treatment provides dramatic rejuvenation whilst remaining gentle enough to avoid extended recovery periods.',
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Pigmentation & Sun Damage',
          description: 'Dark spots, melasma, and uneven skin tone from sun exposure',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Acne & Scarring',
          description: 'Active acne, post-inflammatory marks, and acne scarring',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Fine Lines & Dull Skin',
          description: 'Signs of ageing, rough texture, and lacklustre complexion',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "The Perfect Peel solution is applied to clean skin in layers, penetrating deep into the dermis to exfoliate damaged cells and stimulate regeneration. The unique formula includes glutathione - a powerful antioxidant that brightens skin and reduces pigmentation - along with acids that resurface and renew.",
        "The application takes approximately 15-20 minutes. You may experience a tingling or warming sensation during application. The peel remains on your skin and you'll continue the treatment at home with provided post-care products over the next few days.",
        'Peeling typically begins on day 3 and lasts 5-7 days. As the damaged outer layers shed, fresh, radiant skin is revealed underneath. Full results are visible 2-3 weeks post-treatment, with continued improvement over the following months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin concerns and determine if The Perfect Peel is right for you" },
        { strong: 'Application:', text: 'Peel solution applied in layers to clean skin, taking 15-20 minutes' },
        { strong: 'Sensation:', text: 'Tingling or warmth during application; well-tolerated by most patients' },
        { strong: 'Peeling Phase:', text: '5-7 days of visible peeling starting day 3; minimal social downtime with proper aftercare' },
        { strong: 'Results:', text: 'Dramatic improvement in tone and texture visible within 2-3 weeks' },
      ],
    },
    whyChoose: {
      title: 'Why Choose The Perfect Peel At ProDenta?',
      content: [
        "At ProDenta, we're committed to offering proven, results-driven skin treatments. The Perfect Peel is a medical-grade treatment that requires proper training and expertise to apply safely and effectively - our practitioners are certified in this advanced technique.",
        "We provide comprehensive pre-treatment consultation and detailed aftercare instructions to ensure optimal results. We'll guide you through the entire process, from preparation through the peeling phase, to maximise benefits whilst minimising complications.",
        'Our patients choose The Perfect Peel for its dramatic, transformative results and relatively short recovery time compared to deeper peels.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '15-20 minutes application' },
      { title: 'Results Visible', description: '2-3 weeks post-peel' },
      { title: 'Duration', description: 'Results last 4-6 months' },
      { title: 'Peeling Phase', description: '5-7 days visible peeling' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-peel-pigmentation.jpg', caption: 'Pigmentation Reduction' },
        { image: '/images/before-after-peel-texture.jpg', caption: 'Skin Texture & Tone' },
        { image: '/images/before-after-peel-acne.jpg', caption: 'Acne Scarring' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'The Perfect Peel',
      price: 'From £300',
      description: 'One treatment provides dramatic results lasting 4-6 months. Course of 3-4 treatments recommended annually for optimal skin health.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is The Perfect Peel painful?',
        answer: 'During application, you may experience tingling, warmth, or mild stinging. This is normal and well-tolerated by most patients. The sensation subsides after application is complete.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 4-6 months. For ongoing maintenance and optimal skin health, a course of 3-4 treatments per year is recommended.',
      },
      {
        question: 'What should I expect during the peeling phase?',
        answer: 'Peeling typically begins on day 3 and continues for 5-7 days. Skin may appear red initially, followed by flaking and peeling. This is a sign the treatment is working. Do not pick or pull at peeling skin.',
      },
      {
        question: 'When will I see results?',
        answer: "You'll see dramatic improvement 2-3 weeks after the peel, once peeling is complete and new skin has fully emerged. Results continue to improve over the following months.",
      },
      {
        question: 'Is The Perfect Peel suitable for all skin types?',
        answer: 'Yes, The Perfect Peel is safe for all skin types and tones, including darker skin that may be at higher risk with other peels. A consultation will confirm suitability.',
      },
    ],
    related: [
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Collagen induction for skin renewal',
      },
      {
        href: '/aesthetics/chemical-peels',
        image: '/images/chemical-peels-thumb.jpg',
        title: 'Chemical Peels',
        description: 'Customised peels for various skin concerns',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Complexion?',
      description: "Book a free consultation to discover how The Perfect Peel can dramatically improve your skin's tone, texture, and radiance.",
    },
  },

  // ─── MICRONEEDLING ───────────────────────────────────────────────────
  {
    slug: 'microneedling',
    title: 'Microneedling',
    pageTitle: 'Microneedling Treatment - ProDenta Battersea',
    metaDescription: 'Microneedling at ProDenta. Collagen induction therapy to reduce scars, improve texture, and rejuvenate skin for a naturally youthful glow.',
    category: 'restore',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Microneedling' },
    ],
    heroSubtitle: "Stimulate your skin's natural healing response to reduce scarring, improve texture, and achieve lasting rejuvenation.",
    heroImage: '/images/microneedling-hero.jpg',
    heroCards: [
      {
        title: 'Natural Healing',
        description: "Triggers your body's collagen and elastin production",
      },
      {
        title: 'Minimal Downtime',
        description: 'Resume normal activities within 24-48 hours',
      },
      {
        title: 'From £200',
        description: 'Course of 3-6 sessions for optimal results',
      },
    ],
    whatIsIt: {
      title: 'What Is Microneedling?',
      content: [
        "Microneedling, also known as collagen induction therapy, uses fine needles to create thousands of tiny, controlled micro-injuries in the skin. This triggers your body's natural wound healing response, stimulating the production of collagen and elastin - the proteins responsible for firm, youthful skin.",
        "At ProDenta, we use medical-grade microneedling devices to treat acne scarring, stretch marks, enlarged pores, fine lines, and uneven skin texture. Unlike topical treatments that only reach the skin's surface, microneedling works at a deeper level to create lasting improvement from within.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Acne & Scarring',
          description: 'Atrophic acne scars, pitted skin, and post-inflammatory marks',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Texture & Pores',
          description: 'Rough skin texture, enlarged pores, and uneven surface',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Fine Lines & Wrinkles',
          description: 'Early signs of ageing and loss of skin firmness',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "A medical-grade microneedling device with fine, sterile needles is moved across the skin, creating controlled micro-channels. This triggers your body's healing cascade, flooding the area with growth factors and stimulating fibroblasts to produce fresh collagen and elastin.",
        'The treatment takes 30-60 minutes depending on the area treated. We apply topical anaesthetic cream beforehand to maximise comfort. Most patients describe a scratching or vibrating sensation rather than pain.',
        'Skin appears pink or red immediately after, similar to mild sunburn. This subsides within 24-48 hours. Results develop gradually over 4-6 weeks as new collagen forms. A course of 3-6 sessions spaced 4-6 weeks apart is typically recommended.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin concerns and create a personalised treatment plan" },
        { strong: 'Preparation:', text: 'Topical anaesthetic applied 20-30 minutes before treatment' },
        { strong: 'Treatment:', text: 'Medical-grade microneedling device moved across treatment areas for 30-60 minutes' },
        { strong: 'Sensation:', text: 'Scratching or vibrating feeling; well-tolerated with anaesthetic' },
        { strong: 'Recovery:', text: '24-48 hours of redness; results develop over 4-6 weeks' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Microneedling At ProDenta?',
      content: [
        "At ProDenta, we use medical-grade microneedling devices operated by trained practitioners who understand skin anatomy and healing. This isn't a DIY derma-roller treatment - our professional equipment and expertise deliver superior, safer results.",
        "We follow strict hygiene protocols using sterile, single-use needle cartridges. We'll assess your skin thoroughly to determine the appropriate needle depth and treatment intensity for your specific concerns.",
        "Our patients choose microneedling for its ability to create real, lasting change in skin quality through your body's natural regeneration processes.",
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30-60 minutes' },
      { title: 'Results Visible', description: '4-6 weeks' },
      { title: 'Duration', description: 'Results improve over months' },
      { title: 'Recovery', description: '24-48 hours redness' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-microneedling-scars.jpg', caption: 'Acne Scarring' },
        { image: '/images/before-after-microneedling-texture.jpg', caption: 'Skin Texture' },
        { image: '/images/before-after-microneedling-pores.jpg', caption: 'Pore Reduction' },
      ],
    },
    pricing: {
      heading: 'Microneedling In South West London',
      treatmentName: 'Microneedling Treatment',
      price: 'From £200',
      description: 'A course of 3-6 sessions is recommended, spaced 4-6 weeks apart, for optimal collagen induction and skin renewal results.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is microneedling painful?',
        answer: 'Most patients find microneedling very tolerable. We apply topical anaesthetic cream 20-30 minutes before treatment to minimise discomfort. Most describe a scratching or vibrating sensation rather than pain.',
      },
      {
        question: 'How many sessions do I need?',
        answer: 'A course of 3-6 sessions spaced 4-6 weeks apart is typically recommended. The number of sessions depends on your skin concerns - mild texture issues may improve in 3 sessions, whilst deeper scarring may require 6 or more.',
      },
      {
        question: 'What is the downtime after microneedling?',
        answer: 'Skin will appear pink or red for 24-48 hours, similar to mild sunburn. Most patients can return to normal activities the next day. We recommend avoiding makeup for 24 hours and direct sun exposure for a few days post-treatment.',
      },
      {
        question: 'When will I see results?',
        answer: 'Initial improvements in skin texture and tone may be noticeable within 2 weeks. However, the full benefits of collagen remodelling develop over 4-6 weeks after each session, with cumulative improvement throughout your treatment course.',
      },
      {
        question: 'Can microneedling help with acne scars?',
        answer: 'Yes, microneedling is one of the most effective treatments for atrophic (indented) acne scars. By stimulating collagen production in the scarred areas, the skin gradually fills in and smooths out over multiple sessions.',
      },
    ],
    related: [
      {
        href: '/aesthetics/chemical-peels',
        image: '/images/chemical-peels-thumb.jpg',
        title: 'Chemical Peels',
        description: 'Customised peels for various skin concerns',
      },
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Skin hydration and firmness treatment',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Skin?',
      description: 'Book a free consultation to discuss how microneedling can improve your skin texture, reduce scarring, and rejuvenate your complexion.',
    },
  },

  // ─── CHEMICAL PEELS ──────────────────────────────────────────────────
  {
    slug: 'chemical-peels',
    title: 'Chemical Peels',
    pageTitle: 'Chemical Peels - ProDenta Battersea',
    metaDescription: 'Customised chemical peel treatments at ProDenta. Improve skin tone, texture, and clarity with tailored peel solutions for your specific skin concerns.',
    category: 'restore',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Chemical Peels' },
    ],
    heroSubtitle: 'Tailored peel solutions to improve skin tone, texture, and clarity for a refreshed, radiant complexion.',
    heroImage: '/images/chemical-peels-hero.jpg',
    heroCards: [
      {
        title: 'Customised Solutions',
        description: 'Tailored peel strength and formulation for your skin type and concerns',
      },
      {
        title: 'Multiple Depths',
        description: 'Superficial to medium-depth peels for various skin needs',
      },
      {
        title: 'From £150',
        description: 'Range of peel options suited to different budgets and goals',
      },
    ],
    whatIsIt: {
      title: 'What Are Chemical Peels?',
      content: [
        "Chemical peels use controlled application of acidic solutions to exfoliate dead skin cells and stimulate regeneration. By removing damaged outer layers, peels reveal fresh, healthy skin underneath whilst triggering your body's healing response to produce new collagen and elastin.",
        "At ProDenta, we offer a range of chemical peel treatments tailored to different skin types and concerns. From gentle superficial peels for brightening and refreshing to medium-depth peels for more significant concerns like pigmentation and scarring, we'll recommend the appropriate strength and formulation for your specific needs and goals.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Pigmentation & Sun Damage',
          description: 'Dark spots, melasma, and uneven skin tone from sun exposure',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Acne & Scarring',
          description: 'Active acne, post-inflammatory marks, and acne scarring',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Fine Lines & Dull Skin',
          description: 'Signs of ageing, rough texture, and lacklustre complexion',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        'After cleansing your skin, we apply the selected peel solution evenly across treatment areas. The acidic formula works by breaking down bonds between dead skin cells, allowing them to slough off. Depending on the peel strength, penetration depth varies from superficial (epidermis only) to medium-depth (upper dermis).',
        "Application takes 15-30 minutes. You may feel tingling, warmth, or mild stinging - normal sensations that indicate the peel is working. Some peels are neutralised in-clinic, whilst others continue working at home with specific aftercare protocols.",
        'Peeling typically begins 2-3 days post-treatment and lasts 3-7 days depending on peel depth. As damaged layers shed, renewed skin emerges. Results continue improving over weeks as collagen remodelling occurs. Multiple treatments may be recommended for optimal results.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin type and concerns to select the most appropriate peel formulation and strength" },
        { strong: 'Application:', text: 'Peel solution applied evenly to clean skin, taking 15-30 minutes' },
        { strong: 'Sensation:', text: 'Tingling or warmth during application; well-tolerated by most patients' },
        { strong: 'Peeling Phase:', text: '3-7 days of visible peeling depending on peel depth; minimal social downtime with proper aftercare' },
        { strong: 'Results:', text: 'Improvement in tone and texture visible within 1-4 weeks depending on peel depth' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Chemical Peels At ProDenta?',
      content: [
        "At ProDenta, we understand that not all skin is the same. We take time to assess your skin type, concerns, and tolerance before recommending the appropriate peel formulation and strength. Our practitioners are trained in various peel systems to offer tailored solutions.",
        "We provide thorough pre-treatment guidance on skin preparation and comprehensive aftercare instructions to optimise results and minimise complications. We'll help you choose between single treatments for specific events or course-based approaches for ongoing skin maintenance.",
        'Our patients appreciate our conservative, personalised approach that prioritises safety and natural-looking improvement over aggressive treatments.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '15-30 minutes per session' },
      { title: 'Results Visible', description: '1-4 weeks depending on peel depth' },
      { title: 'Duration', description: '3-6 months depending on peel type' },
      { title: 'Peeling Phase', description: '3-7 days depending on peel depth' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-peel-pigmentation.jpg', caption: 'Pigmentation Reduction' },
        { image: '/images/before-after-peel-texture.jpg', caption: 'Skin Texture & Tone' },
        { image: '/images/before-after-peel-acne.jpg', caption: 'Acne Scarring' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Chemical Peel Treatments',
      price: 'From £150',
      description: 'Price varies based on peel type, strength, and treatment area. Course packages available for ongoing skin maintenance.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Are chemical peels painful?',
        answer: 'During application, you may experience tingling, warmth, or stinging sensations. Intensity varies with peel strength - superficial peels cause minimal discomfort, whilst medium-depth peels may be more intense but remain tolerable.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 3-6 months depending on peel type and depth. Superficial peels may require more frequent maintenance, whilst medium-depth peels provide longer-lasting improvement. Regular treatments maintain optimal skin health.',
      },
      {
        question: 'What should I expect during the peeling phase?',
        answer: 'Peeling typically begins 2-3 days post-treatment. Superficial peels may cause light flaking, whilst deeper peels produce more obvious peeling lasting up to a week. Never pick at peeling skin - let it shed naturally to avoid scarring.',
      },
      {
        question: 'When will I see results?',
        answer: 'Superficial peels show improvement within 1-2 weeks. Medium-depth peels take 3-4 weeks for full results as new skin emerges and collagen remodelling occurs. Results continue improving over following months.',
      },
      {
        question: 'Which peel is right for me?',
        answer: "The appropriate peel depends on your skin type, concerns, and tolerance. During consultation, we'll assess your skin and recommend suitable options, from gentle lactic acid peels to stronger TCA peels, ensuring safe, effective treatment.",
      },
    ],
    related: [
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Collagen induction for skin renewal',
      },
      {
        href: '/aesthetics/perfect-peel',
        image: '/images/perfect-peel-thumb.jpg',
        title: 'The Perfect Peel',
        description: 'Advanced medical-grade chemical peel',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Refresh Your Complexion?',
      description: 'Book a free consultation to discover which chemical peel is right for your skin type and concerns.',
    },
  },

  // ─── MESOTHERAPY ─────────────────────────────────────────────────────
  {
    slug: 'mesotherapy',
    title: 'Mesotherapy',
    pageTitle: 'Mesotherapy Treatment - ProDenta Battersea',
    metaDescription: 'Mesotherapy vitamin microinjections at ProDenta. Rejuvenate and revitalise your skin with targeted nutrient delivery for improved tone, texture and radiance.',
    category: 'restore',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Mesotherapy' },
    ],
    heroSubtitle: 'Vitamin microinjections to revitalise tired, dull skin and restore a healthy, radiant complexion.',
    heroImage: '/images/mesotherapy-hero.jpg',
    heroCards: [
      {
        title: 'Targeted Nutrient Delivery',
        description: 'Microinjections deliver vitamins, minerals and antioxidants directly to skin',
      },
      {
        title: 'Radiance & Vitality',
        description: 'Revitalises tired, dull skin for a fresh, glowing complexion',
      },
      {
        title: 'From £200',
        description: 'Course of 3-6 sessions recommended for optimal results',
      },
    ],
    whatIsIt: {
      title: 'What Is Mesotherapy?',
      content: [
        "Mesotherapy is a minimally invasive treatment that delivers vitamins, minerals, amino acids, and antioxidants directly into the mesoderm (middle layer) of the skin. These microinjections provide targeted nourishment to skin cells, stimulating regeneration and improving overall skin health.",
        "At ProDenta, we customise mesotherapy formulations to address your specific skin concerns, whether that's dullness, dehydration, fine lines, pigmentation, or loss of radiance. The treatment revitalises tired, stressed skin and restores a healthy, youthful glow.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Dull & Tired Skin',
          description: 'Lacklustre complexion lacking vitality and radiance',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/5.svg',
          title: 'Dehydration & Fine Lines',
          description: 'Dry, dehydrated skin with superficial lines and creases',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Uneven Tone & Pigmentation',
          description: 'Irregular skin tone, dark spots, and pigmentation issues',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        "During mesotherapy, a customised cocktail of active ingredients is delivered into the skin using very fine needles or a mesotherapy gun. These microinjections deposit nutrients directly where they're needed most - in the dermal layer of the skin.",
        "The treatment stimulates microcirculation, increases cellular metabolism, and triggers the skin's natural repair processes. Common ingredients include hyaluronic acid for hydration, vitamins C and E for antioxidant protection, amino acids for collagen production, and minerals for skin health.",
        'A typical course consists of 3-6 sessions, spaced 2-4 weeks apart, depending on your skin concerns. Each session takes approximately 30-45 minutes, with minimal discomfort and no downtime required.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: "We'll assess your skin and customise the mesotherapy formulation to your needs" },
        { strong: 'Preparation:', text: 'Skin is cleansed and a topical anaesthetic may be applied for comfort' },
        { strong: 'Treatment:', text: 'Microinjections delivered across treatment area, taking 30-45 minutes' },
        { strong: 'Minimal Discomfort:', text: 'Most patients find the treatment well-tolerated with mild tingling sensation' },
        { strong: 'No Downtime:', text: 'You can return to normal activities immediately, though mild redness may occur' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Mesotherapy At ProDenta?',
      content: [
        'At ProDenta, we understand that every skin type is unique. Our experienced practitioners create bespoke mesotherapy formulations tailored to your specific skin concerns, whether you\'re dealing with ageing, pigmentation, acne scarring, or general dullness.',
        'We use only high-quality, medical-grade ingredients and sterile techniques to ensure safe, effective treatment. Our team takes time to understand your skin goals and develop a personalised treatment plan for optimal results.',
        'Patients appreciate the versatility of mesotherapy - it can be used on the face, neck, d\u00E9colletage, and hands to address a wide range of skin concerns and restore a healthy, vibrant complexion.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: '30-45 minutes per session' },
      { title: 'Results Visible', description: 'Gradual improvement after each session' },
      { title: 'Duration', description: '4-6 months after treatment course' },
      { title: 'Sessions Required', description: '3-6 sessions, 2-4 weeks apart' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-mesotherapy-face.jpg', caption: 'Skin Radiance & Tone' },
        { image: '/images/before-after-mesotherapy-texture.jpg', caption: 'Skin Texture' },
        { image: '/images/before-after-mesotherapy-pigmentation.jpg', caption: 'Pigmentation' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Mesotherapy Treatment',
      price: 'From £200 per session',
      description: 'A course of 3-6 sessions is recommended, spaced 2-4 weeks apart. Pricing varies based on treatment area and formulation. Maintenance treatments help sustain results.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is mesotherapy painful?',
        answer: 'Most patients find mesotherapy well-tolerated. The microinjections may cause mild discomfort or a tingling sensation. A topical anaesthetic can be applied before treatment to minimise any discomfort.',
      },
      {
        question: 'How long do results last?',
        answer: 'Results typically last 4-6 months after completing the initial treatment course. Regular maintenance sessions (every 3-6 months) help sustain the skin improvement and vitality.',
      },
      {
        question: 'What are the side effects?',
        answer: 'Side effects are minimal and temporary. You may experience slight redness, swelling, or small bruises at injection sites, which typically resolve within 24-48 hours. Serious complications are rare when performed by experienced practitioners.',
      },
      {
        question: 'When will I see results?',
        answer: 'You may notice improved skin radiance and hydration within days of the first treatment. Optimal results develop gradually over the course of 3-6 sessions as nutrients accumulate and skin regeneration occurs.',
      },
      {
        question: 'What skin concerns can mesotherapy treat?',
        answer: 'Mesotherapy is versatile and can address dull, tired skin, fine lines, dehydration, pigmentation, acne scarring, loss of elasticity, and uneven skin tone. The formulation is customised to your specific needs.',
      },
    ],
    related: [
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Collagen induction therapy',
      },
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Bio-remodelling skin treatment',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Revitalise Your Skin?',
      description: "Book a free consultation to discover how mesotherapy can restore your skin's natural radiance and vitality.",
    },
  },

  // ─── HAIR LOSS TREATMENT ─────────────────────────────────────────────
  {
    slug: 'hair-loss-treatment',
    title: 'Hair Loss Treatment',
    pageTitle: 'Hair Loss Treatment - ProDenta Battersea',
    metaDescription: 'Topical hair loss treatments at ProDenta. Minoxidil therapy and microneedling for men and women to promote hair growth and reduce hair thinning.',
    category: 'restore',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Hair Loss Treatment' },
    ],
    heroSubtitle: 'Evidence-based topical treatments and microneedling therapy to promote hair growth and reduce hair thinning for men and women.',
    heroImage: '/images/hair-loss-hero.jpg',
    heroCards: [
      {
        title: 'Clinically Proven',
        description: 'MHRA-approved minoxidil and evidence-based microneedling treatments',
      },
      {
        title: 'For Men & Women',
        description: 'Effective treatments for various types of hair loss and thinning',
      },
      {
        title: 'From £150',
        description: 'Personalised treatment plans with professional guidance',
      },
    ],
    whatIsIt: {
      title: 'What Is Hair Loss Treatment?',
      content: [
        'Hair loss treatment at ProDenta combines proven topical therapies with advanced microneedling techniques to stimulate hair follicles, improve scalp health, and promote natural hair regrowth. We offer personalised treatment plans for both men and women experiencing hair thinning, pattern baldness, or reduced hair density.',
        "Our approach includes medical-grade minoxidil solutions and scalp microneedling to enhance absorption and stimulate follicle regeneration. These treatments work by increasing blood flow to hair follicles, prolonging the growth phase of hair, and encouraging dormant follicles to re-enter active growth.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Pattern Hair Loss',
          description: 'Male and female pattern baldness, receding hairline, and crown thinning',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Hair Thinning & Density',
          description: 'Reduced hair density, fine hair, and overall scalp coverage concerns',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Weakened Follicles',
          description: 'Dormant hair follicles, slow growth, and poor scalp circulation',
        },
      ],
    },
    howItWorks: {
      title: 'How Does The Treatment Work?',
      content: [
        '<strong>Minoxidil Therapy:</strong> Medical-grade minoxidil solution is applied topically to the scalp. It works by widening blood vessels, improving blood flow to hair follicles, and prolonging the anagen (growth) phase of the hair cycle. This encourages thicker, healthier hair growth and can reactivate dormant follicles.',
        "<strong>Scalp Microneedling:</strong> Fine needles create controlled micro-injuries in the scalp, triggering the body's natural healing response. This stimulates collagen production, increases blood flow, and enhances the absorption of topical treatments. When combined with minoxidil, microneedling can significantly improve treatment efficacy.",
        'Treatment typically involves regular application of prescribed minoxidil solutions, with optional microneedling sessions every 4-6 weeks. Results begin to appear after 3-4 months of consistent treatment, with optimal results at 6-12 months.',
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Consultation:', text: 'Comprehensive scalp assessment and discussion of hair loss patterns and goals' },
        { strong: 'Treatment Plan:', text: 'Personalised protocol including minoxidil concentration and application schedule' },
        { strong: 'Microneedling Session:', text: 'Optional scalp microneedling treatment (30-45 minutes)' },
        { strong: 'Homecare Guidance:', text: 'Detailed instructions for daily minoxidil application and scalp care' },
        { strong: 'Minimal Discomfort:', text: 'Topical anaesthetic available for microneedling sessions' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Hair Loss Treatment At ProDenta?',
      content: [
        'At ProDenta, we understand that hair loss can affect confidence and wellbeing. Our practitioners provide evidence-based treatments with realistic expectations and personalised care tailored to your specific hair loss pattern and needs.',
        'We use medical-grade products and professional microneedling techniques to optimise results. Our team takes time to educate you about the treatment process, expected timelines, and how to maximise effectiveness through proper application and scalp care.',
        "Patients appreciate our honest, pressure-free approach and ongoing support throughout their hair restoration journey. We're committed to helping you achieve the best possible results through consistent, professional treatment.",
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Time', description: 'Daily application + optional 30-45 min microneedling sessions' },
      { title: 'Results Visible', description: 'Initial results at 3-4 months, optimal at 6-12 months' },
      { title: 'Duration', description: 'Ongoing treatment required to maintain results' },
      { title: 'Microneedling Frequency', description: 'Every 4-6 weeks for enhanced results' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-hair-crown.jpg', caption: 'Crown Density' },
        { image: '/images/before-after-hair-hairline.jpg', caption: 'Hairline Restoration' },
        { image: '/images/before-after-hair-thickness.jpg', caption: 'Hair Thickness' },
      ],
    },
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Hair Loss Treatment',
      price: 'From £150',
      description: 'Initial consultation and treatment plan from £150. Microneedling sessions from £200. Medical-grade minoxidil products available. Treatment packages and ongoing care plans can be discussed during consultation.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Is minoxidil safe for long-term use?',
        answer: "Yes, minoxidil is MHRA-approved and has been extensively studied for decades. When used as directed, it's safe for long-term use. Some patients may experience minor side effects like scalp irritation, which typically resolves. We'll monitor your progress and adjust treatment as needed.",
      },
      {
        question: 'How long before I see results?',
        answer: "Most patients notice initial improvements after 3-4 months of consistent daily application. Significant results typically appear at 6-12 months. Hair growth is gradual, and patience is essential. We'll track your progress through regular follow-up appointments.",
      },
      {
        question: 'What happens if I stop treatment?',
        answer: 'Hair loss treatments like minoxidil require ongoing use to maintain results. If treatment is discontinued, the benefits will gradually reverse over several months, and hair loss patterns may return to their pre-treatment state.',
      },
      {
        question: 'Is scalp microneedling painful?',
        answer: 'Most patients experience minimal discomfort during scalp microneedling. We can apply a topical anaesthetic to ensure comfort. Some mild tenderness or redness may occur for 24-48 hours post-treatment, but this is temporary.',
      },
      {
        question: 'Can women use these treatments?',
        answer: "Absolutely. Both minoxidil and scalp microneedling are effective for women experiencing hair thinning or pattern hair loss. We'll tailor the treatment concentration and protocol to your specific needs and hair loss pattern.",
      },
    ],
    related: [
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Facial collagen induction therapy',
      },
      {
        href: '/aesthetics/mesotherapy',
        image: '/images/mesotherapy-thumb.jpg',
        title: 'Mesotherapy',
        description: 'Vitamin microinjections',
      },
      {
        href: '/aesthetics/skincare-consultations',
        image: '/images/skincare-thumb.jpg',
        title: 'Skincare Consultations',
        description: 'Personalised skincare advice',
      },
    ],
    cta: {
      title: 'Ready to Address Hair Loss?',
      description: 'Book a free consultation to discuss your hair restoration goals and create a personalised treatment plan.',
    },
  },

  // ─── SKINCARE CONSULTATIONS ──────────────────────────────────────────
  {
    slug: 'skincare-consultations',
    title: 'Skincare Consultations',
    pageTitle: 'Skincare Consultations - ProDenta Battersea',
    metaDescription: 'Personalised skincare consultations at ProDenta. Expert advice, customised treatment plans, and professional product recommendations for your unique skin needs.',
    category: 'restore',
    theme: 'aesthetics',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Facial Aesthetics', href: '/aesthetics' },
      { label: 'Skincare Consultations' },
    ],
    heroSubtitle: 'Expert guidance to help you achieve and maintain your best skin with customised treatment plans and professional product recommendations.',
    heroImage: '/images/skincare-consultations-hero.jpg',
    heroCards: [
      {
        title: 'Expert Analysis',
        description: 'Comprehensive skin assessment by qualified aesthetic practitioners',
      },
      {
        title: 'Personalised Plans',
        description: 'Customised treatment roadmap tailored to your unique skin needs',
      },
      {
        title: 'Free Consultation',
        description: 'Complimentary initial consultation to discuss your skincare goals',
      },
    ],
    whatIsIt: {
      title: 'What Is A Skincare Consultation?',
      content: [
        'A skincare consultation is a comprehensive assessment of your skin health, concerns, and aesthetic goals. During this personalised session, our experienced practitioners evaluate your skin type, identify concerns, and create a tailored treatment plan to help you achieve your desired results.',
        "At ProDenta, we take time to understand your lifestyle, skincare history, and objectives. Whether you're dealing with acne, ageing, pigmentation, or simply want to maintain healthy skin, we'll recommend the most suitable treatments and homecare products for your unique needs.",
      ],
      image: '/images/wrinkle-reduction-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Can A Consultation Help With?',
      items: [
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/30.svg',
          title: 'Treatment Planning',
          description: 'Understanding which treatments are right for your skin concerns and goals',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/5.svg',
          title: 'Product Guidance',
          description: 'Professional advice on medical-grade skincare products and routines',
        },
        {
          icon: '/icons/60_Cosmetology_And_Self_Care__Icons_source_2442781/SVG/20.svg',
          title: 'Skin Education',
          description: 'Understanding your skin type, concerns, and how to maintain results',
        },
      ],
    },
    howItWorks: {
      title: 'What Happens During Your Consultation?',
      content: [
        "Your skincare consultation typically lasts 30-45 minutes and includes a thorough assessment of your skin. We'll examine your skin type, texture, tone, and any specific concerns such as acne, pigmentation, fine lines, or sensitivity.",
        "We'll discuss your skincare goals, lifestyle factors, current skincare routine, and medical history. Based on this comprehensive assessment, we'll recommend suitable treatments from our range of facial aesthetics options, including chemical peels, microneedling, mesotherapy, and bio-remodelling treatments.",
        "You'll receive a personalised treatment plan outlining recommended procedures, expected timelines, and homecare advice. We'll also suggest professional-grade skincare products to support and maintain your treatment results.",
      ],
      image: '/images/wrinkle-reduction-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What To Expect During Your Visit',
      items: [
        { strong: 'Welcome & Discussion:', text: "We'll discuss your concerns, goals, and skincare history" },
        { strong: 'Skin Analysis:', text: 'Comprehensive assessment of your skin type, condition, and concerns' },
        { strong: 'Treatment Recommendations:', text: 'Personalised plan with suitable treatment options' },
        { strong: 'Product Advice:', text: 'Professional skincare product recommendations for home use' },
        { strong: 'Q&A:', text: 'Time to ask questions and clarify any concerns about treatments' },
      ],
    },
    whyChoose: {
      title: 'Why Choose ProDenta For Your Skincare Consultation?',
      content: [
        'At ProDenta, we believe that effective skincare starts with understanding. Our experienced aesthetic practitioners have extensive training in skin health, facial aesthetics, and advanced treatment techniques.',
        "We offer honest, evidence-based advice tailored to your individual needs and budget. We'll never recommend unnecessary treatments - instead, we focus on what will genuinely benefit your skin and help you achieve your goals.",
        "Our patients appreciate our thorough approach, professional expertise, and ongoing support throughout their skincare journey. We're committed to helping you achieve and maintain healthy, radiant skin.",
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Consultation Time', description: '30-45 minutes' },
      { title: 'What You\'ll Receive', description: 'Personalised treatment plan and product recommendations' },
      { title: 'Cost', description: 'Complimentary initial consultation' },
      { title: 'Follow-Up', description: 'Ongoing support and treatment adjustments as needed' },
    ],
    gallery: undefined,
    pricing: {
      heading: 'How Much Does It Cost?',
      treatmentName: 'Skincare Consultation',
      price: 'Free',
      description: 'Your initial skincare consultation is complimentary. We\'ll assess your skin, discuss your goals, and create a personalised treatment plan with no obligation.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      {
        question: 'Do I need to prepare for my consultation?',
        answer: "No special preparation is needed. We recommend arriving with a clean face (no makeup if possible) so we can properly assess your skin. Bring a list of any current skincare products you're using and any questions you'd like to ask.",
      },
      {
        question: 'Will I be pressured to book treatments?',
        answer: 'Absolutely not. Our consultations are pressure-free. We provide honest advice and recommendations, and you\'re welcome to take time to consider your options. There\'s no obligation to proceed with any treatment.',
      },
      {
        question: 'Can I start treatment on the same day?',
        answer: 'In some cases, yes. Depending on the recommended treatment and availability, we may be able to begin certain procedures during your consultation visit. However, some treatments require advance booking or preparation.',
      },
      {
        question: 'How often should I have follow-up consultations?',
        answer: 'This depends on your treatment plan. We typically recommend review appointments every 3-6 months to assess progress and adjust your skincare plan as needed. Some patients prefer more frequent check-ins, especially when starting new treatments.',
      },
      {
        question: "What if I'm not sure what treatment I need?",
        answer: "That's perfectly normal and exactly why we offer consultations! Many patients aren't sure which treatment is best for them. We'll guide you through the options and recommend the most suitable approach for your specific concerns and goals.",
      },
    ],
    related: [
      {
        href: '/aesthetics/chemical-peels',
        image: '/images/chemical-peels-thumb.jpg',
        title: 'Chemical Peels',
        description: 'Customised peels for skin rejuvenation',
      },
      {
        href: '/aesthetics/microneedling',
        image: '/images/microneedling-thumb.jpg',
        title: 'Microneedling',
        description: 'Collagen induction therapy',
      },
      {
        href: '/aesthetics/profhilo',
        image: '/images/profhilo-thumb.jpg',
        title: 'Profhilo',
        description: 'Bio-remodelling treatment',
      },
    ],
    cta: {
      title: 'Ready to Start Your Skincare Journey?',
      description: 'Book your free, no-obligation consultation to discover the best treatments for your skin.',
    },
  },
];
