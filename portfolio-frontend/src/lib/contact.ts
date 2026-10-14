// Shared by the contact form and the /api/contact route.

export type ContactField = 'name' | 'email' | 'company' | 'message';

export type ContactData = Record<ContactField, string>;

export const CONTACT_LIMITS: Record<ContactField, number> = {
    name: 200,
    email: 254,
    company: 200,
    message: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactValidation =
    | {ok: true; data: ContactData}
    | {ok: false; errors: Partial<Record<ContactField, string>>};

export function validateContact(input: Partial<Record<ContactField, unknown>>): ContactValidation {
    const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

    const data: ContactData = {
        name: text(input.name),
        email: text(input.email),
        company: text(input.company),
        message: text(input.message),
    };

    const errors: Partial<Record<ContactField, string>> = {};

    if (!data.name) errors.name = 'Please enter your name.';
    if (!data.email) errors.email = 'Please enter your work email.';
    else if (!EMAIL_PATTERN.test(data.email)) errors.email = 'Please enter a valid email address.';
    if (!data.message) errors.message = 'Please tell us a little about your project or needs.';

    (Object.keys(CONTACT_LIMITS) as ContactField[]).forEach((field) => {
        if (!errors[field] && data[field].length > CONTACT_LIMITS[field]) {
            errors[field] = `Please keep this under ${CONTACT_LIMITS[field]} characters.`;
        }
    });

    return Object.keys(errors).length > 0 ? {ok: false, errors} : {ok: true, data};
}
