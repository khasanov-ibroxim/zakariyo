"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import bg from "@/assets/contact/IMG_9801.jpg"

const TELEGRAM_BOT_TOKEN = "8686434509:AAE_UwEtZXBMUTrO1eSy2KmoTwMllhQDiHE";
const TELEGRAM_CHAT_ID = "-1003770523014";

interface ContactDict {
    hero: {
        title: string
        description: string
    }
    form: {
        heading: string
        fields: {
            name: string
            email: string
            message: string
        }
        submit: string
        status: {
            loading: string
            success: string
            error: string
        }
    }
    info: {
        socials: {
            title: string
            instagram: string
            telegram: string
            facebook: string
        }
        address: {
            title: string
            country: string
            city: string
            street: string
        }
        phone: {
            title: string
        }
        email: {
            title: string
        }
    }
}

interface Props {
    dict: {
        contact: ContactDict
    }
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = ({ dict }: Props) => {
    const contact = dict.contact

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendToTelegram = async () => {
        const text =
            `📩 *Yangi xabar!*\n\n` +
            `👤 *Ism:* ${formData.name}\n` +
            `📧 *Email:* ${formData.email}\n` +
            `💬 *Xabar:*\n${formData.message}`;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.description || contact.form.status.error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            await sendToTelegram();
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : contact.form.status.error);
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const contactInfo = [
        {
            title: contact.info.socials.title,
            items: [
                { label: contact.info.socials.instagram, link: 'https://www.instagram.com/yokubovsmarketing?igsh=OXpoNzh6a3d1bXN3&utm_source=qr' },
                { label: contact.info.socials.telegram, link: 'https://t.me/DrTex' },
                { label: contact.info.socials.facebook, link: 'https://www.facebook.com/share/1DQEYrQj6o/?mibextid=wwXIfr' }
            ]
        },
        {
            title: contact.info.address.title,
            items: [
                { label: contact.info.address.country },
                { label: contact.info.address.city },
                { label: contact.info.address.street }
            ]
        },
        {
            title: contact.info.phone.title,
            items: [
                { value: '+99890 925 62 35', link: 'tel:+998909256235' },
                { value: '+99893 809 99 98', link: 'tel:+998938099998' }
            ]
        },
        {
            title: contact.info.email.title,
            items: [
                { label: 'shams.yokubov@mail.ru', link: 'mailto:shams.yokubov@mail.ru' },
                { label: 'shamsyokubov25@gmail.com', link: 'mailto:shamsyokubov25@gmail.com' }
            ]
        }
    ];

    const isLoading = status === 'loading';

    return (
        <>
            <div className="min-h-screen pt-24 px-5 pb-10 sm:pt-52 sm:pb-16 sm:px-10 flex items-center justify-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 w-full"
                    >
                        <div className="space-y-4 mb-20">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-instrument-sans">
                                {contact.hero.title}
                            </h1>
                            <p className="text-lg font-inter-tight md:text-2xl dark:text-white/60 text-black/60">
                                {contact.hero.description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-xl font-bold uppercase">
                                {contact.form.heading}
                            </h3>

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={contact.form.fields.name}
                                    required
                                    disabled={isLoading}
                                    className="w-full rounded-xl bg-[#F5F5F7] dark:bg-[#0F0F0F] py-5
                                         text-black dark:text-white placeholder-[#737373] font-bold px-5
                                         focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                                         transition-all duration-300 font-instrument-sans
                                         disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={contact.form.fields.email}
                                    required
                                    disabled={isLoading}
                                    className="w-full rounded-xl bg-[#F5F5F7] dark:bg-[#0F0F0F] py-5
                                         text-black dark:text-white placeholder-[#737373] font-bold px-5
                                         focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                                         transition-all duration-300 font-instrument-sans
                                         disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={contact.form.fields.message}
                                    required
                                    rows={5}
                                    disabled={isLoading}
                                    className="w-full rounded-xl bg-[#F5F5F7] dark:bg-[#0F0F0F] py-5
                                         text-black dark:text-white placeholder-[#737373] font-bold px-5
                                         focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                                         transition-all duration-300 resize-none font-instrument-sans
                                         disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                {status === 'error' && (
                                    <motion.p
                                        key="error"
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        className="text-red-500 text-sm font-medium"
                                    >
                                        ❌ {errorMessage}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileHover={!isLoading ? { scale: 1.02 } : {}}
                                whileTap={!isLoading ? { scale: 0.98 } : {}}
                                type="submit"
                                disabled={isLoading || status === 'success'}
                                className="relative overflow-hidden
                                    font-inter-tight cursor-pointer
                                    border-2 border-border
                                    font-bold uppercase
                                    text-base sm:text-lg
                                    py-3 px-8 sm:py-4 sm:px-10
                                    rounded-3xl
                                    bg-black dark:bg-white
                                    text-white dark:text-black
                                    transition-colors duration-500
                                    w-full sm:w-auto
                                    before:absolute before:inset-0 before:z-0
                                    before:bg-white dark:before:bg-black
                                    before:origin-bottom before:scale-y-0
                                    before:transition-transform before:duration-500
                                    before:content-['']
                                    hover:before:scale-y-100
                                    hover:text-black dark:hover:text-white
                                    disabled:opacity-70 disabled:cursor-not-allowed
                                    disabled:before:scale-y-0"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <AnimatePresence mode="wait">
                                        {status === 'loading' && (
                                            <motion.span
                                                key="loading"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="flex items-center gap-2"
                                            >
                                                <svg
                                                    className="animate-spin h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12" cy="12" r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    />
                                                </svg>
                                                {contact.form.status.loading}
                                            </motion.span>
                                        )}

                                        {status === 'success' && (
                                            <motion.span
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="flex items-center gap-2"
                                            >
                                                <motion.svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <motion.path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: 0.4 }}
                                                    />
                                                </motion.svg>
                                                {contact.form.status.success}
                                            </motion.span>
                                        )}

                                        {(status === 'idle' || status === 'error') && (
                                            <motion.span
                                                key="idle"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {contact.form.submit}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block h-full min-h-[600px]"
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden">
                            <Image
                                src={bg}
                                alt="Contact"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-5 sm:px-10 py-20 bg-white dark:bg-black"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
                        {contactInfo.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="text-sm font-bold text-black/40 dark:text-white/40 tracking-wider">
                                    {section.title}
                                </h3>
                                <div className="space-y-3">
                                    {section.items.map((item, idx) => (
                                        <div key={idx}>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    className="text-lg font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors duration-300 block"
                                                >
                                                    {item.label ?? item.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-light text-black dark:text-white">
                                                    {item.label}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ContactForm;