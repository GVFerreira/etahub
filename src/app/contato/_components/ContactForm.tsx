'use client'

import { User, Envelope, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr"
import { sendMail } from "@/lib/mail"
import { useForm } from "react-hook-form"


export default function ContactForm() {
  const form = useForm()

  const handleSendMail = form.handleSubmit(async ({name, email, message}) => {
    try {
      await sendMail({name, email, message})
      window.location.href = "/contato"
    } catch (e) {
      console.error(e)
    }
  })
  

  return (
    <form onSubmit={handleSendMail}>
      <div className="relative my-4">
        <input
          type="text"
          id="name"
          className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 md:w-2/3 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Ex: João Silva"
          {...form.register('name')}
          required
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <User className="flex-shrink-0 size-5 text-gray-500"/>
        </div>
      </div>

      <div className="relative my-4">
        <input
          type="email"
          id="email"
          className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 md:w-2/3 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="seunome@seuemail.com"
          {...form.register('email')}
          required
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <Envelope className="flex-shrink-0 size-5 text-gray-500"/>
        </div>
      </div>

      <textarea
        id="message"
        className="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm md:w-2/3 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Digite a sua mensagem..."
        {...form.register('message')}
        required
      />

      <div className="relative my-4">
        <input
          type="submit"
          className="cursor-pointer py-3 px-4 ps-11 block shadow-sm rounded-md text-sm text-white bg-hub-blue disabled:opacity-50 disabled:pointer-events-none"
          disabled={form.formState.isSubmitting}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <PaperPlaneTilt className="flex-shrink-0 size-5 text-white"/>
        </div>
      </div>
    </form>
  )
}