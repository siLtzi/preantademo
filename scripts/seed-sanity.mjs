import {createClient} from '@sanity/client'
import {readFileSync} from 'node:fs'

// Load .env
const envFile = readFileSync('.env', 'utf-8')
for (const line of envFile.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) continue
  const [key, ...rest] = trimmed.split('=')
  process.env[key.trim()] = rest.join('=').trim()
}

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const homepage = {
  _id: 'homepage',
  _type: 'homepage',
  heroTag: 'Oulusta ympäri Suomen',
  heroHeading: 'Brändisi ansaitsee *näkyä*',
  heroDescription: 'Brodeeraus, tekstiilipaino ja tarratyöt laadusta tinkimättä. Preanta Oy on oululainen painoalan ammattilainen — suunnittelusta valmiiseen tuotteeseen.',
  heroCtaText: 'Kysy tarjous',
  heroCtaLink: '#yhteystiedot',
  heroSecondaryCtaText: 'Tutustu palveluihin',
  heroSecondaryCtaLink: '#palvelut',
  heroStats: [
    {_key: 'stat1', _type: 'object', number: '10+', label: 'Vuotta kokemusta'},
    {_key: 'stat2', _type: 'object', number: '1000+', label: 'Tyytyväistä asiakasta'},
    {_key: 'stat3', _type: 'object', number: '100%', label: 'Kotimaista työtä'},
  ],
  marqueeItems: [
    'Brodeeraus', 'Tekstiilipaino', 'Tarrat', 'Banderollit',
    'Ompelupalvelu', 'Pipot & pannat', 'Heijastinpipot', 'Profilointi',
  ],
  servicesTag: 'Palvelut',
  servicesTitle: 'Kaikki painotyöt yhdeltä luukulta',
  servicesDescription: 'Saat meiltä monipuolisesti kaikki brodeeraus-, tekstiilipaino- ja tarratyöt. Työn jälki on meillä kunniassa.',
  serviceCards: [
    {_key: 'svc1', _type: 'object', num: '01', title: 'Brodeeraus', description: 'Laadukkaasti brodeerattu logo on kestävä ja pitkäikäinen. Päähineet, paidat, takit ja laukut.', slug: 'brodeeraus'},
    {_key: 'svc2', _type: 'object', num: '02', title: 'Tekstiilipaino', description: 'Profiloi yrityksesi tai joukkueesi ammattitaidolla. Painatukset kaikkiin tekstiileihin.', slug: 'tekstiilipaino'},
    {_key: 'svc3', _type: 'object', num: '03', title: 'Tarrat', description: 'Auto-, peräkärry- ja ikkunatarrat. Pienet tai suuret, suunnittelemme yhdessä.', slug: 'tarrat'},
    {_key: 'svc4', _type: 'object', num: '04', title: 'Muut tuotteet', description: 'Banderollit, ompelupalvelu, pipot, pannat ja putkihuivit. Vain mielikuvitus on rajana.', slug: 'muut-tuotteet'},
  ],
  whyTag: 'Miksi Preanta',
  whyTitle: 'Laatua ja luotettavuutta vuodesta 2015',
  whyDescription: 'Tarkka sisäinen laadunvalvonta pitää huolen, että tuotamme priimaa joka kerta. Palvelu on meillä etusijalla.',
  whyCards: [
    {_key: 'why1', _type: 'object', title: 'Laatu ensin', description: 'Tarkka laadunvalvonta jokaisessa vaiheessa. Priimaa kerrasta toiseen.'},
    {_key: 'why2', _type: 'object', title: 'Nopea toimitus', description: 'Tehokas tuotanto ja selkeä aikataulu. Tiedät aina missä mennään.'},
    {_key: 'why3', _type: 'object', title: 'Henkilökohtainen palvelu', description: 'Kuuntelemme ja suunnittelemme yhdessä. Sinun tarpeesi ohjaavat meitä.'},
    {_key: 'why4', _type: 'object', title: 'Kaikki saman katon alta', description: 'Brodeeraus, paino, tarrat ja ompelupalvelu — ei tarvitse juosta ympäriinsä.'},
  ],
  processTag: 'Näin toimitaan',
  processTitle: 'Tilauksesta valmiiseen tuotteeseen',
  processDescription: 'Teemme tilaamisen helpoksi. Neljä selkeää vaihetta ideasta valmiiseen tuotteeseen.',
  processSteps: [
    {_key: 'step1', _type: 'object', num: '1', title: 'Yhteydenotto', description: 'Kerro meille mitä tarvitset. Soita, laita sähköpostia tai täytä lomake.'},
    {_key: 'step2', _type: 'object', num: '2', title: 'Suunnittelu', description: 'Suunnittelemme yhdessä sinulle sopivan ratkaisun ja annamme tarjouksen.'},
    {_key: 'step3', _type: 'object', num: '3', title: 'Tuotanto', description: 'Ammattilaisemme toteuttavat työn tarkalla laadunvalvonnalla.'},
    {_key: 'step4', _type: 'object', num: '4', title: 'Toimitus', description: 'Valmiit tuotteet sinulle sovitun aikataulun mukaisesti.'},
  ],
  ctaTag: 'Ota yhteyttä',
  ctaTitle: 'Luodaan yhdessä jotain *näyttävää*',
  ctaDescription: 'Kerro meille projektistasi ja tehdään brändistäsi näkyvä. Tarjous on aina maksuton.',
  ctaEmailButtonText: 'Lähetä viesti',
  ctaAddress: 'Voudintie 8, 90400 Oulu',
  ctaHours: 'Ma–To 8–16 · Pe 8–15',
}

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  companyName: 'Preanta Oy',
  phone: '040 962 8962',
  email: 'myynti@preanta.fi',
  address: 'Voudintie 8, 90400 Oulu',
  businessHours: 'Ma–To 8–16 · Pe 8–15',
  footerDescription: 'Oululainen painoalan yritys. Brodeeraus-, tekstiilipaino- ja tarratyöt laadusta tinkimättä vuodesta 2015.',
  copyrightText: '2026 Preanta Oy · Y-tunnus 2720451-389',
  navLinks: [
    {_key: 'nav1', _type: 'object', label: 'Palvelut', href: '#palvelut'},
    {_key: 'nav2', _type: 'object', label: 'Miksi Preanta', href: '#miksi'},
    {_key: 'nav3', _type: 'object', label: 'Näin toimitaan', href: '#prosessi'},
  ],
  navCtaText: 'Ota yhteyttä',
  navCtaLink: '/yhteystiedot',
  footerServiceLinks: [
    {_key: 'fs1', _type: 'object', label: 'Brodeeraus', href: '/palvelut/brodeeraus'},
    {_key: 'fs2', _type: 'object', label: 'Tekstiilipaino', href: '/palvelut/tekstiilipaino'},
    {_key: 'fs3', _type: 'object', label: 'Tarrat', href: '/palvelut/tarrat'},
    {_key: 'fs4', _type: 'object', label: 'Muut tuotteet', href: '/palvelut/muut-tuotteet'},
  ],
  footerCompanyLinks: [
    {_key: 'fc1', _type: 'object', label: 'Meistä', href: '#miksi'},
    {_key: 'fc2', _type: 'object', label: 'Yhteystiedot', href: '/yhteystiedot'},
    {_key: 'fc3', _type: 'object', label: 'Aukioloajat', href: '/yhteystiedot'},
  ],
}

