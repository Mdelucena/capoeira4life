import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import './CapoeirinhaForm.css'

type FormData = {
  age: string
  height: string
  weight: string
  sex: string
  martialArts: string
  martialArtsName: string
}

const initialForm: FormData = {
  age: '',
  height: '',
  weight: '',
  sex: '',
  martialArts: '',
  martialArtsName: '',
}

export default function CapoeirinhaForm() {
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
      <div className="capoeirinha-form capoeirinha-form--success">
        <p>{t('capoeirinha.form.success')}</p>
      </div>
    )
  }

  return (
    <form className="capoeirinha-form" onSubmit={handleSubmit}>
      <div className="capoeirinha-form__grid">
        <label className="capoeirinha-form__field">
          <span>{t('capoeirinha.form.age')}</span>
          <input
            type="number"
            min={3}
            max={14}
            required
            value={form.age}
            onChange={(e) => handleChange('age', e.target.value)}
            placeholder={t('capoeirinha.form.agePlaceholder')}
          />
        </label>

        <label className="capoeirinha-form__field">
          <span>{t('capoeirinha.form.height')}</span>
          <input
            type="number"
            min={80}
            max={200}
            required
            value={form.height}
            onChange={(e) => handleChange('height', e.target.value)}
            placeholder={t('capoeirinha.form.heightPlaceholder')}
          />
        </label>

        <label className="capoeirinha-form__field">
          <span>{t('capoeirinha.form.weight')}</span>
          <input
            type="number"
            min={10}
            max={80}
            step={0.1}
            required
            value={form.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            placeholder={t('capoeirinha.form.weightPlaceholder')}
          />
        </label>

        <label className="capoeirinha-form__field">
          <span>{t('capoeirinha.form.sex')}</span>
          <select
            required
            value={form.sex}
            onChange={(e) => handleChange('sex', e.target.value)}
          >
            <option value="">{t('capoeirinha.form.sexOptions.placeholder')}</option>
            <option value="male">{t('capoeirinha.form.sexOptions.male')}</option>
            <option value="female">{t('capoeirinha.form.sexOptions.female')}</option>
            <option value="other">{t('capoeirinha.form.sexOptions.other')}</option>
          </select>
        </label>

        <label className="capoeirinha-form__field capoeirinha-form__field--wide">
          <span>{t('capoeirinha.form.martialArts')}</span>
          <select
            required
            value={form.martialArts}
            onChange={(e) => handleChange('martialArts', e.target.value)}
          >
            <option value="">{t('capoeirinha.form.martialArtsOptions.placeholder')}</option>
            <option value="yes">{t('capoeirinha.form.martialArtsOptions.yes')}</option>
            <option value="no">{t('capoeirinha.form.martialArtsOptions.no')}</option>
          </select>
        </label>

        {form.martialArts === 'yes' && (
          <label className="capoeirinha-form__field capoeirinha-form__field--wide">
            <span>{t('capoeirinha.form.martialArtsWhich')}</span>
            <input
              type="text"
              required
              value={form.martialArtsName}
              onChange={(e) => handleChange('martialArtsName', e.target.value)}
              placeholder={t('capoeirinha.form.martialArtsWhichPlaceholder')}
            />
          </label>
        )}
      </div>

      <button type="submit" className="capoeirinha-form__submit">
        {t('capoeirinha.form.submit')}
      </button>
    </form>
  )
}
