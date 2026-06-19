import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import './BookClassForm.css'

type FormData = {
  name: string
  email: string
  phone: string
  classType: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  classType: '',
  message: '',
}

export default function BookClassForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="book-class-form book-class-form--success">
        <p>{t('bookClass.form.success')}</p>
      </div>
    )
  }

  return (
    <form className="book-class-form" onSubmit={handleSubmit}>
      <div className="book-class-form__grid">
        <label className="book-class-form__field book-class-form__field--wide">
          <span>{t('bookClass.form.name')}</span>
          <input
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder={t('bookClass.form.namePlaceholder')}
          />
        </label>

        <label className="book-class-form__field">
          <span>{t('bookClass.form.email')}</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder={t('bookClass.form.emailPlaceholder')}
          />
        </label>

        <label className="book-class-form__field">
          <span>{t('bookClass.form.phone')}</span>
          <input
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder={t('bookClass.form.phonePlaceholder')}
          />
        </label>

        <label className="book-class-form__field book-class-form__field--wide">
          <span>{t('bookClass.form.classType')}</span>
          <select
            required
            value={form.classType}
            onChange={(e) => handleChange('classType', e.target.value)}
          >
            <option value="">{t('bookClass.form.classTypeOptions.placeholder')}</option>
            <option value="adult">{t('bookClass.form.classTypeOptions.adult')}</option>
            <option value="capoeirinha">{t('bookClass.form.classTypeOptions.capoeirinha')}</option>
            <option value="unsure">{t('bookClass.form.classTypeOptions.unsure')}</option>
          </select>
        </label>

        <label className="book-class-form__field book-class-form__field--wide">
          <span>{t('bookClass.form.message')}</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder={t('bookClass.form.messagePlaceholder')}
          />
        </label>
      </div>

      <button type="submit" className="book-class-form__submit">
        {t('bookClass.form.submit')}
      </button>
    </form>
  )
}
