'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function ContactForm() {
  
    return (
        <Card className="w-3/5 h-2/5">
            <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>こちらからご連絡お待ちしていします!</CardDescription>
            </CardHeader>
            <CardContent>
                <form >
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name"  placeholder="Name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Textarea name="message"  placeholder="Type your message here." />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" type="reset">Reset</Button>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
    }
