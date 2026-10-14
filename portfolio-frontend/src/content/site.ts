// Confirmed facts only. Do not add registration numbers, tax IDs, addresses or
// social profiles here until they have been confirmed. No placeholders.

// "Michel Many" is the commercial brand. Use "Michel Many Limited" only when
// referring specifically to the UK company.
export const site = {
    name: 'Michel Many',
    url: 'https://www.michelmany.com',
    email: 'hello@michelmany.com',
    tagline: 'Software engineering for agencies and product teams.',
    description:
        'Michel Many provides senior frontend and full-stack engineering for agencies and product teams, covering web applications, enterprise and publishing platforms, and SaaS products.',
    location: 'Based in Madrid, Spain. Working remotely with teams internationally.',
    locale: 'en_GB',
} as const;

// The two ways engagements can be contracted. The Spanish activity is not a
// company, subsidiary, branch or office of Michel Many Limited.
export const contractingEntities = [
    // Registration, tax and address details confirmed by Michel Moraes.
    // Full details are published on /legal; elsewhere use name and summary.
    {
        id: 'uk',
        name: 'Michel Many Limited',
        summary: 'UK limited company, registered in England and Wales.',
        facts: [
            {label: 'Company number', value: '16058356'},
            {label: 'Registered office', value: '86-90 Paul Street, London, England, EC2A 4NE, United Kingdom'},
        ],
    },
    {
        id: 'es',
        name: 'Michel Moraes',
        summary: 'Self-employed professional (autónomo) in Spain.',
        facts: [
            {label: 'NIF', value: 'ES60468832S'},
            {label: 'Address', value: 'Calle Albala 12, Portal B 1º 1, 28037 Madrid, Spain'},
        ],
    },
] as const;

export const contracting = {
    body: 'B2B engagements can be arranged through Michel Many Limited in the United Kingdom or Michel Moraes as a self-employed professional in Spain. The contracting entity is confirmed in each proposal and agreement.',
} as const;

export const navigation = [
    {name: 'Services', href: '/services'},
    {name: 'Work', href: '/work'},
    {name: 'About & Experience', href: '/about'},
    {name: 'Contact', href: '/contact'},
] as const;
