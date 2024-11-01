// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, first_name, last_name } = req.body;

        try {
            const response = await fetch(
                "https://api.resend.com/audiences/9ed0afde-f7ca-4307-860d-08756157cec0/contacts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                    },
                    body: JSON.stringify({
                        email,
                        first_name,
                        last_name,
                        unsubscribed: false,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit email");
            }

            res.status(200).json({ message: 'Success' });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}