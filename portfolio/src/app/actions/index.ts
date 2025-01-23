"use server";

import { DISCORD_WEBHOOK_URL } from "@/common/venv";

export const sendDiscordMessage = async (formData: FormData) => {
    try {
        const rawFormEntries = Object.fromEntries(formData);

        console.log(rawFormEntries);

        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: rawFormEntries?.fullname,
                avatar_url: rawFormEntries?.dp || "https://i.imgur.com/mDKlggm.png",
                content: rawFormEntries?.message,
                embeds: [
                    {
                        fields: [
                            {
                                name: "Email",
                                value: rawFormEntries?.email,
                                inline: true,
                            },
                        ],
                    },
                ],
            }),
        })
    } catch (err) {
        console.log(err);
    }
};