const servicePages = [
  {
    _id: 'servicePage-brodeeraus',
    _type: 'servicePage',
    title: 'Brodeeraus',
    slug: {_type: 'slug', current: 'brodeeraus'},
    heroTagline: 'Kestävää ja näyttävää',
    shortDescription: 'Laadukkaasti tehty brodeeraus on kestävä tapa merkitä vaatteesi. Koneella kirjotut brodeeraukset saa muun muassa päähineisiin, paitoihin, takkeihin, housuihin ja laukkuihin. Brodeeraamalla saat yrityksesi tai joukkueesi logon näyttävästi esille eri tekstiilipinnoilla.',
    introHeading: 'Miksi valita brodeeraus?',
    introText: 'Brodeeraus on yksi kestävimmistä ja tyylikkäimmistä tavoista tuoda brändisi esille tekstiileissä. Toisin kuin painatus, brodeeraus kestää satoja pesukertoja haalistumatta tai kulumatta. Kolmiulotteinen pinta antaa logolle ammattimaisuutta ja arvokkuutta, jota pelkällä painatuksella ei saavuteta. Brodeeraus sopii erityisen hyvin työvaatteisiin, päähineihin ja edustusasuihin — kaikkialle, missä haluat viestiä laatua ja luotettavuutta.',
    featuresHeading: 'Brodeerauspalvelumme',
    highlightHeading: 'Ammattitaitoa vuodesta 2015',
    highlightText: 'Olemme brodeeranneet tuhansia logoja oululaisille yrityksille ja urheiluseuroille. Jokainen työ digitoidaan huolella, jotta lopputulos on tarkka ja kestävä. Luota kokemukseemme.',
    features: [
      {_key: 'f1', _type: 'object', title: 'Päähineet', description: 'Pipot, lippikset ja pannat brodeerattuina yrityksesi tai joukkueesi logolla. Laaja värivalikoima.'},
      {_key: 'f2', _type: 'object', title: 'Paidat ja takit', description: 'Työpaidat, poolot, hupparit ja takit — brodeeraus kestää pesun toisensa jälkeen ilman haalistumista.'},
      {_key: 'f3', _type: 'object', title: 'Laukut ja asusteet', description: 'Laukut, repput ja muut asusteet brodeerattuina persoonallisella ja kestävällä ilmeellä.'},
      {_key: 'f4', _type: 'object', title: 'Työvaatteet', description: 'Ammattimainen profilointi työvaatteisiin. Kestävä, edustava ja pesukoneen kestävä lopputulos.'},
    ],
    process: [
      {_key: 'p1', _type: 'object', title: 'Lähetä logo', description: 'Toimita meille logosi vektorimuodossa tai kuvana, niin arvioimme toteutuksen.'},
      {_key: 'p2', _type: 'object', title: 'Digitointi', description: 'Muunnamme logon brodeerausvalmiiksi tiedostoksi. Hyväksyt vedoksen ennen tuotantoa.'},
      {_key: 'p3', _type: 'object', title: 'Brodeeraus', description: 'Ammattilaisemme brodeeraavat tuotteesi tarkalla laadunvalvonnalla.'},
      {_key: 'p4', _type: 'object', title: 'Toimitus', description: 'Valmiit tuotteet toimitetaan sovitussa aikataulussa.'},
    ],
    ctaText: 'Kysy tarjous brodeerauksesta',
    seoTitle: 'Brodeeraus Oulu — Laadukasta brodeerausta yrityksille | Preanta Oy',
    seoDescription: 'Brodeerauspalvelut Oulussa. Logobrodeeraus paitoihin, pipoihin, takkeihin ja työvaatteisiin. Kestävä ja ammattimainen jälki. Pyydä tarjous — Preanta Oy.',
  },
  {
    _id: 'servicePage-tekstiilipaino',
    _type: 'servicePage',
    title: 'Tekstiilipaino',
    slug: {_type: 'slug', current: 'tekstiilipaino'},
    heroTagline: 'Painatukset ammattitaidolla',
    shortDescription: 'Teemme erilaiset painotyöt profiilituotteisiin, asusteisiin ja yrityksen työvaatteisiin ammattitaidolla. Profilointi on suosittu tapa luoda yksilöllistä ilmettä, mainosta ja yhteishenkeä samalla vaatetuksella.',
    introHeading: 'Monipuoliset painomenetelmät',
    introText: 'Käytössämme on useita eri painomenetelmiä, joista valitsemme jokaiseen projektiin parhaiten sopivan. Silkkipaino sopii suuriin sarjoihin, siirtokuva yksittäiskappaleisiin ja flex-painatus kirkkaita värejä vaativiin töihin. Ammattilaismme osaavat neuvoa sinulle parhaan vaihtoehdon — oli kyseessä sitten yrityksen työvaatekerta tai joukkueen pelipaidat.',
    featuresHeading: 'Tekstiilipainopalvelumme',
    highlightHeading: 'Yrityksesi ilme ammattimaiseksi',
    highlightText: 'Yhtenäiset, laadukkaasti painetut työvaatteet viestivät asiakkaillesi luotettavuudesta ja ammattimaisuudesta. Profiloidut vaatteet vahvistavat brändiäsi ja luovat yhteishenkeä tiimissäsi.',
    features: [
      {_key: 'f1', _type: 'object', title: 'Yritysprofilointi', description: 'Yhtenäinen ilme työvaatteisiin ja profiilituotteisiin. Logot, tekstit ja kuvat laadukkaasti painettuna.'},
      {_key: 'f2', _type: 'object', title: 'Joukkueasut', description: 'Urheilujoukkueiden pelipaidat, harjoitusasut ja fanituotteet ammattitaidolla painettuina.'},
      {_key: 'f3', _type: 'object', title: 'Tapahtumatuotteet', description: 'Tapahtumapaidat, hupparit ja asusteet nopealla toimitusajalla myös piensarjoina.'},
      {_key: 'f4', _type: 'object', title: 'Monipuoliset menetelmät', description: 'Silkkipaino, siirtokuva, flex- ja flock-painatus — valitsemme parhaan tekniikan käyttötarkoituksen mukaan.'},
    ],
    process: [
      {_key: 'p1', _type: 'object', title: 'Kerro tarpeesi', description: 'Tuotteet, määrä, värit ja painatus — kerro meille mitä tarvitset.'},
      {_key: 'p2', _type: 'object', title: 'Vedos ja tarjous', description: 'Saat vedoksen ja tarjouksen hyväksyttäväksi ennen tuotannon aloitusta.'},
      {_key: 'p3', _type: 'object', title: 'Painatus', description: 'Valitaan paras tekniikka ja painetaan tuotteet huolella.'},
      {_key: 'p4', _type: 'object', title: 'Toimitus', description: 'Valmiit tuotteet pakataan ja toimitetaan sinulle.'},
    ],
    ctaText: 'Kysy tarjous tekstiilipainosta',
    seoTitle: 'Tekstiilipaino Oulu — Painatukset yrityksille ja seuroille | Preanta Oy',
    seoDescription: 'Tekstiilipainopalvelut Oulussa. Silkkipaino, siirtokuva ja flex-painatus työvaatteisiin, pelipaitoihin ja tapahtuma-asuihin. Pyydä tarjous — Preanta Oy.',
  },
  {
    _id: 'servicePage-tarrat',
    _type: 'servicePage',
    title: 'Tarrat',
    slug: {_type: 'slug', current: 'tarrat'},
    heroTagline: 'Näkyvyyttä joka pintaan',
    shortDescription: 'Tarvitsetko tarkkuutta vaativia suurten pintojen tarroitustöitä? Suunnittelemme yhdessä juuri sinun yrityksellesi sopivat auto-, peräkärry-, ikkuna- ja merkkaustarrat. Liikkuva mainos on tehokas ja edullinen tapa kasvattaa tunnettuutta.',
    introHeading: 'Tarroista tehokasta mainontaa',
    introText: 'Hyvin suunniteltu ja ammattimaisesti asennettu tarra on yksi kustannustehokkaimmista mainonnan muodoista. Yritysauto kertoo brändistäsi tuhansille ihmisille päivittäin, ikkunateippaus houkuttelee asiakkaita liiketilaasi ja merkkaustarrat tekevät työkaluistasi tunnistettavia. Käytämme kestäviä materiaaleja, jotka kestävät Suomen vaativat sääolosuhteet.',
    featuresHeading: 'Tarrapalvelumme',
    highlightHeading: 'Liikkuva mainos 24/7',
    highlightText: 'Autoteippaus on investointi, joka näkyy joka päivä. Ammattimainen yritysteippaus tekee ajoneuvostasi liikkuvan mainoksen — työmatkoilla, asiakaskäynneillä ja pysäköitynä kaupungilla.',
    features: [
      {_key: 'f1', _type: 'object', title: 'Autotarrat', description: 'Ajoneuvo- ja teippaukset autoihin, pakettiautoihin ja perävaunuihin. Ammattimaista näkyvyyttä liikenteessä.'},
      {_key: 'f2', _type: 'object', title: 'Ikkunatarrat', description: 'Liiketilojen ikkunateippaukset ja -tarrat. Houkuttele asiakkaita näyttävästi ja ammattimaisesti.'},
      {_key: 'f3', _type: 'object', title: 'Peräkärrytarrat', description: 'Peräkärryjen ja trailereiden teippaukset. Liikkuva mainos kulkee ympäri Suomen.'},
      {_key: 'f4', _type: 'object', title: 'Merkkaustarrat', description: 'Tuote-etiketit ja merkkaustarrat työkaluihin ja laitteisiin. Kestävät materiaalit vaativiin olosuhteisiin.'},
    ],
    process: [
      {_key: 'p1', _type: 'object', title: 'Suunnittelu', description: 'Suunnittelemme tarran tai käytämme valmista aineistoasi. Mittaukset ja vedos kuuluvat hintaan.'},
      {_key: 'p2', _type: 'object', title: 'Materiaalivalinta', description: 'Valitsemme käyttökohteeseen sopivan tarramateriaalin ja pinnoitteen pitkäikäisyyden varmistamiseksi.'},
      {_key: 'p3', _type: 'object', title: 'Tuotanto', description: 'Tulostus ja leikkaus ammattilaitteilla tarkalla laadunvalvonnalla.'},
      {_key: 'p4', _type: 'object', title: 'Asennus tai toimitus', description: 'Asennamme tarvittaessa paikan päällä tai toimitamme valmiit tarrat.'},
    ],
    ctaText: 'Kysy tarjous tarroista',
    seoTitle: 'Tarrat ja teippaukset Oulu — Autotarrat, ikkunatarrat | Preanta Oy',
    seoDescription: 'Tarrapalvelut Oulussa. Auto-, ikkuna- ja peräkärrytarrat sekä teippaukset ammattitaidolla. Suunnittelu, tuotanto ja asennus. Pyydä tarjous — Preanta Oy.',
  },
  {
    _id: 'servicePage-muut-tuotteet',
    _type: 'servicePage',
    title: 'Muut tuotteet ja ompelupalvelu',
    slug: {_type: 'slug', current: 'muut-tuotteet'},
    heroTagline: 'Kaikki palvelut yhdeltä luukulta',
    shortDescription: 'Tarjoamme laajan valikoiman tuotteita ja palveluja brodeerauksen, tekstiilipainon ja tarrojen lisäksi. Pipot, pannat, putkihuivit, banderollit, heijastintuotteet ja ompelupalvelu — kerro tarpeesi ja me toteutamme.',
    introHeading: 'Enemmän kuin pelkkä painotalo',
    introText: 'Preanta on enemmän kuin brodeeraus- ja painoyritys. Valmistamme itse kotimaisia pipoja ja pantoja laadukkaasta trikoosta, tuotamme banderolleja tapahtumiin ja julkisivuihin, sekä tarjoamme monipuolista ompelupalvelua. Meillä voit hoitaa kaikki tekstiili- ja painotarpeesi kerralla, mikä säästää aikaasi ja rahaa.',
    featuresHeading: 'Tuotteemme ja palvelumme',
    highlightHeading: 'Heijastinpipot — toimiva varainkeruu',
    highlightText: 'Heijastinpipomallisto on tehokas tapa kerätä varoja seuroille ja koululaisille. Myyntipalkkio 5 €/pipo. Näkyvyyttä ja turvallisuutta — samalla kun keräät varoja joukkueelle tai luokalle.',
    features: [
      {_key: 'f1', _type: 'object', title: 'Pipot, pannat ja putkihuivit', description: 'Kotimaisia meillä Preantassa valmistettuja pipoja, pantoja ja putkihuiveja. Hengittävää ja pehmeää trikoota, talvi- ja kesämallit.'},
      {_key: 'f2', _type: 'object', title: 'Heijastinpipot – varainkeruu', description: 'Heijastinpipomallisto seuroille ja koululaisille. 5 € myyntipalkkio per pipo. Tehokas ja turvallinen varainhankinta.'},
      {_key: 'f3', _type: 'object', title: 'Banderollit', description: 'Suuret banderollit ovat tehokas tapa herättää huomiota sisällä ja ulkona. Julkisivut, tapahtumat ja maantiet.'},
      {_key: 'f4', _type: 'object', title: 'Ompelupalvelu', description: 'Vaatteen korjaus, vetoketjun vaihto, lahkeen lyhennys, verhon ompelu, moottorikelkan penkinpäällisen korjaus ja muut ompelut.'},
    ],
    process: [
      {_key: 'p1', _type: 'object', title: 'Kerro ideasi', description: 'Mitä tuotteita tarvitset ja minkälaisella logolla tai painatuksella? Kerro meille.'},
      {_key: 'p2', _type: 'object', title: 'Tarjous', description: 'Suunnittelemme toteutuksen ja annamme tarjouksen.'},
      {_key: 'p3', _type: 'object', title: 'Tuotanto', description: 'Valmistamme tuotteet sovitun aikataulun mukaisesti.'},
      {_key: 'p4', _type: 'object', title: 'Toimitus', description: 'Tuotteet toimitetaan sinulle valmiina käyttöön.'},
    ],
    ctaText: 'Kysy tarjous tuotteista',
    seoTitle: 'Pipot, banderollit ja ompelupalvelu Oulu | Preanta Oy',
    seoDescription: 'Pipot, pannat, putkihuivit, banderollit, heijastintuotteet ja ompelupalvelu Oulussa. Kotimaista valmistusta ja monipuolista palvelua. Pyydä tarjous — Preanta Oy.',
  },
]

async function seed() {
  console.log('Seeding homepage...')
  await client.createOrReplace(homepage)
  console.log('✓ Homepage created')

  console.log('Seeding siteSettings...')
  await client.createOrReplace(siteSettings)
  console.log('✓ Site Settings created')

  console.log('Seeding service pages...')
  for (const page of servicePages) {
    await client.createOrReplace(page)
    console.log(`✓ ${page.title} created`)
  }

  console.log('Done! Documents are now in Sanity.')
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
