
import ContactForm from "@/components/contactForm"
import * as React from "react"

export default function Contact() {

  return (
    <div className="w-screen">
      <div className="p-20">
      <h1 className="text-muted-foreground font-bold text-6xl mb-6 border-b">Contact</h1>
      </div>
      <div className="flex justify-center items-center">
        <ContactForm/>
      </div>
    </div>
  )
}
