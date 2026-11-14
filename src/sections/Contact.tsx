import { useState } from 'react'
import { MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from '../components/SocialIcons'
import { exteriorImage } from '../data/forrestaImages'
import { forrestaInfo } from '../data/forrestaInfo'
import { useToast } from '../hooks/useToast'

export function Contact() {
  const showToast = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    note: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      showToast({
        title: 'Please fill required fields',
        description: 'Kindly provide your name and phone number.',
      })
      return
    }

    setFormSubmitted(true)
    showToast({
      title: 'Enquiry Received',
      description: `Thank you, ${formData.name}. Our team at Forresta Bhuj looks forward to hosting you.`,
    })
  }

  return (
    <section
      id="contact"
      aria-labelledby="visit-heading"
      className="relative section-pad bg-forest-card/30 text-cream overflow-hidden border-t border-forest-border/40"
    >
      {/* Anchor for backward compatibility with visit links */}
      <span id="visit" className="sr-only" aria-hidden="true" />

      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/30 bg-forest-card px-3 py-1 text-gold">
            <Sparkles className="size-3" />
            <span className="eyebrow !text-[0.62rem] sm:!text-xs !tracking-[0.2em]">Visit &amp; Contact</span>
          </div>
          <h2
            id="visit-heading"
            className="mt-2.5 sm:mt-3.5 font-serif text-[clamp(1.9rem,4.5vw,3.5rem)] font-light leading-tight text-cream"
          >
            Visit <em className="italic font-normal text-gold">Forresta.</em>
          </h2>
          <p className="mt-2 text-xs sm:text-base leading-relaxed text-cream/75 font-sans">
            HIMS Business Park, Airport Road, Bhuj. Open daily from 11:00 AM to 11:30 PM.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-7 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column: Facade Image & Verified Address Details */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            {/* Real Exterior Facade Image Card */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-forest-card shadow-2xl group">
              <img
                src={exteriorImage.src}
                alt={exteriorImage.caption}
                className="w-full aspect-[16/10] sm:aspect-[4/3] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
              <div className="absolute bottom-3.5 inset-x-3.5 sm:bottom-6 sm:inset-x-6">
                <span className="eyebrow text-gold font-bold text-[0.62rem] sm:text-xs">Location Verified</span>
                <p className="mt-0.5 sm:mt-1 font-serif text-sm sm:text-lg font-light text-cream">
                  {forrestaInfo.location.formattedAddress}
                </p>
              </div>
            </div>

            {/* Quick Contact & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-forest-border bg-forest-card/70 p-3.5 sm:p-5">
                <div className="flex items-center gap-2 text-gold">
                  <Clock className="size-4 sm:size-5" />
                  <span className="eyebrow !text-xs font-bold">Timings</span>
                </div>
                <p className="mt-1.5 text-sm sm:text-base font-serif text-cream">{forrestaInfo.timings.hours}</p>
                <p className="text-xs text-cream/60 mt-0.5">{forrestaInfo.timings.days}</p>
              </div>

              <div className="rounded-2xl border border-forest-border bg-forest-card/70 p-3.5 sm:p-5">
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="size-4 sm:size-5" />
                  <span className="eyebrow !text-xs font-bold">Landmark</span>
                </div>
                <p className="mt-1.5 text-sm sm:text-base font-serif text-cream">{forrestaInfo.location.venue}</p>
                <p className="text-xs text-cream/60 mt-0.5">{forrestaInfo.location.street}, Bhuj</p>
              </div>
            </div>

            {/* Direct Action Links (Maps & Instagram) */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href={forrestaInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold px-4 text-xs font-bold uppercase tracking-wider text-forest-deep shadow-gold hover:bg-gold-light active:scale-95 transition-all"
              >
                <MapPin className="size-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={forrestaInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gold/40 bg-forest-card/90 px-4 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-forest-deep active:scale-95 transition-all"
              >
                <InstagramIcon className="size-4" />
                <span>Instagram {forrestaInfo.contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Table / Celebration Reservation & Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl border border-gold/30 bg-forest-card/85 p-4 sm:p-7 shadow-2xl backdrop-blur-md">
              <h3 className="font-serif text-lg sm:text-2xl font-light text-cream">
                Plan Your Visit
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-cream/70 font-sans">
                Planning a dinner, birthday, or gathering? Send a quick note.
              </p>

              {formSubmitted ? (
                <div className="mt-5 rounded-2xl border border-gold/40 bg-forest-deep/60 p-4 sm:p-5 text-center">
                  <CheckCircle2 className="size-8 sm:size-9 text-gold mx-auto mb-2" />
                  <h4 className="font-serif text-base sm:text-lg text-cream">Enquiry Received</h4>
                  <p className="mt-1 text-xs text-cream/70">
                    Thank you, {formData.name}! Our team looks forward to welcoming you.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ name: '', phone: '', guests: '2 Guests', date: '', note: '' })
                    }}
                    className="mt-3.5 inline-block text-xs font-bold uppercase tracking-wider text-gold underline hover:text-gold-light"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 sm:mt-5 space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Aarav Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 sm:h-12 rounded-xl border border-forest-border bg-forest-deep/80 px-3.5 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 sm:h-12 rounded-xl border border-forest-border bg-forest-deep/80 px-3.5 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                        Party Size
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full h-11 sm:h-12 rounded-xl border border-forest-border bg-forest-deep/80 px-3.5 text-sm text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      >
                        <option value="1-2 Guests">1–2 Guests</option>
                        <option value="3-4 Guests">3–4 Guests</option>
                        <option value="5-8 Guests">5–8 Guests</option>
                        <option value="9+ Family Gathering">9+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="note" className="block text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                      Note / Occasion (Optional)
                    </label>
                    <textarea
                      id="note"
                      rows={2}
                      placeholder="e.g. Garden terrace seating, birthday celebration..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full rounded-xl border border-forest-border bg-forest-deep/80 px-3.5 py-2 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold text-xs font-bold uppercase tracking-[0.14em] text-forest-deep shadow-gold hover:bg-gold-light active:scale-95 transition-all"
                  >
                    <Send className="size-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
