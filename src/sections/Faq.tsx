import { ChevronDown, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/faqs'
import { whatsappLink } from '../data/site'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que suelen preguntar antes de empezar"
            description="Si no encontrás tu duda, escribime y te respondo."
          />
        </Reveal>

        <Reveal>
          <div className="mt-14 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-navy-900"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold text-white"
                    >
                      {faq.question}
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-electric-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Button href={whatsappLink} external>
            <MessageCircle size={20} />
            Escribime por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}