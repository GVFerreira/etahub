'use client'

import { User, Envelope, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr"
import { sendMail } from "@/lib/mail"
import { useForm } from "react-hook-form"

import {useTranslations} from 'next-intl'

import toast from "react-hot-toast"

export default function ContactForm() {
  const { register, handleSubmit, reset, formState } = useForm();

  const t = useTranslations('Contact')

  const handleSendMail = handleSubmit(async ({name, email, message}) => {
    try {
      await sendMail({name, email, message})
      toast.success(t('form.handler.success-msg'))
      reset()
    } catch (e) {
      console.error(e)
      toast.error(t('form.handler.error-msg'))
      reset()
    }
  })
  
  return (
    <form onSubmit={handleSendMail}>
      <div className="relative my-4">
        <input
          type="text"
          id="name"
          className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder={t('form.placeholder.name')}
          {...register('name')}
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
          className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder={t('form.placeholder.email')}
          {...register('email')}
          required
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <Envelope className="flex-shrink-0 size-5 text-gray-500"/>
        </div>
      </div>

      <textarea
        id="message"
        rows={5}
        className="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        placeholder={t('form.placeholder.message')}
        {...register('message')}
        required
      />

      <div className="relative my-4">
        <input
          type="submit"
          value={formState.isSubmitting ? t('form.submit.sending') : t('form.submit.send')}
          className="cursor-pointer py-3 px-4 ps-11 block shadow-sm rounded-md text-sm text-white bg-hub-blue disabled:opacity-50 disabled:pointer-events-none"
          disabled={formState.isSubmitting}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <PaperPlaneTilt className="flex-shrink-0 size-5 text-white"/>
        </div>
      </div>
    </form>
  )
}