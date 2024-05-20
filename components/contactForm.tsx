'use client';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isHydrated, setIsHydrated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // 初回のレンダリングを避ける
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); // ローディング開始

        try {
            const response = await fetch("/api/contact-handler", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            if (!response.ok) {
                throw new Error("メッセージの送信に失敗しました");
            }

            const jsonData = await response.json();
            alert(jsonData.message);

        } catch (error) {
            console.error(error);
            alert("メッセージの送信に失敗しました");
        } finally {
            setIsLoading(false); // ローディング終了
        }
    }

    return (
        <Card className="w-3/5 h-2/5">
            <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>こちらからご連絡お待ちしています!</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Textarea name="message" placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)} disabled={isLoading} />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" type="reset" disabled={isLoading}>Reset</Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Submit"}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
