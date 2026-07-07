import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import YouTubeEmbed from '../YouTubeEmbed'
import capoeiraNagoLogo from '../../assets/image/capoeira nago.png'
import pequinesImg from '../../assets/image/mestrepique.png'
import faixasImg from '../../assets/image/faixas.jpeg'
import { NAGO_GENEALOGY_ROOT, NAGO_GENEALOGY_ROWS, type GenealogyMember } from '../../data/nagoGenealogy'
import CountryFlag from '../CountryFlag'
import './CapoeiraNagoSection.css'

const NAGO_VIDEO_ID = '8y18Pgces8s'

function GenealogyNode({ name, country, countryLabel }: GenealogyMember) {
  return (
    <div className="nago__tree-node">
      <span className="nago__tree-name">{name}</span>
      <CountryFlag code={country} label={countryLabel} className="nago__tree-flag" />
    </div>
  )
}

export default function CapoeiraNagoSection() {
  const { t } = useTranslation()

  const cordsSteps = t('nago.cords.steps', { returnObjects: true }) as {
    title: string
    text: string
  }[]

  return (
    <section className="nago">
      <div className="nago__intro">
        <FadeIn className="nago__intro-logo" delay={0}>
          <img
            src={capoeiraNagoLogo}
            alt={t('footer.nagoAlt')}
            className="nago__logo"
          />
        </FadeIn>
        <FadeIn className="nago__intro-text" delay={120}>
          <span className="nago__label">{t('nago.label')}</span>
          <h2 className="nago__title">{t('nago.title')}</h2>
          <p className="nago__lead">{t('nago.lead')}</p>
          <p className="nago__body">{t('nago.body')}</p>
        </FadeIn>
      </div>

      <article className="nago__founder">
        <div className="nago__founder-split">
          <FadeIn className="nago__founder-media" direction="left" delay={0}>
            <div className="nago__founder-frame">
              <img
                src={pequinesImg}
                alt={t('nago.founder.imageAlt')}
                className="nago__founder-image"
              />
            </div>
          </FadeIn>
          <div className="nago__founder-text">
            <FadeIn delay={80}>
              <span className="nago__label">{t('nago.founder.label')}</span>
              <h3 className="nago__founder-name">{t('nago.founder.name')}</h3>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="nago__body">{t('nago.founder.text')}</p>
            </FadeIn>
          </div>
        </div>
      </article>

      <article className="nago__genealogy">
        <div className="container nago__genealogy-inner">
          <FadeIn delay={0}>
            <span className="nago__label nago__label--center">{t('nago.genealogy.label')}</span>
            <h3 className="nago__genealogy-title">{t('nago.genealogy.title')}</h3>
            <p className="nago__genealogy-subtitle">{t('nago.genealogy.subtitle')}</p>
          </FadeIn>

          <FadeIn className="nago__tree" delay={150}>
            <div className="nago__tree-root">
              <div className="nago__tree-node nago__tree-node--root">
                {NAGO_GENEALOGY_ROOT}
              </div>
            </div>
            <div className="nago__tree-line" aria-hidden="true" />
            <div className="nago__tree-levels">
              {NAGO_GENEALOGY_ROWS.map((row) => (
                <div key={`${row[0].name}-${row[1].name}`} className="nago__tree-row">
                  <GenealogyNode {...row[0]} />
                  <GenealogyNode {...row[1]} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </article>

      <article className="nago__cords">
        <div className="nago__cords-split">
          <div className="nago__cords-text">
            <FadeIn delay={0}>
              <span className="nago__label">{t('nago.cords.label')}</span>
              <h3 className="nago__cords-title">{t('nago.cords.title')}</h3>
              <p className="nago__lead">{t('nago.cords.lead')}</p>
            </FadeIn>
            <FadeIn delay={100}>
              {(t('nago.cords.body', { returnObjects: true }) as string[]).map(
                (paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="nago__body nago__cords-paragraph">
                    {paragraph}
                  </p>
                ),
              )}
            </FadeIn>
            <FadeIn delay={180}>
              <ul className="nago__cords-steps">
                {cordsSteps.map((step) => (
                  <li key={step.title} className="nago__cords-step">
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <FadeIn className="nago__cords-media" direction="right" delay={80}>
            <div className="nago__cords-frame">
              <img
                src={faixasImg}
                alt={t('nago.cords.imageAlt')}
                className="nago__cords-photo"
              />
            </div>
          </FadeIn>
        </div>
      </article>

      <article className="nago__video">
        <div className="container">
          <FadeIn delay={0}>
            <span className="nago__label nago__label--center">{t('nago.video.label')}</span>
            <h3 className="nago__video-title">{t('nago.video.title')}</h3>
            <p className="nago__video-subtitle">{t('nago.video.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <YouTubeEmbed
              videoId={NAGO_VIDEO_ID}
              title={t('nago.video.title')}
              className="nago__video-player"
            />
          </FadeIn>
        </div>
      </article>
    </section>
  )
}
