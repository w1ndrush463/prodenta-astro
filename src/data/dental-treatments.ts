import type { Treatment } from './aesthetic-treatments';

export const dentalTreatments: Treatment[] = [
  // ─── DENTAL IMPLANTS ────────────────────────────────────────────────
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    pageTitle: 'Dental Implants Battersea - ProDenta London',
    metaDescription: 'Dental implants in Battersea from £2,500. Permanent tooth replacement with lifetime guarantee. Expert implant dentists. Book free consultation today.',
    category: 'restore',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Dental Implants' },
    ],
    heroSubtitle: 'Replace missing teeth with dental implants. Permanent, natural-looking solution that looks and functions like real teeth.',
    heroImage: '/images/implants-hero.jpg',
    heroCards: [
      { title: 'Premium Quality', description: 'Custom-crafted porcelain for lasting beauty' },
      { title: 'Stain Resistant', description: 'Maintain your bright smile for 10-15 years' },
      { title: 'Natural Translucency', description: 'Porcelain mimics natural tooth enamel' },
    ],
    whatIsIt: {
      title: 'What Are Dental Implants?',
      content: [
        'Dental implants are the most advanced and permanent solution for replacing missing teeth. They consist of a titanium post that\'s surgically placed into your jawbone, acting as an artificial tooth root. Once integrated with the bone, a custom crown is attached, creating a replacement tooth that looks, feels, and functions just like your natural teeth.',
        'Unlike dentures or bridges, dental implants don\'t rely on neighbouring teeth for support and won\'t slip or move when you eat or speak. They\'re designed to last a lifetime with proper care, making them a worthwhile investment in your oral health. Implants also help preserve your jawbone and facial structure, preventing the bone loss that typically occurs after tooth loss.',
      ],
      image: '/images/veneers-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Do Dental Implants Address?',
      items: [
        { icon: 'tooth-remove', title: 'Single Missing Tooth', description: 'Replace one tooth without affecting neighbours' },
        { icon: 'tooth-add', title: 'Multiple Missing Teeth', description: 'Restore several teeth with implant bridges' },
        { icon: 'implant', title: 'Full Arch Replacement', description: 'Replace all upper or lower teeth permanently' },
        { icon: 'dentures', title: 'Unstable Dentures', description: 'Secure loose dentures with implant support' },
        { icon: 'anatomy', title: 'Bone Loss Prevention', description: 'Preserve jawbone and facial structure' },
      ],
    },
    howItWorks: {
      title: 'How Do Dental Implants Work?',
      content: [
        'Initial Consultation & Planning: We\'ll take detailed scans and X-rays to assess your jawbone and plan your implant placement. Using advanced 3D imaging, we\'ll determine the optimal position for your implant to ensure long-term success and natural aesthetics.',
        'Implant Placement Surgery: Under local anaesthetic, the titanium implant post is carefully placed into your jawbone. This procedure is typically pain-free, and most patients experience minimal discomfort. The implant is then left to integrate with the bone over the next 3-6 months in a process called osseointegration.',
        'Healing & Integration Period: During this time, your jawbone grows around the implant, creating a strong, stable foundation. You\'ll be fitted with a temporary restoration so you can eat and smile normally whilst healing.',
        'Abutment & Crown Placement: Once integration is complete, we\'ll attach an abutment (connector piece) to the implant and take impressions for your custom crown. Your final crown is then fitted, completing your new permanent tooth that looks and functions beautifully.',
      ],
      image: '/images/veneers-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Dental Implants?',
      items: [
        { strong: 'Permanent Solution:', text: 'Designed to last a lifetime with proper care and maintenance' },
        { strong: 'Natural Function:', text: 'Eat, speak, and smile with complete confidence - just like natural teeth' },
        { strong: 'Preserve Bone Structure:', text: 'Prevent jawbone loss and maintain facial contours' },
        { strong: 'Protect Neighbouring Teeth:', text: 'No need to alter healthy adjacent teeth like with bridges' },
        { strong: 'Superior Stability:', text: 'Won\'t slip, move, or require adhesives like dentures' },
        { strong: 'Natural Appearance:', text: 'Custom crowns blend seamlessly with your existing teeth' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Dental Implants At ProDenta?',
      content: [
        'At ProDenta, we understand that dental implants are a significant investment in your long-term oral health. Our experienced implant dentists use the latest digital planning technology and premium implant systems to ensure precise placement and optimal results that last a lifetime.',
        'We take a patient-centred approach to implant treatment, thoroughly explaining each step of the process and addressing any concerns. Using 3D imaging and computer-guided placement, we can plan your implant with precision, ensuring it\'s positioned for both functional success and natural aesthetics.',
        'From the initial consultation through to your final crown fitting, you\'ll receive comprehensive care from our skilled team. We work closely with specialist laboratories to create custom crowns that match your natural teeth perfectly.',
      ],
      image: '/images/happy-patient-veneers.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Total Timeline', description: '3-6 months from placement to final crown' },
      { title: 'Appointments Needed', description: '3-4 appointments over several months' },
      { title: 'Recovery Time', description: 'Few days discomfort, 3-6 months integration' },
      { title: 'Longevity', description: 'Lifetime solution with proper care' },
    ],
    gallery: {
      title: 'Dental Implant Transformations',
      intro: 'Real dental implant results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-veneers-1.jpg', caption: 'Complete Smile Makeover' },
        { image: '/images/before-after-veneers-2.jpg', caption: 'Discolouration Correction' },
        { image: '/images/before-after-veneers-3.jpg', caption: 'Shape & Size Enhancement' },
      ],
    },
    pricing: {
      heading: 'Dental Implants In South West London',
      treatmentName: 'Dental Implants',
      price: 'From £2,500 per implant',
      description: 'Implant pricing varies depending on the number of teeth being replaced, whether bone grafting is needed, and the type of restoration required. We offer transparent pricing and flexible payment plans. Book a free consultation for a comprehensive assessment and personalised quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long do dental implants last?', answer: 'Dental implants are designed to be a permanent, lifetime solution. With proper care and maintenance, the titanium implant post can last a lifetime. The crown on top may need replacement after 10-15 years due to normal wear, but this is a straightforward procedure. Success rates for dental implants exceed 95% over 10 years.' },
      { question: 'Is getting a dental implant painful?', answer: 'Most patients report that implant placement is less uncomfortable than having a tooth extracted. The procedure is performed under local anaesthetic, so you won\'t feel pain during treatment. Afterwards, you may experience mild discomfort, swelling, or bruising for a few days, which is easily managed with over-the-counter painkillers.' },
      { question: 'Am I suitable for dental implants?', answer: 'Most people with good general health are suitable candidates for dental implants. You need sufficient jawbone to support the implant, though bone grafting can be performed if needed. Conditions like uncontrolled diabetes or heavy smoking may affect healing, but we\'ll assess your individual situation during consultation.' },
      { question: 'How do I care for dental implants?', answer: 'Care for implants just as you would natural teeth: brush twice daily, floss regularly, and attend routine dental check-ups and hygiene appointments. Unlike natural teeth, implants can\'t decay, but maintaining healthy gums around the implant is essential for long-term success.' },
      { question: 'How much do dental implants cost?', answer: 'Single tooth implants typically start from £2,500, though costs vary depending on complexity, whether bone grafting is needed, and the type of restoration. We offer flexible payment plans to make treatment accessible. Book a consultation for a personalised quote.' },
    ],
    related: [
      { href: '/dental/crowns', image: '/images/crowns-thumb.jpg', title: 'Dental Crowns', description: 'Custom crowns for implants' },
      { href: '/dental/dentures', image: '/images/dentures-thumb.jpg', title: 'Dentures', description: 'Implant-supported denture options' },
      { href: '/dental/oral-surgery', image: '/images/oral-surgery-thumb.jpg', title: 'Oral Surgery', description: 'Bone grafting for implants' },
    ],
    cta: {
      title: 'Book Your Free Implant Consultation Today',
      description: 'Ready to replace missing teeth with permanent dental implants? Book a complimentary consultation to discuss your options and receive a comprehensive assessment.',
    },
  },

  // ─── DENTURES ───────────────────────────────────────────────────────
  {
    slug: 'dentures',
    title: 'Dentures',
    pageTitle: 'Dentures - ProDenta Battersea',
    metaDescription: 'Dentures at ProDenta Battersea. Full and partial dentures for missing teeth. Comfortable, natural-looking restorations.',
    category: 'restore',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Dentures' },
    ],
    heroSubtitle: 'Replace missing teeth with custom dentures. Full and partial options for a natural, comfortable fit.',
    heroImage: '/images/dentures-hero.jpg',
    heroCards: [
      { title: 'Natural-Looking', description: 'Custom-fitted for a perfect smile' },
      { title: 'Full or Partial', description: 'Options for any number of missing teeth' },
      { title: 'Restore Confidence', description: 'Eat, speak, and smile naturally again' },
    ],
    whatIsIt: {
      title: 'What Are Dentures?',
      content: [
        'Dentures are removable prosthetic devices designed to replace missing teeth and restore your smile. Modern dentures are custom-made to fit comfortably in your mouth and look remarkably natural. They can replace a few missing teeth (partial dentures) or an entire arch of teeth (complete dentures), helping you eat, speak, and smile with confidence.',
        'Today\'s dentures are crafted from high-quality materials that mimic the appearance of natural teeth and gums. Each denture is individually designed to suit your facial features, skin tone, and remaining teeth, ensuring a natural, personalised result.',
      ],
      image: '/images/veneers-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Do Dentures Address?',
      items: [
        { icon: 'tooth-remove', title: 'Multiple Missing Teeth', description: 'Replace several teeth with partial dentures' },
        { icon: 'tooth-add', title: 'All Missing Teeth', description: 'Full dentures restore complete upper or lower arch' },
        { icon: 'dentures', title: 'Difficulty Eating', description: 'Restore ability to chew and enjoy food' },
        { icon: 'consultation', title: 'Speech Problems', description: 'Improve pronunciation and speaking clarity' },
        { icon: 'smile', title: 'Lost Confidence', description: 'Restore your smile and self-esteem' },
      ],
    },
    howItWorks: {
      title: 'How Do Dentures Work?',
      content: [
        'Consultation & Assessment: We\'ll examine your mouth, take impressions, and discuss your options. We\'ll help you choose between full or partial dentures and explain the different materials available.',
        'Impressions & Measurements: Precise impressions of your mouth are taken to ensure your dentures fit perfectly. We\'ll also record bite measurements and select the tooth shade and shape that will look most natural.',
        'Try-In Appointment: Before finalising your dentures, we\'ll have you try a wax model. This allows us to check the fit, appearance, bite, and comfort.',
        'Final Fitting: Your completed dentures are fitted, and we\'ll make any final adjustments needed for optimal comfort. We\'ll provide detailed instructions on how to wear, clean, and care for your new dentures.',
      ],
      image: '/images/veneers-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Dentures?',
      items: [
        { strong: 'Restore Full Function:', text: 'Eat, speak, and smile confidently with properly fitted dentures' },
        { strong: 'Natural Appearance:', text: 'Modern materials create realistic-looking teeth and gums' },
        { strong: 'Affordable Solution:', text: 'Cost-effective way to replace multiple or all missing teeth' },
        { strong: 'Non-Invasive:', text: 'No surgery required unlike implants or other permanent solutions' },
        { strong: 'Removable:', text: 'Easy to clean and maintain for optimal oral hygiene' },
        { strong: 'Customisable:', text: 'Designed to suit your unique facial features and preferences' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Dentures At ProDenta?',
      content: [
        'At ProDenta, we understand that dentures are a significant step in restoring your smile and quality of life. We work with experienced dental technicians who create high-quality, natural-looking dentures that fit comfortably and function well.',
        'We take a patient-centred approach to denture fitting, ensuring you\'re comfortable throughout the process. We\'ll take time to explain each step, answer your questions, and make sure you understand how to care for your new dentures.',
        'We provide comprehensive aftercare and support. We\'ll schedule follow-up appointments to check your progress and make any necessary adjustments.',
      ],
      image: '/images/happy-patient-veneers.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Total Timeline', description: '4-6 weeks from impressions to fitting' },
      { title: 'Appointments Needed', description: '3-5 appointments including try-in' },
      { title: 'Adjustment Period', description: 'Few weeks to fully adapt to dentures' },
      { title: 'Longevity', description: '5-10 years before replacement needed' },
    ],
    gallery: {
      title: 'Denture Results',
      intro: 'Real denture results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-veneers-1.jpg', caption: 'Complete Smile Restoration' },
        { image: '/images/before-after-veneers-2.jpg', caption: 'Natural-Looking Dentures' },
        { image: '/images/before-after-veneers-3.jpg', caption: 'Full Arch Replacement' },
      ],
    },
    pricing: {
      heading: 'Dentures In South West London',
      treatmentName: 'Full & Partial Dentures',
      price: 'From £800 per arch',
      description: 'Denture pricing varies depending on whether you need full or partial dentures, the materials used, and any preparatory work required. Book a consultation for a thorough assessment and personalised quote.',
      buttonText: 'Book Consultation',
    },
    faqs: [
      { question: 'How long do dentures last?', answer: 'Well-maintained dentures typically last 5-10 years. However, they may need relining or adjusting sooner as your mouth shape changes over time. Regular check-ups help us monitor fit and make necessary adjustments.' },
      { question: 'Will dentures look natural?', answer: 'Yes. Modern dentures are designed to look remarkably natural. We\'ll carefully select tooth shade, size, and shape to suit your facial features. Most people won\'t be able to tell you\'re wearing dentures.' },
      { question: 'How long does it take to adjust to dentures?', answer: 'Most people adapt to new dentures within a few weeks, though it can take up to three months to feel completely comfortable. Initially, dentures may feel bulky or loose. These sensations are normal and subside as your mouth adjusts.' },
      { question: 'Can I eat normally with dentures?', answer: 'Yes, though there\'s an adjustment period. Start with soft foods cut into small pieces, and gradually introduce harder foods as you gain confidence. Most denture wearers can eventually enjoy a varied, normal diet.' },
      { question: 'How do I care for my dentures?', answer: 'Remove and rinse dentures after eating, and brush them daily with a soft brush and denture cleaner (not regular toothpaste). Soak dentures overnight in a denture-cleaning solution. Clean your gums, tongue, and any remaining teeth daily.' },
    ],
    related: [
      { href: '/dental/dental-implants', image: '/images/implants-thumb.jpg', title: 'Dental Implants', description: 'Permanent tooth replacement option' },
      { href: '/dental/crowns', image: '/images/crowns-thumb.jpg', title: 'Dental Crowns', description: 'Individual tooth restoration' },
      { href: '/dental/hygiene', image: '/images/hygiene-thumb.jpg', title: 'Dental Hygiene', description: 'Maintain your oral health' },
    ],
    cta: {
      title: 'Book Your Denture Consultation Today',
      description: 'Ready to restore your smile with comfortable, natural-looking dentures? Book a consultation to discuss your options and receive a thorough assessment.',
    },
  },

  // ─── ORAL SURGERY ───────────────────────────────────────────────────
  {
    slug: 'oral-surgery',
    title: 'Oral Surgery',
    pageTitle: 'Oral Surgery - ProDenta Battersea',
    metaDescription: 'Expert oral surgery services at ProDenta Battersea. Wisdom teeth removal, tooth extractions, and surgical procedures performed with care and precision.',
    category: 'restore',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Oral Surgery' },
    ],
    heroSubtitle: 'Expert surgical dental procedures performed with precision and care. From wisdom teeth removal to complex extractions.',
    heroImage: '/images/oral-surgery-hero.jpg',
    heroCards: [
      { title: 'Expert Care', description: 'Experienced dental surgeons you can trust' },
      { title: 'Modern Techniques', description: 'Advanced procedures for optimal outcomes' },
      { title: 'Comfortable Experience', description: 'Sedation options available for nervous patients' },
    ],
    whatIsIt: {
      title: 'What Is Oral Surgery?',
      content: [
        'Oral surgery encompasses a range of surgical dental procedures designed to treat conditions affecting the teeth, gums, jaw, and surrounding structures. These procedures go beyond routine dentistry, addressing more complex issues that require surgical intervention.',
        'At ProDenta, our experienced dental surgeons perform oral surgery procedures with precision and care. We use modern techniques and equipment to ensure the best possible outcomes whilst prioritising your comfort throughout.',
      ],
      image: '/images/oral-surgery-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'Common Oral Surgery Procedures',
      items: [
        { icon: 'tooth-extraction', title: 'Wisdom Teeth Removal', description: 'Extract problematic wisdom teeth causing pain or crowding' },
        { icon: 'broken-tooth', title: 'Complex Extractions', description: 'Remove damaged, broken, or impacted teeth' },
        { icon: 'dental-implant', title: 'Bone Grafting', description: 'Rebuild bone for dental implants or jaw support' },
        { icon: 'root-canal', title: 'Apicoectomy', description: 'Remove infected tissue from tooth root tips' },
        { icon: 'consultation', title: 'Cyst & Lesion Removal', description: 'Surgically remove cysts, tumours, or abnormal tissue' },
      ],
    },
    howItWorks: {
      title: 'What To Expect During Oral Surgery',
      content: [
        'Initial Consultation: We\'ll conduct a thorough examination, including X-rays or scans, to assess your condition. We\'ll discuss the recommended procedure, explain what\'s involved, and answer all your questions.',
        'Pre-Operative Planning: You\'ll receive detailed instructions on how to prepare for your procedure, including guidance on eating, drinking, and medications.',
        'The Procedure: On the day, we\'ll ensure you\'re comfortable and relaxed. The area will be thoroughly anaesthetised, and sedation provided if required.',
        'Recovery & Aftercare: You\'ll receive comprehensive aftercare instructions and any necessary medications. We\'ll schedule follow-up appointments to monitor healing.',
      ],
      image: '/images/oral-surgery-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Oral Surgery At ProDenta?',
      items: [
        { strong: 'Experienced Surgeons:', text: 'Our dental surgeons have extensive training and experience in oral surgery procedures' },
        { strong: 'Sedation Options:', text: 'We offer sedation for nervous patients to ensure a comfortable, anxiety-free experience' },
        { strong: 'Modern Techniques:', text: 'Advanced surgical methods for precise treatment and faster healing' },
        { strong: 'Comprehensive Care:', text: 'From initial consultation through recovery, we\'re with you every step' },
        { strong: 'Emergency Availability:', text: 'Quick appointments for urgent surgical needs' },
        { strong: 'Comfortable Environment:', text: 'State-of-the-art facilities designed for your comfort and safety' },
      ],
    },
    whyChoose: {
      title: 'Expert Oral Surgery In Battersea',
      content: [
        'At ProDenta, we understand that the prospect of oral surgery can feel daunting. That\'s why we take a gentle, patient-centred approach to every procedure.',
        'We use the latest surgical techniques and equipment to deliver precise, effective treatment with minimal discomfort. Our practice is fully equipped for a wide range of oral surgery procedures.',
        'Whether you need wisdom teeth removed, a complex extraction, or another surgical procedure, you\'ll receive thorough pre-operative assessment, clear communication about what to expect, and comprehensive aftercare support.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Procedure Duration', description: '30 minutes to 2 hours depending on complexity' },
      { title: 'Anaesthesia', description: 'Local anaesthetic with sedation options available' },
      { title: 'Recovery Time', description: '3-7 days for most procedures' },
      { title: 'Follow-Up', description: 'Check-up appointments to monitor healing' },
    ],
    pricing: {
      heading: 'Oral Surgery Pricing',
      treatmentName: 'Surgical Procedures',
      price: 'Varies by Procedure',
      description: 'Oral surgery costs depend on the complexity of the procedure, whether sedation is required, and your specific needs. Simple extractions start from around £150. We provide transparent quotes after your consultation.',
      buttonText: 'Book Consultation',
    },
    faqs: [
      { question: 'Is oral surgery painful?', answer: 'No. All oral surgery procedures are performed under local anaesthetic, so you won\'t feel pain during treatment. After the procedure, you may have some discomfort as you heal, but this is manageable with prescribed pain medication.' },
      { question: 'How long does recovery take?', answer: 'Recovery time varies depending on the procedure. Simple extractions may require only 2-3 days of rest, whilst more complex procedures typically need 5-7 days. Most patients can return to normal activities within a week.' },
      { question: 'Do you offer sedation for nervous patients?', answer: 'Yes. We offer various sedation options including oral sedation and IV sedation to help you feel relaxed and comfortable during your procedure.' },
      { question: 'When should wisdom teeth be removed?', answer: 'Wisdom teeth should be removed if they\'re causing problems such as pain, infection, crowding, damage to adjacent teeth, or cyst formation. We\'ll only recommend it if there\'s a clear clinical reason.' },
      { question: 'What should I eat after oral surgery?', answer: 'Stick to soft, cool foods for the first few days - things like yoghurt, smoothies, mashed potatoes, soup (not too hot), and scrambled eggs. Avoid hard, crunchy, spicy, or very hot foods. Don\'t use straws.' },
    ],
    related: [
      { href: '/dental/dental-implants', image: '/images/implants-thumb.jpg', title: 'Dental Implants', description: 'Permanent tooth replacement solution' },
      { href: '/dental/emergency', image: '/images/emergency-thumb.jpg', title: 'Emergency Appointments', description: 'Urgent dental care when you need it' },
      { href: '/dental/crowns', image: '/images/crowns-thumb.jpg', title: 'Dental Crowns', description: 'Restore damaged teeth' },
    ],
    cta: {
      title: 'Book Your Oral Surgery Consultation',
      description: 'Need oral surgery or unsure if you require a surgical procedure? Book a consultation with our experienced dental surgeons for honest advice and compassionate care.',
    },
  },

  // ─── VENEERS ────────────────────────────────────────────────────────
  {
    slug: 'veneers',
    title: 'Porcelain Veneers',
    pageTitle: 'Porcelain Veneers Battersea - ProDenta London',
    metaDescription: 'Premium porcelain veneers in Battersea. Transform your smile with custom-crafted veneers. Last 10-15+ years. Free consultation. Book today.',
    category: 'enhance',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Veneers' },
    ],
    heroSubtitle: 'Transform your smile with premium porcelain veneers. Ultra-thin, custom-crafted for a natural, Hollywood smile.',
    heroImage: '/images/veneers-hero.jpg',
    heroCards: [
      { title: 'Premium Quality', description: 'Custom-crafted porcelain for lasting beauty' },
      { title: 'Stain Resistant', description: 'Maintain your bright smile for 10-15 years' },
      { title: 'Natural Translucency', description: 'Porcelain mimics natural tooth enamel' },
    ],
    whatIsIt: {
      title: 'What Are Porcelain Veneers?',
      content: [
        'Porcelain veneers are ultra-thin shells of medical-grade ceramic that are bonded to the front surface of your teeth to create a beautiful, natural-looking smile. They\'re the gold standard in cosmetic dentistry, offering unparalleled aesthetics and durability.',
        'Each veneer is custom-crafted in a specialist dental laboratory to match your desired shape, size, and colour. Porcelain has unique light-reflecting properties that mimic natural tooth enamel, creating a translucent, lifelike appearance. With proper care, porcelain veneers can last 10-15 years or longer.',
      ],
      image: '/images/veneers-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Do Veneers Address?',
      items: [
        { icon: 'dirty-tooth', title: 'Severe Discolouration', description: 'Cover deep stains that don\'t respond to whitening' },
        { icon: 'broken-tooth', title: 'Chips & Wear', description: 'Restore damaged or worn teeth completely' },
        { icon: 'tooth', title: 'Gaps & Spacing', description: 'Close spaces for a uniform smile line' },
        { icon: 'tooth-repair', title: 'Misshapen Teeth', description: 'Create perfectly proportioned, symmetrical teeth' },
        { icon: 'straighten', title: 'Minor Misalignment', description: 'Improve appearance of slightly crooked teeth' },
      ],
    },
    howItWorks: {
      title: 'How Do Veneers Work?',
      content: [
        'Consultation & Smile Design: We\'ll discuss your aesthetic goals and create a bespoke smile design. Digital imaging allows you to preview your new smile before treatment begins.',
        'Preparation (First Appointment): A very thin layer of enamel (typically 0.5mm) is gently removed from the front of your teeth. We\'ll take detailed impressions sent to our specialist dental laboratory. Temporary veneers are fitted to protect your teeth.',
        'Custom Fabrication: Your veneers are meticulously hand-crafted by master ceramists over 2-3 weeks.',
        'Fitting (Second Appointment): Your custom veneers are carefully bonded to your teeth using a strong dental adhesive. We\'ll check the fit, colour, and bite before final bonding.',
      ],
      image: '/images/veneers-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Porcelain Veneers?',
      items: [
        { strong: 'Superior Aesthetics:', text: 'Porcelain\'s translucency creates the most natural, lifelike appearance' },
        { strong: 'Highly Stain-Resistant:', text: 'Maintains colour and brightness for 10-15+ years' },
        { strong: 'Exceptional Durability:', text: 'Stronger and longer-lasting than composite alternatives' },
        { strong: 'Comprehensive Transformation:', text: 'Address multiple cosmetic concerns simultaneously' },
        { strong: 'Custom-Crafted:', text: 'Each veneer individually made to your specifications' },
        { strong: 'Biocompatible:', text: 'Gentle on gums and compatible with oral tissues' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Veneers At ProDenta?',
      content: [
        'At ProDenta, we understand that veneers are a significant investment in your smile and confidence. That\'s why we work exclusively with the finest dental laboratories and use only premium-grade porcelain materials.',
        'Our cosmetic dentists take a bespoke approach to every smile design. We\'ll spend time understanding your aesthetic preferences, facial features, and personality to create veneers that look natural on you.',
        'Every detail matters when creating beautiful veneers - from the subtle colour variations that make teeth look natural, to the precise shaping that complements your facial proportions.',
      ],
      image: '/images/happy-patient-veneers.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Total Timeline', description: '2-3 weeks from start to finish' },
      { title: 'Appointments Needed', description: '2 main appointments plus consultation' },
      { title: 'Recovery Time', description: 'None - normal function immediately' },
      { title: 'Results Last', description: '10-15+ years with proper care' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real porcelain veneer results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-veneers-1.jpg', caption: 'Complete Smile Makeover' },
        { image: '/images/before-after-veneers-2.jpg', caption: 'Discolouration Correction' },
        { image: '/images/before-after-veneers-3.jpg', caption: 'Shape & Size Enhancement' },
      ],
    },
    pricing: {
      heading: 'Premium Veneers In South West London',
      treatmentName: 'Porcelain Veneers',
      price: 'Contact for Quote',
      description: 'Veneer pricing depends on the number of teeth treated, the complexity of your case, and the specific materials used. We offer transparent pricing and flexible payment plans. Book a free consultation for a personalised treatment plan and detailed quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long do porcelain veneers last?', answer: 'With proper care and maintenance, porcelain veneers typically last 10-15 years or longer. Many patients enjoy their veneers for 20+ years. Longevity depends on factors like oral hygiene, regular dental visits, and avoiding teeth-grinding.' },
      { question: 'Will getting veneers hurt?', answer: 'No. The veneer preparation process is typically pain-free, though we may use local anaesthetic to ensure complete comfort. Only a very thin layer of enamel is removed.' },
      { question: 'Are veneers reversible?', answer: 'Traditional veneers are considered a permanent treatment because a thin layer of enamel is removed. However, "no-prep" or minimal-prep veneers remove very little or no tooth structure and may be reversible.' },
      { question: 'Can veneers stain like natural teeth?', answer: 'No. Porcelain veneers are highly resistant to staining and will not discolour like natural teeth. You can enjoy coffee, tea, red wine without worrying about your veneers changing colour.' },
      { question: 'How much do veneers cost?', answer: 'Veneer costs vary depending on the number of teeth being treated, the complexity of your case, and the materials used. We offer transparent pricing and flexible payment plans. Book a free consultation for a detailed, personalised quote.' },
    ],
    related: [
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten before veneers' },
      { href: '/dental/composite-bonding', image: '/images/composite-bonding-thumb.jpg', title: 'Composite Bonding', description: 'Affordable alternative to veneers' },
      { href: '/dental/clear-braces', image: '/images/invisalign-thumb.jpg', title: 'Invisalign', description: 'Align teeth before veneers' },
    ],
    cta: {
      title: 'Book Your Free Consultation Today',
      description: 'Ready for a stunning smile transformation with porcelain veneers? Book a complimentary consultation to explore your options and preview your potential results.',
    },
  },

  // ─── COMPOSITE BONDING ────────────────────────────────────────────────
  {
    slug: 'composite-bonding',
    title: 'Composite Bonding',
    pageTitle: 'Composite Bonding - ProDenta Battersea',
    metaDescription: 'Composite bonding at ProDenta Battersea. Fix chips, close gaps, and reshape teeth with minimally invasive cosmetic bonding. Same-day smile transformation.',
    category: 'enhance',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Composite Bonding' },
    ],
    heroSubtitle: 'Transform your smile with composite bonding. Fix chips, close gaps, and reshape teeth in a single appointment.',
    heroImage: '/images/composite-bonding-hero.jpg',
    heroCards: [
      { title: 'Same-Day Results', description: 'Complete smile transformation in one appointment' },
      { title: 'Minimally Invasive', description: 'No drilling or damage to natural teeth' },
      { title: 'Natural Looking', description: 'Tooth-coloured resin matched to your smile' },
    ],
    whatIsIt: {
      title: 'What Is Composite Bonding?',
      content: [
        'Composite bonding is a minimally invasive cosmetic dental treatment that uses tooth-coloured composite resin to repair, reshape, and enhance your teeth. It\'s one of the most versatile and affordable cosmetic treatments available, capable of transforming your smile in just one appointment.',
        'The procedure involves applying a special dental resin to your teeth, which is then carefully sculpted and polished to match your natural smile. Unlike veneers, composite bonding typically requires little to no preparation of your natural teeth, making it a conservative and reversible option.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        { icon: 'broken-tooth', title: 'Chipped or Cracked Teeth', description: 'Repair minor damage and restore tooth shape' },
        { icon: 'tooth', title: 'Gaps Between Teeth', description: 'Close small spaces for a more uniform smile' },
        { icon: 'dirty-tooth', title: 'Discolouration & Staining', description: 'Cover stubborn stains that won\'t whiten' },
        { icon: 'tooth-repair', title: 'Misshapen Teeth', description: 'Reshape and lengthen worn or uneven teeth' },
      ],
    },
    howItWorks: {
      title: 'How Does Composite Bonding Work?',
      content: [
        'Consultation & Planning: We\'ll assess your teeth and discuss your smile goals. Digital photography helps us plan the precise shape, size, and colour of your bonding.',
        'Preparation: The tooth surface is gently cleaned and prepared with a conditioning gel. Unlike veneers, very little (if any) natural tooth structure needs to be removed.',
        'Bonding Application: The composite resin is carefully applied in layers and sculpted to create your desired tooth shape. Each layer is hardened using a special curing light.',
        'Shaping & Polishing: Once the resin has hardened, we meticulously shape and polish it to blend seamlessly with your natural teeth.',
        'The entire process typically takes 30-60 minutes per tooth. Multiple teeth can be treated in one session.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Composite Bonding?',
      items: [
        { strong: 'Immediate Results:', text: 'Complete your smile transformation in just one appointment' },
        { strong: 'Minimally Invasive:', text: 'Preserves your natural tooth structure with little to no drilling' },
        { strong: 'Versatile:', text: 'Fixes chips, gaps, stains, and shape issues all at once' },
        { strong: 'Natural Appearance:', text: 'Custom-shaded resin blends seamlessly with your teeth' },
        { strong: 'Affordable:', text: 'More cost-effective than veneers or crowns' },
        { strong: 'Reversible:', text: 'Unlike veneers, bonding can be adjusted or removed if needed' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Composite Bonding At ProDenta?',
      content: [
        'At ProDenta, our experienced cosmetic dentists have perfected the art of composite bonding, delivering natural-looking smile transformations that enhance your confidence.',
        'Our meticulous approach means we take the time to plan every detail of your treatment. We\'ll photograph your smile, discuss your aesthetic goals, and show you what\'s possible before we begin.',
        'Composite bonding requires both technical skill and artistic vision to achieve beautiful, natural results. Our team combines years of experience with ongoing training in the latest bonding techniques.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '30-60 minutes per tooth' },
      { title: 'Appointments Needed', description: 'Usually completed in one visit' },
      { title: 'Recovery Time', description: 'None - immediate normal function' },
      { title: 'Results Last', description: '5-10 years with proper care' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real composite bonding results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-bonding-1.jpg', caption: 'Chipped Tooth Repair' },
        { image: '/images/before-after-bonding-2.jpg', caption: 'Gap Closure' },
        { image: '/images/before-after-bonding-3.jpg', caption: 'Smile Reshaping' },
      ],
    },
    pricing: {
      heading: 'Affordable Composite Bonding In South West London',
      treatmentName: 'Composite Bonding',
      price: 'From £250 per tooth',
      description: 'Pricing varies based on the complexity and number of teeth treated. Most smile transformations are completed in a single appointment. Book a free consultation for a personalised quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long does composite bonding last?', answer: 'With proper care, composite bonding typically lasts 5-10 years. Longevity depends on factors like oral hygiene, diet, and habits such as nail-biting or teeth-grinding.' },
      { question: 'Is composite bonding painful?', answer: 'No. Composite bonding is generally pain-free and typically doesn\'t require anaesthetic. The procedure is minimally invasive - we rarely need to remove any natural tooth structure.' },
      { question: 'How do I care for bonded teeth?', answer: 'Care for bonded teeth just as you would natural teeth: brush twice daily, floss regularly, and attend routine dental check-ups. Avoid biting very hard foods with bonded teeth.' },
      { question: 'Can composite bonding stain?', answer: 'Composite bonding is resistant to staining but not completely stain-proof. Over time, bonding may pick up slight discolouration from smoking, coffee, tea, or red wine. However, bonded teeth can be polished during routine hygiene appointments.' },
      { question: 'What\'s the difference between bonding and veneers?', answer: 'Composite bonding is applied directly to your teeth in a single appointment without removing tooth structure. Veneers are thin porcelain shells made in a lab that require tooth preparation and multiple appointments. Bonding is more affordable and reversible, whilst veneers are more durable and stain-resistant.' },
    ],
    related: [
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten your bonded smile' },
      { href: '/dental/veneers', image: '/images/veneers-thumb.jpg', title: 'Veneers', description: 'Premium porcelain smile makeover' },
      { href: '/dental/clear-braces', image: '/images/invisalign-thumb.jpg', title: 'Invisalign', description: 'Straighten before bonding' },
    ],
    cta: {
      title: 'Book Your Free Consultation Today',
      description: 'Ready to transform your smile with composite bonding? Book a complimentary consultation to discuss your goals and see what\'s possible.',
    },
  },

  // ─── TEETH WHITENING ──────────────────────────────────────────────────
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    pageTitle: 'Teeth Whitening Battersea - ProDenta London',
    metaDescription: 'Professional teeth whitening in Battersea from £395. In-chair & home whitening. Minimal sensitivity. Brighten your smile up to 8 shades. Book today.',
    category: 'enhance',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Teeth Whitening' },
    ],
    heroSubtitle: 'Brighten your smile with professional teeth whitening. In-chair and at-home options with minimal sensitivity.',
    heroImage: '/images/teeth-whitening-hero.jpg',
    heroCards: [
      { title: 'From £395', description: 'Affordable professional whitening options' },
      { title: 'Minimal Sensitivity', description: 'Near zero sensitivity with Prevdent system' },
      { title: 'Fast Results', description: 'Noticeably whiter teeth in just weeks' },
    ],
    whatIsIt: {
      title: 'What Is Professional Teeth Whitening?',
      content: [
        'Professional teeth whitening is a safe, effective cosmetic dental treatment that brightens your smile by removing stains and discolouration. At ProDenta, we offer two professional whitening options: in-chair whitening for immediate results, and at-home whitening with custom-made trays.',
        'Unlike over-the-counter products, professional whitening uses higher-concentration bleaching agents that are carefully controlled to deliver superior results whilst protecting your teeth and gums. Our advanced Prevdent system uses nano-hydroxyapatite technology to minimise sensitivity.',
      ],
      image: '/images/teeth-whitening-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Types Of Staining Can Be Treated?',
      items: [
        { icon: 'dirty-tooth', title: 'Extrinsic Staining', description: 'Surface stains from coffee, tea, red wine, and tobacco' },
        { icon: 'tooth', title: 'Intrinsic Staining', description: 'Deeper discolouration from ageing and certain medications' },
        { icon: 'clean-tooth', title: 'Age-Related Yellowing', description: 'Natural darkening that occurs over time' },
      ],
    },
    howItWorks: {
      title: 'Our Whitening Options',
      content: [
        'At-Home Whitening (£395): Our most popular option combines professional-grade results with the convenience of home treatment. We\'ll create custom-fitted whitening trays specifically for your teeth.',
        'How it works: You\'ll visit us for two quick appointments (approximately 30 minutes each). At your first appointment, we\'ll take impressions for custom trays. At your second, we\'ll fit your trays and provide professional whitening gel. Wear for 1-2 hours daily, achieving results in 2-3 weeks.',
        'In-Chair Whitening (Prevdent System): For faster results with minimal sensitivity. This innovative approach delivers immediate brightening in a single appointment whilst protecting tooth enamel.',
        'How it works: In one comfortable appointment (60-90 minutes), we\'ll apply professional-strength whitening gel to your teeth and activate it with a special light. You\'ll leave with noticeably whiter teeth the same day.',
      ],
      image: '/images/teeth-whitening-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Professional Teeth Whitening?',
      items: [
        { strong: 'Safe & Effective:', text: 'Professional-strength formulas deliver superior results under expert supervision' },
        { strong: 'Minimal Sensitivity:', text: 'Our Prevdent system uses nano-hydroxyapatite to protect enamel and reduce sensitivity' },
        { strong: 'Custom-Fitted:', text: 'At-home trays are made specifically for your teeth for even, consistent results' },
        { strong: 'Long-Lasting:', text: 'Professional whitening lasts significantly longer than over-the-counter products' },
        { strong: 'Affordable:', text: 'At-home whitening from just £395 - competitive prices in South West London' },
        { strong: 'Expert Care:', text: 'Treatment supervised by experienced dental professionals' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Teeth Whitening At ProDenta?',
      content: [
        'At ProDenta, we combine advanced whitening technology with affordable pricing to make professional teeth whitening accessible to everyone in South West London.',
        'We use the latest Prevdent whitening system for in-chair treatments, featuring nano-hydroxyapatite technology that strengthens enamel whilst whitening - delivering the near-zero sensitivity our patients love.',
        'Every whitening treatment begins with a thorough assessment to ensure it\'s safe and appropriate for your teeth. We\'ll create a customised treatment plan based on your smile goals.',
      ],
      image: '/images/happy-patient-whitening.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'At-Home Duration', description: '2-3 weeks of daily use' },
      { title: 'In-Chair Duration', description: 'Single 60-90 minute appointment' },
      { title: 'At-Home Daily Wear', description: '1-2 hours per day' },
      { title: 'Results Last', description: '1-3 years with good oral hygiene' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real teeth whitening results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-whitening-1.jpg', caption: 'At-Home Whitening Results' },
        { image: '/images/before-after-whitening-2.jpg', caption: 'In-Chair Whitening Results' },
        { image: '/images/before-after-whitening-3.jpg', caption: 'Coffee Stain Removal' },
      ],
    },
    pricing: {
      heading: 'Affordable Teeth Whitening In South West London',
      treatmentName: 'At-Home Teeth Whitening',
      price: '£395',
      description: 'Includes custom-fitted whitening trays, professional whitening gel, and two appointments. Achieve professional results in the comfort of your home over 2-3 weeks.',
      buttonText: 'Book Consultation',
    },
    faqs: [
      { question: 'Will teeth whitening damage my enamel?', answer: 'No. When performed by dental professionals, teeth whitening is completely safe. Our Prevdent system actually uses nano-hydroxyapatite to strengthen enamel during the whitening process.' },
      { question: 'Will my teeth be sensitive after whitening?', answer: 'Most patients experience little to no sensitivity with our advanced whitening systems. Our Prevdent in-chair whitening delivers near-zero sensitivity thanks to nano-hydroxyapatite technology.' },
      { question: 'How long do whitening results last?', answer: 'With good oral hygiene and regular dental care, professional whitening results typically last 1-3 years. Avoiding staining foods and drinks will help maintain your brighter smile longer.' },
      { question: 'Can I whiten my teeth if I have crowns or veneers?', answer: 'Whitening treatments only work on natural tooth enamel - they won\'t change the colour of crowns, veneers, fillings, or other dental restorations. We\'ll assess your existing dental work during consultation.' },
      { question: 'How white will my teeth get?', answer: 'Results vary based on your natural tooth colour and the type of staining present. Most patients see their teeth lighten by several shades. We\'ll discuss realistic expectations during your consultation.' },
    ],
    related: [
      { href: '/dental/composite-bonding', image: '/images/composite-bonding-thumb.jpg', title: 'Composite Bonding', description: 'Reshape and enhance your teeth' },
      { href: '/dental/veneers', image: '/images/veneers-thumb.jpg', title: 'Veneers', description: 'Complete smile transformation' },
      { href: '/dental/hygiene', image: '/images/hygiene-thumb.jpg', title: 'Dental Hygiene', description: 'Maintain your bright, clean smile' },
    ],
    cta: {
      title: 'Book Your Consultation Today',
      description: 'Ready to brighten your smile? Book a consultation to discuss your whitening options and find out which treatment is right for you.',
    },
  },

  // ─── CLEAR BRACES (INVISALIGN) ────────────────────────────────────────
  {
    slug: 'clear-braces',
    title: 'Invisalign Clear Braces',
    pageTitle: 'Invisalign Clapham Junction - ProDenta Battersea',
    metaDescription: 'Invisalign clear braces in Battersea & Clapham Junction. Invisible teeth straightening from 6 months. Free consultation. Affordable payment plans available.',
    category: 'straighten',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Invisalign Clear Braces' },
    ],
    heroSubtitle: 'Straighten your teeth discreetly with nearly invisible aligners. Affordable clear braces in South West London.',
    heroImage: '/images/invisalign-hero.jpg',
    heroCards: [
      { title: 'Nearly Invisible', description: 'Discreet clear aligners that fit your lifestyle' },
      { title: 'Removable', description: 'Take them out to eat, drink, and brush normally' },
      { title: '6-9 Months', description: 'Most treatments complete in under a year' },
    ],
    whatIsIt: {
      title: 'What Is Invisalign?',
      content: [
        'Invisalign is a modern orthodontic treatment that straightens teeth using a series of custom-made, nearly invisible aligners. Unlike traditional metal braces, Invisalign aligners are clear, removable, and comfortable - making them the perfect choice for adults and teens who want to improve their smile discreetly.',
        'Each set of aligners is individually manufactured for your teeth and worn for about two weeks before moving to the next in the series. Gradually, your teeth shift into their ideal positions.',
      ],
      image: '/images/invisalign-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        { icon: 'broken-tooth', title: 'Crooked Teeth', description: 'Straighten misaligned and overlapping teeth' },
        { icon: 'tooth', title: 'Gaps Between Teeth', description: 'Close unwanted spaces for a uniform smile' },
        { icon: 'braces', title: 'Bite Issues', description: 'Correct overbite, underbite, and crossbite problems' },
      ],
    },
    howItWorks: {
      title: 'How Does Invisalign Work?',
      content: [
        'Consultation & Planning: We\'ll assess your teeth, take digital scans, and create a personalised treatment plan showing how your teeth will move step-by-step.',
        'Custom Aligners: Your aligners are precision-manufactured just for you. Each set is worn for approximately two weeks before progressing to the next.',
        'Gradual Movement: Each aligner moves your teeth incrementally - typically 0.25mm at a time - until they reach their final, ideal position.',
        'Regular Check-ins: You\'ll visit us periodically to monitor progress and receive your next sets of aligners. Most treatment takes 6-9 months.',
      ],
      image: '/images/invisalign-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Invisalign?',
      items: [
        { strong: 'Nearly Invisible:', text: 'Clear aligners are discreet - most people won\'t notice you\'re wearing them' },
        { strong: 'Removable:', text: 'Take them out for meals, special occasions, and to brush and floss normally' },
        { strong: 'Comfortable:', text: 'Smooth plastic aligners with no metal brackets or wires to irritate your mouth' },
        { strong: 'Predictable:', text: 'Advanced 3D planning shows your treatment outcome before you start' },
        { strong: 'Lifestyle-Friendly:', text: 'No dietary restrictions - eat and drink whatever you like' },
        { strong: 'Effective:', text: 'Treats a wide range of orthodontic issues for beautiful, lasting results' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Invisalign At ProDenta?',
      content: [
        'At ProDenta, we\'re committed to making orthodontic treatment accessible and affordable. We offer some of the most competitive Invisalign prices in South West London.',
        'Our experienced team will guide you through every step of your journey, from initial consultation through to your final result. We use the latest digital technology to plan your treatment precisely.',
        'We understand that choosing orthodontic treatment is a big decision, which is why we offer complimentary cosmetic consultations with flexible payment options.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '6-9 months on average' },
      { title: 'Check-up Frequency', description: 'Every 6-8 weeks' },
      { title: 'Daily Wear', description: '20-22 hours per day' },
      { title: 'Retention', description: 'Retainers after treatment to maintain results' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real Invisalign results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-invisalign-1.jpg', caption: 'Crooked Teeth Correction' },
        { image: '/images/before-after-invisalign-2.jpg', caption: 'Gap Closure' },
        { image: '/images/before-after-invisalign-3.jpg', caption: 'Bite Correction' },
      ],
    },
    pricing: {
      heading: 'Affordable Invisalign In South West London',
      treatmentName: 'Invisalign Treatment',
      price: 'Contact for Quote',
      description: 'We offer some of the most affordable Invisalign prices in South West London. Treatment cost varies based on complexity. Flexible payment plans available. Book a free consultation for a personalised quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long does Invisalign treatment take?', answer: 'Most Invisalign treatments take 6-9 months, though this varies based on complexity. Simpler corrections may take as little as 3-6 months, whilst more complex cases could take 12-18 months.' },
      { question: 'Is Invisalign painful?', answer: 'Invisalign is generally more comfortable than traditional braces. You may feel pressure or mild discomfort for a day or two when switching to a new set of aligners, but this is normal.' },
      { question: 'Can I eat and drink with Invisalign?', answer: 'You should remove your aligners before eating or drinking anything except water. One of the major benefits is that there are no dietary restrictions - simply remove your aligners and enjoy your meal.' },
      { question: 'How often do I need to wear the aligners?', answer: 'For best results, wear your aligners 20-22 hours per day, removing them only for eating, drinking, and cleaning your teeth.' },
      { question: 'Am I too old for Invisalign?', answer: 'No! Invisalign is suitable for adults of all ages. Many of our patients are professionals who appreciate the discreet nature of clear aligners.' },
    ],
    related: [
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten your smile after straightening' },
      { href: '/dental/composite-bonding', image: '/images/composite-bonding-thumb.jpg', title: 'Composite Bonding', description: 'Perfect your smile with bonding' },
      { href: '/dental/veneers', image: '/images/veneers-thumb.jpg', title: 'Veneers', description: 'Complete smile transformation' },
    ],
    cta: {
      title: 'Book Your Free Consultation Today',
      description: 'Ready to start your Invisalign journey? Book a complimentary consultation to discuss your smile goals and get a personalised treatment plan.',
    },
  },

  // ─── FIXED BRACES ─────────────────────────────────────────────────────
  {
    slug: 'fixed-braces',
    title: 'Fixed Braces',
    pageTitle: 'Fixed Braces - ProDenta Battersea',
    metaDescription: 'Fixed braces at ProDenta Battersea. Metal and ceramic braces for effective teeth straightening. Comprehensive orthodontic care for all ages.',
    category: 'straighten',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Fixed Braces' },
    ],
    heroSubtitle: 'Modern fixed braces for effective teeth straightening. Metal and ceramic options for all ages.',
    heroImage: '/images/fixed-braces-hero.jpg',
    heroCards: [
      { title: 'Proven Effective', description: 'Time-tested solution for complex orthodontic cases' },
      { title: 'Metal or Ceramic', description: 'Choose traditional metal or discreet tooth-colored brackets' },
      { title: '12-24 Months', description: 'Comprehensive treatment for lasting results' },
    ],
    whatIsIt: {
      title: 'What Are Fixed Braces?',
      content: [
        'Fixed braces are the tried-and-tested orthodontic solution for straightening teeth and correcting bite problems. They consist of brackets bonded to each tooth, connected by a wire that applies gentle, continuous pressure to gradually move your teeth into their ideal positions.',
        'At ProDenta, we offer both traditional metal braces and ceramic (tooth-colored) braces. Metal braces are durable and highly effective, whilst ceramic braces provide a more discreet option.',
      ],
      image: '/images/invisalign-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does It Address?',
      items: [
        { icon: 'broken-tooth', title: 'Crooked Teeth', description: 'Straighten misaligned and overlapping teeth' },
        { icon: 'tooth', title: 'Gaps Between Teeth', description: 'Close unwanted spaces for a uniform smile' },
        { icon: 'braces', title: 'Bite Issues', description: 'Correct overbite, underbite, and crossbite problems' },
      ],
    },
    howItWorks: {
      title: 'How Do Fixed Braces Work?',
      content: [
        'Consultation & Planning: We\'ll examine your teeth, take X-rays and impressions, and create a customized treatment plan.',
        'Fitting Your Braces: Brackets are carefully bonded to each tooth and connected with an archwire that applies controlled pressure.',
        'Regular Adjustments: You\'ll visit us every 4-6 weeks for adjustments. We\'ll tighten the wire and may change elastic bands.',
        'Gradual Transformation: Over 12-24 months, your teeth gradually shift into their ideal positions.',
      ],
      image: '/images/invisalign-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Fixed Braces?',
      items: [
        { strong: 'Highly Effective:', text: 'Fixed braces can treat even the most complex orthodontic cases' },
        { strong: 'Proven Results:', text: 'Time-tested technology with decades of successful outcomes' },
        { strong: 'Precise Control:', text: 'Your orthodontist has complete control over tooth movement at every stage' },
        { strong: 'No Compliance Issues:', text: 'Since they\'re fixed in place, they work 24/7' },
        { strong: 'Cost-Effective:', text: 'Generally more affordable than clear aligner treatments' },
        { strong: 'Choice of Options:', text: 'Select traditional metal braces or ceramic braces for a more discreet appearance' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Fixed Braces At ProDenta?',
      content: [
        'At ProDenta, we\'re committed to providing high-quality orthodontic treatment at affordable prices. Our experienced team has successfully treated hundreds of patients with fixed braces.',
        'We offer both traditional metal braces and discreet ceramic braces, allowing you to choose the option that best fits your lifestyle and budget.',
        'We understand that getting braces is a significant commitment, which is why we offer complimentary consultations with flexible payment plans.',
      ],
      image: '/images/happy-patient.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '12-24 months on average' },
      { title: 'Adjustment Frequency', description: 'Every 4-6 weeks' },
      { title: 'Braces Types', description: 'Metal or ceramic options' },
      { title: 'Retention', description: 'Retainers after treatment to maintain results' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real fixed braces results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-braces-1.jpg', caption: 'Crooked Teeth Correction' },
        { image: '/images/before-after-braces-2.jpg', caption: 'Gap Closure' },
        { image: '/images/before-after-braces-3.jpg', caption: 'Bite Correction' },
      ],
    },
    pricing: {
      heading: 'Affordable Fixed Braces In South West London',
      treatmentName: 'Fixed Braces Treatment',
      price: 'Contact for Quote',
      description: 'We offer competitive pricing for both metal and ceramic braces. Flexible payment plans available. Book a free consultation for a personalised quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long does treatment with fixed braces take?', answer: 'Most fixed braces treatments take 12-24 months. Simpler corrections may take closer to 12 months, whilst more complex cases could take up to 24 months.' },
      { question: 'Are fixed braces painful?', answer: 'You may experience some discomfort for a few days after your braces are fitted and after each adjustment. Over-the-counter pain relief and soft foods can help. Any irritation usually subsides within a week.' },
      { question: 'What foods should I avoid with braces?', answer: 'Avoid hard foods (like nuts, hard candies), sticky foods (like toffee, chewing gum), and foods you need to bite into (like apples - cut them instead).' },
      { question: 'How often will I need adjustment appointments?', answer: 'You\'ll typically visit us every 4-6 weeks for adjustments to check progress, tighten wires, and possibly change elastic bands.' },
      { question: 'Am I too old for fixed braces?', answer: 'No! Fixed braces can be effective for adults of all ages. We also offer ceramic braces for a more discreet option.' },
    ],
    related: [
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten your smile after straightening' },
      { href: '/dental/composite-bonding', image: '/images/composite-bonding-thumb.jpg', title: 'Composite Bonding', description: 'Perfect your smile with bonding' },
      { href: '/dental/veneers', image: '/images/veneers-thumb.jpg', title: 'Veneers', description: 'Complete smile transformation' },
    ],
    cta: {
      title: 'Book Your Free Consultation Today',
      description: 'Ready to start your journey to a straighter smile? Book a complimentary consultation to discuss your orthodontic needs and get a personalised treatment plan.',
    },
  },

  // ─── ORTHODONTICS ────────────────────────────────────────────────
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    pageTitle: 'Orthodontics - ProDenta Battersea',
    metaDescription: 'Comprehensive orthodontic treatment at ProDenta Battersea. Braces and aligners for all ages. Transform your smile with expert orthodontic care.',
    category: 'straighten',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Orthodontics' },
    ],
    heroSubtitle: 'Expert orthodontic treatment for all ages. From traditional braces to modern clear aligners, achieve your perfect smile.',
    heroImage: '/images/orthodontics-hero.jpg',
    heroCards: [
      { title: 'All Ages Welcome', description: 'Treatment for children, teens, and adults' },
      { title: 'Multiple Options', description: 'Fixed braces, clear aligners, and more' },
      { title: 'Expert Care', description: 'Experienced orthodontic specialists' },
    ],
    whatIsIt: {
      title: 'What Is Orthodontic Treatment?',
      content: [
        'Orthodontics is a specialist branch of dentistry focused on correcting misaligned teeth and jaws to improve both function and aesthetics. At ProDenta, we offer comprehensive orthodontic solutions for patients of all ages.',
        'Modern orthodontics encompasses a wide range of treatment options - from traditional fixed braces to cutting-edge clear aligners like Invisalign. The right treatment for you depends on your specific needs, lifestyle, and aesthetic preferences.',
      ],
      image: '/images/orthodontics-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does Orthodontics Address?',
      items: [
        { icon: 'broken-tooth', title: 'Crowded Teeth', description: 'Straighten overlapping and crowded teeth' },
        { icon: 'tooth', title: 'Gaps & Spacing', description: 'Close unwanted spaces between teeth' },
        { icon: 'brace', title: 'Overbite', description: 'Correct upper teeth that protrude too far' },
        { icon: 'braces', title: 'Underbite', description: 'Align lower teeth that sit ahead of uppers' },
        { icon: 'straighten', title: 'Crossbite', description: 'Fix teeth that don\'t align properly when biting' },
      ],
    },
    howItWorks: {
      title: 'Our Orthodontic Treatment Options',
      content: [
        'Invisalign & Clear Aligners: Nearly invisible, removable aligners perfect for adults and image-conscious teens. Custom-made to gradually straighten teeth discreetly.',
        'Fixed Metal Braces: The most effective and economical option for comprehensive orthodontic correction. Modern metal braces are smaller and more comfortable than ever.',
        'Ceramic Braces: Tooth-coloured fixed braces that blend with your natural teeth for a more discreet appearance.',
        'Lingual Braces: Fixed braces fitted to the back of teeth, making them completely invisible from the front.',
      ],
      image: '/images/orthodontics-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Orthodontic Treatment?',
      items: [
        { strong: 'Improved Aesthetics:', text: 'Achieve a straighter, more confident smile' },
        { strong: 'Better Oral Health:', text: 'Properly aligned teeth are easier to clean and maintain' },
        { strong: 'Enhanced Function:', text: 'Correct bite issues improve chewing and reduce jaw strain' },
        { strong: 'Long-Term Benefits:', text: 'Prevent future dental problems and tooth wear' },
        { strong: 'Boost Confidence:', text: 'Feel more confident in social and professional settings' },
        { strong: 'Treatment Options:', text: 'Multiple solutions to suit your lifestyle and budget' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Orthodontics At ProDenta?',
      content: [
        'At ProDenta, we provide expert orthodontic care for patients of all ages across South West London. Our experienced orthodontic team has successfully treated hundreds of patients.',
        'We believe orthodontic treatment should be accessible to everyone. That\'s why we offer a comprehensive range of options at competitive prices, with flexible payment plans.',
        'Using the latest diagnostic technology and treatment planning software, we create precise, personalised treatment plans that deliver predictable results.',
      ],
      image: '/images/happy-patient-ortho.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '6-24 months depending on complexity' },
      { title: 'Check-up Frequency', description: 'Every 4-8 weeks' },
      { title: 'Suitable For', description: 'All ages from 7 years to adults' },
      { title: 'Retention Phase', description: 'Retainers to maintain your new smile' },
    ],
    gallery: {
      title: 'See The Results',
      intro: 'Real orthodontic results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-ortho-1.jpg', caption: 'Crowded Teeth Straightening' },
        { image: '/images/before-after-ortho-2.jpg', caption: 'Bite Correction' },
        { image: '/images/before-after-ortho-3.jpg', caption: 'Adult Orthodontic Treatment' },
      ],
    },
    pricing: {
      heading: 'Affordable Orthodontics In South West London',
      treatmentName: 'Orthodontic Treatment',
      price: 'Contact for Quote',
      description: 'Orthodontic costs vary based on treatment type and complexity. We offer competitive pricing on all options. Flexible payment plans available. Book a free consultation for a personalised quote.',
      buttonText: 'Book Free Consultation',
    },
    faqs: [
      { question: 'How long does orthodontic treatment take?', answer: 'Treatment duration varies depending on complexity. Simple cases may take 6-12 months, whilst more complex corrections can take 18-24 months or longer.' },
      { question: 'What\'s the best age for orthodontic treatment?', answer: 'There\'s no single "best" age - orthodontic treatment works at any age! We recommend children have their first orthodontic assessment around age 7. However, adult orthodontics is increasingly popular.' },
      { question: 'Do braces hurt?', answer: 'You may experience mild discomfort for a few days after braces are fitted or adjusted, but this is manageable with over-the-counter painkillers. Modern braces are more comfortable than ever.' },
      { question: 'Can I play sports with braces?', answer: 'Yes! We recommend wearing a protective mouthguard during contact sports. We can provide custom-fitted mouthguards designed to accommodate braces.' },
      { question: 'How much do braces cost?', answer: 'Orthodontic costs vary based on treatment complexity and the type of braces selected. We offer transparent pricing and flexible payment plans. Book a free consultation for a detailed quote.' },
    ],
    related: [
      { href: '/dental/clear-braces', image: '/images/invisalign-thumb.jpg', title: 'Invisalign & Clear Aligners', description: 'Discreet orthodontic option' },
      { href: '/dental/fixed-braces', image: '/images/fixed-braces-thumb.jpg', title: 'Fixed Braces', description: 'Traditional and modern braces' },
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten after straightening' },
    ],
    cta: {
      title: 'Book Your Free Consultation Today',
      description: 'Ready to transform your smile with orthodontic treatment? Book a complimentary consultation to explore your options and find the perfect solution for you.',
    },
  },

  // ─── CROWNS ──────────────────────────────────────────────────────
  {
    slug: 'crowns',
    title: 'Dental Crowns',
    pageTitle: 'Dental Crowns - ProDenta Battersea',
    metaDescription: 'Dental crowns at ProDenta Battersea. Restore damaged teeth with custom crowns. Natural-looking, durable restorations.',
    category: 'repair',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Dental Crowns' },
    ],
    heroSubtitle: 'Restore damaged teeth with dental crowns. Custom-made, natural-looking crowns to protect and strengthen your teeth.',
    heroImage: '/images/crowns-hero.jpg',
    heroCards: [
      { title: 'Natural-Looking', description: 'Custom-crafted to match your teeth' },
      { title: 'Strong & Durable', description: 'Long-lasting protection for damaged teeth' },
      { title: 'Restore Function', description: 'Eat and smile with confidence again' },
    ],
    whatIsIt: {
      title: 'What Are Dental Crowns?',
      content: [
        'A dental crown is a custom-made cap that completely covers a damaged, weakened, or heavily restored tooth. Crowns restore both the function and appearance of your tooth, protecting it from further damage whilst looking completely natural.',
        'Modern crowns are typically made from high-quality porcelain or ceramic materials that mimic the translucency and colour of natural tooth enamel. With proper care, crowns can last 10-15 years or longer.',
      ],
      image: '/images/veneers-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'When Do You Need A Crown?',
      items: [
        { icon: 'tooth-repair', title: 'Large Fillings', description: 'Protect teeth with extensive filling material' },
        { icon: 'root-canal', title: 'After Root Canal', description: 'Strengthen and protect root-treated teeth' },
        { icon: 'broken-tooth', title: 'Cracked or Broken Teeth', description: 'Restore severely damaged or fractured teeth' },
        { icon: 'sensitive-tooth', title: 'Weakened Teeth', description: 'Reinforce teeth at risk of breaking' },
        { icon: 'crown', title: 'Cosmetic Improvements', description: 'Cover severely discoloured or misshapen teeth' },
      ],
    },
    howItWorks: {
      title: 'How Do Crowns Work?',
      content: [
        'Assessment & Planning: We\'ll examine your tooth and take X-rays to assess the extent of damage. We\'ll discuss your options and match the colour to your natural teeth.',
        'Tooth Preparation (First Appointment): The damaged tooth is carefully shaped to create space for the crown. Detailed impressions are taken and sent to our specialist laboratory. A temporary crown is fitted.',
        'Custom Fabrication: Your crown is meticulously crafted by skilled ceramists over 2-3 weeks.',
        'Crown Fitting (Second Appointment): Your temporary crown is removed and the permanent crown is carefully fitted and adjusted before being permanently cemented.',
      ],
      image: '/images/veneers-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Dental Crowns?',
      items: [
        { strong: 'Restore Full Function:', text: 'Eat and bite normally with complete confidence and strength' },
        { strong: 'Long-Lasting Protection:', text: 'Durable solution lasting 10-15+ years with proper care' },
        { strong: 'Natural Appearance:', text: 'Modern porcelain matches your teeth perfectly for seamless results' },
        { strong: 'Prevent Further Damage:', text: 'Protect weakened teeth from breaking or deteriorating' },
        { strong: 'Save Your Tooth:', text: 'Avoid extraction by reinforcing and preserving natural teeth' },
        { strong: 'Versatile Solution:', text: 'Suitable for both functional restoration and cosmetic enhancement' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Crowns At ProDenta?',
      content: [
        'At ProDenta, we pride ourselves on delivering high-quality crown restorations that combine exceptional durability with beautiful, natural aesthetics.',
        'Our experienced dentists take a meticulous approach to crown preparation and fitting. We\'ll carefully assess your tooth structure, discuss all your options, and ensure your crown is precisely colour-matched.',
        'From initial consultation through to final fitting, you\'ll receive comprehensive care from our skilled team in a comfortable, reassuring environment.',
      ],
      image: '/images/happy-patient-veneers.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Total Timeline', description: '2-3 weeks for permanent crown' },
      { title: 'Appointments Needed', description: '2 appointments plus initial consultation' },
      { title: 'Recovery Time', description: 'Immediate function, minor sensitivity possible' },
      { title: 'Longevity', description: '10-15+ years with proper maintenance' },
    ],
    gallery: {
      title: 'Crown Restorations',
      intro: 'Real dental crown results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-veneers-1.jpg', caption: 'Complete Smile Makeover' },
        { image: '/images/before-after-veneers-2.jpg', caption: 'Discolouration Correction' },
        { image: '/images/before-after-veneers-3.jpg', caption: 'Shape & Size Enhancement' },
      ],
    },
    pricing: {
      heading: 'Dental Crowns In South West London',
      treatmentName: 'Porcelain Crowns',
      price: 'From £800 per crown',
      description: 'Crown pricing depends on the material used and complexity of your case. We offer both high-quality porcelain and metal-ceramic options. Book a consultation for a personalised quote.',
      buttonText: 'Book Consultation',
    },
    faqs: [
      { question: 'How long do dental crowns last?', answer: 'With proper care, dental crowns typically last 10-15 years or longer. Many crowns can last 20+ years. Longevity depends on oral hygiene, regular dental check-ups, and avoiding habits like teeth grinding.' },
      { question: 'Is getting a crown painful?', answer: 'No. Crown preparation is performed under local anaesthetic, so you won\'t feel pain during treatment. Some minor sensitivity may occur initially but typically subsides within a few weeks.' },
      { question: 'What\'s the difference between a crown and a veneer?', answer: 'A crown covers the entire tooth, providing strength and protection. A veneer is a thin shell that covers only the front surface, primarily for cosmetic enhancement. Your dentist will recommend the most appropriate option.' },
      { question: 'How do I care for my crown?', answer: 'Care for crowned teeth just as you would natural teeth: brush twice daily, floss regularly, and attend routine check-ups. Avoid chewing very hard foods directly on the crown.' },
      { question: 'How much do dental crowns cost?', answer: 'Dental crowns typically start from £800. Pricing varies depending on the material used and the complexity of your case. We offer transparent pricing and payment plans.' },
    ],
    related: [
      { href: '/dental/root-canal', image: '/images/root-canal-thumb.jpg', title: 'Root Canal Treatment', description: 'Often needed before crowns' },
      { href: '/dental/dental-implants', image: '/images/implants-thumb.jpg', title: 'Dental Implants', description: 'Permanent tooth replacement option' },
      { href: '/dental/veneers', image: '/images/veneers-thumb.jpg', title: 'Veneers', description: 'Cosmetic alternative for front teeth' },
    ],
    cta: {
      title: 'Book Your Crown Consultation Today',
      description: 'Need to restore a damaged tooth with a crown? Book a consultation to discuss your options and receive a thorough assessment.',
    },
  },

  // ─── FILLINGS ────────────────────────────────────────────────────
  {
    slug: 'fillings',
    title: 'Dental Fillings',
    pageTitle: 'Dental Fillings - ProDenta Battersea',
    metaDescription: 'Dental fillings at ProDenta Battersea. White and amalgam fillings for cavities. Restore your teeth today.',
    category: 'repair',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Dental Fillings' },
    ],
    heroSubtitle: 'Repair cavities with dental fillings. Tooth-coloured and amalgam options to restore your teeth.',
    heroImage: '/images/fillings-hero.jpg',
    heroCards: [
      { title: 'Quick Treatment', description: 'Cavities repaired in one visit' },
      { title: 'Tooth-Coloured Options', description: 'White fillings blend naturally' },
      { title: 'Pain-Free', description: 'Comfortable treatment with anaesthetic' },
    ],
    whatIsIt: {
      title: 'What Are Dental Fillings?',
      content: [
        'Dental fillings are used to repair teeth damaged by decay (cavities) or minor fractures. When bacteria erode tooth enamel, they create holes that must be filled to prevent further damage, pain, and infection.',
        'Modern fillings come in two main types: tooth-coloured composite (white) fillings and traditional amalgam (silver) fillings. Composite fillings are increasingly popular as they\'re virtually invisible and bond directly to your tooth structure.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Do Fillings Address?',
      items: [
        { icon: 'broken-tooth', title: 'Tooth Decay (Cavities)', description: 'Repair holes caused by bacterial erosion' },
        { icon: 'sensitive-tooth', title: 'Tooth Sensitivity', description: 'Seal exposed areas to reduce discomfort' },
        { icon: 'chipped-tooth', title: 'Minor Chips or Cracks', description: 'Restore small areas of tooth damage' },
        { icon: 'tooth-repair', title: 'Worn Tooth Surfaces', description: 'Rebuild enamel lost to grinding or erosion' },
        { icon: 'drilling', title: 'Replace Old Fillings', description: 'Update failing or unsightly fillings' },
      ],
    },
    howItWorks: {
      title: 'How Do Fillings Work?',
      content: [
        'Examination & Diagnosis: We\'ll examine your tooth and may take X-rays to assess the extent of decay.',
        'Anaesthesia (if needed): For most fillings, we\'ll administer local anaesthetic to numb the area and ensure comfort.',
        'Decay Removal & Preparation: We carefully remove all decayed tooth material using specialized instruments.',
        'Filling Placement: For composite fillings, we apply the tooth-coloured resin in layers, hardening each with a special light. For amalgam fillings, the material is packed into the prepared cavity.',
        'Final Shaping & Polishing: The filling is shaped and polished to ensure it feels smooth and comfortable.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Dental Fillings?',
      items: [
        { strong: 'Stop Decay Progression:', text: 'Prevent cavities from growing and causing more damage' },
        { strong: 'Pain-Free Treatment:', text: 'Modern techniques and anaesthesia ensure comfortable procedures' },
        { strong: 'Save Your Tooth:', text: 'Restore function and avoid more invasive treatments later' },
        { strong: 'Natural Appearance:', text: 'White fillings blend invisibly with your natural teeth' },
        { strong: 'Quick & Convenient:', text: 'Most fillings completed in a single 30-60 minute appointment' },
        { strong: 'Long-Lasting:', text: 'Quality fillings can last 7-15 years with proper care' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Fillings At ProDenta?',
      content: [
        'At ProDenta, we believe in providing gentle, comfortable dental care that preserves your natural teeth. We use high-quality filling materials and modern techniques.',
        'Our experienced dentists take a meticulous approach to cavity treatment. We\'ll only remove decayed tooth structure, preserving as much healthy tooth as possible.',
        'We\'ll also discuss preventive measures to help you avoid future cavities, including dietary advice, oral hygiene techniques, and fluoride treatments if appropriate.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '20-60 minutes depending on size' },
      { title: 'Appointments Needed', description: 'Single appointment in most cases' },
      { title: 'Recovery Time', description: 'Immediate function, numbness wears off in 2-3 hours' },
      { title: 'Longevity', description: '7-15+ years with good oral hygiene' },
    ],
    gallery: {
      title: 'White Filling Results',
      intro: 'Real dental filling results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-bonding-1.jpg', caption: 'Cavity Repair' },
        { image: '/images/before-after-bonding-2.jpg', caption: 'Old Filling Replacement' },
        { image: '/images/before-after-bonding-3.jpg', caption: 'Natural-Looking Results' },
      ],
    },
    pricing: {
      heading: 'Dental Fillings In South West London',
      treatmentName: 'White & Amalgam Fillings',
      price: 'From £120 per filling',
      description: 'Filling prices vary depending on size, location, and material choice. White fillings are slightly more expensive but blend naturally. Book an appointment for an examination and accurate quote.',
      buttonText: 'Book Appointment',
    },
    faqs: [
      { question: 'Do fillings hurt?', answer: 'No. We use local anaesthetic to numb the area before treatment. You may feel slight pressure or vibration, but no discomfort.' },
      { question: 'What\'s the difference between white and silver fillings?', answer: 'White (composite) fillings are tooth-coloured and blend naturally, ideal for visible areas. Silver (amalgam) fillings are more durable for large cavities in back teeth. Both are safe, effective options.' },
      { question: 'How long do fillings last?', answer: 'White fillings typically last 7-10 years, whilst amalgam fillings can last 10-15 years or longer. Longevity depends on size, location, oral hygiene, and habits.' },
      { question: 'Can I eat normally after a filling?', answer: 'Yes, though wait until the anaesthetic wears off (usually 2-3 hours). White fillings harden immediately under our curing light.' },
      { question: 'How can I prevent needing fillings?', answer: 'Maintain excellent oral hygiene, limit sugary foods and drinks, and attend regular dental check-ups and hygiene appointments.' },
    ],
    related: [
      { href: '/dental/hygiene', image: '/images/hygiene-thumb.jpg', title: 'Dental Hygiene', description: 'Prevent future cavities' },
      { href: '/dental/check-ups', image: '/images/checkup-thumb.jpg', title: 'Routine Check-Ups', description: 'Catch problems early' },
      { href: '/dental/root-canal', image: '/images/root-canal-thumb.jpg', title: 'Root Canal', description: 'For deep cavities reaching the nerve' },
    ],
    cta: {
      title: 'Book Your Filling Appointment Today',
      description: 'Experiencing tooth sensitivity or noticed a cavity? Don\'t delay treatment - book an appointment today for comfortable, efficient treatment.',
    },
  },

  // ─── ROOT CANAL ──────────────────────────────────────────────────
  {
    slug: 'root-canal',
    title: 'Root Canal Treatment',
    pageTitle: 'Root Canal Treatment - ProDenta Battersea',
    metaDescription: 'Root canal treatment at ProDenta Battersea. Save infected teeth with endodontic therapy. Pain-free, effective treatment.',
    category: 'repair',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Root Canal Treatment' },
    ],
    heroSubtitle: 'Save infected teeth with root canal treatment. Modern, gentle endodontic therapy to relieve pain and preserve your tooth.',
    heroImage: '/images/root-canal-hero.jpg',
    heroCards: [
      { title: 'Pain Relief', description: 'Effective relief from tooth pain' },
      { title: 'Save Your Tooth', description: 'Preserve natural teeth, avoid extraction' },
      { title: 'Modern Techniques', description: 'Gentle, comfortable endodontic therapy' },
    ],
    whatIsIt: {
      title: 'What Is Root Canal Treatment?',
      content: [
        'Root canal treatment (also called endodontic therapy) is a dental procedure that saves infected or badly damaged teeth. When the soft tissue inside your tooth (the pulp) becomes infected or inflamed, it can cause severe pain and potentially lead to an abscess. Root canal treatment removes the infected pulp, cleans and disinfects the tooth\'s interior, then seals it.',
        'Despite its reputation, modern root canal treatment is relatively comfortable and no more painful than having a filling. The alternative is usually tooth extraction, making this procedure an important tooth-saving option.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'When Do You Need Root Canal Treatment?',
      items: [
        { icon: 'toothache', title: 'Severe Toothache', description: 'Persistent, throbbing pain that won\'t go away' },
        { icon: 'bacteria', title: 'Dental Abscess', description: 'Infection at the tooth root causing swelling' },
        { icon: 'sensitive-tooth', title: 'Extreme Sensitivity', description: 'Sharp pain when eating or drinking hot/cold' },
        { icon: 'broken-tooth', title: 'Deep Decay or Trauma', description: 'Cavity or injury reaching the tooth pulp' },
        { icon: 'dirty-tooth', title: 'Tooth Discolouration', description: 'Darkening tooth indicating nerve damage' },
      ],
    },
    howItWorks: {
      title: 'How Does Root Canal Treatment Work?',
      content: [
        'Diagnosis & X-Rays: We\'ll examine your tooth and take X-rays to assess the extent of infection and plan treatment.',
        'Anaesthesia & Access: Local anaesthetic is administered. Once comfortable, we create a small opening in the tooth to access the infected pulp chamber.',
        'Cleaning & Shaping: Using specialist instruments, we carefully remove the infected pulp, then clean and shape the root canals.',
        'Filling & Sealing: The cleaned canals are filled with gutta-percha and sealed. A temporary filling is placed to protect the tooth.',
        'Crown Placement: After healing, we typically recommend a crown to protect and strengthen the root-treated tooth.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose Root Canal Treatment?',
      items: [
        { strong: 'Save Your Natural Tooth:', text: 'Avoid extraction and preserve your natural smile' },
        { strong: 'Eliminate Pain:', text: 'Relieve severe toothache and eliminate infection' },
        { strong: 'Modern & Comfortable:', text: 'Advanced techniques make treatment comfortable and efficient' },
        { strong: 'Prevent Further Problems:', text: 'Stop infection spreading to surrounding teeth and bone' },
        { strong: 'Long-Term Solution:', text: 'Root-treated teeth can last a lifetime with proper care' },
        { strong: 'Cost-Effective:', text: 'More affordable than extraction and implant replacement' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Root Canal Treatment At ProDenta?',
      content: [
        'At ProDenta, we understand that many people feel anxious about root canal treatment. That\'s why we use the latest techniques and equipment to make your treatment as comfortable as possible.',
        'We use modern rotary instruments and digital X-rays that make root canal treatment faster and more precise than ever before.',
        'After your root canal, we provide comprehensive aftercare instructions and support. We\'ll schedule follow-up appointments to monitor healing and discuss crown options.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Treatment Duration', description: '60-90 minutes per appointment' },
      { title: 'Appointments Needed', description: 'Usually 1-2 visits, then crown fitting' },
      { title: 'Recovery Time', description: 'Few days mild discomfort, then normal' },
      { title: 'Success Rate', description: 'Can last lifetime with proper care' },
    ],
    gallery: {
      title: 'Root Canal Success Stories',
      intro: 'Real root canal results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-bonding-1.jpg', caption: 'Tooth Saved from Extraction' },
        { image: '/images/before-after-bonding-2.jpg', caption: 'Pain Eliminated' },
        { image: '/images/before-after-bonding-3.jpg', caption: 'Full Function Restored' },
      ],
    },
    pricing: {
      heading: 'Root Canal Treatment In South West London',
      treatmentName: 'Root Canal Treatment',
      price: 'From £600 per tooth',
      description: 'Root canal pricing varies depending on which tooth is affected and the complexity of the case. Price includes the root canal treatment but not the subsequent crown. Book a consultation for an accurate assessment.',
      buttonText: 'Book Consultation',
    },
    faqs: [
      { question: 'Is root canal treatment painful?', answer: 'No. Modern root canal treatment is no more uncomfortable than having a filling. We use effective local anaesthetic to numb the area completely. Most patients report feeling relieved after treatment because the severe toothache is eliminated.' },
      { question: 'How long does root canal treatment take?', answer: 'Most root canal treatments are completed in a single 60-90 minute appointment. Complex cases may require a second visit. You\'ll also need a separate appointment for a crown.' },
      { question: 'Will I need a crown after root canal treatment?', answer: 'Yes, in most cases. Root canal treatment removes the blood supply to your tooth, making it more brittle. A crown protects and strengthens the tooth, ensuring it lasts for many years.' },
      { question: 'What are the alternatives to root canal treatment?', answer: 'The only alternative is tooth extraction. However, extraction means losing your natural tooth and will require replacement. Root canal treatment is almost always preferable as it saves your natural tooth.' },
      { question: 'How successful is root canal treatment?', answer: 'Root canal treatment has a success rate of over 90%. With proper care and a protective crown, root-treated teeth can last a lifetime.' },
    ],
    related: [
      { href: '/dental/crowns', image: '/images/crowns-thumb.jpg', title: 'Dental Crowns', description: 'Protect root-treated teeth' },
      { href: '/dental/emergency', image: '/images/emergency-thumb.jpg', title: 'Emergency Dentist', description: 'Same-day care for dental pain' },
      { href: '/dental/fillings', image: '/images/fillings-thumb.jpg', title: 'Dental Fillings', description: 'Treat cavities before they worsen' },
    ],
    cta: {
      title: 'Need Root Canal Treatment?',
      description: 'Experiencing severe toothache or dental pain? Don\'t suffer - book an appointment today for comfortable, efficient treatment that saves your natural tooth.',
    },
  },

  // ─── HYGIENE ────────────────────────────────────────────────
  {
    slug: 'hygiene',
    title: 'Dental Hygiene',
    pageTitle: 'Dental Hygiene - ProDenta Battersea',
    metaDescription: 'Professional dental hygiene at ProDenta Battersea. Deep cleaning, scale and polish, gum care. Maintain your oral health.',
    category: 'maintain',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Dental Hygiene' },
    ],
    heroSubtitle: 'Professional teeth cleaning and gum care. Prevent disease and maintain a fresh, healthy smile.',
    heroImage: '/images/hygiene-hero.jpg',
    heroCards: [
      { title: 'Professional Cleaning', description: 'Deep clean for healthier teeth and gums' },
      { title: 'Prevent Disease', description: 'Stop gum disease before it starts' },
      { title: 'Fresh Breath', description: 'Remove plaque and tartar for lasting freshness' },
    ],
    whatIsIt: {
      title: 'What Is Dental Hygiene?',
      content: [
        'Dental hygiene appointments are professional cleaning sessions with our experienced hygienists, designed to keep your teeth and gums healthy. Regular hygiene visits are essential for preventing gum disease, tooth decay, and maintaining fresh breath.',
        'During your appointment, we remove hardened plaque (tartar) that cannot be removed by brushing alone, polish your teeth to remove surface stains, and provide personalised advice on improving your home care routine.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Problems Does Hygiene Prevent?',
      items: [
        { icon: 'gum', title: 'Gum Disease', description: 'Prevent gingivitis and periodontitis' },
        { icon: 'bacteria', title: 'Tooth Decay', description: 'Remove plaque before cavities form' },
        { icon: 'mouthwash', title: 'Bad Breath', description: 'Eliminate bacteria causing halitosis' },
        { icon: 'tooth', title: 'Surface Staining', description: 'Polish away tea, coffee, and wine stains' },
      ],
    },
    howItWorks: {
      title: 'What Happens During A Hygiene Appointment?',
      content: [
        'Assessment: Your hygienist will examine your teeth and gums, checking for signs of gum disease, cavities, and areas needing extra attention.',
        'Scale & Polish: Using specialist instruments, we remove hardened plaque (tartar/calculus) from above and below the gum line.',
        'Polishing: Your teeth are polished with a special paste to remove surface stains and smooth the enamel.',
        'Personalised Advice: We\'ll provide tailored recommendations for your home care routine.',
        'Most appointments take 30-45 minutes. We recommend visiting every 3-6 months.',
      ],
      image: '/images/hygiene-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Regular Hygiene Appointments Matter',
      items: [
        { strong: 'Prevent Gum Disease:', text: 'Early removal of plaque prevents gingivitis and periodontitis' },
        { strong: 'Reduce Cavities:', text: 'Professional cleaning removes bacteria that cause tooth decay' },
        { strong: 'Fresh Breath:', text: 'Eliminate odour-causing bacteria for lasting confidence' },
        { strong: 'Early Detection:', text: 'Hygienists spot problems before they become serious' },
        { strong: 'Save Money:', text: 'Prevention is far cheaper than treating advanced dental disease' },
        { strong: 'Brighter Smile:', text: 'Polish away surface stains for a naturally whiter appearance' },
      ],
    },
    whyChoose: {
      title: 'Why Choose Dental Hygiene At ProDenta?',
      content: [
        'At ProDenta, our experienced dental hygienists are dedicated to helping you maintain excellent oral health. With gentle, thorough techniques and the latest equipment, we make every hygiene appointment comfortable and effective.',
        'We believe in building long-term relationships with our patients. Your hygienist will get to know your oral health history and provide personalised advice.',
        'Regular hygiene visits are an investment in your long-term dental health. We offer flexible appointment times and affordable pricing to make preventative care accessible.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Appointment Duration', description: '30-45 minutes typically' },
      { title: 'Recommended Frequency', description: 'Every 3-6 months' },
      { title: 'Comfort Level', description: 'Gentle and pain-free' },
      { title: 'Long-Term Benefits', description: 'Prevents disease, saves money' },
    ],
    gallery: {
      title: 'See The Difference',
      intro: 'Professional hygiene results from our ProDenta patients. Individual results may vary.',
      items: [
        { image: '/images/before-after-hygiene-1.jpg', caption: 'Tartar Removal' },
        { image: '/images/before-after-hygiene-2.jpg', caption: 'Stain Removal' },
        { image: '/images/before-after-hygiene-3.jpg', caption: 'Gum Health Improvement' },
      ],
    },
    pricing: {
      heading: 'Affordable Dental Hygiene In South West London',
      treatmentName: 'Hygiene Appointments',
      price: 'Contact for Pricing',
      description: 'Regular hygiene appointments are an affordable investment in your long-term dental health. Contact us for our current hygiene pricing.',
      buttonText: 'Book Appointment',
    },
    faqs: [
      { question: 'How often should I see the hygienist?', answer: 'Most patients benefit from hygiene appointments every 3-6 months. However, frequency depends on your individual needs. If you have gum disease, we may recommend more frequent visits initially.' },
      { question: 'Is dental hygiene treatment painful?', answer: 'No. Most patients find hygiene appointments comfortable and pain-free. You may feel slight sensitivity during tartar removal, especially if you have gum inflammation, but this is temporary.' },
      { question: 'Will hygiene appointments whiten my teeth?', answer: 'Hygiene appointments remove surface stains, making your teeth look brighter and cleaner. However, this isn\'t the same as teeth whitening, which changes the underlying tooth colour.' },
      { question: 'Can I skip hygiene appointments if I brush well?', answer: 'No. Even with excellent brushing and flossing, plaque hardens into tartar over time, which can only be removed by a dental professional.' },
      { question: 'What happens if I have gum disease?', answer: 'If we detect gum disease, we\'ll discuss a treatment plan. Early-stage gum disease (gingivitis) can often be reversed with improved home care and more frequent hygiene visits.' },
    ],
    related: [
      { href: '/dental/check-ups', image: '/images/checkups-thumb.jpg', title: 'Routine Check-ups', description: 'Regular examinations and care' },
      { href: '/dental/teeth-whitening', image: '/images/teeth-whitening-thumb.jpg', title: 'Teeth Whitening', description: 'Brighten your clean smile' },
      { href: '/dental/new-patients', image: '/images/new-patients-thumb.jpg', title: 'New Patients', description: 'Comprehensive first appointment' },
    ],
    cta: {
      title: 'Book Your Hygiene Appointment Today',
      description: 'Ready to maintain a healthy smile with regular hygiene care? Book your appointment with our experienced hygienists today.',
    },
  },

  // ─── CHECK-UPS ──────────────────────────────────────────────
  {
    slug: 'check-ups',
    title: 'Routine Check-ups',
    pageTitle: 'Routine Check-ups - ProDenta Battersea',
    metaDescription: 'Regular dental check-ups at ProDenta Battersea. Preventative care to keep your smile healthy. Book your routine examination today.',
    category: 'maintain',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Routine Check-ups' },
    ],
    heroSubtitle: 'Keep your smile healthy with regular check-ups. Preventative care, early detection, and professional examinations.',
    heroImage: '/images/check-ups-hero.jpg',
    heroCards: [
      { title: 'Early Detection', description: 'Catch problems before they become serious' },
      { title: 'Preventative Care', description: 'Stop issues before treatment is needed' },
      { title: 'Peace of Mind', description: 'Regular monitoring keeps your smile healthy' },
    ],
    whatIsIt: {
      title: 'What Are Routine Check-ups?',
      content: [
        'A routine dental check-up is a comprehensive examination of your teeth, gums, and oral health. Regular check-ups are the foundation of preventative dentistry, allowing us to monitor your oral health and detect problems early.',
        'During your check-up, we thoroughly examine your teeth for signs of decay, check your gums for disease, screen for oral cancer, and assess your overall dental health. Most patients should have a check-up every 6-12 months.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'What Do Check-ups Detect?',
      items: [
        { icon: 'broken-tooth', title: 'Tooth Decay', description: 'Catch cavities early before they need extensive treatment' },
        { icon: 'gum', title: 'Gum Disease', description: 'Identify gingivitis and periodontitis in early stages' },
        { icon: 'magnifier', title: 'Oral Cancer Screening', description: 'Early detection of mouth, tongue, and throat abnormalities' },
        { icon: 'tooth-check', title: 'Hidden Problems', description: 'Detect issues like worn fillings, cracked teeth, bite problems' },
      ],
    },
    howItWorks: {
      title: 'What Happens During a Check-up?',
      content: [
        'Medical History Review: We\'ll discuss any changes to your general health, medications, or dental concerns.',
        'Visual Examination: We thoroughly examine every tooth, checking for decay, cracks, worn fillings, and other damage. We\'ll assess your gums and check your bite.',
        'Oral Cancer Screening: We check your tongue, throat, lips, and soft tissues for any abnormalities.',
        'X-rays (if needed): Digital X-rays reveal problems invisible to the naked eye.',
        'Treatment Planning: If we identify any issues, we\'ll discuss them and create a plan that fits your needs and budget.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Are Regular Check-ups Important?',
      items: [
        { strong: 'Early Detection Saves Money:', text: 'Small problems are much cheaper to fix than advanced decay or gum disease' },
        { strong: 'Prevent Pain & Emergencies:', text: 'Catch issues before they become painful or require urgent treatment' },
        { strong: 'Preserve Your Natural Teeth:', text: 'Regular monitoring helps you keep your teeth for life' },
        { strong: 'Oral Cancer Screening:', text: 'Early detection can be life-saving' },
        { strong: 'Professional Advice:', text: 'Get personalised guidance on improving your oral health' },
        { strong: 'Monitor Existing Work:', text: 'Check fillings, crowns, and other restorations are functioning properly' },
      ],
    },
    whyChoose: {
      title: 'Why Choose ProDenta for Your Check-ups?',
      content: [
        'At ProDenta, we believe in thorough, unhurried examinations. We take the time to discuss your concerns, explain any findings clearly, and answer all your questions.',
        'We understand that some patients feel anxious about dental visits. Our friendly team creates a comfortable, welcoming environment where you can relax.',
        'Our preventative approach focuses on keeping your teeth healthy rather than just treating problems as they arise.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Appointment Duration', description: '20-30 minutes typically' },
      { title: 'Recommended Frequency', description: 'Every 6-12 months' },
      { title: 'Pain Level', description: 'None - routine examination only' },
      { title: 'Long-Term Benefits', description: 'Prevents disease, saves money' },
    ],
    gallery: {
      title: 'Comprehensive Care at ProDenta',
      intro: 'Our thorough examinations help you maintain excellent oral health for life.',
      items: [
        { image: '/images/check-up-examination.jpg', caption: 'Thorough Examination' },
        { image: '/images/check-up-xray.jpg', caption: 'Digital X-rays' },
        { image: '/images/check-up-consultation.jpg', caption: 'Clear Communication' },
      ],
    },
    pricing: {
      heading: 'Affordable Check-ups In South West London',
      treatmentName: 'Routine Check-up',
      price: 'Contact for Pricing',
      description: 'Routine examination pricing varies depending on whether X-rays are needed. Contact us to discuss our competitive check-up fees or ask about our dental membership plans.',
      buttonText: 'Book Your Check-up',
    },
    faqs: [
      { question: 'How often should I have a dental check-up?', answer: 'Most patients should visit every 6-12 months. If you have gum disease, a history of decay, or other risk factors, we may recommend more frequent visits.' },
      { question: 'What happens if you find a problem during my check-up?', answer: 'If we identify any issues, we\'ll explain exactly what we\'ve found, discuss your treatment options, and provide a clear treatment plan with costs. We\'ll never proceed without your informed consent.' },
      { question: 'Do I need X-rays at every check-up?', answer: 'No. We only take X-rays when clinically necessary. Most patients need X-rays every 1-2 years. We use digital X-rays which emit 90% less radiation than traditional film.' },
      { question: 'What\'s the difference between a check-up and a hygiene appointment?', answer: 'A check-up is an examination by a dentist. A hygiene appointment is professional cleaning by a dental hygienist. Most patients need both.' },
      { question: 'Can I have a check-up if I\'m nervous about the dentist?', answer: 'Absolutely. Our team is experienced in treating nervous patients. Check-ups are non-invasive - there\'s no drilling or injections, just a gentle look at your teeth and gums.' },
    ],
    related: [
      { href: '/dental/hygiene', image: '/images/hygiene-thumb.jpg', title: 'Dental Hygiene', description: 'Professional cleaning for healthy gums' },
      { href: '/dental/new-patients', image: '/images/new-patients-thumb.jpg', title: 'New Patients', description: 'Join our practice today' },
      { href: '/dental/emergency', image: '/images/emergency-thumb.jpg', title: 'Emergency Appointments', description: 'Same-day urgent care' },
    ],
    cta: {
      title: 'Book Your Routine Check-up Today',
      description: 'Regular check-ups are the foundation of excellent oral health. Book your routine examination at ProDenta today.',
    },
  },

  // ─── NEW PATIENTS ───────────────────────────────────────────
  {
    slug: 'new-patients',
    title: 'New Patients',
    pageTitle: 'New Patients - ProDenta Battersea',
    metaDescription: 'New patients welcome at ProDenta Battersea. Comprehensive first appointments, friendly care. Register with us today.',
    category: 'maintain',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'New Patients' },
    ],
    heroSubtitle: 'Welcome to ProDenta. Comprehensive new patient appointments with full assessment and treatment planning.',
    heroImage: '/images/new-patients-hero.jpg',
    heroCards: [
      { title: 'Comprehensive Assessment', description: 'Full examination and treatment planning' },
      { title: 'Friendly Welcome', description: 'Gentle, caring approach for new patients' },
      { title: 'Clear Communication', description: 'Transparent pricing and treatment options' },
    ],
    whatIsIt: {
      title: 'What Happens at Your First Appointment?',
      content: [
        'Your first appointment at ProDenta is a comprehensive new patient examination designed to fully assess your oral health and create a personalised treatment plan.',
        'We take the time to get to know you, understand any concerns, and make you feel comfortable. Your first visit includes a full examination, X-rays if needed, oral cancer screening, and a detailed discussion of any treatment you may need.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'Why Join ProDenta?',
      items: [
        { icon: 'dentist', title: 'Experienced Team', description: 'Skilled dentists and friendly staff you can trust' },
        { icon: 'dental-care', title: 'Comprehensive Care', description: 'Full range of treatments from routine to specialist' },
        { icon: 'xray', title: 'Modern Technology', description: 'Digital X-rays, intraoral cameras, latest equipment' },
        { icon: 'appointment', title: 'Flexible Appointments', description: 'Early, late, and Saturday appointments available' },
      ],
    },
    howItWorks: {
      title: 'What\'s Included in Your New Patient Appointment?',
      content: [
        'Medical & Dental History: We\'ll discuss your general health, medications, previous dental treatments, and any concerns.',
        'Comprehensive Examination: A thorough check of every tooth, your gums, bite, jaw joints, and soft tissues.',
        'Diagnostic X-rays: Digital X-rays (if needed) reveal problems invisible to the eye.',
        'Oral Cancer Screening: We check your tongue, throat, lips, and mouth lining for abnormalities.',
        'Personalised Treatment Plan: We\'ll discuss any problems, explain your options, and provide clear pricing with no pressure or obligation.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'What Makes ProDenta Different?',
      items: [
        { strong: 'Unhurried Appointments:', text: 'We give you time to discuss your concerns without feeling rushed' },
        { strong: 'Transparent Pricing:', text: 'Clear costs with no hidden fees or surprises' },
        { strong: 'Nervous Patient Care:', text: 'Gentle, understanding approach for anxious patients' },
        { strong: 'Preventative Focus:', text: 'We help you avoid problems, not just fix them' },
        { strong: 'Flexible Payment Plans:', text: 'Spread the cost of treatment with 0% finance options' },
        { strong: 'Convenient Location:', text: 'Easy access from Clapham Junction and South West London' },
      ],
    },
    whyChoose: {
      title: 'Your Comfort Is Our Priority',
      content: [
        'We understand that visiting a new dentist can feel daunting. At ProDenta, we\'ve created a welcoming, comfortable environment where you can relax.',
        'If you\'re nervous about dental treatment, please let us know. We\'re experienced in treating anxious patients and will work at your pace.',
        'Our practice is equipped with the latest technology, including digital X-rays that emit 90% less radiation, intraoral cameras, and modern treatment rooms. New patients of all ages are welcome.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Appointment Duration', description: '45-60 minutes typically' },
      { title: 'What\'s Included', description: 'Full exam, X-rays, treatment plan' },
      { title: 'Same-Day Treatment', description: 'Often possible for simple issues' },
      { title: 'Next Steps', description: 'Clear plan with no obligation' },
    ],
    gallery: {
      title: 'Welcome to ProDenta',
      intro: 'Our modern practice in the heart of Battersea provides exceptional dental care for all the family.',
      items: [
        { image: '/images/prodenta-reception.jpg', caption: 'Welcoming Reception Area' },
        { image: '/images/prodenta-surgery.jpg', caption: 'Modern Treatment Rooms' },
        { image: '/images/prodenta-team.jpg', caption: 'Experienced, Friendly Team' },
      ],
    },
    pricing: {
      heading: 'New Patient Pricing',
      treatmentName: 'New Patient Examination',
      price: 'Contact for Pricing',
      description: 'Your comprehensive appointment includes full examination, X-rays if needed, oral cancer screening, and a personalised treatment plan. We offer flexible payment options including 0% finance.',
      buttonText: 'Book New Patient Appointment',
    },
    faqs: [
      { question: 'What should I bring to my first appointment?', answer: 'Please bring a list of any medications you\'re taking and details of any medical conditions. If you have dental records or X-rays from your previous dentist, these can be helpful but aren\'t essential.' },
      { question: 'Will I need treatment on my first visit?', answer: 'Usually, your first visit is for examination and treatment planning only. However, if you\'re in pain or need urgent care, we\'ll do our best to treat you on the same day.' },
      { question: 'Do you accept NHS patients?', answer: 'ProDenta is a private dental practice. We offer affordable private care with transparent pricing and flexible payment options including 0% finance.' },
      { question: 'I haven\'t been to the dentist in years - will I be judged?', answer: 'Absolutely not. We see many patients who haven\'t visited a dentist for years. Our non-judgmental approach means we\'ll focus on helping you get back on track.' },
      { question: 'How do I register as a new patient?', answer: 'Simply call us on 0207 223 2244 or book online. We\'ll schedule your appointment at a time that suits you. New patients are always welcome.' },
    ],
    related: [
      { href: '/dental/check-ups', image: '/images/check-ups-thumb.jpg', title: 'Routine Check-ups', description: 'Ongoing preventative care' },
      { href: '/dental/hygiene', image: '/images/hygiene-thumb.jpg', title: 'Dental Hygiene', description: 'Professional cleaning appointments' },
      { href: '/dental/emergency', image: '/images/emergency-thumb.jpg', title: 'Emergency Appointments', description: 'Same-day urgent dental care' },
    ],
    cta: {
      title: 'Register as a New Patient Today',
      description: 'Join the ProDenta family and experience dentistry done differently. Call us today to book your comprehensive new patient appointment.',
    },
  },

  // ─── EMERGENCY ──────────────────────────────────────────────
  {
    slug: 'emergency',
    title: 'Emergency Dentist',
    pageTitle: 'Emergency Dentist - ProDenta Battersea',
    metaDescription: 'Emergency dentist at ProDenta Battersea. Same-day appointments for dental emergencies. Fast, effective pain relief.',
    category: 'maintain',
    theme: 'dental',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Treatments', href: '/treatments' },
      { label: 'Emergency Dentist' },
    ],
    heroSubtitle: 'Dental emergencies treated promptly. Same-day appointments, pain relief, and expert emergency care when you need it most.',
    heroImage: '/images/emergency-hero.jpg',
    heroCards: [
      { title: 'Same-Day Appointments', description: 'Fast relief when you need it most' },
      { title: 'Pain Relief', description: 'Immediate treatment for dental pain' },
      { title: 'Expert Care', description: 'Experienced team for all emergencies' },
    ],
    whatIsIt: {
      title: 'What Is Emergency Dental Care?',
      content: [
        'Dental emergencies are unexpected situations requiring immediate attention to relieve severe pain, stop bleeding, save a damaged tooth, or treat infection. Common emergencies include severe toothache, knocked-out teeth, broken teeth, dental abscesses, lost fillings or crowns, and facial swelling.',
        'At ProDenta, we reserve same-day appointments for urgent cases and provide guidance on managing your emergency until you can see us. Our experienced team is trained to handle all types of dental emergencies.',
      ],
      image: '/images/composite-bonding-what-is.jpg',
      imagePosition: 'left',
    },
    problems: {
      title: 'Common Dental Emergencies We Treat',
      items: [
        { icon: 'toothache', title: 'Severe Toothache', description: 'Urgent pain relief and diagnosis' },
        { icon: 'remove-tooth', title: 'Knocked-Out Tooth', description: 'Emergency reimplantation to save tooth' },
        { icon: 'broken-tooth', title: 'Broken or Chipped Teeth', description: 'Immediate repair and pain management' },
        { icon: 'bacteria', title: 'Dental Abscess/Infection', description: 'Urgent treatment to eliminate infection' },
        { icon: 'crown', title: 'Lost Filling or Crown', description: 'Same-day replacement and protection' },
      ],
    },
    howItWorks: {
      title: 'What To Expect During Emergency Treatment',
      content: [
        'Contact Us Immediately: Call our practice as soon as a dental emergency occurs. We\'ll provide immediate advice and arrange a same-day appointment.',
        'Initial Assessment: When you arrive, we\'ll quickly assess your condition, take any necessary X-rays, and determine the most appropriate treatment.',
        'Emergency Treatment: Depending on your situation, we may drain an abscess, re-cement a crown, place an emergency filling, extract a damaged tooth, or stabilize a knocked-out tooth.',
        'Follow-Up Care: After emergency treatment, we\'ll discuss any additional treatment needed and schedule follow-up appointments.',
      ],
      image: '/images/composite-bonding-process.jpg',
      imagePosition: 'right',
    },
    benefits: {
      title: 'Why Choose ProDenta For Emergency Care?',
      items: [
        { strong: 'Same-Day Appointments:', text: 'Reserved emergency slots available every day for urgent cases' },
        { strong: 'Immediate Pain Relief:', text: 'Fast, effective treatment to eliminate dental pain quickly' },
        { strong: 'Experienced Team:', text: 'Skilled dentists trained in all emergency procedures' },
        { strong: 'Comprehensive Care:', text: 'Full range of emergency treatments under one roof' },
        { strong: 'Modern Equipment:', text: 'Digital X-rays and advanced tools for accurate diagnosis' },
        { strong: 'Calm Environment:', text: 'Reassuring, gentle care when you\'re feeling anxious or in pain' },
      ],
    },
    whyChoose: {
      title: 'Emergency Dental Care At ProDenta',
      content: [
        'At ProDenta, we understand that dental emergencies are stressful and often painful. That\'s why we prioritize urgent cases and ensure same-day appointments are available.',
        'Our experienced team is equipped to handle all types of dental emergencies with skill and compassion. We use modern diagnostic tools for quick, accurate assessment.',
        'We keep emergency slots available throughout the day and provide clear guidance on what to do until you can see us. Our calm, reassuring approach helps nervous patients feel comfortable.',
      ],
      image: '/images/happy-patient-bonding.jpg',
      imagePosition: 'left',
    },
    results: [
      { title: 'Appointment Time', description: 'Same-day emergency slots available' },
      { title: 'Treatment Duration', description: '30-90 minutes depending on emergency' },
      { title: 'Pain Relief', description: 'Immediate relief, ongoing care as needed' },
      { title: 'Follow-Up', description: 'Additional appointments if needed' },
    ],
    gallery: {
      title: 'Emergency Dental Care',
      intro: 'We treat dental emergencies promptly and effectively. Individual treatment varies by situation.',
      items: [
        { image: '/images/before-after-bonding-1.jpg', caption: 'Chipped Tooth Repair' },
        { image: '/images/before-after-bonding-2.jpg', caption: 'Emergency Restoration' },
        { image: '/images/before-after-bonding-3.jpg', caption: 'Smile Restored' },
      ],
    },
    pricing: {
      heading: 'Emergency Dental Care In South West London',
      treatmentName: 'Emergency Appointments',
      price: 'From £120',
      description: 'Emergency appointment fees depend on the type and complexity of treatment required. We\'ll provide transparent pricing before proceeding. Call us immediately if you\'re experiencing a dental emergency.',
      buttonText: 'Call 0207 223 2244',
    },
    faqs: [
      { question: 'What constitutes a dental emergency?', answer: 'Dental emergencies include severe toothache, knocked-out teeth, broken or cracked teeth, dental abscesses, uncontrolled bleeding, lost fillings or crowns causing pain, and facial swelling. If in doubt, call us.' },
      { question: 'Can you see me the same day for an emergency?', answer: 'Yes. We reserve emergency appointment slots every day. Call us as soon as your emergency occurs, and we\'ll arrange a same-day appointment.' },
      { question: 'What should I do if I knock out a tooth?', answer: 'Pick up the tooth by the crown (not the root), rinse gently, and try to place it back in the socket. If that\'s not possible, keep it moist in milk or saliva. Contact us immediately - we have the best chance of saving it within 30 minutes.' },
      { question: 'How much does emergency dental treatment cost?', answer: 'Emergency appointment fees start from £120, with additional costs depending on treatment required. We\'ll always discuss costs before proceeding.' },
      { question: 'What if I have a dental emergency outside office hours?', answer: 'Call our main number and our answerphone will provide emergency contact information. For severe emergencies (heavy bleeding, suspected broken jaw, severe swelling affecting breathing), visit your nearest A&E.' },
    ],
    related: [
      { href: '/dental/root-canal', image: '/images/root-canal-thumb.jpg', title: 'Root Canal Treatment', description: 'Save infected teeth' },
      { href: '/dental/crowns', image: '/images/crowns-thumb.jpg', title: 'Dental Crowns', description: 'Restore broken teeth' },
      { href: '/dental/check-ups', image: '/images/checkup-thumb.jpg', title: 'Regular Check-Ups', description: 'Prevent emergencies with routine care' },
    ],
    cta: {
      title: 'Experiencing A Dental Emergency?',
      description: 'Don\'t suffer with dental pain or damage - call us immediately for same-day emergency care. Our experienced team is ready to provide fast relief.',
    },
  },
];
