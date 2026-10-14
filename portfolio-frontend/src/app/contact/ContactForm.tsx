'use client';

import {useRef, useState} from 'react';
import {site} from '@/content/site';
import {CONTACT_LIMITS, type ContactField, validateContact} from '@/lib/contact';

type Status =
    | {state: 'idle'}
    | {state: 'submitting'}
    | {state: 'success'}
    | {state: 'error'; message: string};

const emptyForm: Record<ContactField, string> = {name: '', email: '', company: '', message: ''};

const fields: {
    id: ContactField;
    label: string;
    type?: string;
    autoComplete?: string;
    required: boolean;
}[] = [
    {id: 'name', label: 'Name', autoComplete: 'name', required: true},
    {id: 'email', label: 'Work email', type: 'email', autoComplete: 'email', required: true},
    {id: 'company', label: 'Company', autoComplete: 'organization', required: false},
];

const inputClass =
    'mt-2 block w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 aria-[invalid=true]:border-danger';

export default function ContactForm() {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
    const [status, setStatus] = useState<Status>({state: 'idle'});
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setForm((previous) => ({...previous, [name]: value}));
        if (errors[name as ContactField]) {
            setErrors((previous) => ({...previous, [name]: undefined}));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = validateContact(form);
        if (!result.ok) {
            setErrors(result.errors);
            const firstInvalid = Object.keys(result.errors)[0];
            formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
            return;
        }

        setErrors({});
        setStatus({state: 'submitting'});

        // Honeypot field: real visitors never see or fill it in.
        const website = new FormData(event.currentTarget).get('website');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...result.data, website}),
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                if (data.errors) setErrors(data.errors);
                throw new Error(data.message || 'Your message could not be sent.');
            }

            setForm(emptyForm);
            setStatus({state: 'success'});
        } catch (error) {
            setStatus({
                state: 'error',
                message: error instanceof Error ? error.message : 'Your message could not be sent.',
            });
        }
    };

    if (status.state === 'success') {
        return (
            <div role="status" className="rounded-2xl border border-line bg-success-soft p-8">
                <h2 className="text-2xl font-semibold">Thank you. Your message has been sent.</h2>
                <p className="mt-3 text-ink-soft">
                    We have received your enquiry and will reply to the email address you provided.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus({state: 'idle'})}
                    className="link mt-6 text-sm text-ink"
                >
                    Send another message
                </button>
            </div>
        );
    }

    const submitting = status.state === 'submitting';

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-note"
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
        >
            <p id="form-note" className="text-sm text-muted">All fields are required except Company.</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                    <div key={field.id} className={field.id === 'company' ? 'sm:col-span-2' : undefined}>
                        <label htmlFor={field.id} className="text-sm font-medium">
                            {field.label}
                            {!field.required && <span className="font-normal text-muted"> (optional)</span>}
                        </label>
                        <input
                            id={field.id}
                            name={field.id}
                            type={field.type ?? 'text'}
                            autoComplete={field.autoComplete}
                            value={form[field.id]}
                            onChange={handleChange}
                            required={field.required}
                            maxLength={CONTACT_LIMITS[field.id]}
                            aria-invalid={errors[field.id] ? true : undefined}
                            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                            className={inputClass}
                        />
                        {errors[field.id] && (
                            <p id={`${field.id}-error`} className="mt-2 text-sm text-danger">{errors[field.id]}</p>
                        )}
                    </div>
                ))}

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">Project or engineering needs</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={7}
                        value={form.message}
                        onChange={handleChange}
                        required
                        maxLength={CONTACT_LIMITS.message}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`${inputClass} resize-y`}
                    />
                    {errors.message && (
                        <p id="message-error" className="mt-2 text-sm text-danger">{errors.message}</p>
                    )}
                </div>

                <div className="hidden" aria-hidden>
                    <label htmlFor="website">Leave this field empty</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"/>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-accent-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {submitting ? 'Sending…' : 'Send enquiry'}
                </button>
            </div>

            <div aria-live="assertive" className="mt-4">
                {status.state === 'error' && (
                    <div role="alert" className="rounded-lg bg-danger-soft p-4 text-sm text-danger">
                        <p>{status.message}</p>
                        <p className="mt-1">
                            You can also email us directly at{' '}
                            <a href={`mailto:${site.email}`} className="link font-medium">{site.email}</a>.
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
}
